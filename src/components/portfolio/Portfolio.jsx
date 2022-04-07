import { useState } from "react";
import ReactHtmlParser from "html-react-parser";
import { Portofoliodata } from "../../data"
import "./portfolio.scss";

export default function Portfolio() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < Portofoliodata.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
    <div className="portfolio" id="portfolio">
      <h1>Portfolio</h1>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {Portofoliodata.map((d) => (
          <div className="container">
            <div className="item">
              <a href={d.link}>
                <div className="left">
                  <div className="leftContainer">
                    <h2>{d.title}</h2>
                    <p>{ReactHtmlParser(d.desc)}</p>
                  </div>
                </div>
                <div className="right">
                  <div className="imageContainer">
                    <img
                    src={d.img}
                    alt=""
                    />
                  </div>
                </div>
              </a>
            </div>
          </div>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
