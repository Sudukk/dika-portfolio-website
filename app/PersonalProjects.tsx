import React from 'react'
import Image from 'next/image'


const PROJECTS = [
    ["/personal_projects_thumbnail/p1.png","Judul1","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","LINK"],
    ["/personal_projects_thumbnail/p1.png","Judul2","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","LINK"],
    ["/personal_projects_thumbnail/p1.png","Judul3","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","LINK"],
    ["/personal_projects_thumbnail/p1.png","Judul4","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","LINK"],
    ["/personal_projects_thumbnail/p1.png","Judul5","Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex laudantium eos, numquam ullam necessitatibus aspernatur, maxime sequi blanditiis sunt, vitae nostrum! Hic reprehenderit quasi saepe placeat, et recusandae! Corporis tempore mollitia deleniti excepturi dignissimos aperiam tempora vitae, illum aspernatur eaque nostrum quisquam vel necessitatibus accusamus quasi exercitationem molestias hic dolor doloribus! Provident totam aut non iure, sit suscipit veniam, officia aperiam sunt nesciunt exercitationem laudantium optio nisi fuga hic, placeat cumque accusantium voluptatem aspernatur inventore repudiandae. At nulla eveniet ducimus cumque autem ipsa sapiente maxime, harum totam quis, in ea veritatis culpa doloribus sed non explicabo minima tenetur facilis illum.","LINK"],

]

const PersonalProjects = () => {
    return (
      <div className="space-y-12 px-4 md:px-12 lg:px-24 py-8">

        <div>
          <h1 className="text-4xl md:text-5xl font-bold text-center">
            Personal Projects
          </h1>
        </div>
  

        <div className="space-y-12">
          {PROJECTS.map((item, idx) => {
            return (
              <div
                key={idx}
                className="flex flex-col md:flex-row md:space-x-8 md:items-center space-y-6 md:space-y-0"
              >

                <div className="flex-shrink-0">
                  <Image
                    src={item[0]}
                    width={720}
                    height={480}
                    alt="Project Image"
                    className="rounded-lg"
                  />
                </div>
  
                {/* Project Details */}
                <div className="flex flex-col space-y-4">
                  <h1 className="text-3xl md:text-4xl font-bold">{item[1]}</h1>
                  <p className="text-sm md:text-base leading-relaxed">
                    {item[2]}
                  </p>
  
                  <div>
                    <a
                      href="https://www.youtube.com"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <button className="bg-[#6a498f] text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition duration-200">
                        {item[3]}
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
  