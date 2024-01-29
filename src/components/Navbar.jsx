import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
  return (
    <div className="navbar-group">
      <img className="logo" src="dnd_logo.png"/>
      <div className="link-border-logo">
        <span className="logo-text">DNDTracker</span>
      </div>
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

