import { Link } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <div className="sidebar">
      <Link to="/" className="sidebar-content">
        Home
      </Link>
       <Link to="/product-management" className="sidebar-content">
        Product Management
      </Link>
      <Link to="/about" className="sidebar-content">
        About page
      </Link>
    </div>
  );
}

export default Sidebar;
