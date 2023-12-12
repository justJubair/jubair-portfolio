/* eslint-disable react/no-unescaped-entities */
import AltNavbar from "../../components/Navbar/AltNavbar";
import profile1 from "../../assets/images/profile1.jpeg";
import Skillset from "../../components/Skillset/Skillset";

const About = () => {
    return(
        <div>
            {/* navbar */}
            <AltNavbar/>
            {/* banner */}
            <div className="h-screen object-cover w-full bg-no-repeat bg-about-image">
                {/* overlay */}
                <div className="h-screen bg-blend-overlay bg-gradient-to-l from-[#111b3c]/30 to-[#006e7b]/30 w-full"></div>
                {/* main container */}
                <div className="absolute top-14 md:top-32 lg:top-1/4 flex flex-col-reverse md:flex-row items-center gap-4 lg:gap-7  justify-center w-full px-4 md:items-start">
                {/* text content */}
                <div className=" text-white  lg:w-1/2">
                    {/* title */}
                    <h1 className="text-2xl lg:text-3xl text-center">Know <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]">Who</span> I'M</h1>
                    {/* desc */}
                    <div className="bg-gradient-to-r from-[#08153e]/70 to-[#0e1248]/30 p-4 text-sm lg:text-lg space-y-4 rounded-md text-gray-300 mt-4">
                    <p> 👋 Hello there! I'm Jubair Ahmed, a passionate front end web developer based in  Dhaka, Bangladesh.</p>
                    <p className="hidden md:block"> 💡 What I bring to the table: Responsive Design: Crafted to look amazing on any device, ensuring a consistent and enjoyable user experience. </p>
                    <p className="hidden md:block"> Cutting-edge Technologies: Proficient in HTML, CSS, JavaScript, and the latest front-end frameworks to bring your vision to life.</p>
                    </div>
                </div>

                {/* profile image */}
                    <img className="w-72 lg:w-96 rounded-md opacity-75" src={profile1} alt="profile" />

                </div>
            </div>
            <Skillset/>
        </div>
    )}
export default About;