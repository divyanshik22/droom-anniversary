import React from "react";
import "../App.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="row">
          <div className="col-12 col-sm-12 col-md-5">
            <img
              loading="lazy"
              src={"/images/Logo.png"}
              alt="Logo"
              className="logo"
            />
            <div className="icon-title fnt-20">
              <div>
                <img
                  loading="lazy"
                  src={"/images/calendar.svg"}
                  alt="calander"
                />
              </div>
              <div>10 October 2024, Gurugram Haryana</div>
            </div>
            <div className="icon-title fnt-20">
              <div>
                <img loading="lazy" src={"/images/mail.svg"} alt="mail" />
              </div>
              <div>E-mail: pr@droom.in</div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-7">
            <div className="row">
              <div className="p-0 fnt-20 footer-icons col-12 col-sm-6 col-md-4">
                <div>Download the app</div>
                <div className="icon-title">
                  <div>
                    <img
                      loading="lazy"
                      src={"/images/apple-black-logo.svg"}
                      alt="appleLogo"
                    />
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src={"/images/Group 5526.svg"}
                      alt="playstoreLogo"
                    />
                  </div>
                </div>
              </div>
              <div className="p-0 fnt-20 footer-icons col-12 col-sm-6 col-md-4">
                <div>Watch TVC</div>
                <div className="icon-title">
                  <div>
                    <img
                      loading="lazy"
                      src={"/images/youtube.svg"}
                      alt="youtubeLogo"
                    />
                  </div>
                </div>
              </div>
              <div className="p-0 fnt-20 footer-icons col-12 col-sm-6 col-md-4">
                <div>FOLLOW & SHARE ON</div>
                <div className="icon-title">
                  <div>
                    <img
                      loading="lazy"
                      src={"/images/instagram.svg"}
                      alt="instagramLogo"
                    />
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src={"/images/facebook.svg"}
                      alt="facebookLogo"
                    />
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src={"/images/twitter (1).svg"}
                      alt="twitterLogo"
                    />
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src={"/images/linkedin.svg"}
                      alt="linkedinLogo"
                    />
                  </div>
                  <div>
                    <img
                      loading="lazy"
                      src={"/images/pinterest.svg"}
                      alt="PinterestLogo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="reserved-text fnt-20">All rights reserved</div>
      </div>
    </>
  );
};
export default Footer;
