import React from "react";
import "../App.css";
import BrandRecognition from "./brandRecognition";
import Celebrate from "./celebrate";
import DroomAchievements from "./DroomAchievements";
import Image from "./image";
import PatnersandSponsers from "./PatnersandSponsers";
const HomeContent = () => {
  return (
    <>
      <div className="page-content">
        <Celebrate />
        <BrandRecognition />
        <DroomAchievements />
        <PatnersandSponsers />
        <Image />
      </div>
    </>
  );
};
export default HomeContent;
