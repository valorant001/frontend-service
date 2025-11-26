import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, ShoppingCart, DollarSign, TrendingUp, TrendingDown, Calendar, ArrowRight, Eye } from 'lucide-react';

const UserActivity = () => {
    const [customers] = useState([
        {
            id: 1,
            name: "Sarah Johnson",
            email: "sarah.j@example.com",
            totalOrders: 24,
            totalSpent: 3420.50,
            lastActivity: "2 hours ago",
            status: "active",
            trend: "up"
        },
        {
            id: 2,
            name: "Michael Chen",
            email: "mchen@example.com",
            totalOrders: 18,
            totalSpent: 2890.00,
            lastActivity: "1 day ago",
            status: "active",
            trend: "up"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            email: "emily.r@example.com",
            totalOrders: 31,
            totalSpent: 4560.75,
            lastActivity: "3 hours ago",
            status: "active",
            trend: "up"
        },
        {
            id: 4,
            name: "James Wilson",
            email: "jwilson@example.com",
            totalOrders: 12,
            totalSpent: 1850.25,
            lastActivity: "5 days ago",
            status: "inactive",
            trend: "down"
        },
        {
            id: 5,
            name: "Lisa Anderson",
            email: "lisa.a@example.com",
            totalOrders: 27,
            totalSpent: 3980.00,
            lastActivity: "4 hours ago",
            status: "active",
            trend: "up"
        }
    ]);

    const stats = [
        {
            icon: <ShoppingCart className="w-6 h-6" />,
            label: "Total Orders",
            value: "112",
            change: "+20%",
            positive: true,
            color: "from-pink-500 to-purple-600"
        },
        {
            icon: <User className="w-6 h-6" />,
            label: "Active Users",
            value: "4",
            change: "-8%",
            positive: false,
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: <DollarSign className="w-6 h-6" />,
            label: "Revenue",
            value: "$16.7K",
            change: "+18%",
            positive: true,
            color: "from-green-500 to-emerald-600"
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            label: "Growth Rate",
            value: "24.3%",
            change: "-12%",
            positive: false,
            color: "from-red-500 to-orange-600"
        }
    ];

    return (
        <div className="min-h-screen bg-[#0A0A0B]">
    <div className=" space-y-6">

        {/* Header */}
        <div className="space-y-1 text-center sm:text-left">
            <div className="text-2xl sm:text-3xl font-bold text-white">
                Customer Activity Overview
            </div>
            <p className="text-gray-400 text-sm sm:text-base">
                Track and monitor customer engagement and spending patterns
            </p>
        </div>

        {/* Customer List */}
        <div className="bg-[#18181B] rounded-xl border border-gray-800 overflow-hidden">
            <div className="p-4 sm:p-6 border-b border-gray-800">
                <h2 className="text-xl sm:text-2xl font-bold text-white">Recent Activity</h2>
                <p className="text-gray-400 text-sm mt-1">Overview of customer interactions and purchases</p>
            </div>

            <div className="">
                <div className="space-y-3">
                    {customers.map((customer) => (
                        <div
                            key={customer.id}
                            className="flex flex-wrap sm:flex-nowrap sm:justify-between gap-4 items-center p-2 rounded-lg border border-gray-800 hover:bg-[#1F1F23] transition"
                        >
                            <div className="flex items-center space-x-4 flex-1">
                                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-linear-to-br from-blue-500 to-purple-600 flex items-center justify-center text-white font-semibold">
                                    {customer?.name?.split(' ')?.map(n => n[0]).join('')}
                                </div>
                                <div>
                                    <h3 className="text-white font-semibold text-sm sm:text-base">{customer.name}</h3>
                                    <p className="text-gray-400 text-xs sm:text-sm">{customer.email}</p>
                                </div>
                            </div>

                            {/* Orders (Hidden on small screens) */}
                            <div className="text-center hidden sm:block">
                                <p className="text-xs text-gray-500">Orders</p>
                                <p className="text-white font-semibold">{customer.totalOrders}</p>
                            </div>

                            {/* Total Spent */}
                            <div className="text-center">
                                <p className="text-xs text-gray-500">Total Spent</p>
                                <p className="text-green-500 font-semibold text-md">
                                    ${customer.totalSpent?.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                                </p>
                            </div>

                            {/* Last Active (Hide on mobile) */}
                            <div className="hidden md:block text-center">
                                <p className="flex items-center gap-1 text-xs text-gray-500 justify-center">
                                    <Calendar className="h-3 w-3" />
                                    Last Active
                                </p>
                                <p className="text-gray-300 text-sm">{customer.lastActivity}</p>
                            </div>

                            {/* Status + Trend */}
                            <div className="flex items-center gap-2">
                                <Badge
                                    className={`px-2 py-1 text-xs ${
                                        customer.status === "active"
                                            ? "bg-green-500/10 text-green-500 border-green-500/20"
                                            : "bg-gray-500/10 text-gray-400 border-gray-500/20"
                                    } border`}
                                >
                                    {customer.status}
                                </Badge>

                                {customer.trend === "up" ? (
                                    <TrendingUp className="text-green-500 h-4 w-4" />
                                ) : (
                                    <TrendingDown className="text-red-500 h-4 w-4" />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    </div>
</div>

    );
}

export default UserActivity;