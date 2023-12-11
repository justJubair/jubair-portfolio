import { useEffect } from "react";
import Banner from "../../components/Banner/Banner";
import Navbar from "../../components/Navbar/Navbar";
import Projects from "../../components/Projects/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    return(
        <div >
            <Navbar/>
           <Banner/>
           <Projects/>
        </div>
    )}
export default Home;