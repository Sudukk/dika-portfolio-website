import React from 'react';
import Image from 'next/image';
import SubCount from './SubCount';

const Youtube = () => {
  const yt_key = process.env.YT_API_KEY || '';
  const yt_channel_id = process.env.YT_CHANNEL_ID || '';

  const yt_image = '/yt_profile.jpg';

  return (
    <div className="flex flex-col items-center intersect:motion-preset-fade xl:py-0 px-4 xl:px-36">
      <div className="m-10 text-center">
        <a href="https://youtube.com/@suduk6049">
          <h1 className="text-5xl font-bold">My Youtube</h1>
        </a>
      </div>
      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between p-5">

        <div className="flex flex-col items-center md:mb-0 p-5 shrink-0">
          <Image
            src={yt_image}
            width={500}
            height={500}
            alt="Wikandika Setya Nugroho"
            className="rounded-full w-[150px] h-[150px] md:w-[200px] md:h-[200px] object-cover mb-5"
          />
          <SubCount apiKey={yt_key} channelId={yt_channel_id} />
        </div>

        <div className="p-5 text-center md:text-left">
          <h2 className="text-3xl md:text-2xl font-bold mb-2 intersect:motion-preset-slide-left-md">
            Suduk
          </h2>
          <p className="text-justify md:text-left intersect:motion-preset-slide-left-md motion-delay-100">
            This is my YouTube channel, where I used to create AMVs and share them with others. 
            I also posted a few tutorials about video editing.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Youtube;
