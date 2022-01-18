import React from "react";
import Bio from "./bio";
import Contact from "./contact";
import Footer from "./footer";
import Header from "./header";
import "./index.scss";
import NavbarHead from "./navbar";

export default class Bootstrap extends React.Component {
  render() {
    return (
      <div className="body">
        <NavbarHead />
        <Header />
        <Bio />
        <Contact />
        <Footer />
      </div>
    );
  }
}
