"use server";

import { signIn, signOut } from "@/auth";
import { formSchema } from "@/lib/formSchema";
import { prisma } from "@/prisma";
import { AuthError } from "next-auth";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const getUserByEmail = async (email: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const login = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logout = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

export const loginWithCreds = async (data: z.infer<typeof formSchema>) => {
  const result = formSchema.safeParse(data);

  if (!result.success) {
    return { success: false, error: "Invalid input" };
  }

  const { email, password } = result.data;

  const existingUser = await getUserByEmail(email);
  console.log(existingUser);

  try {
    await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    return { success: true };
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { success: false, error: "Invalid Credentials" };
        default:
          return {
            success: false,
            error: "An error occurred during authentication",
          };
      }
    }
    return { success: false, error: "An unexpected error occurred" };
  }
};
