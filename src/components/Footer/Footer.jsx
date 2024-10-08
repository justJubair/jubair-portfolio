import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex items-center text-gray-400 bg-[#0a1025] py-4 px-8 justify-between ">
      <div>
        <p>Designed and Developed by Jubair Ahmed</p>
        <p>Copyright &copy; 2023 JA</p>
      </div>
      <div className="flex items-center gap-4">
        <a
          className="hover:text-white"
          target="_blank"
          href="https://github.com/justJubair"
          rel="noreferrer"
        >
          {" "}
          <FaGithub size={25} />
        </a>
        <a
          className="hover:text-white"
          target="_blank"
          href="https://www.linkedin.com/in/jubairdev"
          rel="noreferrer"
        >
          {" "}
          <FaLinkedin size={25} />
        </a>
        <a
          className="hover:text-white"
          target="_blank"
          href="https://www.instagram.com/jubairthedevdude"
          rel="noreferrer"
        >
          {" "}
          <FaInstagram size={25} />
        </a>
      </div>
    </div>
  );
};
export default Footer;
