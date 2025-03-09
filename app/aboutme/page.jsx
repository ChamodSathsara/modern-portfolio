import Image from "next/image";
import React from "react";
import aboutImg from "@/assests/aboutme/section1.jpg";
import { Button } from "@/components/ui/button";
import { socialLinks } from "@/components/AboutMe/socialLinks";
import MyAllSkills from "@/components/MySkills/MyAllSkills";
import MyEducation from "@/components/MySkills/MyEducation";

function page() {
  return (
    <div className="container mt-14 md:mt-32 px-2 flex flex-col gap-10 justify-center items-center">
      {/* topic */}
      <div>
        <h1 className="font-bold text-3xl md:text-6xl text-indigo-700 uppercase">
          About Me
        </h1>
      </div>

      {/* image and text */}
      <div className="container grid grid-cols-1 md:grid-cols-2 mt-0 md:mt-16 mx-0 md:mx-3">
        {/* image grid 1 */}
        <div className="hidden md:flex object-cover md:h-auto w-auto h-96 justify-center ">
          <Image
            className="rounded-2xl"
            src={aboutImg}
            alt="my work"
            width={350}
            height={400}
          />
        </div>

        {/* text grid 2*/}
        <div className="flex flex-col justify-center items-center md:mt-0 mt-0 md:justify-start md:items-start gap-10">
          {/* sub topic  */}
          <div>
            <p className=" text-indigo-700 font-desc text-2xl hidden md:block">
              About my Selfe
            </p>
          </div>

          {/* headline */}
          <div className="space-y-0.5">
            <h1 className="text-3xl font-bold font-pops text-center">
              I Am Chamod Sathsara
            </h1>

            <p className="font-pops text-gray-500 text-center md:text-start">
              Hi, I'm Chamod Sathsara, a passionate Full-Stack Software Engineer
              specializing in the MERN stack and Next.js. I love building
              dynamic and high-performance web applications, focusing on
              scalability and user experience. With a strong foundation in Java,
              JavaScript, and modern web technologies, I have developed various
              projects, including e-commerce platforms, portfolio sites,
              blogging sites, and POS systems. I am always eager to learn new
              technologies, optimize web performance, and explore DevOps. My
              goal is to create innovative software solutions that make an
              impact. Let’s connect and build something great together!
            </p>
          </div>

          {/* buttons */}
          <div className="flex justify-center items-center gap-8">
            <Button className="bg-gradient-to-r px-4 py-2 hover:scale-110 duration-200 from-purple-500 to-indigo-600 font-bold cursor-pointer hover:from-purple-400 hover:to-indigo-700 text-white">
              Download Cv
            </Button>

            <Button className="bg-gradient-to-r px-4 py-2 hover:scale-110 duration-200 from-purple-500 to-indigo-600 font-bold cursor-pointer hover:from-purple-400 hover:to-indigo-700 text-white">
              Hire Me
            </Button>
          </div>

          {/* social media links */}
          <div className="flex flex-row gap-5">
            {socialLinks.map((item) => (
              <div
                className="bg-gradient-to-r to-indigo-700 from-purple-700 cursor-pointer rounded-full flex justify-center items-center"
                key={item.id}
              >
                <p className="m-3 font-bold text-white hover:scale-110">
                  {item.icon}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* my skills section */}
      <div>
        <MyAllSkills name={"sadun"} />
      </div>

      {/* my education section */}
      <div>
        <MyEducation />
      </div>

      <div></div>
    </div>
  );
}

export default page;
