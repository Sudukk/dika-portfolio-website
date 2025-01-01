
"use client";
import React from 'react';
import Image from 'next/image';
import { AiFillGithub } from "react-icons/ai";
import { AiFillMail } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import Skeleton from 'react-loading-skeleton';


const hero_image = "/gambar_dika.jpg";

const IntroductionSkeleton = () => {
    return (
        <div className="flex flex-col xl:flex-row items-center xl:items-start xl:space-y-0 xl:space-x-12 animate-pulse xl:py-12">
    
          {/* Skeleton for Image */}
          <div className="flex-shrink-0 mb-12">
            <div className="rounded-full bg-gray-300 w-[300px] h-[300px] md:w-[400px] md:h-[400px]" />
          </div>
    
          <div className="flex flex-col space-y-8 w-full">
            {/* Skeleton for Text */}
            <div className="space-y-5 text-center md:text-left">
              <div className="h-8 bg-gray-300 rounded w-3/4 mx-auto md:mx-0"></div>
              <div className="h-6 bg-gray-300 rounded w-5/6 mx-auto md:mx-0"></div>
              <div className="h-6 bg-gray-300 rounded w-4/5 mx-auto md:mx-0"></div>
            </div>
    
            {/* Skeleton for Icons */}
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              <div className="bg-gray-300 rounded-full w-8 h-8"></div>
              <div className="bg-gray-300 rounded-full w-8 h-8"></div>
              <div className="bg-gray-300 rounded-full w-8 h-8"></div>
            </div>
          </div>
        </div>
      );
    }
export default IntroductionSkeleton;
