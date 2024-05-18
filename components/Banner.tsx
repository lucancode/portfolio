import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import Typed from "typed.js";

function Banner() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Fullstack Developer"],
      typeSpeed: 70,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className=" relative flex justify-between items-center w-full h-dvh">
      <div className=" max-w-[850px] space-y-4">
        {/** subtleText is a custom utility for keyframe animation */}
        <h3 className="text-2xl font-bold subtleText">Hello, My Name Is</h3>
        {/** myName is a custom utility for keyframe animation */}
        <h1 className="text-6xl font-bold myName">Lungelo Ntuli</h1>
        {/** subtleText is a custom utility for keyframe animation */}
        <h3 className="text-3xl font-bold subtleText">
          And I'm a <span ref={el} className=" text-blue-400"></span>
        </h3>
        <p className="text-xl description">
        Dynamic Software Engineer | Network Engineer | Certified in Cybersecurity by ISC2 | Aspiring Technologist at the Intersection of Code and Security
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
            className="bg-blue-400 rounded p-4 transition duration-400 ease-in-out hover:bg-blue-800 hover:bg-opacity-65"
          >
            Download Resume
          </a>
        </div>
      </div>
      <div className="w-[550px] h-[550px] img">
        <img src="grad.jpg" className="w-full h-full rounded-full object-cover" alt="" />
      </div>
    </div>
  );
}

export default Banner;
