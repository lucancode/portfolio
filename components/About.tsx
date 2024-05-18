import Tooltip from "@mui/material/Tooltip";
import * as React from "react";
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
];
function About() {
  return (
    <div className="relative top-o left-0 w-full">
      <h2 className="font-bold text-2xl text-center">About Me</h2>
      <div className="py-8">
        <div className="grid-cols-4 gap-10 justify-items-center md:grid md:grid-cols-2">
          <div className="intro mb-10">
            <h4 className="font-bold text-lg mb-5">Introduction</h4>
            <p>
              A software developer from the Nelson Mandela University who
              effectively applies theoretical knowledge to excel in mastering
              new technologies. Demonstrates strong analytical and
              problem-solving skills through both projects and academic success.
            </p>
          </div>
          <div>
            <h4 className="font-bold text-lg mb-5">Skills</h4>
            <div className="grid grid-cols-4 gap-10 justify-items-center md:grid-cols-12">
              {skills.map((skills, index) => {
                return (
                  <div key={index} className="text-center">
                    <Tooltip
                      title={skills.label}
                      arrow
                      className="h-8 w-8 cursor-pointer m-auto"
                    >
                      <skills.icon />
                    </Tooltip>
                    <span className="text-sm md:text-md">{skills.label}</span>
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
