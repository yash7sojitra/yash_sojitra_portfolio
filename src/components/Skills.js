import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import htmllogo from "../../public/images/skills/html.png";
import csslogo from "../../public/images/skills/css.png";
import javascriptlogo from "../../public/images/skills/javascript.png";
import nodelogo from "../../public/images/skills/node.png";
import reactlogo from "../../public/images/skills/react.png";
import cpplogo from "../../public/images/skills/cpp.png";
import reduxlogo from "../../public/images/skills/redux.png";
import typescriptlogo from "../../public/images/skills/typescript.png";
import gitlogo from "../../public/images/skills/git.png";
import tailwindlogo from "../../public/images/skills/tailwind.png";
import mongodblogo from "../../public/images/skills/mongodb.png";

const SKILL_LIST = [
  { name: "React", url: reactlogo, bgColor: "#025a86" },
  { name: "Redux", url: reduxlogo, bgColor: "#f0e8fb" },
  { name: "Node", url: nodelogo, bgColor: "#dcefe8" },
  { name: "Git", url: gitlogo, bgColor: "#E7D1CA" },
  { name: "Javascript", url: javascriptlogo, bgColor: "#fff5c4" },
  { name: "HTML", url: htmllogo, bgColor: "#FFD6B7" },
  { name: "Tailwind", url: tailwindlogo, bgColor: "#f6e9e9" },
  { name: "C++", url: cpplogo, bgColor: "#e3f0f2" },
  { name: "Mongodb", url: mongodblogo, bgColor: "#f0e8fb" },
  { name: "CSS", url: csslogo, bgColor: "#DAF2FD" },
  { name: "Typescript", url: typescriptlogo, bgColor: "#fae6d5" },
];

const Skill = ({ name, url, bgColor }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center m-4 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className={`flex justify-center items-center  w-[120px] h-[120px] lg:w-[90px] lg:h-[90px] sm:w-[70px] sm:h-[70px]  rounded-full border-[1px] `}
      >
        <Image src={url} alt={name} className="w-1/2 h-1/2" />
      </div>
      <p className="mt-4">{name}</p>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Skills
      </h2>
      {/* <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark">
        <motion.div
          className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light"
          whileHover={{ scale: 1.05 }}
        >
          Web
        </motion.div>
        <Skill name="HTML" x="-25vw" y="2vw" />
        <Skill name="CSS" x="-5vw" y="-10vw" />
        <Skill name="JavaScript" x="20vw" y="6vw" />
        <Skill name="ReactJs" x="0vw" y="12vw" />
        <Skill name="NextJs" x="-20vw" y="-15vw" />
        <Skill name="Java" x="15vw" y="-12vw" />
        <Skill name="NodeJs" x="32vw" y="-5vw" />
        <Skill name="C/C++" x="0vw" y="-20vw" />
        <Skill name="Mongodb" x="-25vw" y="18vw" />
        <Skill name="Tailwind CSS" x="18vw" y="18vw" />
        <Skill name="DSA" x="-35vw" y="-5vw" />
        <Skill name="SQL" x="34vw" y="12vw" />
      </div> */}
      <div className="mt-16 flex justify-center items-center">
        <div className="grid w-[80%] grid-cols-4 gap-10  md:grid-cols-3 md:gap-8 ">
          {SKILL_LIST.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              url={skill.url}
              bgColor={skill.bgColor}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;
