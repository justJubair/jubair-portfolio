/* eslint-disable react/no-unescaped-entities */
import AltNavbar from "../../components/Navbar/AltNavbar";
import Skillset from "../../components/Skillset/Skillset";
import { MdEmail } from "react-icons/md";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub, FaInstagram } from "react-icons/fa";
// about image
import aboutImg from "../../assets/images/banner.jpg";

const About = () => {
  return (
    <div>
      {/* navbar */}
      <AltNavbar />
      {/* banner */}
      <img
        className="h-screen w-full object-cover bg-no-repeat"
        src={aboutImg}
        alt="about-banner"
      />
      {/* overlay */}
      <div className="h-screen absolute top-0 left-0 bg-black/40 w-full"></div>
      {/* main container */}
      <div className="flex justify-center items-center">
        <div className="absolute top-1/4 flex flex-col-reverse md:flex-row items-center gap-4 lg:gap-7  justify-center w-full px-4 md:items-start">
          {/* text content */}
          <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className=" text-white  lg:w-1/2"
          >
            {/* title */}
            <h1 className="text-2xl lg:text-4xl text-center">
              Know{" "}
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]">
                Who
              </span>{" "}
              I'M
            </h1>
            {/* desc */}
            <div className="bg-gradient-to-r from-[#08153e]/70 to-[#0e1248]/30 p-4 text-sm lg:text-lg space-y-4 rounded-md text-gray-300 mt-4">
              <p>
                {" "}
                👋 Hello there! I'm Jubair Ahmed, a passionate front end web
                developer based in Dhaka, Bangladesh.
              </p>
              <p className="hidden md:block">
                {" "}
                💡 What I bring to the table: Responsive Design: Crafted to look
                amazing on any device, ensuring a consistent and enjoyable user
                experience.
              </p>
              <a
                href="mailto:jubair.ahmed2838@gmail.com"
                className="hidden md:flex items-center gap-2"
              >
                {" "}
                <MdEmail size={25} /> jubair.ahmed2838@gmail.com
              </a>
              <div className="hidden md:flex items-center gap-3">
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/jubairdev"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedin size={25} />
                </a>
                <a
                  target="_blank"
                  href="https://github.com/justJubair"
                  rel="noreferrer"
                >
                  {" "}
                  <FaGithub size={25} />
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/jubairthedevdude"
                  rel="noreferrer"
                >
                  {" "}
                  <FaInstagram size={25} />
                </a>
              </div>
            </div>
          </div>

          {/* video resume */}
          <div data-aos="fade-up" data-aos-duration="1500">
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/hV93s5Av6Go?si=-c-T-PZRvBTWW52d"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* skils */}
      <Skillset />

      {/* The days I code */}
      {/* title */}
      <div className="pt-8 bg-[#050b1f]">
        <h2 className="animate-pulse text-center text-white text-4xl font-medium">
          The days I{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]">
            Code
          </span>
        </h2>
      </div>
      <div className="pt-6 pb-16 flex justify-center bg-[#050b1f] px-4">
        <img
          className="bg-[#050b1f]"
          src="https://github-readme-streak-stats.herokuapp.com?user=justJubair&theme=tokyonight-duo"
          alt="GitHub Streak"
        />
      </div>
    </div>
  );
};
export default About;
