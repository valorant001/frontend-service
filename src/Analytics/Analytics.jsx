import { FaFacebook, FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";
import SidebarLayout from "../Sidebar/Sidebar";
import { Badge } from "@/components/ui/badge";
import { Eye } from 'lucide-react';
import BreakdownBarChart from "../Components/Analytics/Bar";
import UserActivity from "../Components/Analytics/UserActivity";

const Analytics = () => {
    const stats = [
        {
            name: "Instagram",
            icon: <FaInstagram className="text-pink-500 text-3xl" />,
            value: "34,921",
            label: "Reach",
            change: "+20%",
            isPositive: true,
        },
        {
            name: "Facebook",
            icon: <FaFacebook className="text-blue-500 text-3xl" />,
            value: "12,540",
            label: "Clicks",
            change: "-8%",
            isPositive: false,
        },
        {
            name: "WhatsApp",
            icon: <FaWhatsapp className="text-green-500 text-3xl" />,
            value: "1,204",
            label: "Messages",
            change: "+18%",
            isPositive: true,
        },
        {
            name: "Google Ads",
            icon: <FaGoogle className="text-red-500 text-3xl" />,
            value: "98,200",
            label: "Impressions",
            change: "-12%",
            isPositive: false,
        },
    ];

    return (
        <SidebarLayout>
            <main className="w-full px-4 space-y-6">
                {/* Page Header */}
                <div className="mb-6">
                    <div className="text-3xl font-bold text-white mb-2">Analytics Overview</div>
                    <p className="text-gray-400">Track your social media performance at a glance</p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
                    {/* Left Section - Stats Cards (Takes 2 columns on xl screens) */}
                    <div className="xl:col-span-2 space-y-6">
                        {/* Stats Cards */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {stats.map((s, i) => (
                                <div
                                    key={i}
                                    className="bg-[#0E0E0F] border border-white/10 rounded-2xl p-6 flex flex-col gap-4 shadow-lg hover:border-white/20 transition-all"
                                >
                                    {/* Header */}
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-3">
                                            {s.icon}
                                            <span className="text-lg font-semibold text-white">{s.name}</span>
                                        </div>
                                        <button className="text-gray-400 hover:text-white transition text-xl">
                                            →
                                        </button>
                                    </div>

                                    {/* Main Metric */}
                                    <div>
                                        <div className="text-2xl font-bold text-white mb-1">{s.value}</div>
                                        <div className="text-sm text-gray-400">{s.label}</div>
                                    </div>

                                    {/* Change Indicator */}
                                    <div className="flex items-center gap-2">
                                        <span
                                            className={`px-3 py-1 text-xs rounded-full font-semibold ${
                                                s.isPositive
                                                    ? "bg-green-500/20 text-green-400"
                                                    : "bg-red-500/20 text-red-400"
                                            }`}
                                        >
                                            {s.change}
                                        </span>
                                        <span className="text-gray-500 text-xs">vs last week</span>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Bar Chart Section */}
                        <div className="bg-[#0E0E0F] border border-white/10 rounded-2xl ">
                            <BreakdownBarChart />
                        </div>
                    </div>

                    {/* Right Section - Campaign Card */}
                   <section className="">
                     <div className="xl:col-span-1">
                        <div className="bg-[#0E0E0F] border border-white/10 rounded-2xl p-6 shadow-lg space-y-5 sticky top-6">
                            {/* Campaign Header */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <img
                                        src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                                        className="w-5 h-5"
                                        alt="Facebook"
                                    />
                                    <span className="font-semibold text-white">Protect & Gamble</span>
                                </div>
                                <Badge className="bg-green-500/20 text-green-400 border-green-500/30">
                                    Running
                                </Badge>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-400 leading-relaxed">
                                Presenting our amazing mind-boggling product with the...
                            </p>

                            {/* Campaign Thumbnail */}
                            <div className="relative bg-gray-800 rounded-xl overflow-hidden">
                                <img
                                    className="w-full h-48 object-cover"
                                    src="googleads.png"
                                    alt="Campaign preview"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-5">
                                    <p className="text-white font-semibold text-lg leading-tight">
                                        State of US early-stage startups
                                    </p>
                                </div>
                            </div>

                            {/* Posted Badge */}
                            <div className="flex justify-center">
                                <span className="bg-green-500/20 text-green-400 text-xs px-4 py-2 rounded-full font-medium">
                                    Posted at 3:50 PM Today
                                </span>
                            </div>

                            {/* Divider */}
                            <hr className="border-white/10" />

                            {/* Stats Section */}
                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">Total Engagements</span>
                                    <span className="text-white text-lg font-bold">224,051</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">Comments</span>
                                    <span className="text-white font-semibold">12,525</span>
                                </div>

                                <div className="flex justify-between items-center">
                                    <span className="text-gray-400 text-sm">Shares</span>
                                    <span className="text-white font-semibold">100,240</span>
                                </div>
                            </div>

                            {/* Action Button */}
                            <button className="w-full bg-[#00C951] hover:bg-[#00B347] py-3 text-white rounded-lg font-medium transition-all flex items-center justify-center gap-2 mt-2">
                                <Eye className="h-5 w-5" />
                                View Details
                            </button>
                        </div>
                    </div>
                   </section>
                </div>
                <UserActivity></UserActivity>
            </main>
        </SidebarLayout>
    );
};

export default Analytics;