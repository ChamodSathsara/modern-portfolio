import React from "react";
import { Button } from "../ui/button";

function CustomButton({ message }) {
  return (
    <Button className="bg-gradient-to-r m-2 hover:scale-110 duration-200 from-purple-500 to-indigo-600 font-bold cursor-pointer hover:from-purple-400 hover:to-indigo-700 text-white">
      {message}
    </Button>
  );
}

export default CustomButton;
