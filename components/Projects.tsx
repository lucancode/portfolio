import { RiNextjsLine, RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function Projects() {
  return (
    <>
      <h2 className="text-center text-2xl font-bold">Projects</h2>
      {/** note: the auto slide feature disables the scrollbar functionality */}
      {/* Card container */}
      <div className="flex max-h-96 my-8 max-w-full overflow-x-scroll scrollbar-none">
        <div className="flex p-4">
          {/* Card */}
          <div className="rounded shadow-xl border mr-2 border-white min-w-[450px]">
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
                  <h3 className="font-bold text-xl">Fauxflix</h3>
                  <p className="text-md">
                    A Netflix clone with a personal touch
                  </p>
                  <div className="space-x-4 space-y-2">
                    <button className="bg-blue-400 cursor-pointer transition-all ease-in rounded px-6 py-3 hover:bg-blue-600  hover:bg-opacity-65">
                      Live Demo
                    </button>
                    <button className="bg-blue-400 cursor-pointer transition-all ease-in rounded px-6 py-3 hover:bg-blue-600  hover:bg-opacity-65">
                      Source Code
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Card footer */}
            <div className="flex justify-center items-center gap-8">
              <div className="flex flex-col justify-center items-center p-2">
                <RiNextjsLine />
                <span>Next JS</span>
              </div>
              <div className="flex flex-col justify-center items-center p-2">
                <RiTailwindCssFill />
                <span>Tailwind</span>
              </div>
              <div className="flex flex-col justify-center items-center p-2">
                <SiTypescript />
                <span>TypeScript</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
