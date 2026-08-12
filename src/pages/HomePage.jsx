import React from "react";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Services from "../components/Services";
import Process from "../components/Process";
import Showreel from "../components/Showreel";
import SocialProof from "../components/SocialProof";
import CTASection from "../components/CTASection";

const Home = () => {
  return (
    <>
      <Hero />
      <Marquee />
      <Services />
      <Process />
      <Showreel />
      <SocialProof />
      <CTASection />
    </>
  );
};

export default Home;
