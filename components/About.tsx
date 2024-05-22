import { Tooltip } from "@mui/material";
import { useEffect, useRef, RefObject } from "react";
import { DiMysql } from "react-icons/di";
import {
  FaCss3,
  FaGitAlt,
  FaHtml5,
  FaJava,
  FaPhp,
  FaReact,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { RiNextjsLine, RiNodejsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { TbBrandFirebase, TbBrandFlutter } from "react-icons/tb";

const skills = [
  { label: "React", icon: FaReact },
  { label: "Next Js", icon: RiNextjsLine },
  { label: "Tailwind", icon: RiTailwindCssFill },
  { label: "Firebase", icon: TbBrandFirebase },
  { label: "Java", icon: FaJava },
  { label: "Git", icon: FaGitAlt },
  { label: "Node", icon: RiNodejsLine },
  { label: "HTML", icon: FaHtml5 },
  { label: "CSS", icon: FaCss3 },
  { label: "PHP", icon: FaPhp },
  { label: "JavaScript", icon: IoLogoJavascript },
  { label: "Flutter", icon: TbBrandFlutter },
  { label: "MySQL", icon: DiMysql },
  { label: "TypeScript", icon: SiTypescript },
];
function About() {
  const useFadeInOnScroll = (elementRefs: RefObject<HTMLElement>[]) => {
    useEffect(() => {
      const handleScroll = () => {
        elementRefs.forEach((ref) => {
          if (ref.current) {
            const rect = ref.current.getBoundingClientRect();
            const isVisible = rect.top < window.innerHeight && rect.bottom >= 0;
            if (isVisible) {
              ref.current.classList.add("visible");
            } else {
              ref.current.classList.remove("visible");
            }
          }
        });
      };

      window.addEventListener("scroll", handleScroll);
      handleScroll(); // Check visibility on initial render

      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, [elementRefs]);
  };

  const fadeInSectionRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  useFadeInOnScroll(fadeInSectionRefs);
  useFadeInOnScroll(fadeInSectionRefs);

  return (
    <div className="relative top-o left-0 w-full px-16 md:px-44">
      <h2 className="mt-40 font-bold text-2xl text-center md:mt-0">About Me</h2>
      <div className="my-8">
        <div className="grid-cols-3 gap-8 justify-items-center md:grid md:grid-cols-2">
          <div className="intro mb-10">
            <h4
              ref={fadeInSectionRefs[0]}
              className="slide-Bottom font-bold text-lg mb-5"
            >
              Introduction
            </h4>
            <p ref={fadeInSectionRefs[1]} className="slide-Right">
              A software developer from the Nelson Mandela University who
              effectively applies theoretical knowledge to excel in mastering
              new technologies. Demonstrates strong analytical and
              problem-solving skills through both projects and academic success.
            </p>
          </div>
          <div className="">
            <h4
              ref={fadeInSectionRefs[2]}
              className="slide-Bottom font-bold text-lg mb-5"
            >
              Skills
            </h4>
            <div
              ref={fadeInSectionRefs[3]}
              className="slide-Left grid grid-cols-3 gap-7 justify-items-center md:grid-cols-3 lg:grid-cols-7"
            >
              {skills.map((skills, index) => {
                return (
                  <div key={index} className="w-20 text-center">
                    <Tooltip
                      title={skills.label}
                      arrow
                      className="h-8 w-8 cursor-pointer m-auto"
                    >
                      <skills.icon />
                    </Tooltip>
                    <span className="text-sm md:text-sm">{skills.label}</span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
