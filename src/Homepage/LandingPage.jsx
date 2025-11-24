import React, { useState } from "react";
import { motion } from "framer-motion";
import NavigationBar from "../Components/HomePage_components/Navbar";
import Header from "../Components/HomePage_components/Header";
import LiveCampaign from "../Components/HomePage_components/LiveCampaign";
import ShowCaseWork from "../Components/HomePage_components/ShowCaseWork";
import WhyAdReacher from "../Components/HomePage_components/WhyAdReacher";
import HowitWorks from "../Components/HomePage_components/HowitWorks";
import Intregration from "../Components/HomePage_components/Intregration";
import EstimateYourReach from "../Components/HomePage_components/EstimateYourReach";
import Pricing from "../Components/HomePage_components/Pricing";
import FAQ from "../Components/HomePage_components/FAQ";
import LoveLocal from "../Components/HomePage_components/LoveLocal";
import StartGrowing from "../Components/HomePage_components/StartGrowing";
import Aboutus from "../Components/HomePage_components/Aboutus";
import Footer from "../Components/HomePage_components/Footer";

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
