import React from "react";
import { Button } from "../ui/button";

function SendMessage() {
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
            type="text"
            placeholder="Enter Your name "
            className="px-5 py-2 border-2 w-full border-accent-foreground"
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
          />
        </div>

        {/* buttons */}
        <div className="flex justify-between items-center w-full px-10 md:px-28 mt-10">
          <Button className="rounded-none bg-gradient-to-r from-indigo-700 to-purple-700 font-pops">
            Cansel
          </Button>
          <Button className="rounded-none bg-gradient-to-r from-indigo-700 to-purple-700 font-pops">
            Send
          </Button>
        </div>
      </form>
    </div>
  );
}

export default SendMessage;
