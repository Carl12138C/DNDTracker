import Button from "@mui/material/Button";
import { ButtonGroup } from "@mui/material";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { fontSize } from "@mui/system";

export default function Navbar() {
  return (
    <div className="navbar-group">
      <div className="link-border">
        <Link to="">
            <span>Home</span>
        </Link>
      </div>        
      <div className="link-border">
        <Link to="/character">
          <span>Character</span>
        </Link>
      </div>
      <div className="link-border">
        <Link to="/roll">
          <span>Roll</span>
        </Link>
      </div>
      <div className="link-border">
        <Link to="/library">
            <span>Library</span>
        </Link>
      </div>

    </div>
  );
}
