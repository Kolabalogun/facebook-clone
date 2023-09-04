"use client";

import Header from "@/components/Header";

import Head from "next/head";

import Feed from "@/components/Feed";
import Modal from "@/components/Modal";
import DeleteModal from "@/components/DeleteModal";

export default function Home() {
  return (
    <div className="bg-gray-50 h-screen overflow-y-scroll scrollbar-hide">
      <Head>
        <title>Instagram</title>
        <link rel="icon" href="/fav.ico" />
      </Head>

      {/* Header  */}
      <Header />

      <main>
        {/* Feed  */}
        <Feed />
      </main>

      {/* Modal  */}

      <Modal />

      {/* Delete modal */}
      <DeleteModal />
    </div>
  );
}
