import { useContext } from "react";
import "./button.css";
import { ItemsContext } from "../../../context/ItemContext";
import { Link, useNavigate } from "react-router-dom";

function ButtonFatch({ action, valueContext, navigateLink }) {
  const { changeItem } = useContext(ItemsContext);
  const navigate = useNavigate();

  function clikHandler() {
    changeItem(valueContext);
    navigate(`/beranda/${navigateLink}`);
    window.scrollTo(top);
  }
  return (
    <div className="button">
      <button onClick={clikHandler}> {action}</button>
    </div>
  );
}

export default ButtonFatch;
