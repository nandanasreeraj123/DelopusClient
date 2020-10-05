import React from "react";
import "./getInTouch.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagramSquare,
  FaYoutube,
} from "react-icons/fa";

export default function Git() {
  return (
    <div className="outer">
      <div className="flexing">
        <div className="left">
          <h1>Get in touch</h1>
          <div className="top">
            We are constantly on the move to give the best experience to our
            partners and clients.We value your feedback ,opinions and
            suggestions.Get in touch and let's explore how we can make a
            difference ,together.
          </div>
          <div className="address">
            Delopus Bhavan
            <div>Barton Hill,Thiruvanathapuram</div>
            Kerala,695053
          </div>
          <div className="phone">
            8943433508 9496021380 contactdelopus@gmail.com
          </div>
          <div className="icons">
            <FaFacebook /> <FaTwitter /> <FaInstagramSquare /> <FaYoutube />
          </div>
        </div>
        <div className="right">
          <div className="innerright">
            {" "}
            <div>name</div>
            <div>
              <input type="input"></input>
            </div>
          </div>
          <div>
            {" "}
            <div>Email Address</div>
            <div>
              <input type="input"></input>
            </div>
          </div>
          <div>
            {" "}
            <div>Subject</div>
            <div>
              <input type="input"></input>
            </div>
          </div>
          <div >
            {" "}
            <div>Message</div>
            <div>
              <input className="msg" type="input"></input>
            </div>
            <button className="sendbutton">Send</button>
          </div>
        </div>
      </div>
    </div>
  );
}
