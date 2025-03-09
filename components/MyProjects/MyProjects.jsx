import React from "react";
import image1 from "@/assests/projects/1.png";
import image2 from "@/assests/projects/2.jpg";
import image3 from "@/assests/projects/3.png";
import image4 from "@/assests/projects/4.png";
import image5 from "@/assests/projects/5.png";
import image6 from "@/assests/projects/6.png";
import Image from "next/image";
import { Button } from "../ui/button";

function MyProjects() {
  const services = [
    {
      id: 1,
      name: "My Portfolio website",
      link: "",
      image: <Image className="w-full" src={image1} alt="project image" />,
      description:
        "My Portfolio website showcases my skills and projects using cutting-edge technologies like Next.js for the frontend and a MongoDB database for backend data storage. It features a sleek, responsive design optimized for various devices. Visitors can explore sections like Home, About Me, My Services, and My Projects. The site includes interactive elements such as a 'Send Message' form for direct communication and a dynamic dark mode feature for enhanced user experience.",
    },
    {
      id: 2,
      name: "E-Commerce website",
      link: "",
      image: <Image className="w-full" src={image2} alt="project image" />,
      description:
        "My full-stack E-Commerce website is a shoe-selling platform built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The backend includes RESTful APIs for managing products, users, and orders, supporting GET, POST, PATCH, and DELETE operations. The website features a user-friendly interface with product listings, a shopping cart, order management, and authentication. It also includes a secure checkout process and a responsive design for seamless browsing across devices.",
    },
    {
      id: 3,
      name: "Sathsara motors website",
      link: "",
      image: <Image className="w-full" src={image3} alt="project image" />,
      description:
        "Sathsara Motors is a full-stack website built using the MERN stack (MongoDB, Express.js, React.js, and Node.js) to showcase and manage vehicle sales and services. It features a responsive design for seamless browsing on all devices. The website includes key functionalities like vehicle listings, customer inquiries through a contact form, user authentication, and an admin panel for managing vehicle inventory. RESTful APIs handle operations such as adding, updating, and deleting vehicle data, ensuring smooth and efficient performance.",
    },
    {
      id: 4,
      name: "Library Management System",
      link: "",
      image: <Image className="w-full" src={image4} alt="project image" />,
      description:
        "The Library Management System is a full-stack application with a Java Spring Boot backend and a user-friendly frontend. The backend handles core functionalities like book management, user authentication, borrowing and returning books, and maintaining transaction records. It includes RESTful APIs supporting CRUD operations (GET, POST, PATCH, DELETE) for books, users, and loans. The system ensures efficient data handling using a relational database like MySQL. Role-based access control allows admins to manage books and users, while borrowers can search, reserve, and return books seamlessly.",
    },
    {
      id: 5,
      name: "Blogging website",
      link: "",
      image: <Image className="w-full" src={image5} alt="project image" />,
      description:
        "This is a simple blogging website built with modern web technologies. Users can read, create, edit, and delete blog posts. The website features a clean and responsive design, making it accessible across devices. It includes a user-friendly editor for writing blogs and a comment section for interaction. The backend handles CRUD operations through RESTful APIs, ensuring smooth data management. This platform provides an easy way for users to share their thoughts and ideas online.",
    },
    {
      id: 6,
      name: "Sathsara Motors POS System",
      link: "",
      image: <Image className="w-full" src={image6} alt="project image" />,
      description:
        "Sathsara Motors POS (Point of Sale) System is a full-stack application designed to streamline sales and inventory management. The backend is built using Java Spring Boot, ensuring secure and efficient data processing. It includes key functionalities such as product (vehicle parts) management, sales transactions, customer management, and real-time stock updates. The system supports CRUD operations via RESTful APIs and integrates a MySQL database for data storage. The user-friendly interface allows staff to process orders, generate invoices, and track sales reports with ease. The system is optimized for responsive and efficient performance across devices.",
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center mt-14 container gap-10">
      {/* topic */}
      <div>
        <h1 className="text-6xl text-center text-indigo-700 font-bold">
          My Projects
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10">
        {services.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-start items-start gap-5 font-pops bg-accent mx-8 my-6"
          >
            {item.image}
            {/* <Image className="w-full" src={""} alt="project image" /> */}
            <div className="px-5">
              <h1 className="font-bold pb-2">{item.name}</h1>
              <p className="text-gray-500 text-sm ">{item.description}</p>
            </div>
            <div className="p-5">
              <Button className="rounded-none">See more</Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProjects;
