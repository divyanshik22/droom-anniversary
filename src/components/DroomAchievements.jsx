import React from "react";
import "../App.css";
const DroomAchievements = () => {
  return (
    <>
      <div
        className="width100 bgImage"
        style={{
          backgroundColor: "#fffff",
          background: `url(public\images\Group 163801@2x.png) center / cover no-repeat`,
        }}
      >
        <div
          className="container mt-5"
          style={{
            background: `url(public\images\Group 163801@2x.png) center / cover no-repeat`,
          }}
        >
          <div className="orange mb-3 fnt-35 fnt-weight700 center-text">
            Droom Achievements
          </div>
          <p className="center-text white fnt-20">
            Our Milestones, Your Moments
          </p>
          <p className="center-text white fnt-14">
            Over the past decade, Droom has achieved extraordinary milestones,
            from revolutionizing the automotive industry to becoming a household
            name. Here’s a look at some of our standout achievements:
          </p>
          <div className="row mt-3">
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-2">
              <p className="orange fnt-20 center-text">Top Stories</p>
              <div className="row p-0 m-0 mt-5 position-relative">
                <div className="col-md-4 p-0 m-0">
                  <div className="width100">
                    <img
                      loading="lazy"
                      src={"images/Group 163802.png"}
                      className="width100 position-relative index1"
                      alt="achievements"
                    />
                  </div>
                </div>

                <div className="col-md-4 p-0 m-0">
                  <div className="width100 middle-img">
                    <img
                      loading="lazy"
                      src={"images/Group 163803.png"}
                      className="middle"
                      alt="achievements"
                    />
                  </div>
                </div>

                <div className="col-md-4 p-0 m-0">
                  <div className="width100">
                    <img
                      loading="lazy"
                      src={"images/Group 163804.png"}
                      className="width100 position-relative index1"
                      alt="achievements"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-12 mt-2">
              <p className="orange fnt-20 center-text">Top Highlights</p>
              <div className="mt-5">
                <div className="blue-background p-3">
                  <div className="row p-0 m-0">
                    <div className="col-md-1 col-sm-2 col-2 p-0 m-0">
                      <img
                        loading="lazy"
                        src={"images/monitor.svg"}
                        alt="monitor"
                      />
                    </div>
                    <div className="col-md-11 col-sm-10 col-10 m-0">
                      <p className="orange fnt-16">
                        India’s First Automobile Marketplace
                      </p>
                      <p className="white fnt-16">
                        Droom was the first to launch an online marketplace
                        dedicated to buying and selling vehicles in India,
                        transforming how people purchase automobiles and setting
                        a new standard for transparency and convenience in the
                        industry.
                      </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0 mt-3">
                    <div className="col-md-1 col-sm-2 col-2 p-0 m-0">
                      <img
                        loading="lazy"
                        src={"images/Group 147928.svg"}
                        alt="money"
                      />
                    </div>
                    <div className="col-md-11 col-sm-10 col-10 m-0">
                      <p className="orange fnt-16">
                        $125 Million+ in Funding Raised
                      </p>
                      <p className="white fnt-16">
                        Droom was the first to launch an online marketplace
                        dedicated to buying and selling vehicles in India,
                        transforming how people purchase automobiles and setting
                        a new standard for transparency and convenience in the
                        industry.
                      </p>
                    </div>
                  </div>
                  <div className="row p-0 m-0 mt-3">
                    <div className="col-md-1 col-sm-2 col-2 p-0 m-0">
                      <img
                        loading="lazy"
                        src={"images/Droom-Track-Day-logo.png"}
                        alt="track"
                      />
                    </div>
                    <div className="col-md-11 col-sm-10 col-10 m-0">
                      <p className="orange fnt-16">
                        2 Track Days and Automotive Events
                      </p>
                      <p className="white fnt-16">
                        Droom was the first to launch an online marketplace
                        dedicated to buying and selling vehicles in India,
                        transforming how people purchase automobiles and setting
                        a new standard for transparency and convenience in the
                        industry.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default DroomAchievements;
