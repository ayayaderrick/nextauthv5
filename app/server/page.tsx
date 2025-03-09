import { auth } from "@/auth";
import { redirect } from "next/navigation";
import React from "react";

const Server = async () => {
  const session = await auth();

  if (!session?.user) {
    redirect("/");
  }
  return (
    <main className="mt-8">
      <h1 className="text-4xl font-bold">React Server Component Usage</h1>
      <p className="text-lg mt-4">
        This page is server-rendered as a React Server Component . It gets the
        session data on the server using auth() method.
      </p>

      <div className="bg-zinc-950 border border-zinc-800  rounded-sm p-4 mt-4">
        <h2 className="text-2xl font-semibold">Current Session Data</h2>
        <p className="text-lg mt-4">
          In this example, only some fields in the user object is passed to the
          page to avoid exposing sensitive information.
        </p>

        <div className=" bg-zinc-900  rounded-sm p-4 my-4">
          <h2 className="font-bold">Session</h2>
        </div>

        {session ? (
          <div>
            <pre>{JSON.stringify(session, null, 2)}</pre>
          </div>
        ) : (
          <p>No active session.</p>
        )}
      </div>
    </main>
  );
};

export default Server;
