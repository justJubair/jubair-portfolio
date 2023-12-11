/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import projectImg1 from "../../assets/images/project1.png";
import projectImg2 from "../../assets/images/project2.png";
import projectImg3 from "../../assets/images/project3.png";

import Container from "../Shared/Container";

const Projects = () => {
  return (
    <div id="projects" className=" bg-[#050b1f] text-white text-center">
      <Container>
        {/* Title */}
        <div>
          <h2 className="text-center text-4xl font-medium pt-20">
            My Recent{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]">
              Works
            </span>
          </h2>
          <p className="text-lg my-2">
            Here are a few projects I've worked on recently
          </p>
        </div>

        {/* project container */}
        <div className="flex flex-col gap-6 my-12">
          {/* project one */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="flex item glass rounded-lg p-4"
          >
            
             
             <a target="_blank" href="https://survytics-client.web.app" rel="noreferrer"><img className="w-[2000px] opacity-75 duration-200 hover:opacity-100 hover:cursor-pointer" src={projectImg1} alt="project one" /></a>
           
            <div className="p-4">
              <h2 className="text-lg font-semibold border-b w-1/3 pb-1 mx-auto">Survytics</h2>
             <div className="px-4 my-4 text-gray-400">
             <p className="text-start">
                Implemented a user-friendly survey creation platform, allowing
                surveyors to effortlessly design surveys with yes/no questions. Developed a sophisticated analytics dashboard for surveyors,
                providing in-depth insights through charts and tables showcasing
                survey results. Incorporated interactive features such as
                liking and reporting surveys, enhancing user engagement and
                feedback collection.
              </p>
              <p className="text-start"><span className="font-bold">Developed with:</span> ReactJS, TailwindCSS,
                Firebase, Mongoose, Express, Node, JWT web token.</p>
             
             </div>
             
               <div className="flex justify-end gap-4">
               <a target="_blank" href="https://survytics-client.web.app" className="btn border-none text-black duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] hover:scale-105" rel="noreferrer">LIVE SITE</a>
               <a target="_blank" href="https://github.com/justJubair/survytics-client" className="btn btn-outline text-[#617bce] hover:bg-[#2d7e87]" rel="noreferrer">GITHUB</a>
               </div>
            </div>
          </div>
          {/* project one */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="card glass"
          >
            <figure>
              <img src={projectImg1} alt="project one" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
          {/* project one */}
          <div
            data-aos="fade-up"
            data-aos-duration="2000"
            className="card glass"
          >
            <figure>
              <img src={projectImg1} alt="project one" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Life hack</h2>
              <p>How to park your car at your garage?</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn now!</button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Projects;
