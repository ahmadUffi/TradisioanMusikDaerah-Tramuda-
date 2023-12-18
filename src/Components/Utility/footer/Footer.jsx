import { useContext } from "react";
import "./footer.css";
import { ItemsContext } from "../../../context/ItemContext";

function Footer() {
  const { item } = useContext(ItemsContext);
  return (
    <footer className="footer flex">
      <h5>ⓒ 2023, Tramuda, Inc. All right reversed.</h5>
    </footer>
  );
}

export default Footer;
