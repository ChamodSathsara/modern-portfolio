import Image from "next/image";
import React from "react";
import aboutPic from "@/assests/aboutme3.png";
import { Button } from "../ui/button";

function AboutMe() {
  return (
    <div className="mt-10">
      <div className="grid grid-cols-1 md:grid-cols-2 container gap-x-9">
        {/* my image */}
        <div className="w-auto h-auto  flex justify-center items-center">
          <Image src={aboutPic} alt="my image" />
        </div>

        {/* Text erea */}
        <div className=" flex flex-col justify-center items-center  md:items-start gap-y-6">
          {/* topic */}
          <div className="">
            <h1 className="uppercase text-6xl font-bold font-pops ">
              About <span className="text-indigo-700">Me</span>
            </h1>
          </div>

          {/* discription */}
          <div className="font-desc text-gray-500 md:text-start text-center">
            I specialize in full-stack web development, with a strong focus on
            the MERN stack and Java programming using Spring Boot. I have
            hands-on experience with JavaScript frameworks like Next.js and
            React.js. I am interested in new web development technologies and
            continuously strive to expand my knowledge. My background includes
            diverse project work that has enhanced my technical proficiency,
            problem-solving skills, teamwork, and communication abilities. I'm
            dedicated to delivering efficient and creative software solutions
          </div>

          {/* buttons */}
          <div>
            <Button className="bg-gradient-to-r py-2 px-4 hover:scale-110 duration-200 from-purple-500 to-indigo-600 font-bold cursor-pointer hover:from-purple-400 hover:to-indigo-700 text-white">
              See More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
