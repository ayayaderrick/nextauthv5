import { headers } from "next/headers";
import { redirect } from "next/navigation";
export const runtime = "edge";

async function getAuthData() {
  const headersList = await headers();

  const res = await fetch("http://localhost:3000/api/data", {
    headers: {
      ...Object.fromEntries(headersList.entries()),
    },
  });

  if (!res.ok) {
    if (res.status === 401) {
      //   return { message: "Not Authenticated" };
      redirect("/");
    }
    throw new Error("Failed to fetch auth data");
  }

  return res.json();
}

export default async function AuthDataFetcher() {
  let authData;
  let error = null;

  try {
    authData = await getAuthData();
  } catch (e) {
    error = e instanceof Error ? e.message : "An unknown error occurred";
  }

  if (error) {
    // return <div className="text-red-500">Error: {error}
    // </div>;
    redirect("/");
  }

  if ("message" in authData) {
    return <div className="text-yellow-500">{authData.message}</div>;
  }

  return (
    <main className="mt-8">
      <h1 className="text-4xl font-bold">Route Handler Usage</h1>
      <p className="text-lg mt-4">
        This page fetches data from an API Route Handler . The API is protected
        using the universal auth() method.
      </p>
      <div className=" border border-zinc-800 rounded-lg mt-4">
        <div className=" bg-zinc-900 p-4">
          <h2 className="text-xl font-semibold ">Data from API Route</h2>
        </div>
        <div className="p-4 bg-zinc-950">
          <pre>{JSON.stringify(authData, null, 2)}</pre>
        </div>
      </div>
    </main>
  );
}
