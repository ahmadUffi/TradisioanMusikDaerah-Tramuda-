import "./kontak.css";
import Button from "../Utility/button/Button";
import Navbar from "../Utility/navbar/Navbar";
import Footer from "../Utility/footer/Footer";
import upload from "../../assets/img/kontak/upload.png";
import arrow from "../../assets/img/kontak/rightArrow.png";

const Kontak = () => {
  return (
    <section className="contact">
      <Navbar />
      <div className="bgImage">
        <div className="imgDeskripsi">
          <h4>Hubungi kami</h4>
        </div>
      </div>
      <div className="contact_form">
        <form action="#">
          <h2>Kirimkan Pesanmu</h2>
          <div className="inputBox">
            <input type="text" required />
            <label>Nama lengkap</label>
          </div>
          <div className="inputBox">
            <input type="email" required />
            <label>Email</label>
          </div>
          <div className="inputBox">
            <input type="text" required />
            <label>Phone</label>
          </div>
          <div className="inputBox">
            <textarea required></textarea>
            <label>Pesanmu</label>
          </div>
          <div className="form-group">
            <div className="form-control">
              <img src={upload} alt={upload} />
              <label htmlFor="upload">Upload File</label>
              <input type="file" id="upload" />
            </div>
            <div className="inputBtn">
              <input type="submit" value="kirim Pesan" />
              <img src={arrow} alt={arrow} />
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </section>
  );
};

export default Kontak;
