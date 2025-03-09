import Image from "next/image";
import React from "react";
import logo from "@/assests/logo.png";
import { navLinks } from "../Navbar/navLinks";
import Link from "next/link";
import { IoCallOutline } from "react-icons/io5";
import { FiMail } from "react-icons/fi";
import { IoLocation } from "react-icons/io5";
import { socialLinks } from "../AboutMe/socialLinks";

import SubsMail from "./SubsMail";

function Footer() {
  return (
    <div className="bg-accent mt-20">
      <div className="container  flex flex-col gap-4 justify-center px-3 items-center">
        {/* part 1 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-6 mt-20">
          {/* logo */}
          <div className="flex flex-col justify-center items-center md:justify-start md:items-start">
            <Image src={logo} alt="logo image" className="w-52 h-auto" />
            <p className="text-gray-500 font-pops text-center md:text-start">
              Creating exceptional digital experiences with passion and
              precision.
            </p>
          </div>

          {/* navLinks */}
          <div className="flex flex-col gap-5 justify-center items-center md:justify-start md:items-start">
            <h1 className="font-bold font-pops text-lg">Quick Links</h1>
            <div className="flex flex-col gap-2 font-pops text-gray-500">
              {navLinks.map((item) => (
                <Link key={item.id} href={item.link}>
                  {item.name}
                </Link>
              ))}
            </div>
          </div>

          {/* contact details */}
          <div className="flex flex-col gap-3 justify-center items-center md:justify-start md:items-start">
            <h1 className="mb-4 font-pops font-bold text-lg">Contact Me</h1>

            {/* tele num */}
            <div className="flex flex-row font-pops text-gray-500 gap-2 items-center justify-center md:justify-start">
              <p>
                <IoCallOutline />
              </p>
              <p>070 240 25 64</p>
            </div>

            {/* email */}
            <div className="flex flex-row font-pops text-gray-500 gap-2 items-center justify-center md:justify-start">
              <p>
                <FiMail />
              </p>
              <p>sathsarawapc@gmail.com</p>
            </div>

            {/* address */}
            <div className="flex flex-row font-pops text-gray-500 gap-2 items-center justify-center md:justify-start">
              <p>
                <IoLocation />
              </p>
              <p>No123, Gorakana , Panadura , Sri Lanka.</p>
            </div>
          </div>

          {/* suscribe */}
          <SubsMail />
        </div>

        {/* hr */}
        <hr className="border border-gray-400 w-full" />

        {/* part 2 */}
        <div className="flex flex-col md:flex-row justify-center items-center w-full md:justify-between gap-y-2.5 mb-1">
          {/* social links */}
          <div className="flex flex-row justify-center items-center gap-4">
            {socialLinks.map((item) => (
              <div
                key={item.id}
                className="bg-gradient-to-r to-indigo-800 from-purple-800 rounded-full p-2 "
              >
                <a href={item.link} target="_blank">
                  <p className="hover:scale-110">{item.icon}</p>
                </a>
              </div>
            ))}
          </div>

          {/* copyrights */}
          <div>
            <p className="font-pops text-sm text-gray-500">
              @Copyrights at Chamod 2025
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
