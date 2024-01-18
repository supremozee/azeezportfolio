import React from "react";
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Gitub from "@iconscout/react-unicons/icons/uil-github";

const Footer = () => {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%", height: '100vh'}} />
      <div className="f-content">
      <span style={{marginTop: '40px'}} className="f">supremozee14@gmail.com</span>
        <div className="f-icons">
          <a href="http://www.instagram.com/azeezolaariyibi"><Insta color="white" size={"3rem"} /></a>
          <a href="http://www.github.com/supremozee"><Gitub color="white" size={"3rem"} /></a>
        </div>
      <span>&copy; {new Date().getFullYear()}</span>  
      </div>
    </div>
  );
};

export default Footer;
