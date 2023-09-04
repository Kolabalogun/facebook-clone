"use client";

import Header from "@/components/Header";
import { getProviders, signIn, useSession } from "next-auth/react";
import Head from "next/head";

import { useEffect, useState } from "react";

export default function SignIn() {
  const { data: session } = useSession();
  const [providers, setProviders] = useState(null);

  console.log(session);

  // Sign in using Google and Next Auth
  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    setUpProviders();
  }, []);

  return (
    <>
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/fav.ico" />
      </Head>

      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen py-2 -mt-56 px-14 text-center">
        <img src="https://links.papareact.com/ocw" alt="img" className="w-80" />

        <p className="font-xs italic">
          This is not a REAL app, it is built for my portfolio
        </p>

        <div className="mt-40">
          {providers &&
            Object.values(providers).map((provider) => (
              <button
                type="button"
                key={provider.name}
                onClick={() => signIn(provider.id, { callbackUrl: "/" })}
                className="bg-blue-500 rounded-lg text-white p-3"
              >
                Sign In with {provider.name}
              </button>
            ))}
        </div>
      </div>
    </>
  );
}
