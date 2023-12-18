import Title from "../../Components/Utility/title/Title";
// import Navbar from "../../Components/Utility/navbar/Navbar";
import Footer from "../..//Components/Utility/footer/Footer";
import Filter from "./filter/Filter";
import Curosel from "./curosel/Curosel";
import "./beranda.css";
import Navbar from "../Utility/navbar/Navbar";

function Beranda() {
  return (
    <div className="beranda">
      <Navbar />
      <div className="berandaContainer">
        <div className="title">
          <h1 className="title1">Aku Cinta Budaya Negeri Ku</h1>
          <h1 className="title2">Karena Itu Adalah Kebanggaanku</h1>
        </div>
        <div className="filter__container">
          <Filter filterFor="Asal Daerah" />
        </div>
        <div className="curosel__container">
          <Curosel />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Beranda;
