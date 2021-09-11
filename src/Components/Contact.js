import React from "react";
import "./Contact.css";
import { ImMail4, ImGithub } from "react-icons/im";
import { TiSocialLinkedinCircular } from "react-icons/ti";

const Contact = () => {
  return (
    <>
      <div className="contact">
        <div className="typing">Feel free to contact me ... let's talk!</div>
        <div className="anchorsContact">
          <div className="email">
            <a
              className="anchorContact"
              href="mailto:leon.claassen00@gmail.com"
            >
              <ImMail4 />
            </a>
          </div>
          <div className="linked">
            <a
              className="anchorContact"
              href="https://www.linkedin.com/in/leontine-claassen-833747213"
            >
              <TiSocialLinkedinCircular />
            </a>
          </div>
          <div className="git">
            <a className="anchorContact" href="https://github.com/LeontineC">
              <ImGithub />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
