import React, { Component } from "react";
import Hero from "./Hero";
import Description from "./Description/index";
import GetStarted from "./GetStarted/index";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default class Homepage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      scrollPos: 0,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this._captureScrollPos);
  }

  _captureScrollPos = () => {
    this.setState({ scrollPos: window.pageYOffset });
  };

  componentWillUnmount() {
    window.removeEventListener("scroll", this._captureScrollPos);
  }

  render() {
    const { scrollPos } = this.state;

    return (
      <div>
        <Navbar scrollPos={scrollPos} />
        <Hero scrollPos={scrollPos} />
        <Description />
        <GetStarted />
        <Footer />
      </div>
    );
  }
}
