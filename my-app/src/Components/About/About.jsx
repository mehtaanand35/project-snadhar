import "./About.css";
export const About = () => {
  return (
    <div className="about">
      <div className="abt-head">
        <h1>About Us</h1>
      </div>
      <div className="abt-cont">
        <div>
          <p>
            Sandhar Trucking Ltd. is a family owned transportation and
            warehousing company that was founded in Richmond BC. With over 30
            years of industry experience, Sandhar Trucking has expanded its
            services throughout Canada to include LTL / FTL trucking, container
            drayage, flat-deck transport and warehousing.
          </p>
          <p>
            In addition to transportation, Sandhar Trucking operates an 100,000
            square foot sufferance warehouse in Delta BC that is authorized to
            conduct CBSA examinations. Whether you require short or long-term
            storage, or if you just need a cross docking facility, Sandhar
            Trucking can help you find innovative solutions for your
            transportation and warehousing needs.
          </p>
          <button>READ More About Us</button>
        </div>
        <div>
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://trucking.vytech.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Frsz_new-ct-2-min%201.6b7aec8e.png&w=640&q=75"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
