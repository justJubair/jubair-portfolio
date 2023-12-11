/* eslint-disable react/no-unescaped-entities */
import Lottie from "lottie-react";
import Container from "../Shared/Container";
import TypingAnimation from "./TypingAnimation";
import bannerAnime2 from "../../assets/bannerAnime2.json"

const Banner = () => {
  return (
    <div className="min-h-screen w-full object-cover bg-no-repeat bg-banner-image">
      <Container>
        {/* main container */}
        <div className="flex flex-col-reverse md:flex-row items-center justify-center py-4 md:pt-28 lg:pt-12">

          {/* text content */}
          <div className="space-y-4 w-80 md:w-[450px]">
            <h2 className="text-2xl md:text-3xl font-semibold text-white">Hi there!</h2>
            <h1 className="text-4xl md:text-5xl font-bold text-white">I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]
            ">Jubair Ahmed</span></h1>
            {/* typing animation */}
            <TypingAnimation/>
            
          </div>
          {/* image */}
          <div className="w-72 md:w-80 lg:w-[550px]">
            <Lottie animationData={bannerAnime2}/>
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
