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
    <div className="relative flex justify-between items-center w-full h-dvh pt-44 px-16 md:px-44 md:pt-0">
      <div className=" max-w-[850px] space-y-4">
        {/** subtleText is a custom utility for keyframe animation */}
        <h3 className="text-xl font-bold subtleText md:text-2xl">Hello, My Name Is</h3>
        {/** myName is a custom utility for keyframe animation */}
        <h1 className="text-4xl font-bold myName md:text-6xl">Lungelo Ntuli</h1>
        {/** subtleText is a custom utility for keyframe animation */}
        <h3 className="text-2xl font-bold subtleText md:text-3xl">
          And I'm a <span ref={el} className=" text-blue-400"></span>
        </h3>
        <p className="text-md description md:text-xl">
          Dynamic Software Engineer | Network Engineer | Certified in
          Cybersecurity by ISC2 | Aspiring Technologist at the Intersection of
          Code and Security
        </p>
        {/** banner social media and button block */}
        <div className="flex space-x-4 socials">
          <Link
            href="https://www.linkedin.com/in/lungelo-ntuli/"
            className="rounded-full p-2 transition duration-400 ease-in-out hover:bg-white hover:bg-opacity-65"
          >
            <FaLinkedinIn className="h-6 w-6" />
          </Link>
          <Link
            href="https://github.com/lucancode?tab=repositories"
            className="rounded-full p-2 transition duration-400 ease-in-out hover:bg-white hover:bg-opacity-65"
          >
            <FaGithub className="h-6 w-6" />
          </Link>
        </div>
        <div className="pt-8 cvBtn">
          <a
            href="Lungelo-Ntuli-Resume.pdf"
            className="text-sm md:text-lg bg-blue-400 rounded p-4 transition duration-400 ease-in-out hover:bg-blue-800 hover:bg-opacity-65"
          >
            Download Resume
          </a>
        </div>
      </div>
      {/** img class is for the keyframe animation opacity/float effect */}
      <div className="w-[550px] h-[550px] img">
        {/** I used an svg to create an interesting container for the image */}
        <svg viewBox="0 0 200 187" xmlns="http://www.w3.org/2000/svg">
          <mask id="mask0" mask-type="alpha">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547 
        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775 
        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666 
        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
          </mask>
          <g mask="url(#mask0)">
            <path
              d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 
        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 
        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 
        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
            />
            <image href="grad.jpg" className="w-full -translate-y-8" />
          </g>
        </svg>
      </div>
    </div>
  );
}

export default Banner;
