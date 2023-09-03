import { signOut, useSession } from "next-auth/react";

const MiniProfile = () => {
  const { data: session } = useSession();

  return (
    <div className="items-center flex justify-between mt-14 ml-10 ">
      <img
        src={session?.user?.image}
        alt="img"
        className="rounded-full border p-[2px] w-14 h-14"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">{session?.user?.username}</h2>
        <h3 className="text-sm text-gray-400">{session?.user?.name}</h3>
      </div>

      <button onClick={signOut} className="text-blue-400 text-sm font-semibold">
        Sign Out
      </button>
    </div>
  );
};

export default MiniProfile;
