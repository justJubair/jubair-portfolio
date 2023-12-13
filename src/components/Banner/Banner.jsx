/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import Container from "../Shared/Container";
import TypingAnimation from "./TypingAnimation";
import bannerAnime2 from "../../assets/animations/bannerAnime2.json";
import { MdOutlineFileDownload } from "react-icons/md";
import resume from "../../assets/JubairAhmedResume.pdf";

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
    <div id="hero" className="min-h-screen w-full object-cover bg-no-repeat bg-banner-image">
      <Container>
        {/* main container */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center py-4 md:pt-28 lg:pt-12">
          {/* text content */}
          <div data-aos="fade-up" data-aos-duration="3000" className="space-y-4 w-80 md:w-[450px]">
            <h2 className="text-2xl md:text-3xl font-semibold text-white animate-bounce">
              Hi there!
            </h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white">
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
            <button
              onClick={handleDownloadResume}
              className=" btn duration-300 bg-gradient-to-r from-[#617bce] to-[#43aeba] border-none text-white font-bold hover:scale-105"
            >
              <MdOutlineFileDownload size={25}/>
              DOWNLOAD RESUME
            </button>
          </div>
          {/* image */}
          <div data-aos="fade-down" data-aos-duration="3000" className="w-72 md:w-80 lg:w-[500px]">
            <Lottie animationData={bannerAnime2} loop={true}/>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
