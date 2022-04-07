import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";

export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: false,
      backDelay: 1500,
      backSpeed:60,
      strings: ["Web Developer"],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
          <img src="assets/jahim.png" alt="" />
      </div>
      <div className="right">
        <div className="wrapper">
          <h1>Fadli Gunardi</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
        </div>
      </div>
    </div>
  );
}
