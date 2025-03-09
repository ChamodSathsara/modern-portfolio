import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import DarkHero from "@/assests/heroRm.png";

function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container gap-y-4 h-[95vh] pt-5 md:mt-0">
      {/* text aria */}
      <div className="flex flex-col justify-center items-center  md:items-start gap-4">
        {/* hey */}
        <div>
          <h1 className="font-bold text-xl uppercase font-pops">
            Hey, I am <span className="text-indigo-700">Chamod Sathsara</span>
          </h1>
        </div>

        {/* se */}
        <div className="">
          <h1 className="uppercase text-5xl text-center md:text-start md:text-8xl font-bold">
            Full-Stack Software Engineer
          </h1>
        </div>

        {/* description */}
        <div className="mx-3 md:mx-0">
          <p className="font-pops md:text-start text-center text-gray-500">
            I specialize in full-stack web development, with a strong focus on
            the MERN stack and Java programming using Spring Boot. I have
            hands-on experience with JavaScript frameworks like Next.js and
            React.js. I am interested in new web development technologies and
            continuously strive to expand my knowledge. My background includes
            diverse project work that has enhanced my technical proficiency,
            problem-solving skills, teamwork, and communication abilities. I'm
            dedicated to delivering efficient and creative software solutions
          </p>
        </div>

        {/* buttons */}
        <div className="flex md:flex-row flex-col  gap-10">
          <Button className="bg-gradient-to-r px-4 py-2 hover:scale-110 duration-200 from-purple-500 to-indigo-600 font-bold cursor-pointer hover:from-purple-400 hover:to-indigo-700 text-white">
            <a href="https://wa.me/qr/WRZ4QPBIWBY5A1" target="_blank">
              Hire Me
            </a>
          </Button>

          <Button className="bg-gradient-to-r px-4 py-2 hover:scale-110 duration-200 from-purple-500 to-indigo-600 font-bold cursor-pointer hover:from-purple-400 hover:to-indigo-700 text-white">
            <a href="myCv.pdf" download="myCv.pdf">
              Download CV
            </a>
          </Button>
        </div>
      </div>

      {/* image */}
      <div className="flex justify-end items-end">
        <Image src={DarkHero} alt="my image" />
      </div>
    </div>
  );
}

export default Hero;
