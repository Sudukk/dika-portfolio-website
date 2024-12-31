import React from 'react'

const ACHIVEMENTS_EXPOSURE_LIST = [
    ["BIONIX Competition on Information Systems Expo", "Institit Teknologi Sepuluh Nopember, 2023.", "National", "2nd"],
    ["Artificial Intelligence Summercamp", "Asia University, Taiwan, 2023.", "International", "       "],
    ["AMIKOM Video Competition: Mimpi dan Masa Depan", "Amikom University Yogyakarta, 2022.", "National", "2nd"],
]


const Achievements = () => {
    return (
      <>
        <div className="flex flex-col space-y-12 px-4 sm:px-6 md:px-12 lg:px-24 py-8 ">
          <div className="md:mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-center">Achievements & Exposure</h1>
          </div>
  
          <div className="flex flex-col space-y-6">
            {ACHIVEMENTS_EXPOSURE_LIST.map((item, idx) => (
              <div key={idx} className="flex flex-row items-start md:justify-items-center mx-auto w-full md:max-w-4xl space-x-3 xl:px-48">
                <div className="flex-shrink-0 mb-2 md:mb-0">
                  <h2 className="font-bold text-2xl text-left intersect:motion-preset-slide-right-md">{item[3]}</h2>
                </div>
                <hr className="block h-8 w-0.5 rounded-md bg-[#ffffff21] border-0" />
                <div className="flex-grow">
                  <h2 className="text-lg text-left intersect:motion-preset-slide-left-md">{item[0]}</h2>
                  <p className="text-xs text-left  text-[#737373] intersect:motion-preset-slide-left-sm motion-delay-75">
                    {item[1]} {item[2]}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
export default Achievements;
  