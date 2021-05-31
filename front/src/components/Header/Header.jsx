import React from "react";
import "./Header.css";
import logo from "../../archivos/logo.jpg";
import { useSelector } from "react-redux";

import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";

function Header() {
  const user = useSelector((store) => store.login);
  const userAdmin = user.data.user.email
 


  return (
    <div className="header">
      <div>
      <Link to={"/carpetas"}>
        <img className="header_icon" src={logo} alt="" />
      </Link>
      </div>

      <div className="header_right">
        <p>{userAdmin}</p>

        <Button variant="outlined">Log out</Button>
      </div>
    </div>
  );
}

export default Header;
