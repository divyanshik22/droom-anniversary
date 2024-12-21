import React from "react";
import "../App.css";
const celebrate = () => {
  return (
    <>
      <div className="row pt-5 m-0">
        <div className="col-md-5 col-sm-4 col-12">
          <div className="ps-3 pe-3 center-img">
            <div className="image-container">
              <img
                loading="lazy"
                src="/images/modern-office-skyscraper-highrise-building-with-glass-facade.png"
                alt="Modern Office Building"
                className="background-image recognition"
              />
              <img
                loading="lazy"
                src="/images/DSC05812_1.png"
                alt="Overlay Image"
                className="overlay-image recognition"
              />
              <div className="overlay-text">
                <p className="fnt-20 p-0 m-0 light-black">Sandeep Aggarwal</p>
                <p className="fnt-14 p-0 m-0 grey">Founder & CEO, Droom</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-7 col-sm-8 col-12">
          <div className="ps-3 pe-3 img-60">
            <div className="row fnt-35 fnt-weight700 orange">
              Celebrating 10 Years
            </div>
            <div className="row fnt-20 white fnt-weight700">
              A Decade of Revolutionizing the Auto Industry
            </div>
            <div className="row fnt-14 white">
              Since its inception, Droom has transformed the automotive industry
              in India, revolutionizing how vehicles are bought and sold. Over
              the past decade, we've redefined the market and empowered millions
              with innovative technology and services.
            </div>
            <div className="row mt-2">
              <img
                loading="lazy"
                src={"images/Group 164772.png"}
                className="invitation"
                alt="Invitation"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="p-0 m-0 special-guest">
        <img
          loading="lazy"
          src={"images/Group 164796.png"}
          className="width100"
          alt="BgImage"
        />
        <div className="row">
          <div className="col-md-6 col-sm-6 col-6">
            <p className="orange center-text fnt-35">
              Special Guest for the Night
            </p>
            <div className="width100 center-text">
              <img
                loading="lazy"
                src={"images/Group 164741.svg"}
                className="guest-text width100"
                alt="CelebrityImageFont"
              />
            </div>
          </div>
          <div className="col-md-6 col-sm-6 col-6">
            <div className="top">
              <img
                loading="lazy"
                src={"images/Cutout-Badhshah.png"}
                className="width100 guest"
                alt="CelebrityImage"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default celebrate;
