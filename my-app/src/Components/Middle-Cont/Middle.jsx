import "./Middle.css";
import { useState, useEffect, useRef } from "react";

const colors = ["#80194d", "#80194d", "#80194d"];
const delay = 2500;

export const Middle = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <div>
      <div className="middle-cont">
        <h1>
          People depend on Sandhar <br /> to manage their transportation.
        </h1>
      </div>
      <div className="slideshow">
        <div
          className="slideshowSlider"
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          <div className="slide-cont">
            <div className="slide">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Dicta corrupti neque molestiae repellendus placeat sapiente?
                <br /> Rem id expedita ullam autem nostrum molestiae recusandae?
                <br /> Voluptates ipsa modi reiciendis unde, porro nemo.
              </h4>
            </div>
            <div className="slide">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Dicta corrupti neque molestiae repellendus placeat sapiente?
                <br /> Rem id expedita ullam autem nostrum molestiae recusandae?
                <br /> Voluptates ipsa modi reiciendis unde, porro nemo.
              </h4>
            </div>
            <div className="slide">
              <h4>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                Dicta corrupti neque molestiae repellendus placeat sapiente?
                <br /> Rem id expedita ullam autem nostrum molestiae recusandae?
                <br /> Voluptates ipsa modi reiciendis unde, porro nemo.
              </h4>
            </div>
          </div>
        </div>
        <div className="slideshowDots">
          {colors.map((_, idx) => (
            <div
              key={idx}
              className={`slideshowDot${index === idx ? " active" : ""}`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};
