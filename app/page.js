"use client";

import Header from "@/components/Header";

import Head from "next/head";

import { useEffect, useState } from "react";
import Feed from "@/components/Feed";
import Modal from "@/components/Modal";

export default function Home() {
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

      {/* Modal  */}

      <Modal />
    </div>
  );
}
