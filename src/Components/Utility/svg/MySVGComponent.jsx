import React, { useState } from "react";

function MySVGComponent() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div className="svg">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        onClick={handleClick}
        style={{ cursor: "pointer", fill: isClicked ? "yellow" : "white" }}
      >
        {/* Your SVG path for the save icon */}
        <path d="M19 21H5c-1.1 0-1.99-.9-1.99-2L3 5c0-1.1.89-2 1.99-2h13.96c1.1 0 2 .9 2 2v11l-4 4zm-9-5v3h6v-3h-6z" />
      </svg>
    </div>
  );
}

export default MySVGComponent;
