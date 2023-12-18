import React, { useRef, useState } from "react";
import "./dropdown.css";

function DropdownCustom({ values, placeholder }) {
  const [isEnter, setIsEnter] = useState(false);

  //ref option
  const revTitle = useRef();
  const revOption = values.map(() => useRef(null));

  //ref OL
  const refTitle = useRef(null);
  const [titleValue, setTitleValue] = useState(placeholder);

  // event lesstener ketika mouse berada di Filter
  function enterHandler() {
    setIsEnter(true);
  }
  function leaveHandler() {
    setIsEnter(false);
  }
  function clickHandler() {
    setIsEnter(!isEnter);
  }

  // mengmabil nilai li pada saat di klik
  function optionClickHandle(index) {
    setTitleValue(revOption[index].current.textContent);
    setIsEnter(false);
  }
  return (
    <div className="dropdown">
      <div
        ref={revTitle}
        className="value"
        onMouseEnter={enterHandler}
        onMouseLeave={leaveHandler}
        onClick={clickHandler}
      >
        <span className="value__title">{titleValue}</span>
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 10L12 15L17 10"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="path"
          />
        </svg>
      </div>
      {isEnter && (
        <ol onMouseEnter={enterHandler} onMouseLeave={leaveHandler}>
          {values.map((value, index) => (
            <li
              key={index}
              ref={revOption[index]}
              onClick={() => optionClickHandle(index)}
            >
              {value}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

export default DropdownCustom;
