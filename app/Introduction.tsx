"use client";
import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const hero_image = "/gambar_dika.jpg";

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start md:space-y-0 md:space-x-12 intersect:motion-preset-fade md:py-12">

      <div className="flex-shrink-0 mb-12 md:mb-0">
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
          <h1 className="text-4xl md:text-7xl font-bold mb-8">
            Hi, I&apos;m Wikandika Setya Nugroho
          </h1>
          <p className='text-justify'>
          I am a student at Institut Teknologi Sepuluh Nopember majoring in Information Systems. Who have a track record of success in various competitions and strong organizational skills. Demonstrate abilities in creativity, problem solving, and social skills,
          honed through active participation in events and competitions. I am currently learning about <strong>machine learning, generative AI, game development, and web development</strong> to further advance my skillset. I also have a few hobbies that contribute to my creative skills such as <strong>video editing and motion graphic design</strong>. I am Eager to utilize these skills to contribute effectively to projects, collaborate with peers, and also continue to pursue academic and non-academic achievements as well as pursue a future career.          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-6">
          
          <a href='https://github.com/Sudukk'>
              <AiFillGithub className='size-8'/>
          </a>
          <a href='https://mail.google.com/mail/u/0/?fs=1&to=wikandika1234@gmail.com&su=SUBJECT&body=BODY&tf=cm'>
              <AiFillMail className='size-8'/>
          </a>
          <a href='https://www.instagram.com/dika.kurus/'>
              <AiFillInstagram className='size-8'/>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Introduction;
