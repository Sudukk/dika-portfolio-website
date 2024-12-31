"use client"
import React, { useState } from 'react';

const CLIENT_REVIEWS = [
  ['solisrouge', '5 Stars', 'WOW!!! So good!!! I had a specific request and a very tight timeline -- they worked with it all!! Awesome, blown out of the water with their fast work and efficient process! Quality overall is great! Order with confidence. Thanks again!'],
  ['elaravtuber', '5 Stars', 'Always my go-to when it comes to promotional videos! Really easy to work with and quick to respond to any changes or revisions you need!'],
  ['azurathedragon', '5 Stars', 'The project I had was little more than an inkling of what i was wanting / needing, but after a talk with them they came up with the first video only a couple days after, they had a good creative direction with it but with a quick revision on some key details they produced a wonderful teaser for my new model debut! Highly recommended.'],
  ['jearldster', '5 Stars', 'Incredible service and speed. Made any revisions as requested and delivered well before the deadline. 100% recommend.'],
];

const WorkExperience = () => {
  const [expanded, setExpanded] = useState(Array(CLIENT_REVIEWS.length).fill(false));

  const toggleShowMore = (index: number) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  const truncateText = (text: string, isExpanded: boolean) => {
    const maxLength = 100;
    if (isExpanded || text.length <= maxLength) {
      return text;
    }
    return text.slice(0, maxLength) + '...';
  };

  return (
    <div className="flex-col space-y-12 md:mb-40">
      {/* Header */}
      <div className="md:mb-24">
        <h1 className="text-5xl font-bold text-center">Work Experience</h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between m-2 space-y-12 md:space-y-0 md:space-x-12">
        {/* Left Section */}
        <div className="flex-1">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl intersect:motion-preset-slide-left-sm">Fiverr Video Editor Freelancer</h2>
            <p className="text-xs intersect:motion-preset-slide-left-sm motion-delay-100">2022 - Now</p>
            <p className="mt-5 intersect:motion-preset-slide-left-sm motion-delay-200 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim commodi aliquid temporibus, sequi reiciendis quisquam velit eligendi. Quam nisi dolor modi natus itaque optio nostrum iusto, aliquam facilis ex fuga. Nemo quaerat consectetur distinctio cum in, autem asperiores molestias, consequatur repellendus animi quas quisquam voluptatibus aliquid mollitia quibusdam suscipit iste rerum. Fugit odit dolores inventore ad eligendi quo explicabo dolorem, veritatis rerum. Alias dicta magnam, commodi corporis error nulla nemo dolor iusto quibusdam cum blanditiis amet incidunt libero omnis consequatur, pariatur explicabo. Dolor velit modi praesentium dignissimos voluptatem! Similique odit praesentium, nobis consequatur fuga vitae cumque vel voluptates atque!
            </p>
            <a href='https://www.fiverr.com/suduk_?up_rollout=true' className='mt-10 intersect:motion-preset-slide-left-md'>
              <button className="bg-[#6a498f] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200">
                View Fiverr Profile 
              </button>
            </a>
            
          </div>
        </div>

        {/* Right Section: Client Testimonials */}
        <div className="flex-1">
          <div className="mb-5">
            <h2 className="font-bold text-2xl intersect:motion-preset-slide-left-sm">Client Testimonials</h2>
          </div>
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {CLIENT_REVIEWS.map((item, idx) => (
                <div key={idx} className="flex flex-col p-5 border-[#ffffff21] border rounded-lg shadow-md intersect:motion-blur-in-sm motion-delay-75 intersect:motion-preset-expand">
                  <h2 className="font-bold text-lg">{item[0]}</h2>
                  <p className="text-xs">{item[1]}</p>
                  <hr className="w-full h-0.5 mx-auto mt-3 bg-[#ffffff21] border-0"></hr>
                  <p className="mt-5 text-justify">
                    {truncateText(item[2], expanded[idx])}
                  </p>
                  {item[2].length > 100 && (
                    <button
                      className="mt-3 text-xs text-[#ffffff7e] hover:underline px-6 py-2"
                      onClick={() => toggleShowMore(idx)}
                    >
                      {expanded[idx] ? 'Show Less' : 'Show More'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
