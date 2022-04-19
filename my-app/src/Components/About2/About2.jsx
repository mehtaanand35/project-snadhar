
import AOS from "aos";
import "aos/dist/aos.css";

export const About2 = () => {
  AOS.init();
  return (
    <div>
      <div className="mdl4-head">
        <h1>
          Trust the Leading Trucking Company in Vancouver for All <br /> Your
          Transportation Needs
        </h1>
      </div>
      <div className="mdl4-cont">
        <div data-aos="slide-right">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://trucking.vytech.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FS-trucking-38.5bad54ac.png&w=640&q=75"
            alt="img"
          />
        </div>
        <div data-aos="slide-left">
          <p>
            When you want your transportation needs met, there is only one
            trucking company that you can rely on, Sandhar Trucking. We are the
            leading trucking company in Vancouver that provides services to all
            the BC area’s rails and ports. We help pick up and drop-off imports
            and exports using our trailers and trucks. Our trucking services in
            BC have helped numerous companies establish their operations, and we
            are proud that our equipment for our container deliveries.
          </p>
          <p>
            Our staff members are all experienced and will study your
            requirements and offer you safe transport solutions. We ensure that
            our customers have no room for complaints as our exceptional
            customer support always keeps them informed about every pickup and
            delivery. Our dedication towards our customers has made us one of
            the leading names for trucking services in BC.
          </p>
          <h1>Trust Us for Trucking Services in BC</h1>
          <p>
            At Sandhar Trucking, we place our clients’ needs and know that
            communication is key to ensuring a satisfying service. That is why
            we remain in constant touch with our clients and ensure that they
            have complete knowledge of their pickup and delivery.
          </p>
          <p>
            We also provide cross-docking in BC to our clients to never worry
            about anything. Our ability to synchronize our trucking operations
            with warehouse schedules has allowed us to become the leading
            trucking company in Vancouver. Our ability to meet all your
            warehousing and transportation requirements is why we are the best
            in the business. So, if you require cross-docking in BC or trucking
            services in BC, trust Sandhar Trucking for all your transportation
            needs.
          </p>
        </div>
      </div>
    </div>
  );
};
