import React from "react";
import "./footerpath.css";
import { FaFacebook,FaTwitter,FaInstagramSquare,FaYoutube} from "react-icons/fa";

export default function Foot() {
  return (
    <div className="outer">
      <div className="flexing">
        <div className="leftdetails">
          <div>
            <a>About Us</a>
          </div>
          <div>
            <a>Community Guidelines</a>
          </div>
          <div>
            <a>Help Center</a>
          </div>
          <div>
            <a>Credits</a>
          </div>
          <div>
            <a>Join our team</a>
          </div>
          <div>
            <a>Feedback</a>
          </div>
        </div>
        <div className="rightdetails">
          <div style={{color:"#f3990f"}}>Delopus</div>
          <div>
            Delopus is a web platform for the architecture community. We strive
            to build a professional network bridging students and architects.
            Where in creative and original work can be showcased and discovered.
          </div>
        </div>
      </div>
      <div className="copyright">
            <span>copyright © 2020 Delopus.com. All rights reserved. </span>
            Privacy. Terms Of Use
      </div>
      <div className="web">
         
          www.delopus.com   <FaFacebook />  <FaTwitter/>  <FaInstagramSquare />   <FaYoutube />
         
      </div>
    </div>
  );
}
