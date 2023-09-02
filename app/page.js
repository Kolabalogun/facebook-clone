"use client";

import Header from "@/components/Header";
import { getProviders, getSession, useSession } from "next-auth/react";
import Head from "next/head";
import Login from "./Login/page";
import { useEffect, useState } from "react";
import Feed from "@/components/Feed";

export default function Home() {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);

  // console.log(providers);

  // Sign in using Google and Next Auth
  useEffect(() => {
    const setUpProviders = async () => {
      const res = await getProviders();

      setProviders(res);
    };

    setUpProviders();
  }, []);

  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
      </Head>

      {/* Header  */}
      <Header />

      <main>
        {/* Feed  */}
        <Feed />
      </main>
    </div>
  );
}
