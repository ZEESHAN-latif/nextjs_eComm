import Image from "next/image";
import React from "react";
import "../styles/sidebar.css";
import logoImage from '../pages/assets/images/logo.png';

export default function Sidebar() {
  return (
    <div className="mainWrapper">
      <div style={{display:"flex", justifyContent:"center"}}>
       <Image src={logoImage} alt="My Image" width={130} height={130} />
      </div>
      <div className="sideMenuWrapper">
        <li className="menueItems">About</li>
        <li className="menueItems">About</li>
        <li className="menueItems">About</li>
      </div>
      <div>
        <li className="logoutItem">Logout</li>
        </div>
    </div>
  );
}
