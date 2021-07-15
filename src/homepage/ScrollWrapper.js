import React from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function ScrollWrapper(props) {
  return (
    <Link
      style={props.styles}
      to={props.target}
      spy={true}
      offset={-70}
      delay={0}
      duration={1300}
      smooth={true}
    >
      {props.children}
    </Link>
  );
}
