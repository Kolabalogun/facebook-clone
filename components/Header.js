import Image from "next/image";

import { HomeIcon } from "@heroicons/react/solid";

import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";

const Header = () => {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className="flex  justify-between max-w-6xl lg:mx-auto mx-5">
        <div className="relative w-24    hidden lg:inline-grid cursor-pointer">
          <Image
            src="https://links.papareact.com/ocw"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="relative w-10   lg:hidden flex-shrink-0 cursor-pointer">
          <Image
            src="https://links.papareact.com/jjm"
            layout="fill"
            objectFit="contain"
          />
        </div>

        {/* Center  */}

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

        {/* Right  */}

        <div className="flex items-center justify-end space-x-4">
          <MenuIcon className="h-6 md:hidden cursor-pointer " />
          <HomeIcon className="navBtn" />

          <div className="relative navBtn">
            <PaperAirplaneIcon className="navBtn rotate-45 " />

            <div className="absolute -top-1 bg-red-500 rounded-full flex items-center justify-center text-white animate-pulse -right-2 text-xs w-5 h-5">
              3
            </div>
          </div>

          <PlusCircleIcon className="navBtn " />
          <UserGroupIcon className="navBtn " />
          <HeartIcon className="navBtn " />

          <img
            src="https://pbs.twimg.com/profile_images/1586745333119426563/4gc7MeJd_400x400.jpg"
            alt="Avatar"
            className="h-10 w-10 rounded-full cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
