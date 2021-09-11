import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <p className="paraFooter">&copy;LeontineC {new Date().getFullYear()}</p>
    </div>
  );
};

export default Footer;
