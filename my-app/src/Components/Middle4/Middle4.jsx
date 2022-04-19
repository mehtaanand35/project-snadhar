import "./Middle4.css";

import AOS from "aos";
import "aos/dist/aos.css";

export const Middle4 = () => {
  AOS.init();
  return (
    <div>
      <div className="mdl4-head">
        <h1>TRUCKING COMPANIES IN VANCOUVER, BC</h1>
      </div>
      <div className="mdl4-cont">
        <div data-aos="slide-right">
          <img
            style={{ width: "100%", height: "100%" }}
            src="https://trucking.vytech.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FS-trucking-29%20.8724a954.png&w=640&q=75"
            alt="img"
          />
        </div>
        <div data-aos="slide-left">
          <p>
            Sandhar Trucking is one of the only trucking companies in Vancouver,
            BC that services all the ports/rails, operates a bonded warehouse
            and has a fleet of 5-ton trucks, flat-decks and 53’ trailers. Most
            trucking companies in BC specialize in a certain area, but at
            Sandhar Trucking, we are a one-stop-shop for all your needs.
          </p>
          <p>
            We are authorized by The Port of Vancouver to access Deltaport,
            Vanterm, Centerm and Fraser Surrey Docks. We pickup imports and
            drop-off exports using our own trucks and trailers. When using our
            drayage service, you can be sure we are not subcontracting to other
            trucking companies in Vancouver. We are proud to use our own
            equipment and not third parties for our container deliveries. Feel
            free to call us for more information about how we can help with your
            container trucking needs. We have experienced staff members that
            will understand your requirements and provide you with safe
            transport solutions.
          </p>
          <p>
            Our exceptional customer service skills are why we offer a premium
            transportation and warehousing service in BC. We are dedicated to
            ensuring we exceed our customers expectations for every pickup and
            delivery. We understand that communication is key in this industry
            and that is why we stay in touch with our customers on a regular
            basis. We confirm deliveries a minimum of 24 hours prior to avoid
            having costly issues. By having a proactive approach to our
            operations, we minimize mistakes and keep our customers satisfied.
          </p>
          <p>
            We always try to give our customers options that work best with
            their schedules. Before dispatching a truck, we call shipping or
            receiving warehouses to find out their hours of operations and learn
            about their delivery requirements and preferences. After we obtain
            this information, then we book appointments that work best with the
            warehouse’s schedule. We have become one of the leading trucking
            companies in BC because we know how to synchronize our operations
            with other warehouses schedules.
          </p>
        </div>
      </div>
    </div>
  );
};
