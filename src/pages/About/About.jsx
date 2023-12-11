import AltNavbar from "../../components/Navbar/AltNavbar";

const About = () => {
    return(
        <div>
            <AltNavbar/>
            <div className="h-screen object-cover w-full bg-no-repeat bg-about-image">
                {/* overlay */}
                <div className="h-screen bg-blend-overlay bg-gradient-to-l from-[#111b3c]/30 to-[#006e7b]/30 w-full"></div>
                {/* text content */}
                <div className="absolute top-20 text-white">
                    <h1>Who AM I?</h1>
                </div>
            </div>
        </div>
    )}
export default About;