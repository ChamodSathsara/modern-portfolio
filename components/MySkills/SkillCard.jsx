import React from "react";
import { allSkills } from "./allSkills";

function SkillCard({ active }) {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-10 gap-y-0 md:gap-y-8">
      {allSkills
        .filter((item) => (active === "All" ? true : active === item.category))
        .map((item) => (
          <div
            className="flex flex-row justify-start items-center py-4 mx-24 gap-3 rounded-lg "
            key={item.id}
          >
            <div className="p-4 ms-3 bg-accent rounded-lg hover:scale-110">
              <div className="w-auto h-auto">{item.icon}</div>
            </div>
            <p className="font-bold text-sm font-pops">{item.name}</p>
          </div>
        ))}
    </div>
  );
}

export default SkillCard;
