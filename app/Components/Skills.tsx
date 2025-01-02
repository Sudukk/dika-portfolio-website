"use client"

import React from 'react';

const coding_skills = ["Python", "Java", "C++", "C#"];

const software_skills = [
  "After Effects",
  "Premiere Pro",
  "Photoshop",
  "Blender",
  "Unity",
  "Figma",
  "Canva",
];

const Skills = () => {

  return (
    <>
      <div className="flex flex-col space-y-6 md:mb-12 intersect:motion-preset-fade md:mt-0 mt-40 md:px-5">

        <div>
          <h1 className="text-4xl font-bold text-center">Skills</h1>
        </div>
        <hr className="w-1/2 h-0.5 mx-auto bg-[#ffffff21] border-0 rounded-lg"></hr> 

        <div>
          <h2 className="text-lg text-center mb-4">Coding</h2>
          <div className="flex flex-wrap justify-center gap-4 lg:px-36">
            {coding_skills.map((item, idx) => (
              <p
                key={idx}
                className="bg-[#41289a] p-2 px-5 rounded-lg text-white hover:motion-preset-pulse-sm"
              >
                {item}
              </p>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-lg text-center mb-4">Software</h2>
          <div className="flex flex-wrap justify-center gap-4 lg:px-36">
            {software_skills.map((item, idx) => (
              <p
                key={idx}
                className="bg-[#41289a] p-2 px-5 rounded-lg text-white hover:motion-preset-pulse-sm"
              >
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
