import React from "react";

const AccordionItem = ({
  showDescription,
  ariaExpanded,
  fontWeightBold,
  item,
  index,
  onClick,
}) => (
  <div className="faq__question" key={item.question}>
    <dt>
      <button
        aria-expanded={ariaExpanded}
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
        className={`faq__desc ${showDescription}`}
      >
        {item.answer}
      </p>
    </dd>
  </div>
);

export default AccordionItem;
