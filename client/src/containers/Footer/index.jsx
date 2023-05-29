import React from "react";
import "./Footer.css";
import {
  HeartFill,
  Discord,
  Telegram,
  Instagram,
  Github,
  Youtube,
  Linkedin,
} from "react-bootstrap-icons";

function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="copyright text-center">
          <p>Made with 💖 by 3D Tshirt Designer Team</p>
          <div className="wrapper d-flex justify-content-center">
            <a
              href="https://github.com/amanjaiman1/Product_3D"
              className="icon github"
            >
              <div className="tooltip">Github</div>
              <span>
                <Github />
              </span>
            </a>
            <a href="/" className="icon facebook">
              <div className="tooltip">Discord</div>
              <span>
                <Discord />
              </span>
            </a>
            <a href="/" className="icon twitter">
              <div className="tooltip">Telegram</div>
              <span>
                <Telegram />
              </span>
            </a>
            <a href="/" className="icon instagram">
              <div className="tooltip">Instagram</div>
              <span>
                <Instagram />
              </span>
            </a>
            <a href="/" className="icon youtube">
              <div className="tooltip">Youtube</div>
              <span>
                <Youtube />
              </span>
            </a>
            <a href="/" className="icon linkedin">
              <div className="tooltip">Linkedin</div>
              <span>
                <Linkedin />
              </span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
