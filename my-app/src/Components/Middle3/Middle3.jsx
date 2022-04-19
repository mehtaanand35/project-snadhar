import "./Middle3.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Middle3 = () => {
  AOS.init();
  return (
    <div className="middle3">
      <div className="middle3-cont">
        <h1>
          Authorized by Port <br /> Metro Vancouver.
        </h1>
        <p>
          Sandhar Trucking is authorized to access all major ports and rails in{" "}
          <br />
          Greater Vancouver. We are classified by Port Metro Vancouver as a{" "}
          <br />
          large fleet carrier that provides daily container trucking service to{" "}
          <br />
          and from Deltaport, Vanterm, Centerm, Fraser Surrey Docks, CN Rail,{" "}
          <br />
          and CP Rail
        </p>
        <button>READ ABOUT OUR WEARHOUSING</button>
      </div>
      <div className="middle3-img">
        <img
          data-aos="slide-left"
          style={{ width: "100%", height: "100%" }}
          src="https://trucking.vytech.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fst1.2b8d7398.png&w=640&q=75"
          alt=""
        />
      </div>
    </div>
  );
};
