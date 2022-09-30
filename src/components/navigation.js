import React from "react";
import NavLink from "./nav-link";

export default function Navigation() {
  return (
    <header>
      <nav>
        <ul className="navigation">
          <NavLink target="home" title="Home" iconCorners="3"></NavLink>
          <NavLink target="about" title="Über" iconCorners="4"></NavLink>
          <NavLink target="projects" title="Projekte" iconCorners="6"></NavLink>
          <NavLink target="contact" title="Kontakt" iconCorners="8"></NavLink>
        </ul>
      </nav>
    </header>
  );
}
