import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typed from "typed.js";

function Banner() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Frontend Developer", "Backend Developer"],
      typeSpeed: 50,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className=" relative flex justify-between items-center w-full h-dvh p-[100px]">
      <div className=" max-w-[850px] space-y-4">
        {/** subtleText is a custom utility for keyframe animation */}
        <h3 className="text-2xl font-bold subtleText">Hello, It's</h3>
        {/** myName is a custom utility for keyframe animation */}
        <h1 className="text-6xl font-bold myName">Lungelo Ntuli</h1>
        {/** subtleText is a custom utility for keyframe animation */}
        <h3 className="text-3xl font-bold subtleText">
          And I'm a <span ref={el} className=" text-red-400"></span>
        </h3>
        <p className="text-xl description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <div className="flex space-x-4 socials">
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
        <div className="pt-8 cvBtn">
          <a
            href=""
            className="bg-red-400 rounded p-4 transition duration-400 ease-in-out hover:bg-red-800 hover:bg-opacity-65"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="w-[550px] h-[550px] img">
        <img src="https://as1.ftcdn.net/v2/jpg/06/34/17/74/1000_F_634177451_9FJMzIBVJLHqZn3rcArq3fb9GG9FMGIK.jpg" className="w-full h-full rounded-full object-cover" alt="" />
      </div>
    </div>
  );
}

export default Banner;
