/* eslint-disable react/no-unescaped-entities */
import projectImg1 from "../../assets/images/project1.png";
import projectImg2 from "../../assets/images/project2.png";
import projectImg3 from "../../assets/images/project3.png";

import Container from "../Shared/Container";

const Projects = () => {
  return (
    <div id="projects" className="  text-white text-center">
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
        <div className="flex flex-col gap-6 pt-10">
          {/* project one */}
          <div data-aos="fade-up" className="flex flex-col lg:flex-row item glass rounded-lg p-4">
            <a
              target="_blank"
              href="https://survytics-client.web.app"
              rel="noreferrer"
            >
              <img
                className="w-[2000px] opacity-75 duration-200 hover:opacity-100 hover:cursor-pointer"
                src={projectImg1}
                alt="project one"
              />
            </a>

            <div className="p-4">
              <h2 className="text-lg font-semibold border-b w-1/3 pb-1 mx-auto">
                Survytics
              </h2>
              <div className="md:px-4 my-4 text-gray-400">
                <p className="text-start">
                  Implemented a user-friendly survey creation platform, allowing
                  surveyors to effortlessly design surveys with yes/no
                  questions. Developed a sophisticated analytics dashboard for
                  surveyors, providing in-depth insights through charts and
                  tables showcasing survey results. Incorporated interactive
                  features such as liking and reporting surveys, enhancing user
                  engagement and feedback collection.
                </p>
                <p className="text-start mt-1">
                  <span className="font-bold">Developed with:</span> ReactJS,
                  TailwindCSS, Firebase, Mongoose, Express, Node, JWT web token.
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <a
                  target="_blank"
                  href="https://survytics-client.web.app"
                  className="btn border-none text-black duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] hover:scale-105"
                  rel="noreferrer"
                >
                  LIVE SITE
                </a>
                <a
                  target="_blank"
                  href="https://github.com/justJubair/survytics-client"
                  className="btn btn-outline text-[#617bce] hover:bg-[#2d7e87]"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
          {/* project two */}
          <div data-aos="fade-up" className="flex flex-col lg:flex-row item glass rounded-lg p-4">
            <a
              target="_blank"
              href="https://worktales-client.web.app"
              rel="noreferrer"
            >
              <img
                className="w-[2000px] opacity-75 duration-200 hover:opacity-100 hover:cursor-pointer"
                src={projectImg2}
                alt="project one"
              />
            </a>

            <div className="p-4">
              <h2 className="text-lg font-semibold border-b w-1/3 pb-1 mx-auto">
                Worktales
              </h2>
              <div className="md:px-4 my-4 text-gray-400">
                <p className="text-start">
                  Engineered a comprehensive job marketplace allowing users to
                  seamlessly list, update, and delete their posted jobs.
                  Implemented a bidirectional bidding system, enabling users to
                  bid on listed jobs and job listers to review and accept or
                  reject bids. Developed a bidding table where bidders can track
                  and manage their bids, including the status of each bid
                  (accepted or rejected) by the job lister.
                </p>
                <p className="text-start mt-1">
                  <span className="font-bold">Developed with:</span> ReactJS,
                  Firebase, Express, TailwindCSS, NodeJS, JWT web token, MongoDB
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <a
                  target="_blank"
                  href="https://worktales-client.web.app"
                  className="btn border-none text-black duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] hover:scale-105"
                  rel="noreferrer"
                >
                  LIVE SITE
                </a>
                <a
                  target="_blank"
                  href="https://github.com/justJubair/worktales-client"
                  className="btn btn-outline text-[#617bce] hover:bg-[#2d7e87]"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
          {/* project three */}
          <div data-aos="fade-up" className="flex flex-col lg:flex-row item glass rounded-lg p-4">
            <a
              target="_blank"
              href="https://movie-mania-peach.vercel.app"
              rel="noreferrer"
            >
              <img
                className="w-[2700px] opacity-75 duration-200 hover:opacity-100 hover:cursor-pointer"
                src={projectImg3}
                alt="project one"
              />
            </a>

            <div className="p-4">
              <h2 className="text-lg font-semibold border-b w-1/3 pb-1 mx-auto">
                Movie Mania
              </h2>
              <div className="md:px-4 my-4 text-gray-400">
                <p className="text-start">
                  Developed and designed a visually appealing Netflix-inspired
                  website utilizing modern front-end technologies. Integrated
                  The Movie Database (TMDb) API to dynamically fetch and display
                  up-to-date movie information, ensuring a rich and diverse
                  content library. Implemented user authentication system using
                  Firebase Auth to provide secure login functionality for users.
                  Designed and implemented a personalized user experience
                  allowing users to mark movies as liked, with a dedicated "My
                  Shows" section showcasing their preferences.
                </p>
                <p className="text-start">
                  <span className="font-bold">Developed with:</span> ReactJS,
                  TailwindCSS, Firebase, Firestore
                </p>
              </div>

              <div className="flex justify-end gap-4">
                <a
                  target="_blank"
                  href="https://movie-mania-peach.vercel.app"
                  className="btn border-none text-black duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] hover:scale-105"
                  rel="noreferrer"
                >
                  LIVE SITE
                </a>
                <a
                  target="_blank"
                  href="https://github.com/justJubair/movie-mania"
                  className="btn btn-outline text-[#617bce] hover:bg-[#2d7e87]"
                  rel="noreferrer"
                >
                  GITHUB
                </a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Projects;
