import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return(
        <div className="flex items-center text-gray-400 bg-[#0a1025] py-4 px-8 justify-between ">
            <div>

            <p>Designed and Developed by Jubair Ahmed</p>
            <p>Copyright &copy; 2023 JA</p>
            </div>
            <div className="flex items-center gap-4">
            <FaGithub size={25}/>
            <FaLinkedin size={25}/>
            <FaInstagram size={25}/>
            </div>
        </div>
    )}
export default Footer;