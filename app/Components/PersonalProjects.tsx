"use client"
import React from 'react'
import Image from 'next/image'


const PROJECTS = [
    ["/personal_projects_thumbnail/mathdestroyer_playstore.png",
      "Math Destroyer",
      "Math Destroyer is a casual mobile game that I made because I was bored and I wanted to make a game that can help people learn math calculation fast, so then I created this game in just under 3 weeks. I haven't published this game yet, but if you want to test  it you can click the button below.",
      "https://play.google.com/apps/internaltest/4701422300825493735",
      "Game Development, June 2024"],
    ["/personal_projects_thumbnail/manu_more_stuff_thumb.png",
      "Many More Stuff",
      "Many More Stuff is a Fabric Minecraft mod that I created because I wanted to add more ores, tools, armors, and weapons to the game. I created this mod in just around 2 weeks using Java and the Fabric library.",
      "https://www.curseforge.com/minecraft/mc-mods/many-more-stuff", 
      "Minecraft Mod, May 2024"],
    ["/personal_projects_thumbnail/angst.png",
      "Angst",
      "Angst is a motion graphic project for me to experiment with shapes and motions.",
      "https://www.instagram.com/p/CQMuVmbJpSy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
       "Motion Graphic, June 2021"],
    ["/personal_projects_thumbnail/outofmymood.png",
      "Out of My Mood",
      "Out of My Mood is a motion graphic project that I created because I liked the music.",
      "https://www.instagram.com/p/CiuLE-hs6CX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==", 
      "Motion Graphic, September 2022"],
    ["/personal_projects_thumbnail/pasttense.png",
      "Past Tense",
      "Past Tense is an AMV project that I created because I liked the anime and also the music.",
      "https://www.instagram.com/p/Cbt1XwCNpnQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      "AMV, March 2022"],

]

const PersonalProjects = () => {

  return (
    <div className="space-y-12 px-4 md:px-12 lg:px-24 py-8 ">

      <div className='md:mb-24'>
        <h1 className="text-4xl md:text-5xl font-bold text-center">
          Personal Projects
        </h1>
      </div>

      <div className="space-y-12">
        {PROJECTS.map((item, idx) => {
          return (
            <div
              key={idx}
              className="flex flex-col xl:flex-row xl:space-x-8 xl:items-start space-y-6 xl:space-y-0 intersect:motion-preset-slide-up-md"
            >
              <div className="flex-shrink-0 w-full xl:w-1/2">
                <Image
                  src={item[0]}
                  width={640}
                  height={360}
                  alt="Project Image"
                  className="rounded-lg"
                />
              </div>

              <div className="flex flex-col w-full xl:w-1/2">
                <h2 className="text-3xl md:text-2xl font-bold mb-1">{item[1]}</h2>
                <p className="text-xs text-left mb-5 text-[#737373]">
                  {item[4]}
                </p>
                <p className="text-sm md:text-base leading-relaxed text-justify mb-8">
                  {item[2]}
                </p>

                <div>
                  <a
                    href={item[3]}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <button className="bg-[#6944f0] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200">
                      View
                    </button>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalProjects;