import React from "react";
import EnquireSection from "../components/EnquireSection/EnquireSection";
import { EnquireContextProvider } from "../components/store/enquire-context";
import OffersSection from "../components/OffersSection/OffersSection";
import Portfolio from "../components/Portfolio/Portfolio";
import CabTypes from "../components/CabsTypes/CabTypes";
import Features from "../components/features/Features";
import FeaturesPaddle from "../components/features/FeaturesPaddle";

const Home = () => {
  return (
    <React.Fragment>
      <EnquireContextProvider>
        <EnquireSection />
      </EnquireContextProvider>
      <div className="divider-a"></div>
      <div className="divider-aa"></div>
      <OffersSection />
      <div className="divider-c"></div>
      <CabTypes />
      <Features />
      <FeaturesPaddle />
      <Portfolio />
    </React.Fragment>
  );
};

export default Home;
