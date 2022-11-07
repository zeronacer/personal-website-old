import React from "react";

export default function Navigation() {
  return (
    <header>
      <div className="logo">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-code"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
      </div>
      <nav>
        <ul className="navigation">
          <li><a className="nav-link" href="#about">Über</a></li>
          <li><a className="nav-link" href="#projects">Projekte</a></li>
          <li><a className="nav-link" href="#contact">Kontakt</a></li>
        </ul>
      </nav>
    </header>
  );
}
