import Navbar from './Components/Navbar';
import Introduction from './Components/Introduction';
import Footer from './Components/Footer';
import Experience from './Components/Experience';
import Skills from './Components/Skills';
import Language from './Components/Language';
import PersonalProjects from './Components/PersonalProjects';
import WorkExperience from './Components/WorkExperience';
import ObserverProvider from './Components/ObserverProvide';
import Achievements from './Components/Achievements';
import Youtube from './Components/Youtube';

export const experimental_ppr = true;

const Homepage = () => {
  
  return (
    <>
      <Navbar />
      <ObserverProvider>
        <div id="home" className="my-36 mx-12 md:mx-40">
            <Introduction />
          
          <hr
            id="about_me"
            className="w-4/5 h-0.5 mx-auto mt-40 mb-24 rounded-lg bg-[#ffffff21] border-0"
          />
          <h1 className="text-5xl font-bold text-center mb-24">About Me</h1>
          <div className="xl:flex justify-center m-5">
              <Experience />
              <Skills />
              <Language />   
            </div>
          <hr
            id="achievements"
            className="w-4/5 h-0.5 mx-auto mt-40 mb-12 rounded-lg bg-[#ffffff21] border-0"
          />
            <Achievements />
          <hr
            id="personal_projects"
            className="w-4/5 h-0.5 mx-auto mt-40 mb-12 rounded-lg bg-[#ffffff21] border-0"
          />
            <PersonalProjects />
          <hr
            id="youtube"
            className="w-4/5 h-0.5 mx-auto mt-40 mb-12 rounded-lg bg-[#ffffff21] border-0"
          />
          <Youtube />
          <hr
            id="work_experience"
            className="w-4/5 h-0.5 mx-auto mb-12 rounded-lg bg-[#ffffff21] border-0"
          />
          <WorkExperience />
          <Footer />
        </div>
      </ObserverProvider>
    </>
  );
};

export default Homepage;
