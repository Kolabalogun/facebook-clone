"use client";

import { HomeIcon } from "@heroicons/react/solid";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";

const Header = () => {
  const { data: session } = useSession();

  const [open, setOpen] = useRecoilState(modalState);

  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50 py-4">
      <div className="flex items-center  justify-between max-w-6xl lg:mx-auto mx-5">
        <Link href={"/"} className="relative ">
          <img
            src="https://links.papareact.com/ocw"
            alt="instagram"
            className="w-32    hidden lg:inline-grid cursor-pointer"
          />

          <img
            src="https://links.papareact.com/jjm"
            alt="instagram"
            className="w-10   lg:hidden flex-shrink-0 cursor-pointer"
          />
        </Link>

        {/* Center  */}
        {session && (
          <div className="max-w-xs">
            <div className="mt-1 relative  p-4 rounded-md ">
              <div className=" absolute inset-y-0 pl-3 flex items-center pointer-events-none ">
                <SearchIcon className="w-5 h-5 text-gray-500" />
              </div>

              <input
                className="bg-gray-50  block w-full pl-10 sm:text-sm border-gray-300 focus:ring-black focus:border-black rounded-md"
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
        )}

        {/* Right  */}

        <div className="flex items-center justify-end space-x-4">
          {/* <MenuIcon className="h-6 md:hidden cursor-pointer " /> */}
          <Link href={"/"}>
            <HomeIcon className="navBtn " />
          </Link>
          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45 " />

                <div className="absolute -top-1 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse -right-2 text-xs w-5 h-5">
                  3
                </div>
              </div>

              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="h-20 w-20 md:h-8 md:w-8 inline-flex cursor-pointer hover:scale-125 transition-all duration-150 ease-out "
              />
              {/* <UserGroupIcon className="navBtn " /> */}
              {/* <HeartIcon className="navBtn " /> */}

              <img
                onClick={signOut}
                src={session?.user?.image}
                alt="Avatar"
                className="h-10 w-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
