import React from "react";

function Navbar() {
  return (
    // navigation bar container
    <div className=" absolute flex justify-center items-center top-0 left-0 w-full p-10">
      {/** navbar content */}
      <nav className="flex justify-between items-center w-full px-16">
        {/** navbar logo */}
        <div className="logo">
          <h2 className="font-extrabold text-2xl cursor-pointer">LUCANCODE</h2>
        </div>
        {/** navbar links */}
        <div className="flex space-x-10 cursor-pointer text-lg font-semibold">
          <a href="./" className="text-red-400">Home</a>
          <h4>About</h4>
          <h4>Skills</h4>
          <h4>Projects</h4>
        </div>
      </nav>
      {/** ends navbar */}
    </div>
    // ends navigation bar container
  );
}
export default Navbar;
