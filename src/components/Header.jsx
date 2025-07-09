const Header = () => {
  return (
    <div className="">
      <img
        className="h-50 w-500 absolute inset-x-0 top-0 -z-10"
        src="src\images\d64dfdc58a289a08c6a45d1d984b440eeb710836 (1).jpg"
      ></img>
      <div className="flex justify-between z-1 pt-20">
        <div className="flex ">
          <img
            className="size-40 rounded-full border-3 border-white"
            src="src\images\548681d2611ac2f8afaf2b0aaef4da3fa36f380d.jpg"
          ></img>
          <h1 className="text-black self-end">Ricardo Cooper</h1>
        </div>
        <div className="flex self-end gap-1">
          <button className="bg-white text-black rounded-md w-20 border-1 border-gray-500 flex text-xs items-center justify-evenly">
            <img src="src\images\Icon.svg" className="size-4 "></img>Message
          </button>
          <button className="bg-white text-black rounded-md w-20 border-1 border-gray-500 flex text-xs items-center justify-evenly h-7">
            <img src="src\images\Icon2.svg"></img>
            Call
            
          </button>
        </div>
      </div>
    </div>
  );
};
export default Header;
