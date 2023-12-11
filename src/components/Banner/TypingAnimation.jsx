import { TypeAnimation } from "react-type-animation";

const TypingAnimation = () => {
    return(
       <div>
         <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          'Fron End Developer',
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          'React Developer',
          1000,
          'Open Source Contributor',
          1000,
          'MERN Stack Developer',
          1000
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block', color: "#43aeba", fontWeight:"600" }}
        repeat={Infinity}
      />
       </div>
    )}
export default TypingAnimation;