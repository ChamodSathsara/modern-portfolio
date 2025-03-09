import React from "react";

function MyEducation() {
  const education = [
    {
      id: 1,
      uni: "University of Peradeniya",
      program: "(BSc) Honours in Computations",
      end: 2025,
    },
    {
      id: 2,
      uni: "Institute of Software Engineering",
      program: "HND of Software Engineering",
      end: "Present",
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center gap-10 container">
      {/* topic */}
      <div>
        <p className="text-2xl text-indigo-700 ">My Education</p>
      </div>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16 ">
        {education.map((item) => (
          <div
            key={item.id}
            className="flex flex-col gap-2 justify-center items-center md:justify-start bg-accent px-10 py-4 font-pops"
          >
            <div>
              <p>{item.uni}</p>
              <p className="font-bold">{item.program}</p>
            </div>
            <p className="text-sm font-bold text-gray-500">{item.end}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyEducation;
