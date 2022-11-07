import React from "react";
import Navigation from "./navigation";

export default function Layout({ children }) {
  return (
    <div className="page-wrapper">
      <Navigation />
      <main>{children}</main>
    </div>
  );
}
