"use client";
import React from "react";
import CountUp from "react-countup";

function CountingCard() {
  const countings = [
    { id: 1, name: "Projects", num: 50, suffix: " +" },
    { id: 2, name: "Experience", num: 6, suffix: " +" },
    { id: 3, name: "Clients", num: 5, suffix: " +" },
    { id: 4, name: "Technologies", num: 59, suffix: " +" },
  ];
  return (
    <div className="md:mt-0 mt-64 bg-gradient-to-br to-indigo-800 from-purple-800 block">
      <div className="grid grid-cols-2 md:grid-cols-4 py-5 container gap-y-4">
        {countings.map((item) => (
          <div
            key={item.id}
            className="flex flex-col justify-center items-center text-white"
          >
            <CountUp
              className="font-pops font-bold text-3xl lg:text-5xl"
              start={0}
              end={item.num}
              suffix={item.suffix}
              duration={2.75}
            ></CountUp>
            <h1 className="font-pops font-bold text-xl md:text-2xl text-white">
              {item.name}
            </h1>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountingCard;
