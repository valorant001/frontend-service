import RunningAdsBox from "../Components/DashboardComponents/RunningAdsBox";
import SidebarLayout from "../Sidebar/Sidebar";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Pencil } from 'lucide-react';
import { Trash2 } from 'lucide-react';

const MyAds = () => {
    return (
        <SidebarLayout>
            <main className="flex flex-col items-center md:items-start ">
                <div className="w-full p-4  bg-[#0B0B0B] rounded-xl shadow-sm border border-white/10 ">
                    <div className="flex flex-row justify-between items-center w-full">
                        <p className="text-4xl font-semibold">My Ads</p>
                        <div>
                            <Select>
                                <SelectTrigger className="w-[180px]">
                                    <SelectValue placeholder="Select a Ads" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Fruits</SelectLabel>
                                        <SelectItem value="apple">Running</SelectItem>
                                        <SelectItem value="banana">Completed</SelectItem>
                                        <SelectItem value="blueberry">Rejected</SelectItem>
                                        {/* <SelectItem value="grapes">Scheduled</SelectItem> */}
                                        <SelectItem value="pineapple">By Date</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                        </div>
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
                        <button className=" bg-blue-600 flex-1 py-2  text-white rounded-lg mr-2 hover:opacity-90 transition">
                            <div className="flex items-center justify-center gap-3">
                                <Pencil className="h-4" />
                            Edit Ad</div>
                        </button>
                        <button className=" bg-red-600 flex-1 py-2  text-white rounded-lg hover:opacity-90 transition">
                                <div className="flex items-center justify-center gap-3">
                                      <Trash2 className="h-4" />
                                Delete Ad
                                </div>
                             </button>
                              
                    </div>
                </div>

            </main>
        </SidebarLayout>
    );
}
export default MyAds;