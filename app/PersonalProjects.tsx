import React from 'react'
import Image from 'next/image'


const PROJECTS = [
    ["/personal_projects_thumbnail/mathdestroyer_playstore.png","Math Destroyer","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","https://play.google.com/apps/internaltest/4701422300825493735"],
    ["/personal_projects_thumbnail/manu_more_stuff_thumb.png","Many More Stuff","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","https://www.curseforge.com/minecraft/mc-mods/many-more-stuff"],
    ["/personal_projects_thumbnail/angst.png","Angst","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","https://www.instagram.com/p/CQMuVmbJpSy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="],
    ["/personal_projects_thumbnail/outofmymood.png","Out of My Mood","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","https://www.instagram.com/p/CiuLE-hs6CX/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="],
    ["/personal_projects_thumbnail/pasttense.png","Past Tense","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","https://www.instagram.com/p/Cbt1XwCNpnQ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="],

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
                className="flex flex-col md:flex-row md:space-x-8 md:items-center space-y-6 md:space-y-0 intersect:motion-preset-slide-up"
              >

                <div className="flex-shrink-0">
                  <Image
                    src={item[0]}
                    width={640}
                    height={360}
                    alt="Project Image"
                    className="rounded-lg"
                  />
                </div>
  
                <div className="flex flex-col space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{item[1]}</h1>
                  <p className="text-sm md:text-base leading-relaxed text-justify">
                    {item[2]}
                  </p>
  
                  <div>
                    <a
                      href={item[3]}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="bg-[#6a498f] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200">
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
  