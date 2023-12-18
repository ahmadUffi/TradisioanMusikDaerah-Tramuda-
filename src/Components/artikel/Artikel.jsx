import { useContext, useState, useEffect } from "react";
import { ItemsContext } from "../../context/ItemContext";
import Footer from "../Utility/footer/Footer";
import "./artikel.css";
import musik from "../../assets/img/artikel/musik.png";
import house from "../../assets/img/artikel/asal.png";
import gong from "../../assets/img/artikel/gong.png";
import Button from "../Utility/button/Button";
import { Link } from "react-router-dom";
import ThreeD from "../ThreeD/Threed";
import Navbar from "../Utility/navbar/Navbar";
import HeartSVG from "./SvgHeart";
import AOS from "aos";
import "aos/dist/aos.css";
import Iframe from "./Iframe";

function Artikel() {
  const { item } = useContext(ItemsContext);
  useEffect(() => {
    const aos = () => {
      AOS.init({
        duration: 600,
        easing: "ease-in-sine",
        delay: 100,
      });
    };
    aos();
  }, []);

  const [isIframe, setIsIframe] = useState(false);
  const [valueIframe, setValueIframe] = useState("");
  const [page, setNewPage] = useState("details");

  function iframeHandler() {
    setIsIframe((prev) => !prev);
  }

  function NewPage(page) {
    setNewPage(page);
  }

  return (
    <div className="artikel">
      <Navbar />
      <div className="artikelContainer">
        <div className="mainImg">
          <ThreeD threeD={item.threeD} />
        </div>
        <div className="shortDescription">
          <div className="nama item">
            <img src={gong} alt="icon" className="icon" />
            <h6>Nama Alat</h6>
            <p>{item.nama}</p>
          </div>
          <div className="mainkan item">
            <img src={musik} alt="icon" className="icon" />
            <h6>Cara Memainkanya</h6>
            <p>{item.memainkan}</p>
          </div>
          <div className="asal item">
            <img src={house} alt="icon" className="icon" />
            <h6>Asal Alat</h6>
            <p>{item.asal}</p>
          </div>
        </div>
        <div className="viewDetail">
          <a href="#description">
            <div className="down">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </a>
        </div>
        <div id="description" className="counter"></div>
        <div className="detailCounter">
          <div className="title_description">
            <h1 data-aos="fade-zoom-in-up" data-aos-easing="linear">
              Lihat Detail Lainnya
            </h1>
          </div>
          <div
            id="counterWrapper"
            className="counterWrapper"
            data-aos="fade-zoom-in-up"
            data-aos-easing="linear"
          >
            <a href="#artikel">
              <button
                className="buttonDetail"
                onClick={() => NewPage("details")}
              >
                <span>Artikel</span>
                <svg
                  width="50px"
                  height="50px"
                  viewBox="0 0 1024 1024"
                  className="icon__artikel"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0" />

                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M430.602 443.728H172.941v409.721h257.661l9.723 22.763h123.159l12.965-22.763h251.179V437.225z"
                      fill="#ED8f27D8F27"
                    />

                    <path
                      d="M563.484 888.712H440.325l-11.495-7.59-6.48-15.173H172.94l-12.5-12.5v-409.72l12.5-12.5H430.5l396.923-6.502 12.705 12.498V853.45l-12.5 12.5H583.714l-9.367 16.449-10.863 6.313z m-114.906-25h107.641l9.367-16.449 10.862-6.313h238.68V449.931l-384.525 6.298H185.44V840.95h245.162l11.495 7.59 6.481 15.172z"
                      fill="#300604"
                    />

                    <path
                      d="M772.531 386.823s-221.458-42.273-266.298 50.402l-22.982 384.568h52.685l4.862-31.937h231.733V386.823z"
                      fill="#ED8f27"
                    />

                    <path
                      d="M535.936 831.793h-52.685l-9.982-10.597 22.981-384.568 0.98-3.759c11.444-23.653 33.769-41.182 66.351-52.099 24.92-8.351 56.024-12.892 92.449-13.499 61.296-1.015 116.074 9.29 118.376 9.729l8.125 9.822v403.034l-10 10H549.39l-3.568 23.441-9.886 8.496z m-42.07-20h33.477l3.568-23.441 9.886-8.495h221.734V395.259c-17.44-2.796-60.6-8.781-106.461-7.984-93.223 1.611-127.655 29.096-139.979 52.604l-22.225 371.914z"
                      fill="#300604"
                    />

                    <path
                      d="M224.797 386.823H469.99v403.034H224.797z"
                      fill="#ED8f27"
                    />

                    <path
                      d="M469.99 799.856H224.797l-10-10V386.822l10-10H469.99l10 10v403.034l-10 10z m-235.193-20H459.99V396.822H234.797v383.034z"
                      fill="#300604"
                    />

                    <path
                      d="M292.542 310.406s139.34 22.474 190.709 81.026c27.337 31.16 26.78 73.506 26.78 73.506v317.628c0 12.645-6.106 24.506-16.384 31.825l-10.396 7.403s0.118-26.71-27.886-44.677-162.823-66.744-162.823-66.744V310.406z"
                      fill="#ED8f27"
                    />

                    <path
                      d="M489.052 829.938l-15.801-8.189c-0.013-0.789-0.575-21.645-23.286-36.216-21.401-13.731-114.557-49.018-160.825-65.758l-6.598-9.403V310.406l11.593-9.872c5.834 0.94 143.502 23.743 196.634 84.304 29.188 33.269 29.287 77.311 29.262 80.148v317.579c0 15.851-7.694 30.793-20.583 39.971l-10.396 7.402z m-186.51-126.567c27.82 10.177 132.917 49.092 158.224 65.328 17.225 11.052 25.318 25.077 29.12 35.95a29.13 29.13 0 0 0 10.145-22.084l0.001-317.76c0.003-0.365 0.059-39.017-24.297-66.778-40.047-45.646-139.256-68.81-173.192-75.589v380.933zM610.066 444.946h123.76v27.902h-123.76zM610.066 510.959h123.76v27.902h-123.76zM665.936 689.082h62.532v27.902h-62.532zM633.087 194.47l16.4 11.448-80.858 115.834-16.4-11.448zM725.26 204.73l13.734 14.54L634.785 317.7l-13.733-14.539zM800.489 240.542l13.142 15.076-52.696 45.935-13.142-15.076zM468.638 187.397l27.52 56.292-17.968 8.784-27.52-56.292zM331.501 204.24l120.28 98.428-12.666 15.478-120.28-98.427zM243.412 238.813l42.402 17.49-7.626 18.488-42.402-17.49z"
                      fill="#300604"
                    />
                  </g>
                </svg>
              </button>
            </a>
            <a href="#video">
              <button className="buttonDetail" onClick={() => NewPage("watch")}>
                <span> Video</span>
                <svg
                  width="32px"
                  height="32px"
                  viewBox="0 0 1024 1024"
                  className="icon__video"
                  version="1.1"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#000000"
                >
                  <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M21.333329 405.333462l981.333129 0 0 597.333209-981.333129 0 0-597.333209Z"
                      fill="#ED8F27"
                    ></path>
                    <path
                      d="M959.9998 426.666791a21.333329 21.333329 0 0 1 21.333329 21.333329v511.999893a21.333329 21.333329 0 0 1-21.333329 21.333329H63.999987a21.333329 21.333329 0 0 1-21.333329-21.333329V448.00012a21.333329 21.333329 0 0 1 21.333329-21.333329h895.999813m0-42.666658H63.999987a63.999987 63.999987 0 0 0-63.999987 63.999987v511.999893a63.999987 63.999987 0 0 0 63.999987 63.999987h895.999813a63.999987 63.999987 0 0 0 63.999987-63.999987V448.00012a63.999987 63.999987 0 0 0-63.999987-63.999987z"
                      fill="#300604"
                    ></path>
                    <path
                      d="M66.986653 407.040129a15.999997 15.999997 0 0 1-15.359997-11.946665L21.333329 281.600155a15.999997 15.999997 0 0 1 11.519997-19.626663L951.679802 21.333542h4.053332a15.999997 15.999997 0 0 1 15.359997 11.946664l29.653327 113.49331a15.999997 15.999997 0 0 1-11.519997 19.626663L71.039985 406.613462z"
                      fill="#FFFFFF"
                    ></path>
                    <path
                      d="M951.893135 43.946871l27.093328 103.253312L70.826652 384.000133l-26.879994-102.613312L951.893135 43.946871M955.733134 0.000213a37.333326 37.333326 0 0 0-9.386664 1.28L27.946661 241.493496a37.333326 37.333326 0 0 0-26.666661 45.439991l29.653327 113.49331A37.333326 37.333326 0 0 0 76.373317 426.666791L994.986459 186.880174a37.333326 37.333326 0 0 0 26.666661-45.653323L991.999793 27.946874A37.333326 37.333326 0 0 0 955.733134 0.000213z"
                      fill="#300604"
                    ></path>
                    <path
                      d="M177.493296 224.426833l78.933317-20.693329 9.173332 151.893302-78.933317 20.693329-9.173332-151.893302z"
                      fill="#ED8F27"
                    ></path>
                    <path
                      d="M236.799951 230.826832l6.399998 108.586644-36.906659 9.599998-6.399998-108.586644 36.906659-9.599998m39.466658-54.399989L155.306634 208.213503l11.519998 195.413293 120.959975-31.573327-11.519998-195.413292z"
                      fill="#300604"
                    ></path>
                    <path
                      d="M369.919923 174.080177l78.933317-20.693329 8.959998 152.106635-78.933317 20.479996-8.959998-151.893302z"
                      fill="#ED8F27"
                    ></path>
                    <path
                      d="M429.013244 180.693509l6.399999 108.586644-36.693326 9.386665-6.399999-108.586644 36.906659-9.599998M469.333236 126.29352L347.519928 157.866847l11.519997 195.413293 120.959975-31.573327-10.666664-195.413293z"
                      fill="#300604"
                    ></path>
                    <path
                      d="M562.133216 123.733521l78.933317-20.693329 9.173332 152.106635-79.146651 20.693329-8.959998-152.106635z"
                      fill="#ED8F27"
                    ></path>
                    <path
                      d="M621.439871 130.346853l6.399998 108.586644-36.906659 9.599998-6.399998-108.586644 36.906659-9.599998M661.333196 75.946864L539.946554 106.666858l11.519998 195.413292 120.959975-31.573326L661.333196 75.946864z"
                      fill="#300604"
                    ></path>
                    <path
                      d="M754.559843 73.386865l78.719983-20.479996 9.173332 151.893302-78.933317 20.693329-8.959998-152.106635z"
                      fill="#ED8F27"
                    ></path>
                    <path
                      d="M813.653164 80.000197l6.399998 108.586644-36.906658 9.599998-6.399999-108.586644 36.906659-9.599998M853.333156 25.600208l-121.173309 31.573327 11.519998 195.413292 120.959975-31.573326L853.333156 25.600208z"
                      fill="#300604"
                    ></path>
                    <path
                      d="M429.013244 842.026705a42.666658 42.666658 0 0 1-42.666658-42.666658v-189.866627a42.666658 42.666658 0 0 1 42.666658-42.666658 42.666658 42.666658 0 0 1 21.333329 5.759999l165.973299 94.933313a42.666658 42.666658 0 0 1 0 74.666651l-165.973299 94.079981a42.666658 42.666658 0 0 1-21.333329 5.759999z"
                      fill="#FDCA89"
                    ></path>
                    <path
                      d="M429.013244 587.306758a21.333329 21.333329 0 0 1 10.666664 2.986666l165.973299 94.933313a21.333329 21.333329 0 0 1 0 37.759992l-165.973299 94.933314a21.333329 21.333329 0 0 1-10.666664 2.986666 21.333329 21.333329 0 0 1-21.333329-21.333329v-189.866627a21.333329 21.333329 0 0 1 21.333329-21.333329m0-42.666658a63.999987 63.999987 0 0 0-63.999987 63.999987v189.866627a63.999987 63.999987 0 0 0 96.426647 55.893322l165.973299-94.933314a63.999987 63.999987 0 0 0 0-111.786643l-165.973299-94.933314a63.999987 63.999987 0 0 0-31.78666-8.533331z"
                      fill="#300604"
                    ></path>
                  </g>
                </svg>
              </button>
            </a>
          </div>
        </div>

        {page === "details" ? (
          <div className="longDescription" id="artikel">
            <div className="secondImg" data-aos="fade-right">
              <img src={item.img} alt="" />
            </div>
            <div className="paragraf" data-aos="fade-left">
              <p>{item.p1}</p>
              <p>{item.p2}</p>
            </div>
          </div>
        ) : (
          <div className="watch" id="video">
            <div className="watchCard" data-aos="zoom-in">
              <div className="box__iframe">
                <div dangerouslySetInnerHTML={{ __html: item.iframe }} />
              </div>
              <div className="btnFrame">
                <Button
                  onClick={() => {
                    setValueIframe(item.iframe);
                    setIsIframe(true);
                  }}
                  action="View Full"
                />
              </div>
            </div>
            <div className="watchCard" data-aos="zoom-in">
              <div className="box__iframe">
                <div dangerouslySetInnerHTML={{ __html: item.iframe_2 }} />
              </div>
              <div
                className="btnFrame"
                onClick={() => {
                  setValueIframe(item.iframe_2);
                  setIsIframe(true);
                }}
              >
                <Button action="View Full" />
              </div>
            </div>
            <div className="watchCard" data-aos="zoom-in">
              <div className="box__iframe">
                <div dangerouslySetInnerHTML={{ __html: item.iframe_3 }} />
              </div>
              <div className="btnFrame">
                <Button
                  onClick={() => {
                    setValueIframe(item.iframe_3);
                    setIsIframe(true);
                  }}
                  action="View Full"
                />
              </div>
            </div>
            <div className="watchCard" data-aos="zoom-in">
              <div className="box__iframe">
                <div dangerouslySetInnerHTML={{ __html: item.iframe_4 }} />
              </div>
              <div className="btnFrame">
                <Button
                  onClick={() => {
                    setValueIframe(item.iframe_4);
                    setIsIframe(true);
                  }}
                  action="View Full"
                />
              </div>
            </div>
          </div>
        )}

        <div className="action">
          <div className="kembali">
            <Link to="/home" className="linkDom">
              <Button action="Kembali" />
            </Link>
          </div>
          <div className="save">
            <HeartSVG nama={item.nama} />
          </div>
        </div>
        {isIframe && <Iframe iframe={valueIframe} onclick={iframeHandler} />}
      </div>
      <Footer />
    </div>
  );
}

export default Artikel;
