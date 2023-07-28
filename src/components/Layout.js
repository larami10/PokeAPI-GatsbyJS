import React, { useState } from "react";
import NavBar from "./NavBar";
import Footer from "./Footer";

const Layout = (props) => {
  const [childrenWithProps] = useState(undefined);
  const { children } = props;
  return (
    <>
      <NavBar />
      <main className="container-fluid">{childrenWithProps ?? children}</main>
      <Footer />
    </>
  );
};

export default Layout;
