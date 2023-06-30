import { useState } from "react";
import icon from "../../../assets/svg/airbnb-logo.svg";
import "./Sidebar.css";
export default function Sidebar() {
  const [showFullSidebar, setShowFullSidebar] = useState(false);
  return (
    <div
      className="sidebar d-flex flex-column"
      onMouseEnter={() => {
        setShowFullSidebar((x) => true);
      }}
      onMouseLeave={() => {
        setShowFullSidebar((x) => false);
      }}
    >
      <div className="menu d-flex  align-items-center active-right ">
        <img src={icon} alt="icon" className="menu-icon" />
        {showFullSidebar && <div className="menu-text">All Homes</div>}
      </div>
      <div className="menu d-flex  align-items-center ">
        <img src={icon} alt="icon" className="menu-icon" />
        {showFullSidebar && <div className="menu-text">All Homes</div>}
      </div>
    </div>
  );
}
