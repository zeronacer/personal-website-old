import React from "react";
import gsap from "gsap";

import TriangeSVG from "./svg/triangleSvg";
import SquareSVG from "./svg/squareSvg";
import HexagonSVG from "./svg/hexagonSvg";
import OctagonSVG from "./svg/octagonSvg";

export default function NavLink(props) {
  const target = props.target;
  const title = props.title;
  const iconCorners = props.iconCorners;
  const icons = {
    3: <TriangeSVG />,
    4: <SquareSVG />,
    6: <HexagonSVG />,
    8: <OctagonSVG />,
  };

  function showPopup() {
    gsap.to("#" + target + "-link .navPopup", {
      opacity: 1,
      x: 10,
    });
  }

  function hidePopup() {
    gsap.to("#" + target + "-link .navPopup", {
      opacity: 0,
      x: 0,
    });
  }

  return (
    <li
      className="navItem"
      id={target + "-link"}
      onMouseEnter={showPopup}
      onMouseLeave={hidePopup}
    >
      <a href={"#" + target} className="navLink">
        {icons[iconCorners]}
      </a>
      <div className="navPopup">
        <span>{title}</span>
      </div>
    </li>
  );
}
