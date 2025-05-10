import React, { useState } from "react";
import Arrow from "../assets/images/arrow.svg";

export function QuestionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`question-item ${isOpen ? 'open' : ''}`}>
      <div className="question-header" onClick={() => setIsOpen(!isOpen)}>
        <span className="question">{question}</span>
        <span className="arrow">
          <img src={Arrow} alt="Arrow" />
        </span>
      </div>
      <div className={`answer ${isOpen ? 'visible' : ''}`}>
        {answer}
      </div>
    </div>
  );
} 