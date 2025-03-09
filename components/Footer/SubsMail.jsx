"use client";
import React, { useState } from "react";
import { IoMdSend } from "react-icons/io";
import toast, { Toaster } from "react-hot-toast";

function SubsMail() {
  const [email, setEmail] = useState("");

  const clickSub = (e) => {
    e.preventDefault();
    if (email.length > 6) {
      toast.success("Successfully Adding..!");
      setEmail("");
    } else {
      toast.error("Unsuccessfully..!");
    }
  };
  return (
    <div className=" space-y-3">
      <h1 className="font-bold font-pops text-lg">Subscribe Me</h1>
      <div className="border-2 flex flex-row justify-between items-center p-1 ">
        <input
          type="email"
          className="font-pops active:border-0"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            e.preventDefault();
            const newMail = e.target.value;
            setEmail(newMail);
          }}
        />

        <button
          onClick={clickSub}
          className="bg-gradient-to-r font-bold to-indigo-700 cursor-pointer  from-purple-800"
        >
          <p className="text-white px-2 py-1">
            <IoMdSend />
          </p>
        </button>
      </div>
      <Toaster />
    </div>
  );
}

export default SubsMail;
