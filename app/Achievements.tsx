import React from 'react'

const ACHIVEMENTS_EXPOSURE_LIST = [
    ["BIONIX Competition on Information Systems Expo", "2023", "National", "2nd", "Diselenggarakan oleh Institit Teknologi Sepuluh Nopember pada November 2023"],
    ["Asia University Artificial Intelligence Summercamp", "2023", "International", "       ", "Diselenggarakan oleh Asia University, Taiwan pada Agustus 2023 selama 2 minggu"],
    ["AMIKOM Video Competition: Mimpi dan Masa Depan", "2022", "National", "2nd", "Diselenggarakan oleh Universitas Amikom Yogyakarta 2022."],
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
              <div key={idx} className="flex flex-row items-start md:justify-items-center mx-auto w-full md:max-w-4xl space-x-3 mb-5 px-24">
                <div className="flex-shrink-0 mb-2 md:mb-0">
                  <h2 className="font-bold text-2xl text-left">{item[3]}</h2>
                </div>
                <hr className="block h-8 w-0.5 rounded-md bg-[#ffffff21] border-0" />
                <div className="flex-grow">
                  <h2 className="text-lg text-left">{item[0]}</h2>
                  <p className="text-xs text-left mb-3 text-[#737373]">
                    {item[1]} {item[2]}
                  </p>
                  <p className="text-sm text-left">{item[4]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
  };
  
export default Achievements;
  