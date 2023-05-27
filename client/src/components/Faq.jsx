import React from "react";
import Accordion from "./Accordion";
import "../scss/main.scss";

import illustration__box from "../assets/illustration-box-desktop.svg";
import illustration__woman_desktop from "../assets/illustration-woman-online-desktop.svg";
import illustration__woman_mobile from "../assets/illustration-woman-online-mobile.svg";

const questionsAnswers = [
  {
    question: "How do I customize my t-shirt on your website?",
    answer:
"To customize your t-shirt, simply choose the style, color, size, and explore options like adding text, uploading images, or selecting pre-designed patterns. Use our design tools and DalleAI integration to personalize your t-shirt.",
  },
  {
    question: "What customization options are available?",
    answer:
      "We offer text, image upload, and pre-designed pattern options for customization.",
  },
  {
    question: "How does the DalleAI integration work?",
    answer: `DalleAI uses AI algorithms to generate custom images based on your preferences or keywords. These images can be applied to your t-shirt design.`,
  },
  {
    question: "Can I see a preview of my customized t-shirt before ordering?",
    answer: `Yes, our website provides a real-time preview of your design as you make changes.`,
  },
  {
    question: "How do I place an order?",
    answer: `Select the size and quantity, add to cart, provide shipping and payment details, review your order, and confirm your purchase.`,
  },
];

const Faq = () => {
  return (
    <div className="container">
      <div className="component">
        <div className="illustration">
          <img
            src={illustration__box}
            alt="illustration with box"
            className="illustration__box"
          />

          <img
            className="illustration__woman-desktop"
            src={illustration__woman_desktop}
            alt="illustration with woman"
          />
          <img
            className="illustration__woman-mobile"
            src={illustration__woman_mobile}
            alt="illustration with woman"
          />
        </div>
        <Accordion questionsAnswers={questionsAnswers} />
      </div>
    </div>
  );
};

export default Faq;
