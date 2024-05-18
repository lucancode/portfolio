import Link from "next/link";
import { useEffect, useState } from "react";

function Navbar() {
  return (
    // navigation bar container
    <div className="absolute flex justify-center items-center top-4 left-0 w-full p-12 z-10">
      {/** navbar content */}
      <nav className="fixed flex justify-between items-center w-full px-24">
        {/** navbar logo */}
        <div className="logo">
          <h2 className="font-extrabold text-2xl cursor-pointer">LUCANCODE</h2>
        </div>
        {/** navbar links */}
        <div className="flex space-x-10 cursor-pointer text-lg font-semibold">
          <Link href="./" className="text-blue-400">
            Home
          </Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
        </div>
      </nav>
      {/** ends navbar */}
    </div>
    // ends navigation bar container
  );
}
export default Navbar;
