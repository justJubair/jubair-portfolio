import { animateScroll as scroll } from "react-scroll";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

const ScrollToTop = () => {
  const scrollToTop = () => {
    scroll.scrollToTop();
  };
  return (
    <div className="flex justify-end">
      <button className="fixed bottom-7 opacity-25 duration-300 right-8 hover:opacity-100" onClick={scrollToTop}>
        <MdKeyboardDoubleArrowUp
          className=" text-white rounded-lg bg-gradient-to-l from-[#111b3c] to-[#006e7b]"
          size={50}
        />
      </button>
    </div>
  );
};
export default ScrollToTop;
