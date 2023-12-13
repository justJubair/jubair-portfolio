import Container from "../Shared/Container";
import contactAnime from "../../assets/animations/contactAnime.json";
import { BsSend } from "react-icons/bs";
import Lottie from "lottie-react";
import axios from "axios";
import toast from "react-hot-toast";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  const handleContact = async (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const subject = form.subject.value;
    const messageText = form.message.value;
    const message = { messageText, subject };
    try {
      const res = await axios.post(
        `https://formspree.io/${import.meta.env.VITE_FORM_ENDPOINT}`,
        {
          name,
          email,
          subject,
          message,
        }
      );
      if (res?.data?.ok) {
        toast.success("Message sent successfully");
        form.reset();
      }
    } catch (err) {
      console.log("Error submitting form", err);
    }
  };
  return (
    <Container>
      <div id="contact" className="py-20 text-white">
        {/* title */}
       
        <div>
          <h2 className="animate-pulse text-center text-4xl font-medium ">
            Contact{" "}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#617bce] to-[#43aeba]">
              Me
            </span>
          </h2>
          <p className="text-center text-lg my-2">
            Let's get in touch, and build great projects
          </p>
        </div>
        
        {/* form */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-center pt-8">
          {/* animations */}
          <div data-aos="fade-up" data-aos-duration="1500">
            <Lottie className="w-80" animationData={contactAnime} />
            {/* social icons */}
            <div className="flex gap-5 justify-center items-center">

            <a target="_blank" href="https://github.com/justJubair" rel="noreferrer"> <FaGithub size={35}/></a>
            <a target="_blank" href="https://www.linkedin.com/in/jubair2" rel="noreferrer"> <FaLinkedin size={35}/></a>
            <a target="_blank" href="https://www.instagram.com/jubair_ahmeed" rel="noreferrer"> <FaInstagram size={35}/></a>
            </div>
          </div>
          {/* form */}
          <form
          data-aos="fade-down" data-aos-duration="1500"
            onSubmit={handleContact}
            className="p-8 bg-gradient-to-r from-[#111b3c] to-[#174348] rounded-md space-y-6"
          >
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input text-black input-bordered input-info w-full"
                required
              />
              <input
                type="text"
                placeholder="Your Email"
                name="email"
                className="input text-black input-bordered input-info w-full "
                required
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject"
              name="subject"
              className="input text-black input-bordered input-info w-full"
              required
            />
            <textarea
              className="textarea textarea-info w-full text-black"
              name="message"
              placeholder="Your Message"
              required
            ></textarea>
            <div className="flex">
              <button
                type="submit"
                className="btn bg-gradient-to-l from-[#111b3c] to-[#006e7b] border-none text-white font-bold w-full hover:scale-95"
              >
                <BsSend size={20} /> SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default Contact;
