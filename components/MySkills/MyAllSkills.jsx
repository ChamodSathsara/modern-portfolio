"use client";
import React, { useState } from "react";

import { skillCategories } from "./skillCategories";
import SkillCard from "./SkillCard";

function MyAllSkills({ name }) {
  const [active, setActive] = useState("All");

  console.log(name, active);

  return (
    <div>
      {/* topic */}
      <div className="flex justify-center items-center">
        <h1 className="text-6xl text-indigo-700">My Skills</h1>
      </div>

      {/* skills card and description */}

      <div className="mt-10 flex flex-col justify-center items-center space-y-10 container">
        {/*catogary buttons */}
        <div className="grid grid-cols-2 md:flex justify-center items-center gap-10">
          {skillCategories.map((item) => (
            <div
              key={item.id}
              onClick={() => setActive(item.name)}
              className={
                active === item.name
                  ? `px-4 py-2 flex flex-col justify-center items-center bg-accent w-40 h-auto scale-110 cursor-pointer gap-2 text-indigo-700`
                  : `px-4 py-2 flex flex-col justify-center items-center bg-accent w-40 h-auto hover:scale-110 cursor-pointer gap-2`
              }
            >
              <p>{item.icon}</p>
              <h1 className="font-semibold">{item.name}</h1>
            </div>
          ))}
        </div>

        {/* my skills description */}
        <div>
          <p className="font-pops text-gray-600 text-center">
            I am a Full-Stack Software Engineer skilled in developing
            high-performance web applications using React.js, Next.js, Node.js,
            and Express.js. I specialize in building scalable and responsive
            user interfaces with Tailwind CSS, Material UI, and Bootstrap, while
            ensuring efficient backend architecture with MongoDB and MySQL. My
            expertise includes REST API development, web performance
            optimization, and version control using Git/GitHub. I am also
            exploring DevOps tools like Docker and CI/CD to streamline
            deployment. Passionate about problem-solving and continuous
            learning, I strive to create innovative and optimized software
            solutions. 🚀
          </p>
        </div>

        {/* Skills Cards */}
        <div className="container">
          <SkillCard active={active} />
        </div>
      </div>
    </div>
  );
}

export default MyAllSkills;
