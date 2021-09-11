import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const links = [
  {
    name: "Home",
    link: "/",
    icon: "fas fa-home",
  },
  {
    name: "Learn",
    link: "/learn",
    icon: "fas fa-book",
  },
  {
    name: "Sponser",
    link: "",
    icon: "fas fa-handshake",
    soon: true
  },
  {
    name: "Earn",
    link: "",
    icon: "fas fa-hand-holding-usd",
    soon: true

  },
  {
    name: "People",
    link: "",
    icon: "fas fa-users",
    soon: true
  },
];

const SideBar = () => {
  const { pathname } = useLocation();
  return (
    <div className="main">
      {links.map((link, index) => {
        return (
          <Link to={link.link}>
            <div
              className={`blade ${link.link === pathname ? "active" : ""}`}
              key={index}
            >
              <div className="blade-anchor">
                <i class={link.icon}></i>
              </div>
              <div className="blade-anchor">{link.name}</div>
              {link.soon && <div className="coming-soon">soon..</div>}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SideBar;
