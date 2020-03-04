import React from "react";
import '../styles/Navigation.css'
import { NavLink } from "react-router-dom";

const list = [
  { name: "start", path: "/", exact: true },
  { name: "produkty", path: "/products" },
  { name: "kontakt", path: "/contact" },
  { name: "panel admina", path: "/admin" },
]

const Navigation = () => {

  const menu = list.map(item => (
    <li key={item.name}>
      {/* jak NavLink jest klikniety to automatycznie do a przypisywana jest klasa active, ktora mozemy oscylowac w css */}
      <NavLink to={item.path} exact={item.exact ? item.exact : false}>{item.name}</NavLink>
    </li>
  ));

  return (
    <nav className="main">
      <ul>
        {menu}
      </ul>
    </nav>
  )
};

export default Navigation;
