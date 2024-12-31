"use client";
import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const hero_image = "/gambar_dika.jpg";
const INFO = [
  "Surabaya, Indonesia",
  "wikandika1234@gmail.com",
  "+62 89529619028",
];

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 py-12 intersect:motion-preset-fade">

      <div className="flex-shrink-0">
        <Image
          src={hero_image}
          width={500}
          height={500}
          alt="Wikandika Setya Nugroho"
          className="rounded-full w-[300px] h-[300px] md:w-[400px] md:h-[400px] object-cover"
        />
      </div>


      <div className="flex flex-col space-y-8">
        <div className="space-y-5 text-center md:text-left">
          <h1 className="text-4xl md:text-7xl font-bold">
            Hi, I'm Wikandika Setya Nugroho
          </h1>
          <p className='text-justify'>
          I am a student at Institut Teknologi Sepuluh Nopember majoring in Information Systems. Who have a track record of success in various competitions and strong organizational skills. Demonstrate abilities in creativity, problem solving, and social skills,
          honed through active participation in events and competitions. I am currently learning about machine learning, generative AI, game development, and web development to further advance my skillset. I also have a few hobbies that contribute to my creative skills such as video editing and motion graphic design. I am Eager to utilize these skills to contribute effectively to projects, collaborate with peers, and also continue to pursue academic and non-academic achievements as well as pursue a future career.          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          
          <a href='https://www.github.com'>
              <AiFillGithub className='size-8'/>
          </a>
          <a href='https://www.gmail.com'>
              <AiFillMail className='size-8'/>
          </a>
          <a href='https://www.instagram.com'>
              <AiFillInstagram className='size-8'/>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Introduction;
