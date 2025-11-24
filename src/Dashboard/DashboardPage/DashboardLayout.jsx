import SidebarLayout from "../../Sidebar/Sidebar";
import { motion } from "framer-motion";
import { useState } from "react";
import TabLayout from "../../Components/DashboardComponents/Tabs";
import RunningAdsBox from "../../Components/DashboardComponents/RunningAdsBox";
import { Link } from "react-router-dom";
const DashboardLayout = ({ children }) => {
    const cardVariants = {
        hidden: (i) => ({
            opacity: 0,
            y: -20 - i * 10, // each next card slightly lower start → curve effect
        }),
        visible: (i) => ({
            opacity: 1,
            y: 0, // gives slight downward curve effect at final position
            transition: {
                duration: 0.6,
                delay: i * 0.2, // stagger timing
                ease: "easeOut",
            },
        }),
    };

    const cards = [
        { title: "Ads Running Right Now", icon: "📢", value: "12", subtitle: "Ads that are currently active" },
        { title: "People Clicked Your Ad", icon: "🌍", value: "34,921", subtitle: "How many people clicked or checked your ad" },
        { title: "Money Spent on Ads", icon: "💰", value: "₹8,500", subtitle: "Amount used from your budget" },
        { title: "People Seen Your Ad", icon: "🔥", value: "5,129", subtitle: "Total number of people who saw your ad." },
    ];
    return (
        <div className="bg-gray-900 text-white">
            <SidebarLayout>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
                    {cards.map((item, i) => (
                        <motion.div
                            key={i}
                            variants={cardVariants}
                            custom={i}
                            initial="hidden"
                            animate="visible"
                            whileHover={{ scale: 1.05 }}
                            className="p-6 rounded-2xl bg-[#0B0B0B] border border-white/10 shadow-lg"
                        >
                            <div className="flex items-center justify-between mb-6">
                                <h3 className="text-gray-300 text-sm">{item.title}</h3>
                                <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10">
                                    {item.icon}
                                </div>
                            </div>
                            <div className="text-3xl font-bold text-white">{item.value}</div>
                            <p className="text-sm text-gray-500 mt-1">{item.subtitle}</p>
                        </motion.div>
                    ))}
                </div>
                <div className="flex flex-col xl:flex-col gap-4 mt-6 border border-white/10 rounded-2xl p-4 bg-[#0B0B0B] shadow-lg">
                   <div className="text-[1.06rem] md:text-[1.5rem] xl:text-[2rem]  font-bold flex justify-between items-center">
                    <p>Your Runnning Ads</p>
                    <div className="adpost-btn">
                     <Link  href="#" className="text-[1rem] p-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:opacity-90 transition">Post New Ad</Link>
                    </div>
                   </div>
                   <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 text-[2rem] font-bold gap-3 p-2 justify-between items-start">
                    {/* <TabLayout></TabLayout> */}
                    <motion.div 
                    
                    initial={{ opacity: 0, y: -40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <RunningAdsBox></RunningAdsBox>
                    </motion.div>
                 
                    <motion.div 
                    
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <RunningAdsBox></RunningAdsBox>
                    </motion.div>
                 
                    <motion.div 
                    
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    >
                        <RunningAdsBox></RunningAdsBox>
                    </motion.div>
                 
                   </div>
                </div>
            </SidebarLayout>
        </div>
    );
}
export default DashboardLayout;