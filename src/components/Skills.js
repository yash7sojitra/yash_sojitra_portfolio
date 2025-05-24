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
import nextjslogo from "../../public/images/skills/nextjs.png";
import nextauthlogo from "../../public/images/skills/nextauth.png";
import shadcnlogo from "../../public/images/skills/shadcn.png";
import stripelogo from "../../public/images/skills/stripe.png";
import prismalogo from "../../public/images/skills/prisma.png";
import postgreslogo from "../../public/images/skills/postgres.png";
import githublogo from "../../public/images/skills/github.png";
import plotlylogo from "../../public/images/skills/plotly.png";
import mysqllogo from "../../public/images/skills/mysql.png";
import reactflowlogo from "../../public/images/skills/reactflow.png";

const SKILL_LIST = [
  // Frontend Core
  { name: "React", url: reactlogo },
  { name: "NextJs", url: nextjslogo },
  { name: "Typescript", url: typescriptlogo },
  { name: "Tailwind", url: tailwindlogo },

  // UI & UX Enhancers
  { name: "Shadcn/ui", url: shadcnlogo },
  { name: "Plotly", url: plotlylogo },
  { name: "React Flow", url: reactflowlogo },

  // Backend & API
  { name: "Node", url: nodelogo },
  { name: "Prisma", url: prismalogo },

  // Auth & Payments
  { name: "NextAuth", url: nextauthlogo },
  { name: "Stripe", url: stripelogo },

  // Databases
  { name: "Postgres", url: postgreslogo },
  { name: "Mongodb", url: mongodblogo },
  { name: "MySQL", url: mysqllogo },

  // State Management
  { name: "Redux", url: reduxlogo },

  // DevOps & Tools
  { name: "Git", url: gitlogo },
  { name: "GitHub", url: githublogo },

  // Web Foundations
  { name: "Javascript", url: javascriptlogo },
  { name: "HTML", url: htmllogo },
  { name: "CSS", url: csslogo },

  // Other Languages
  { name: "C++", url: cpplogo },
];

const Skill = ({ name, url }) => {
  return (
    <motion.div
      className="flex flex-col items-center justify-center text-center m-4 shadow-dark cursor-pointer"
      whileHover={{ scale: 1.05 }}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
    >
      <div
        className={`flex justify-center items-center  w-[120px] h-[120px] lg:w-[90px] lg:h-[90px] sm:w-[70px] sm:h-[70px]  rounded-full `}
      >
        <Image src={url} alt={name} className="w-1/2 h-1/2 object-contain" />
      </div>
      <p className="mt-2">{name}</p>
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
        {/* <div className="grid w-[80%] grid-cols-4 gap-10  md:grid-cols-3 md:gap-8 "> */}
        <div className="flex flex-wrap gap-5 w-3/4">
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
