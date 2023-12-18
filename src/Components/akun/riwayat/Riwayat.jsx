import "./riwayat.css";
import Tilt from "react-parallax-tilt";
import ButtonFatch from "../../Utility/button/ButtonFatch";

function Riwayat({ gambar, title, asal, paragraf, allItem, delay }) {
  return (
    <Tilt glareEnable={true} glareMaxOpacity={0.1}>
      <div className="boxRiwayat">
        <div
          className="containerRiwayat"
          style={{ animationDelay: `${delay}s` }}
        >
          <div className="img">
            <img src={gambar} alt={title} />
          </div>
          <div className="deskripsiRiwayat">
            <div className="titleRiwayat">
              <h3>
                {title}-{asal}
              </h3>
            </div>
            <p className="boxParagraf">{paragraf}</p>
            <ButtonFatch
              action="Details"
              valueContext={allItem}
              navigateLink={title}
            />
          </div>
        </div>
      </div>
    </Tilt>
  );
}

export default Riwayat;
