import "./style.css";
import Button from "../../Utility/button/Button";
import { useNavigate } from "react-router";

const index = () => {
  const navigate = useNavigate();

  function lanjutHandler() {
    navigate("/beranda");
  }

  return (
    <div className="kontribusi">
      <div className="kontribusi_header">
        <h1>Kontribusi kamu</h1>
      </div>
      <div className="items">
        <div className="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0z"
            />
          </svg>
          <span>5 saved</span>
        </div>
        <div className="item">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
            />
          </svg>

          <span>5 requested</span>
        </div>
      </div>
      <div className="kontribusi_btn">
        <button className="btn" onClick={lanjutHandler}>
          Lanjut Belajar
        </button>
        <button className="btn">History Belajar</button>
      </div>
    </div>
  );
};

export default index;
