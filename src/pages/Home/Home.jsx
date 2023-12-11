import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { animateScroll as scroll} from 'react-scroll';
const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);

    //   const handleUp=()=>{
    //     const scrollToTop = () => {
    //         scroll.scrollToTop();
    //       };
    //   }
    return(
        <div >
            <Navbar/>
           <Banner/>
           <Projects/>
           <button onClick={()=> scroll()}>up</button>
        </div>
    )}
export default Home;