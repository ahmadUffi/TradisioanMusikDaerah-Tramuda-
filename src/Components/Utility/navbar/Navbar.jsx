import { NavLink } from "react-router-dom";
import "./navbar.css";
import Tilt from "react-parallax-tilt";
import { useState } from "react";
import Login from "../../auth/login/Login";
import Register from "../../auth/register/register";
import logo from "../../../assets/logo.png";

function Navbar() {
  const [isActive, setIsActive] = useState(false);

  function isActiveHandler() {
    setIsActive((prev) => !prev);
  }

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  const [isLogin, setIsLogin] = useState(false);
  function renderLoginHandler() {
    setIsLogin(!isLogin);
    setIsRegister(!isRegister);
  }

  function firstRenderLoginHandler() {
    setIsLogin(!isLogin);
  }
  function firstRenderRegisHandler() {
    setIsRegister(!isRegister);
  }

  const [isRegister, setIsRegister] = useState(false);
  function renderRegisHandler() {
    setIsLogin(!isLogin);
    setIsRegister(!isRegister);
  }

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo">
          <NavLink
            to="/"
            style={{ textDecoration: "none" }}
            className="logo__container"
          >
            <img src={logo} alt={logo} />
            {/* <h1>Tramuda</h1> */}
          </NavLink>
        </div>
        <div className="burger" onClick={isActiveHandler}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div className={isActive == false ? "items pending" : "items active"}>
          <div className="items_wraper">
            <NavLink to="/home" className="navlink" onClick={scrollTop}>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="nav_svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                <span className="item_name">Home</span>
              </div>
            </NavLink>
            <NavLink to="/akun" className="navlink" onClick={scrollTop}>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="nav_svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="item_name">Akun</span>
              </div>
            </NavLink>
            <NavLink to="/kontak" className="navlink" onClick={scrollTop}>
              <div className="item">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="nav_svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z"
                  />
                </svg>
                <span className="item_name">Kontak</span>
              </div>
            </NavLink>
          </div>
          <Tilt>
            <div className="loginBtn item">
              <button className="button" onClick={firstRenderLoginHandler}>
                Login
              </button>
            </div>
          </Tilt>
        </div>
      </div>
      {isLogin && (
        <Login
          renderRegisHandler={renderRegisHandler}
          closeHandler={firstRenderLoginHandler}
        />
      )}
      {isRegister && (
        <Register
          renderLoginHandler={renderLoginHandler}
          closeHandler={firstRenderRegisHandler}
        />
      )}
    </nav>
  );
}

export default Navbar;
