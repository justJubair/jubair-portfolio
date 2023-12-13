import { FaReact } from "react-icons/fa";
import { SiBootstrap, SiCss3, SiExpress, SiFirebase, SiHtml5, SiJavascript, SiMongodb, SiNodedotjs, SiTailwindcss } from "react-icons/si";
import Container from "../Shared/Container";
const Skillset = () => {
  return (
    <div className="bg-[#050b1f]">
      <Container>
        {/* title */}
       
        <div className="pt-16">
          <h2 className="text-center text-white text-4xl font-medium">
            Professional{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]">
              Skillset
            </span>
          </h2>
        </div>
       

        {/* skill icons */}
        <div className="flex flex-wrap gap-6 lg:gap-5 max-w-sm  md:max-w-xl lg:max-w-3xl py-8 mx-auto">
          {/* React */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <FaReact className="text-white" size={65} />
          </div>
          {/* JavaScript */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiJavascript className="text-white" size={65} />
          </div>
          {/* TailwindCSS */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiTailwindcss className="text-white" size={65} />
          </div>
          {/* HTML */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiHtml5 className="text-white" size={65} />
          </div>
          {/* Firebase */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiFirebase className="text-white" size={65} />
          </div>
          {/* Express */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiExpress className="text-white" size={65} />
          </div>
          {/* Node */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiNodedotjs className="text-white" size={65} />
          </div>
          {/* MongoDB */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiMongodb className="text-white" size={65} />
          </div>
          {/* Bootstrap */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiBootstrap className="text-white" size={65} />
          </div>
          {/* CSS */}
          <div className="border w-44 flex justify-center p-6  border-[#617bce] duration-300 hover:scale-105 hover:border-2">
            <SiCss3 className="text-white" size={65} />
          </div>
        </div>
      </Container>
      {/* Title */}
    </div>
  );
};
export default Skillset;
