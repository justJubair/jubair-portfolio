/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import Container from "../Shared/Container";
import TypingAnimation from "./TypingAnimation";
import bannerAnime2 from "../../assets/animations/bannerAnime2.json";
import resume from "../../assets/JubairAhmedResume.pdf";
// icons
import { MdOutlineFileDownload } from "react-icons/md";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

// banner video
import bannerVideo from "../../assets/images/banner.mp4";

const Banner = () => {
  const handleDownloadResume = () => {
    // Specify the URL of the PDF file you want to download
    const pdfUrl = resume;

    // Create a link element
    const link = document.createElement("a");

    // Set the href attribute to the PDF file URL
    link.href = pdfUrl;

    // Set the download attribute to suggest the name for the downloaded file
    link.download = "Jubair Ahmed's Resume.pdf";

    // Append the link to the document
    document.body.appendChild(link);

    // Trigger a click event on the link to start the download
    link.click();

    // Remove the link from the document after the download
    document.body.removeChild(link);
  };

  return (
    <>
      <video
        className="h-screen object-cover w-full"
        src={bannerVideo}
        autoPlay
        loop
        muted
      />
      {/* overlay */}
      <div className="h-screen top-0 left-0 absolute bg-black/50 w-full"></div>
      <Container>
        {/* main container */}
        <div className="flex justify-center items-center">
          <div className="absolute top-1/4 md:top-0 flex flex-col-reverse md:flex-row items-center justify-center py-4 md:pt-28 lg:pt-12">
            {/* text content */}
            <div
              data-aos="fade-up"
              data-aos-duration="3000"
              className="relative space-y-4 w-72 md:w-[360px] lg:w-[450px]"
            >
              <h2 className="text-2xl md:text-3xl font-semibold text-white animate-bounce">
                Hi there!
              </h2>
              <h1 className="text-4xl lg:text-5xl font-bold text-white">
                I'm{" "}
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]
            "
                >
                  Jubair Ahmed
                </span>
              </h1>
              {/* typing animation */}
              <TypingAnimation />

              {/* download resume button */}
              <div className="absolute top-48 md:relative md:top-0">
                <button
                  onClick={handleDownloadResume}
                  className="btn duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] border-none text-white uppercase font-bold hover:scale-105"
                >
                  <MdOutlineFileDownload size={25} />
                  download resume
                </button>
              </div>

              {/* social icons */}
              <div className="hidden md:flex gap-4 text-gray-500  items-center">
                <a
                  className="hover:text-white"
                  target="_blank"
                  href="https://github.com/justJubair"
                  rel="noreferrer"
                >
                  {" "}
                  <FaGithub size={25} />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  href="https://www.linkedin.com/in/jubairdev"
                  rel="noreferrer"
                >
                  {" "}
                  <FaLinkedin size={25} />
                </a>
                <a
                  className="hover:text-white"
                  target="_blank"
                  href="https://www.instagram.com/jubairthedevdude"
                  rel="noreferrer"
                >
                  {" "}
                  <FaInstagram size={25} />
                </a>
              </div>
            </div>
            {/* image */}
            <div
              data-aos="fade-down"
              data-aos-duration="3000"
              className="hidden md:block md:w-[350px] lg:w-[480px] xl:w-[500px]"
            >
              <Lottie animationData={bannerAnime2} loop={true} />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
export default Banner;
