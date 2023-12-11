import Container from "../Shared/Container";
import contactAnime from "../../assets/animations/contactAnime.json";
import { BsSend } from "react-icons/bs";
import Lottie from "lottie-react";
/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <Container>
      <div id="contact" className="py-20 text-white">
        {/* title */}
        <div>
          <h2 className="text-center text-4xl font-medium ">
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
          <div>
            <Lottie className="w-96" animationData={contactAnime} />
          </div>
          {/* form */}
          <form className=" p-8 glass rounded-md space-y-6">
            <div className="flex gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="input text-black input-bordered input-info w-full "
              />
              <input
                type="text"
                placeholder="Your Email"
                className="input text-black input-bordered input-info w-full "
              />
            </div>
            <input
              type="text"
              placeholder="Your Subject"
              className="input text-black input-bordered input-info w-full "
            />
            <textarea
              className="textarea textarea-info w-full"
              placeholder="Your Message"
            ></textarea>
          <div className="flex">
          
          <button type="submit" className="btn font-bold w-full"><BsSend size={20}/> SEND`</button>
          </div>
          </form>
        </div>
      </div>
    </Container>
  );
};
export default Contact;
