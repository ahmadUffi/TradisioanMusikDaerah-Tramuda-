import "./profilecard.css";
import profil from "../../../assets/img/akun/profile.jpg";
import Button from "../../Utility/button/Button";

const Profilecard = () => {
  return (
    <div className="akun_box">
      <div className="akun">
        <img src={profil} alt={profil} style={{ objectFit: "cover" }} />
        <div className="akun_description">
          <h3>Nur Laily Fitri Mahfudho</h3>
          <h6 className="email">nurLaily2024@gmail.com</h6>
          <p className="asal">Purwokerto - Jawa Timur</p>
          <Button action="Edit Profile" />
        </div>
      </div>
    </div>
  );
};

export default Profilecard;
