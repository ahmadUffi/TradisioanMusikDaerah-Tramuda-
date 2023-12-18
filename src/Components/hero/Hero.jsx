import "./hero.css";
import video from "../../assets/video/background.mp4";
import Button from "../Utility/button/Button";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <div className="hero">
      <div className="background">
        <video src={video} autoPlay muted loop></video>
      </div>
      <div className="description">
        <h2>
          Mari Eksplorasi Alat Musik <span> Tradisional Indonesia</span>
        </h2>
        <p>
          Tradisional Musik Daerah (Tramuda) merupakan Platform edukasi yang
          memperkenalakan <br /> alat musik tradisional yang ada di Indonesia
        </p>
        <Link to="/home" className="linkDom">
          <Button action="Mulai Belajar" />
        </Link>
      </div>
    </div>
  );
}

export default Hero;
