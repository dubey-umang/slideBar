import React from "react";
import "./linefill.css";
function Linefill(props) {
  const { index, height } = props;

  return <div id={`${index === height ? "banner" : "nonbanner"}`}> </div>;
}

export default Linefill;
