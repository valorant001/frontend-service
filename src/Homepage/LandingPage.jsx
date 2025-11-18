import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "../Components/Navbar";
import Header from "../Components/Header";
import LiveCampaign from "../Components/LiveCampaign";
import ShowCaseWork from "../Components/ShowCaseWork";
import WhyAdReacher from "../Components/WhyAdReacher";
import HowitWorks from "../Components/HowitWorks";
import Intregration from "../Components/Intregration";
import EstimateYourReach from "../Components/EstimateYourReach";
import Pricing from "../Components/Pricing";
import FAQ from "../Components/FAQ";
import LoveLocal from "../Components/LoveLocal";
import StartGrowing from "../Components/StartGrowing";
import Aboutus from "../Components/Aboutus";
import Footer from "../Components/Footer";

export default function LandingPage() {
  
 



  return (
    <div className="min-h-screen w-full bg-[#050506] text-gray-200 font-sans leading-relaxed antialiased">
      <NavigationBar/>
      <Header/>
     

      {/* LIVE CAMPAIGN PREVIEW SECTION */}
      <LiveCampaign/>

      {/* <section className="px-6 md:px-24 py-12 text-center">
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} className="text-gray-400">Trusted by growing businesses</motion.p>
        <motion.div initial={{ y: 10, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }} className="mt-6 flex flex-wrap justify-center gap-10 text-gray-400 text-sm">
          <span>Sider</span>
          <span>DayTrip</span>
          <span>Vodafone</span>
          <span>AccioJob</span>
          <span>Philips</span>
          <span>Airbnb</span>
        </motion.div>
      </section> */}

      {/* Show Case Work Section */}

       <ShowCaseWork/>
    
     {/* Why AdReacher */}
     <WhyAdReacher/>

    {/* How it Work */}
    <HowitWorks/>

     {/* Publish Platform */}
     <Intregration/>

     {/* Estimate Your Reach */}
     <EstimateYourReach/>

        {/* Pricing Details */}
        {/* <Pricing/> */}

       {/* FAQ */}
       <FAQ/>

       {/* Love By Local */}
       <LoveLocal/>

       {/* Start Growing Business */}

       <StartGrowing/>

        {/* About Us */}
        <Aboutus/>

        {/* Footer Part */}
        <Footer/>
    </div>
  );
}
