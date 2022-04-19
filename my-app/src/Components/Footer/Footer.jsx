import "./Footer.css";

import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export const Footer = () => {
  return (
    <footer>
      <div>
        <img
          style={{}}
          src="https://trucking.vytech.co/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FLogo.b672dc38.png&w=128&q=75"
          alt=""
        />
        <p>
          Sandhar Trucking is a Vancouver Trucking & Transportation company
          founded in Richmond, B.C. We offer LTL/FTL, Container Trucking, Secure
          Yard, Warehousing, Drayage & more. Call today to see how we can help
          you!
        </p>
      </div>
      <div>
        <h4>Learn More</h4>
        <ul>
          <li>Home</li>
          <li>About</li>

          <li>Container Trucking</li>
          <li>Warehousing</li>
          <li>Secure Yard</li>
          <li>Get Quote</li>
          <li>LTL/FTL</li>
          <li>Blog</li>
          <li>Contact</li>
        </ul>
      </div>
      <div>
        <p style={{ fontSize: "22px" }}>Call Our Office </p>
        <p>1-604-276-9044</p>
        <p style={{ fontSize: "22px" }}>Email Our Office</p>
        <p>info@sandhartrucking.com</p>
      </div>
      <div>
        <p style={{ fontSize: "22px" }}>Newsletter!</p>
        <input type="text" name="" id="" />
        <br />
        <br />
        <button>SUBSCRIBE</button>
        <FacebookIcon sx={{ fontSize: 40 , marginRight:"5%",marginTop:"5%" }} />
        <TwitterIcon sx={{ fontSize: 40 , marginRight:"5%" }} />
        <LinkedInIcon sx={{ fontSize: 40 , marginRight:"5%" }} />
        <InstagramIcon sx={{ fontSize: 40 , marginRight:"5%" }} />
      </div>
    </footer>
  );
};
