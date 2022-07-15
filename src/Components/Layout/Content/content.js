import React from "react";
import { image1, image2, image3, image4, image5 } from "../../../images";
import "./content.css";
function Content(props) {
  const imageslist = [image1, image2, image3, image4, image5];
  return (
    <div>
      <img className="imgwidth" src={imageslist[props.view]} alt="" />
    </div>
  );
}

export default Content;
