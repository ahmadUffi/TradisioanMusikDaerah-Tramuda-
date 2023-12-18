import React from "react";

function YourComponent({ threeD }) {
  return (
    <div className="sketchfab-embed-wrapper">
      <iframe
        title="Tifa"
        frameBorder="0"
        allowFullScreen
        mozallowfullscreen="true"
        webkitallowfullscreen="true"
        allow="autoplay; fullscreen; xr-spatial-tracking"
        xr-spatial-tracking=""
        execution-while-out-of-viewport=""
        execution-while-not-rendered=""
        web-share=""
        width="100%"
        height="420"
        src={`https://sketchfab.com/models/${threeD}/embed?autospin=1&autostart=1&ui_theme=dark`}
      ></iframe>
    </div>
  );
}

export default YourComponent;
