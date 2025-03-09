import { auth } from "@/auth";
import Link from "next/link";
// import { redirect } from "next/navigation";
import React from "react";

const Home = async () => {
  const session = await auth();

  // if (!session?.user) {
  //   redirect("/");
  // }
  return (
    <main className="mt-8">
      <h1 className="text-4xl font-bold">NextAuth.js Example</h1>
      <p className="text-lg mt-4">
        This is an example site to demonstrate how to use NextAuth.js for
        authentication. Check out the <Link href="/server">Server</Link> and the{" "}
        <Link href="/client">Client</Link> examples to see how to secure pages
        and get session data.
      </p>

      <div className=" border border-zinc-800 rounded-lg mt-4">
        <div className=" bg-zinc-900 p-4">
          <h2 className="font-bold">Current Session</h2>
        </div>

        {session ? (
          <div className="p-4 bg-zinc-950">
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
        ) : (
          <p className="p-4">null</p>
        )}
      </div>
    </main>
  );
};

export default Home;
