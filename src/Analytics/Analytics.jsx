import { FaFacebook, FaInstagram, FaWhatsapp, FaGoogle } from "react-icons/fa";
import SidebarLayout from "../Sidebar/Sidebar";
import { Badge } from "@/components/ui/badge"
import { Pencil } from 'lucide-react';
import { Eye } from 'lucide-react';

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
            <main className="flex justify-around md:flex-row flex-col">
                <div className="cards md:max-w-xl ">
                    <div className="grid grid-cols-1 md:grid-cols-2 md:p-0 p-2 mt-2 gap-2">
                        {stats.map((s, i) => (
                            <div
                                key={i}
                                className="bg-[#0E0E0F]  md:max-w-72 max-h-60 border border-white/10  rounded-2xl p-6 flex flex-col  shadow-lg"
                            >
                                {/* TOP ROW */}
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center gap-3">
                                        {s.icon}
                                        <span className="text-lg font-semibold text-white">{s.name}</span>
                                    </div>

                                    <button className="text-gray-400 hover:text-gray-200 transition">
                                        →
                                    </button>
                                </div>

                                {/* MAIN METRIC */}
                                <div className="text-3xl font-bold text-white mt-2">{s.value}</div>
                                <div className="text-gray-400">{s.label}</div>

                                {/* CHANGE */}
                                <div className="flex items-center gap-2">
                                    <span
                                        className={`px-2 py-1 text-xs rounded-md font-semibold ${s.isPositive
                                            ? "bg-green-500/20 text-green-400"
                                            : "bg-red-500/20 text-red-400"
                                            }`}
                                    >
                                        {s.change}
                                    </span>
                                    <span className="text-gray-500 text-sm">Compared to last week</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                   <div className="w-full xl:max-w-80 max-w-90 mt-3 p-2 items-center justify-center bg-[#0B0B0B] rounded-2xl shadow-sm border border-white/10 space-y-5">

                        <div className="flex flex-row justify-between items-center">
                            <div className="flex items-center gap-2">
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png"
                                    className="w-5 h-5"
                                />
                                <span className="font-semibold text-gray-700">Protect & Gamble</span>
                            </div>
                            <Badge className="bg-badge-run">Running</Badge>
                        </div>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-tight">
                            Presenting our amazing mind-boggling product with the...
                        </p>

                        {/* Thumbnail Block */}
                        <div className="relative bg-gray-600 rounded-xl overflow-hidden">
                            {/* Background image */}
                            <img
                                className="w-full h-42 object-cover"
                                src="googleads.png"
                                alt=""
                            />

                            {/* Overlay content */}
                            <div className="absolute inset-0 flex flex-col justify-center px-5">
                                <p className="text-white font-semibold text-xl leading-6">
                                    State of US early-stage startups
                                </p>
                            </div>
                        </div>

                        {/* Posted Date Badge */}
                        <p className="bg-green-100 text-green-700 text-xs px-4 py-2 rounded-full w-fit mx-auto">
                            Posted on 3:50 PM Today
                        </p>

                        {/* Divider */}
                        <hr className="border-gray-200" />

                        {/* Stats Section */}
                        <div className="space-y-3">
                            <div className="flex justify-between text-sm font-semibold">
                                <span className="text-gray-600">Total Engagements</span>
                                <span className="text-gray-900">224,051</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Comments</span>
                                <span className="font-semibold">12,525</span>
                            </div>

                            <div className="flex justify-between text-sm">
                                <span className="text-gray-500">Shares</span>
                                <span className="font-semibold">100,240</span>
                            </div>
                        </div>
                        <div className="btngroup flex flex-row justify-around">
                            <button className=" bg-[#00C951] flex-1 py-2  text-white rounded-lg mr-2 hover:opacity-90 transition">
                                <div className="flex items-center justify-center gap-3">
                                    <Eye className="h-4" />
                                    View Details</div>
                            </button>


                        </div>
                    </div>
            </main>
        </SidebarLayout>
    );
}

export default Analytics;