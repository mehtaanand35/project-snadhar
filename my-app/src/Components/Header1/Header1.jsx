import "./Header1.css";
import PhoneIcon from "@mui/icons-material/Phone";
import LocalPostOfficeIcon from "@mui/icons-material/LocalPostOffice";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
export const Header1 = () => {
  return (
    <div className="Header1">
      <div className="Hcall">
        <div className="cont1">
          <div>
            <PhoneIcon sx={{ color: "white", fontSize: 18 }} />
          </div>
          <div>
            <p>1-604-276-9044</p>
          </div>
        </div>
      </div>
      <div className="Hmail">
        <div className="cont2">
          <div>
            <LocalPostOfficeIcon sx={{ color: "white", fontSize: 18 }} />
          </div>
          <div>
            <p>info@sandhartrucking.com</p>
          </div>
        </div>
      </div>
      <div className="Hdate">
        <div className="cont3">
          <div>
            <AccessTimeIcon sx={{ color: "white", fontSize: 18 }} />
          </div>
          <div>
            <p>MON-FRI 8 AM - 5 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};
