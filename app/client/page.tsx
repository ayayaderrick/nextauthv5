"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

function SessionData() {
  const { data: session, status } = useSession();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent hydration errors by not rendering anything on the server
  }

  if (status === "loading") {
    return <div className="text-center">Loading session data...</div>;
  }

  return (
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
  );
}

export default function ClientSideAuth() {
  return (
    <main className="mt-8">
      <h1 className="text-4xl font-bold">Client Side Rendering</h1>
      <p className="text-lg mt-4">
        This page fetches session data client side using the useSession React
        Hook.
      </p>
      <p className="text-lg mt-4">
        It needs the &apos;use client&apos; directive at the top of the file to
        enable client side rendering, and the SessionProvider component to
        provide the session data.
      </p>
      <SessionData />
    </main>
  );
}
