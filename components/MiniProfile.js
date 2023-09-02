const MiniProfile = () => {
  return (
    <div className="items-center flex justify-between mt-14 ml-10 ">
      <img
        src="https://links.papareact.com/3ke"
        alt="img"
        className="rounded-full border p-[2px] w-14 h-14"
      />

      <div className="flex-1 mx-4">
        <h2 className="font-bold">akinola_kb</h2>
        <h3 className="text-sm text-gray-400">Welcome to Instagram</h3>
      </div>

      <button className="text-blue-400 text-sm font-semibold">Sign Out</button>
    </div>
  );
};

export default MiniProfile;
