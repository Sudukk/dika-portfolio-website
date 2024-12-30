import React from 'react';

const CLIENT_REVIEWS = [
  ['Client 1', '5 Stars', 'Wow he is so good!'],
  ['Client 2', '5 Stars', 'Wow he is so good!'],
  ['Client 3', '5 Stars', 'Wow he is so good!'],
  ['Client 4', '5 Stars', 'Wow he is so good!'],
];

const WorkExperience = () => {
  return (
    <div className="flex-col space-y-12">
      {/* Title */}
      <div>
        <h1 className="text-5xl font-bold text-center">Work Experience</h1>
      </div>

      {/* Main Content */}
      <div className="flex flex-col md:flex-row justify-between m-2 space-y-12 md:space-y-0 md:space-x-12">
        {/* Left Column (Client Reviews in Grid) */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CLIENT_REVIEWS.map((item, idx) => (
              <div key={idx} className="flex flex-col p-4 bg-[#412653] rounded-lg shadow-md">
                <h2 className="font-bold text-lg">{item[0]}</h2>
                <p className="text-xs">{item[1]}</p>
                <p>{item[2]}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column (Fiverr Experience) */}
        <div className="flex-1">
          <div className="flex flex-col">
            <h2 className="font-bold text-2xl">Fiverr Video Editor Freelancer</h2>
            <p className="text-xs">2022 - Now</p>
            <p className='mt-5'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam enim commodi aliquid temporibus, sequi reiciendis quisquam velit eligendi. Quam nisi dolor modi natus itaque optio nostrum iusto, aliquam facilis ex fuga. Nemo quaerat consectetur distinctio cum in, autem asperiores molestias, consequatur repellendus animi quas quisquam voluptatibus aliquid mollitia quibusdam suscipit iste rerum. Fugit odit dolores inventore ad eligendi quo explicabo dolorem, veritatis rerum. Alias dicta magnam, commodi corporis error nulla nemo dolor iusto quibusdam cum blanditiis amet incidunt libero omnis consequatur, pariatur explicabo. Dolor velit modi praesentium dignissimos voluptatem! Similique odit praesentium, nobis consequatur fuga vitae cumque vel voluptates atque!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkExperience;
