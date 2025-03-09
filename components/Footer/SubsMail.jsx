"use client";
import React, { useState } from "react";

function SubsMail() {
  const [email, setEmail] = useState("");

  const clickSub = () => {};
  return (
    <div className=" space-y-3">
      <h1 className="font-bold font-pops text-lg">Subscribe Me</h1>
      <div className="border-2 flex flex-row justify-between items-center p-1 ">
        <input
          type="email"
          className="font-pops "
          placeholder="Enter Email"
          value={email}
          onChange={(e) => {
            e.preventDefault();
            const newMail = e.target.value;
            setEmail(newMail);
          }}
        />

        <Button
          onChange={clickSub}
          className="bg-gradient-to-r to-indigo-700 from-purple-800"
        >
          <IoMdSend />
        </Button>
      </div>
    </div>
  );
}

export default SubsMail;
