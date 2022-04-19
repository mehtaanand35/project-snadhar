import "./Middle2.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Middle2 = () => {
  AOS.init({
    offset: 150,
    duration: 2000,
  });
  return (
    <div className="middle2">
      <div data-aos="slide-right">
        <img
          className=""
          style={{ width: "100%" }}
          src="https://trucking.vytech.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FHomepage%20-%20Bonded%201.0fc9f420.png&w=640&q=75"
          alt=""
        />
      </div>
      <div className="middle2-cont">
        <h1>Proudly bonded by Canada Customs.</h1>
        <p>
          Our sufferance warehouse is bonded by the Canada Border Services
          Agency, allowing us to conduct intact container examinations. The
          facility is approximately 100,000 square feet and it has 12 loading
          docks, 7 railcar loading bays, and grade doors.
        </p>
        <button>READ ABOUT OUR WEARHOUSING</button>
      </div>
    </div>
  );
};
