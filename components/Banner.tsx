import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

function Banner() {
  return (
    <div className=" relative flex justify-between items-center w-full h-dvh p-[100px]">
      <div className=" max-w-[750px]">
        <h3>Hello, It's</h3>
        <h1>Lungelo Ntuli</h1>
        <h3>
          And I'm a <span>Fullstack Developer</span>
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="socials">
          <Link href="https://linkedin.com">
            <FaLinkedinIn />
          </Link>
          <Link href="https://github.com">
            <FaGithub />
          </Link>
        </div>
        <a href="">Download Resume</a>
      </div>
    </div>
  );
}

export default Banner;
