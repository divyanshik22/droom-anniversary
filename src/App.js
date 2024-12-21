import React, { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeContent from "./components/HomeContent";
import Footer from "./components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Navbar />
      <HomeContent />
      <Footer />
    </>
  );
}

export default App;
