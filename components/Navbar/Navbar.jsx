import Image from "next/image";
import React from "react";
import logo from "@/assests/logo.png";
import Link from "next/link";
import { Button } from "../ui/button";

import MobileNavbar from "./MobileNavbar";
import { ModeToggle } from "@/components/ModeToggle";
import { navLinks } from "./navLinks";

function Navbar() {
  return (
    <div className="bg-accent fixed w-full top-0 ">
      <div className="flex justify-between items-center container ">
        {/* logo */}
        <div className="flex justify-center items-center h-auto w-30 md:w-50">
          <Image src={logo} alt="logo image" />
        </div>
        {/* navlinks */}
        <div className="hidden md:flex gap-8 justify-center items-center ">
          {navLinks.map((item) => (
            <Link
              className="hover:text-indigo-700 hover:scale-105 duration-150 font-bold font-sans"
              key={item.id}
              href={item.link}
            >
              {item.name}
            </Link>
          ))}
        </div>
        {/* Hire Me button */}
        <div className="hidden md:flex justify-center items-center">
          <div>
            <ModeToggle />
          </div>
          <Button className="bg-gradient-to-r m-2 hover:scale-110 duration-200 from-purple-500 to-indigo-600 font-bold cursor-pointer hover:from-purple-400 hover:to-indigo-700 text-white">
            <a href="https://wa.me/qr/WRZ4QPBIWBY5A1" target="_blank">
              Hire Me
            </a>
          </Button>
        </div>
        {/* mobilenav icon */}
        <div className="block md:hidden me-5">
          <MobileNavbar navLinks={navLinks} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
