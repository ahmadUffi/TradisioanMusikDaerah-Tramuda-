import "./boxhero.css";
import Title from "../../Utility/title/Title";
import Button from "../../Utility/button/Button";
function Boxhero() {
  return (
    <div className="boxhero">
      <Title title1={"Tramuda"} title2={".com"} />
      <p>
        TRAMUDA merupakan singkatan dari Tradisional Musik Education. Merupakan
        sebuah layanan pembalajaran digital yang berfokus pada memperkanalkan
        alat musik tradisonal yang ada di indonesia
      </p>
      <Button action={`mari belajar`} />
    </div>
  );
}

export default Boxhero;
