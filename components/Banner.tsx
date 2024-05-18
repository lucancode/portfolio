import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Banner() {
  return (
    <div className=" relative flex justify-between items-center w-full h-dvh p-[100px]">
      <div className=" max-w-[850px] space-y-4">
        <h3 className="text-2xl font-bold">Hello, It's</h3>
        <h1 className="text-6xl font-bold">Lungelo Ntuli</h1>
        <h3 className="text-3xl font-bold">
          And I'm a <span className=" text-red-400">Fullstack Developer</span>
        </h3>
        <p className="text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex space-x-4 hover:">
          <Link
            href="https://linkedin.com"
            className="rounded-full p-2 transition duration-400 ease-in-out hover:bg-white hover:bg-opacity-65"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com"
            className="rounded-full p-2 transition duration-400 ease-in-out hover:bg-white hover:bg-opacity-65"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
        </div>
        <div className="pt-8">
          <a
            href=""
            className="bg-red-400 rounded p-4 transition duration-400 ease-in-out hover:bg-red-800 hover:bg-opacity-65"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="max-w-[450px]">
        <img src="next.svg" className="rounded-full" alt="" />
      </div>
    </div>
  );
}

export default Banner;
