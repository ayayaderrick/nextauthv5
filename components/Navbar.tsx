import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuContent,
  //   NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  //   NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

import React from "react";
import { cn } from "@/lib/utils";
import { auth } from "@/auth";
import Logout from "./Logout";
import Image from "next/image";
import { buttonVariants } from "./ui/button";

const navLinks: { title: string; href: string; description: string }[] = [
  {
    title: "RSC Example",
    href: "/server",
    description: "Protecting React Server Component.",
  },
  {
    title: "Middleware Example",
    href: "/middleware",
    description: "Using Middleware to protect pages and APIs.",
  },
  {
    title: "Route Handler Example",
    href: "/api-route",
    description: "Getting the session inside an API route.",
  },
];

const Navbar = async () => {
  const session = await auth();
  return (
    <nav className="border-b w-full flex items-center">
      <div className="flex w-full items-center justify-between my-4">
        <Link className="font-bold" href="/">
          Home
        </Link>

        <div className="flex items-center gap-x-5">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger>Server Side</NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className="grid w-[400px] gap-3 p-4 md:w-[400px] md:grid-cols-2 lg:w-[400px] ">
                    {navLinks.map((navLink) => (
                      <ListItem
                        key={navLink.title}
                        title={navLink.title}
                        href={navLink.href}
                      >
                        {navLink.description}
                      </ListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/client" legacyBehavior passHref>
                  <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                    Client Side
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-x-5">
          {!session?.user ? (
            <Link
              className={buttonVariants({ variant: "outline" })}
              href="/sign-in"
            >
              Login
            </Link>
          ) : (
            <>
              <div className="flex items-center gap-x-2 text-sm">
                {session?.user?.name || session?.user?.email}
                {session?.user?.image && (
                  <Image
                    className="rounded-full"
                    src={session?.user?.image || ""}
                    alt="User Avatar"
                    width={30}
                    height={30}
                  />
                )}
              </div>
              <Logout />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";

export default Navbar;
