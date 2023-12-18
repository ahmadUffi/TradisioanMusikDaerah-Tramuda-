import "./akun.css";
import ProfileCard from "./profile_card/Profilecard.jsx";
import Kontribusi from "./kontribusi";
import Navbar from "../Utility/navbar/Navbar";
import Footer from "../Utility/footer/Footer";
import items from "../../source.js";
import Riwayat from "./riwayat/Riwayat.jsx";
import Button from "../Utility/button/Button.jsx";
import { useState } from "react";

function Akun() {
  const riwatItems = items.slice(0, 3);

  const [isActive, setIsActive] = useState(false);

  function activeHandler() {
    setIsActive((prev) => !prev);
  }
  return (
    <div className="akun">
      <Navbar />
      <div className="akun_wrapper">
        <ProfileCard />
      </div>
      <div className="riwayat">
        <div className="btnRiwayat" onClick={activeHandler}>
          <Button action="Alat Musik Favorit" />
        </div>
        <hr className="hr" />
        <div
          className={isActive == false ? "boxCard pending" : "boxCard active"}
        >
          {riwatItems.map((riwayat) => (
            <Riwayat
              key={riwayat.id}
              gambar={riwayat.img}
              title={riwayat.nama}
              asal={riwayat.asal}
              paragraf={riwayat.p1}
              allItem={riwayat}
              delay={riwayat.id}
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Akun;
