import React, { Children } from "react";
import ReactDOM from "react-dom";
import "./modal.css";

const Backdrop = () => {
  return <div className="backdrop"></div>;
};
const Content = ({ children }) => {
  return (
    <div className="modal">
      <div className="content">{children}</div>
    </div>
  );
};

const portal = document.getElementById("login");
function Modal({ children }) {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, portal)}
      {ReactDOM.createPortal(<Content>{children}</Content>, portal)}
    </React.Fragment>
  );
}

export default Modal;
