import React from "react";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { SiFrontendmentor } from "react-icons/si";
import { SiBackendless } from "react-icons/si";
import { GrOptimize } from "react-icons/gr";
import { TbApi } from "react-icons/tb";
import { FaDatabase } from "react-icons/fa";

function MyServices() {
  const myServices = [
    {
      id: 1,
      name: "Frontend Development",
      icon: <MdOutlineDeveloperMode />,
      desc: "I specialize in building visually appealing, responsive, and user-friendly web applications using React.js, Next.js, Tailwind CSS, Material UI, Bootstrap, HTML, CSS, and JavaScript. I focus on creating seamless user experiences with optimized UI/UX design.",
    },
    {
      id: 2,
      name: "Fullstack Development",
      icon: <SiFrontendmentor />,
      desc: "I build end-to-end web applications, integrating frontend and backend technologies with seamless API connections. I have hands-on experience in MERN stack (MongoDB, Express.js, React.js, Node.js) and working with Next.js to develop high-performance full-stack applications.",
    },
    {
      id: 3,
      name: "Backend Development",
      icon: <SiBackendless />,
      desc: "I develop robust and scalable backend systems using Node.js, Express.js, and .NET. I ensure efficient data handling, authentication, and business logic implementation for full-stack applications.",
    },
    {
      id: 4,
      name: "Web Perfomence Optimization",
      icon: <GrOptimize />,
      desc: "I improve website speed and efficiency by implementing lazy loading, caching mechanisms, minimizing API calls, reducing bundle sizes, and optimizing database queries. My experience in performance tuning ensures a fast and smooth user experience.",
    },
    {
      id: 5,
      name: "API Development",
      icon: <TbApi />,
      desc: "I design and develop RESTful APIs for seamless communication between frontend and backend. I focus on secure authentication, optimized request handling, and well-structured endpoints to enhance application performance.",
    },
    {
      id: 6,
      name: "Database Management",
      icon: <FaDatabase />,
      desc: "I have experience in designing, managing, and optimizing databases using MongoDB and MySQL. I ensure data integrity, scalability, and efficient querying for high-performance applications.",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-8 mt-24 container">
      {/* topic */}
      <div>
        <h1 className="text-6xl text-center text-indigo-700 font-bold uppercase">
          My Services
        </h1>
      </div>

      {/* service cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {myServices.map((item) => (
          <div
            key={item.id}
            className="bg-accent font-pops px-6 py-4 flex flex-col items-center justify-center gap-3 lg:mx-0 mx-4 hover:shadow-2xl"
          >
            <p className="text-5xl">{item.icon}</p>
            <p className="font-bold">{item.name}</p>
            <p className="text-gray-500 text-center">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyServices;
