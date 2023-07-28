import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

/**
 * Layout will be used for all pages
 */
const Layout = (props) => {
  const [childrenWithProps] = useState(undefined);
  const { children } = props;
  return (
    <div className="page-container">
      <div className="content-wrap">
        <NavBar />
        <main className="container-fluid">{childrenWithProps ?? children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
