import React from "react";
import { Link } from "react-router-dom";

import { HOME_URL, LOGIN_URL, DASHBOARD_URL } from "./urls";

const Navbar = () => (
  <nav
    style={{
      padding: 10,
      paddingBottom: 15,
      marginBottom: 30,
      borderBottom: "1px solid grey"
    }}
  >
    <Link to={HOME_URL}>Home</Link> <Link to={LOGIN_URL}>Login</Link>{" "}
    <Link to={DASHBOARD_URL}>Dashboard</Link>
  </nav>
);

export default Navbar;