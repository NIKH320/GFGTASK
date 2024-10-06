import React from "react";

function Navbar() {
  return (
    <>
      <div className="flex justify-between py-2 px-16 max-sm:px-5">
        <div  >
          <img src="src\assets\logo.png" className="h-10 w-10"></img>
        </div>
        <div className="flex font-semibold pl-5 ">
          <h1 className="pr-4 flex justify-center items-center hover:font-bold cursor-pointer">Products</h1>
          <h1 className="pr-4 flex justify-center items-center hover:font-bold cursor-pointer">Resources</h1>
          <h1 className="pr-4 flex justify-center items-center hover:font-bold cursor-pointer">Developers</h1>
          <h1 className="pr-2 text-white hover:bg-transparent hover:text-black hover:border-2 bg-black rounded-full flex justify-center items-center px-3 text-xs w-16 "><h1 className="flex  mr-2 overflow-x-auto ">Open App</h1></h1>
        </div>
      </div>
    </>
  );
}

export default Navbar;
