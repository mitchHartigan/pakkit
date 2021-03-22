import React, { Component } from "react";
import Hero from "./Hero";
import Description from "./Description/index";
import GetStarted from "./GetStarted/index";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Homepage extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <Description />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}
