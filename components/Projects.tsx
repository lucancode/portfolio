import Link from "next/link";
import { RiNextjsLine, RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Projects() {
  return (
    <div className="mx-16 md:mx-24">
      <h2 className="text-center text-2xl font-bold my-4">Projects</h2>
      {/** note: the auto slide feature disables the scrollbar functionality */}
      {/* Card container */}
      <div className="flex flex-wrap justify-center h-full max-w-full overflow-x-scroll scrollbar-none">
        <div className="flex flex-wrap justify-center md:p-4 pt-10">
          {/* Card */}
          <div className="rounded shadow-xl border border-white min-w-[300px] md:min-w-[400px] mb-16 mx-2">
            {/* Card body */}
            <div className="relative">
              <img
                className="img-fluid transition-all ease-in-out duration-500 hover:grayscale"
                src="https://rb.gy/50o4yq"
                width={450}
                alt="Screenshot of Fauxflix project"
              />

              {/* Overlay content */}
              <div className="absolute text-center bottom-0 w-full p-4 bg-gradient-to-b from-transparent to-black-72">
                <div className="bg-gray-400 bg-opacity-55 rounded pb-2">
                  <div className="mx-6">
                    <h3 className="font-bold text-lg md:text-xl">Fauxflix</h3>
                    <p className="md:text-md">
                      A Netflix clone with a personal touch
                    </p>
                  </div>
                  <div className="mx-2 md:flex md:justify-center md:items-center md:gap-2 space-y-2 md:space-y-0">
                    <Link
                      href="demo"
                      className="min-w-[55%] h-12 bg-blue-400 transition-all ease-in rounded hover:bg-blue-600 hover:bg-opacity-65 md:min-w-[40%] flex justify-center items-center"
                    >
                      Live Demo
                    </Link>
                    <Link
                      href="https://github.com/lucancode/fauxflix-za"
                      className="min-w-[55%] h-12 bg-blue-400 transition-all ease-in rounded hover:bg-blue-600 hover:bg-opacity-65 md:min-w-[40%] flex justify-center items-center"
                    >
                      Source Code
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="md:flex justify-center items-center gap-8">
              <div className="flex flex-col justify-center items-center p-2">
                <RiNextjsLine className="h-7 w-7" />
                <span>Next JS</span>
              </div>
              <div className="flex flex-col justify-center items-center p-2">
                <RiTailwindCssFill className="h-6 w-6" />
                <span>Tailwind</span>
              </div>
              <div className="flex flex-col justify-center items-center p-2">
                <SiTypescript className="h-6 w-6" />
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
