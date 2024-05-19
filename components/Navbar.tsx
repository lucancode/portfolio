import Link from "next/link";
import { useState } from "react";
import { RiMenu5Fill } from "react-icons/ri";

function Navbar() {
  const [isClicked, setClicked] = useState(false);

  // if the hamburger menu is click, change the state value to be true. If clicked again set it to false
  const showMenu = () => {
    setClicked(!isClicked);
  };

  return (
    // navigation bar container
    <div className="fixed flex justify-center items-center left-0 w-full p-12 py-16 z-10 bg-black">
      {/** navbar content */}
      <nav className="absolute flex justify-between items-center w-full md:px-[180px] px-24">
        {/** navbar logo */}
        <div className="logo">
          <h2 className="font-extrabold text-lg cursor-pointer md:text-2xl">
            LUCANCODE
          </h2>
        </div>
        {/** start navbar links */}
        <div className="hidden lg:flex space-x-10 cursor-pointer text-lg font-semibold">
          <Link href="./" className="text-blue-400">
            Home
          </Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
        </div>
        {/** end navbar links */}
        {/** start hamburger menu */}
        <div className={`lg:hidden block cursor-pointer menu`} onClick={showMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div
          className={`${
            isClicked ? "expand" : "collapse"
          } absolute flex flex-col top-14 justify-center cursor-pointer font-semibold space-y-4 text-xl bg-black w-full pb-8 md:hidden transition ease-in-out duration-500`}
        >
          <Link href="./" className="text-blue-400">
            Home
          </Link>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
        </div>
        {/** end hamburger menu */}
      </nav>
      {/** ends navbar */}
    </div>
    // ends navigation bar container
  );
}
export default Navbar;
