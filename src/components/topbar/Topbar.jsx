import "./topbar.scss";
import { Mail, LinkedIn } from "@mui/icons-material";


export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <div className="itemContainer">
            <a href="https://www.linkedin.com/in/fadligunrd/">
              <LinkedIn className="icon" />
              <span>fadligunrd</span>
            </a>
          </div>
          <div className="itemContainer">
            <a href="mailto:13519130@std.stei.itb.ac.id.com">
              <Mail className="icon" />
              <span>13519130@std.stei.itb.ac.id</span>
            </a>
          </div>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}
