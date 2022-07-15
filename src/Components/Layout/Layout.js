import React from "react";
import SlideBar from "./SlideBar/slideBar";
import Content from "./Content/content";
import { useState } from "react";
import "./Layout.css";
function Layout() {
  const [view, setView] = useState(0);
  return (
    <div className="container layout">
      <div className="header">
        <h2>Powerful Cloud Testing Platform to Accelerate Your Go-To-Market</h2>
        <p>
          Secure, Reliable, and High Performance Test Execution Cloud Built For
          Scale
        </p>
      </div>
      <div>
        <div className="content">
          <div className="innercontent">
            <SlideBar setView={setView} />
            <Content view={view} setView={setView} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
