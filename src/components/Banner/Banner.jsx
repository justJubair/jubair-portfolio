import Container from "../Shared/Container";
import TypingAnimation from "./TypingAnimation";

const Banner = () => {
  return (
    <div className="min-h-screen w-full object-cover bg-banner-image">
      <Container>
        {/* main container */}
        <div className="pt-60">
          {/* text content */}
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-white">Hi there!</h2>
            <h1 className="text-5xl font-bold text-white">I'm <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]
            ">Jubair Ahmed</span></h1>
            {/* typing animation */}
            <TypingAnimation/>
            
          </div>
          {/* image */}
          <div></div>
        </div>
      </Container>
    </div>
  );
};
export default Banner;
