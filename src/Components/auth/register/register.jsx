import React from "react";
import "./register.css";
import { Link } from "react-router-dom";
import Navbar from "../../Utility/navbar/Navbar";
import Footer from "../../Utility/footer/Footer";
import Modal from "../../Utility/modal/Modal";
import logo from "../../../assets/logo.png";

function Register({ renderLoginHandler, closeHandler }) {
  return (
    <Modal>
      <div className="register">
        <div className="regisContainer">
          <div className="logo">
            <img src={logo} />
          </div>
          <h1>Selamat Datang!</h1>
          <span>Belajar Ragam Musik Indonesia</span>

          <div className="input-container">
            <input type="text" name="email" placeholder="Email" />
          </div>
          <div className="input-container">
            <input type="text" name="uname" placeholder="Username" />
          </div>
          <div className="input-container">
            <input type="password" name="pass" placeholder="Password" />
          </div>
          <div className="input-container">
            <input
              type="password"
              name="confirmpass"
              placeholder="Confirm Password"
            />
          </div>
          <div className="punya__akun">
            <p onClick={renderLoginHandler}>Sudah Punya Akun</p>
          </div>
          <div className="akunBtn">
            <button className="button">Register</button>
          </div>
          <div className="close" onClick={closeHandler}>
            X
          </div>
        </div>
      </div>
    </Modal>
  );
}

export default Register;
