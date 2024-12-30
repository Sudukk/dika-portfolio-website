"use client";
import React from 'react';
import Image from 'next/image';

const hero_image = "/tengkorak.jpg";
const INFO = [
  "Surabaya, Indonesia",
  "wikandika1234@gmail.com",
  "+62 89529619028",
];

const Introduction = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-10 md:space-y-0 md:space-x-12 py-12">

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
          <h1 className="text-4xl md:text-5xl font-bold">
            Hi, I'm Wikandika Setya Nugroho
          </h1>
          <p >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque, aliquid impedit? Deleniti deserunt, iure sint ut repudiandae exercitationem ab quasi itaque commodi necessitatibus unde reprehenderit voluptates nisi accusantium quis at, ullam consectetur, fugiat accusamus iste magni provident. Eum id recusandae laboriosam nihil nesciunt quasi tempore animi dolor perspiciatis facilis nisi, iste exercitationem accusamus est minus eos, ut facere ipsam? Eveniet consequuntur, magnam neque perspiciatis ipsa quisquam harum culpa dolores! Dolorum nemo minima, labore rerum inventore sunt nesciunt aut ipsa, nobis molestiae nostrum. Aut alias soluta error saepe tempore! Obcaecati consequatur assumenda corporis nulla ex maiores voluptate dolores eius quidem nemo?
          </p>
        </div>

        <div className="flex flex-wrap justify-center md:justify-start gap-4">
          {INFO.map((item, idx) => (
            <p
              key={idx}
              className="bg-purple-500 text-white px-5 py-2 rounded-lg shadow-md"
            >
              {item}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Introduction;
