import React from "react";
import "../App.css";
const image = () => {
  return (
    <>
      <div className="container achievement">
        <div>
          <img
            loading="lazy"
            src={"/images/Group 164791.svg"}
            alt="10 Graphic"
            className="graphic-image "
          />
          <div className="text top-1">
            <span className="fnt-20 orange">250k+</span>
            <span className="white fnt-14 block">Listing</span>
          </div>
          <div className="text top-2">
            <span className="fnt-20 orange">200Mn+</span>
            <span className="white fnt-14 block">Traffic (Per Year)</span>
          </div>
          <div className="text top-3">
            <span className="fnt-20 orange">16Mn+</span>
            <span className="white fnt-14 block">Traffic (Per Month)</span>
          </div>
          <div className="text middle-left">
            <span className="fnt-20 orange">$7.4Bn+</span>
            <span className="white fnt-14 block">ListListed GMVing</span>
          </div>
          <div className="text bottom-left">
            <span className="fnt-20 orange">354+</span>
            <span className="white fnt-14 block">Dealers</span>
          </div>
          <div className="text bottom-center-1">
            <span className="fnt-20 orange">7Mn+</span>
            <span className="white fnt-14 block">Social Media</span>
          </div>
          <div className="text bottom-center-2">
            <span className="fnt-20 orange">528k+</span>
            <span className="white fnt-14 block">Vechile Sold</span>
          </div>
          <div className="text bottom-right">
            <span className="fnt-20 orange">$7.4Bn+</span>
            <span className="white fnt-14 block">GMV</span>
          </div>
          <div className="text middle-right">
            <span className="fnt-20 orange">1174+</span>
            <span className="white fnt-14 block">No. of cities</span>
          </div>
          <div className="text top-4">
            <span className="fnt-20 orange">16.2++</span>
            <span className="white fnt-14 block">App downloads</span>
          </div>
          <div className="text fnt-16 circle-text">
            <span>Our Unmatched</span>
            <span className="block">Scale & Impact</span>
          </div>
        </div>
      </div>
    </>
  );
};
export default image;
