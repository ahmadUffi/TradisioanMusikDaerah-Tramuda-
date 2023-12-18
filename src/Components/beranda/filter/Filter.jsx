import "./filter.css";
import items from "../../../source";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import { useRef, useState } from "react";
import DropdownCustom from "./DropdownCustom";

function Filter() {
  // filter asal
  const [valueAsal, setValueAsal] = useState("");
  const asal = ["Semua Daerah", ...new Set(items.map((item) => item.asal))];

  // filter cara memainkan
  const [valueMain, setValueMain] = useState("");
  const caraMemainkan = [
    "Semua",
    ...new Set(items.map((item) => item.memainkan)),
  ];
  // filter sort
  const [sortBy, setIsSortBy] = useState("");
  const sortOption = ["Most Viewed", "Most Liked"];

  // filter mobileresposive
  const [isMobile, setIsMobile] = useState(false);

  // function filter Mobile
  function filterClick() {
    setIsMobile(!isMobile);
  }
  return (
    <div className="filter">
      <div
        className={
          isMobile == true
            ? "dropdown__container active"
            : "dropdown__container"
        }
      >
        <div className="filter__burger" onClick={filterClick}>
          <p>Filter</p>
        </div>
        <div
          className={
            isMobile == true ? "dropdown__wrapper active" : "dropdown__wrapper"
          }
        >
          <DropdownCustom values={asal} placeholder="Asal Daerah" />
          <DropdownCustom values={caraMemainkan} placeholder="Cara Memainkan" />
          <DropdownCustom values={sortOption} placeholder="Sort By" />
        </div>
      </div>
      <div className="search">
        <form action="" className="form__control">
          <input type="text" id="search" placeholder="Search..." />
          <button>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15 10.5C15 12.9853 12.9853 15 10.5 15C8.01472 15 6 12.9853 6 10.5C6 8.01472 8.01472 6 10.5 6C12.9853 6 15 8.01472 15 10.5ZM14.1793 15.2399C13.1632 16.0297 11.8865 16.5 10.5 16.5C7.18629 16.5 4.5 13.8137 4.5 10.5C4.5 7.18629 7.18629 4.5 10.5 4.5C13.8137 4.5 16.5 7.18629 16.5 10.5C16.5 11.8865 16.0297 13.1632 15.2399 14.1792L20.0304 18.9697L18.9697 20.0303L14.1793 15.2399Z"
                fill="#ffffff"
              />
            </svg>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Filter;
