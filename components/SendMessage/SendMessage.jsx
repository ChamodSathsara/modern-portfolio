"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { isValid } from "zod";

function SendMessage() {
  const [message, setMessage] = useState({
    fullName: "",
    email: "",
    tel: "",
    mes: "",
  });

  const isValied = () => {
    if (message.fullName.length < 5) {
      alert("full name lower than 5 carectors");
      return false;
    }

    if (message.email.length < 5) {
      alert("please enter correct email");
      return false;
    }

    if (message.tel.length < 9) {
      alert("please enter correct telnum");
      return false;
    }

    if (message.message.length < 10) {
      alert("full name lower than 10 carectors");
      return false;
    }

    return true;
  };

  const submitMessage = (e) => {
    isValied();

    if (isValid) {
      // logic
    } else {
    }
  };
  const clearMessage = (e) => {
    setMessage({
      fullName: "",
      email: "",
      tel: "",
      mes: "",
    });
  };
  return (
    <div className="container mt-16 flex flex-col gap-10 justify-center items-center">
      {/* topic */}
      <div>
        <h1 className="font-bold text-center text-indigo-700 text-6xl">
          Send me Message
        </h1>
      </div>

      {/* form */}
      <form
        action=""
        className="w-full lg:w-1/2 space-y-5 bg-accent flex flex-col justify-start items-start py-14"
      >
        {/* fill name */}
        <div className="flex flex-col justify-start items-start gap-2 px-10 md:px-28 w-full">
          <label className="font-pops " htmlFor="">
            Full Name :
          </label>
          <input
            onChange={(e) => {
              e.preventDefault();
              const newName = e.target.value;
              setMessage((item) => ({
                ...item,
                fullName: newName,
              }));
            }}
            type="text"
            placeholder="Enter Your name "
            className="px-5 py-2 border-2 w-full border-accent-foreground"
            value={message.fullName}
          />
        </div>

        {/* email */}
        <div className="flex flex-col justify-start items-start gap-2 px-10 md:px-28 w-full">
          <label className="font-pops " htmlFor="">
            Email :
          </label>
          <input
            type="email"
            placeholder="Enter Your E-mail "
            className="px-5 py-2 border-2 w-full border-accent-foreground"
            value={message.email}
            onChange={(e) => {
              e.preventDefault();
              const newName = e.target.value;
              setMessage((item) => ({
                ...item,
                email: newName,
              }));
            }}
          />
        </div>

        {/* tele num */}
        <div className="flex flex-col justify-start items-start gap-2 px-10 md:px-28 w-full">
          <label className="font-pops " htmlFor="">
            Telephone :
          </label>
          <input
            type="tel"
            placeholder="Enter Tele Number "
            className="px-5 py-2 border-2 w-full border-accent-foreground"
            value={message.tel}
            onChange={(e) => {
              e.preventDefault();
              const newName = e.target.value;
              setMessage((item) => ({
                ...item,
                tel: newName,
              }));
            }}
          />
        </div>

        {/* Message */}
        <div className="flex flex-col justify-start items-start gap-2 px-10 md:px-28 w-full">
          <label className="font-pops " htmlFor="">
            Message :
          </label>
          <textarea
            rows={5}
            type="tel"
            placeholder="Enter Message "
            className="px-5 py-2 border-2 w-full border-accent-foreground"
            value={message.mes}
            onChange={(e) => {
              e.preventDefault();
              const newName = e.target.value;
              setMessage((item) => ({
                ...item,
                mes: newName,
              }));
            }}
          />
        </div>

        {/* buttons */}
        <div className="flex justify-between items-center w-full px-10 md:px-28 mt-10">
          <Button
            onClick={clearMessage}
            className="rounded-none bg-gradient-to-r from-indigo-700 to-purple-700 font-pops"
          >
            Cansel
          </Button>
          <Button
            onClick={submitMessage}
            className="rounded-none bg-gradient-to-r from-indigo-700 to-purple-700 font-pops"
          >
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
