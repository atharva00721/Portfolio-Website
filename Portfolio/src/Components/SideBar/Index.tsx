import { Link } from "react-router-dom";
import "./index.scss";
import React from "react";
// import LogoS from "../../assets/images/logo-s.png";
// import LogoSubtitle from "../../assets/images/logo_sub.png";

const SideBar: React.FC = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to={"/"}>
          {/* <img src={LogoS} alt="logos" />
          <img className="logo-sub" src={LogoSubtitle} alt="logosubtitles" /> */}
          <h1>Hello</h1>
        </Link>
      </div>
    </>
  );
};

export default SideBar;
