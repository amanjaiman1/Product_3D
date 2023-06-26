import React, { useState } from "react";

const AccordionItem = ({ showDescription, ariaExpanded, fontWeightBold, item, index, onClick, isOpen }) => {

  return (
    <div className="faq__question" key={item.question}>
      <dt>
        <button
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls={`faq${index + 1}_desc`}
          data-qa="faq__question-button"
          className={`faq__question-button ${fontWeightBold}`}
          onClick={onClick}
        >
          {item.question}
        </button>
      </dt>
      <dd>
        <p
          id={`faq${index + 1}_desc`}
          data-qa="faq__desc"
          className={`faq__desc ${isOpen ? showDescription : ""}`}
        >
          {item.answer}
        </p>
      </dd>
    </div>
  );
};

export default AccordionItem;
