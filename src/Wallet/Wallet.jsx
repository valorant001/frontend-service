import React from "react";
import { ArrowDownCircle, ArrowUpCircle, Download, Wallet } from "lucide-react";
import SidebarLayout from "../Sidebar/Sidebar";

const transactions = [
  { id: 1, date: "26 Nov 2025", type: "Deposit", amount: "+₹1,500", status: "Successful", color: "text-green-400" },
  { id: 2, date: "25 Nov 2025", type: "Ad Spend", amount: "-₹800", status: "Completed", color: "text-red-400" },
  { id: 3, date: "24 Nov 2025", type: "Refund", amount: "+₹200", status: "Processed", color: "text-blue-400" },
];

const WalletPage = () => {
  return (
    <SidebarLayout>
    <div className="w-full min-h-screen bg-[#0f0f0f] text-white p-4 sm:p-6 lg:p-8">
      
      {/* Page Title */}
      <div className="flex items-center gap-2 mb-4 sm:mb-6">
        <Wallet className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400" />
        <div className="text-[2rem] md:text-4xl font-semibold">Wallet</div>
      </div>

      {/* Wallet Balance Card */}
      <div className="bg-[#1a1a1a] rounded-2xl p-5 sm:p-6 mb-6 sm:mb-8 border border-white/10">
        <p className="text-gray-400 text-sm">Available Balance</p>
        <h2 className="text-3xl sm:text-4xl font-bold my-2">₹2,500</h2>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-4">
          <button className="w-full sm:w-auto px-6 py-2.5 bg-linear-to-r from-[#4c6ef5] to-[#9775fa] rounded-xl text-white font-medium hover:opacity-90 transition">
            Add Money
          </button>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-10">
        <div className="bg-[#141414] py-5 sm:py-6 px-4 sm:px-5 rounded-xl border border-white/5">
          <p className="text-gray-400 text-xs sm:text-sm">Total Money Added</p>
          <h3 className="text-lg sm:text-xl font-bold mt-2">₹5,200</h3>
        </div>
        <div className="bg-[#141414] py-5 sm:py-6 px-4 sm:px-5 rounded-xl border border-white/5">
          <p className="text-gray-400 text-xs sm:text-sm">Total Money Spent on Ads</p>
          <h3 className="text-lg sm:text-xl font-bold mt-2">₹8,500</h3>
        </div>
        <div className="bg-[#141414] py-5 sm:py-6 px-4 sm:px-5 rounded-xl border border-white/5 sm:col-span-2 lg:col-span-1">
          <p className="text-gray-400 text-xs sm:text-sm">Total Refunds Received</p>
          <h3 className="text-lg sm:text-xl font-bold mt-2">₹400</h3>
        </div>
      </div>

      {/* Transaction History */}
      <div className="bg-[#141414] border border-white/5 rounded-xl overflow-hidden">
        <div className="p-4 sm:p-5 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 border-b border-white/10">
          <h2 className="text-base sm:text-lg font-semibold">Transaction History</h2>
          <button className="flex items-center gap-1 px-3 py-1.5 text-xs sm:text-sm bg-[#222] rounded-md hover:bg-[#333] whitespace-nowrap">
            <Download size={15}/> Download Statement
          </button>
        </div>

        {/* Desktop Table View */}
        <div className="hidden md:block overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="text-gray-400 text-sm border-b border-white/10">
                <th className="py-3 px-5">Date</th>
                <th className="py-3 px-5">Type</th>
                <th className="py-3 px-5">Amount</th>
                <th className="py-3 px-5">Status</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((t) => (
                <tr key={t.id} className="border-b border-white/5 hover:bg-white/5 transition">
                  <td className="py-3 px-5 text-sm">{t.date}</td>
                  <td className="py-3 px-5 flex items-center gap-2 text-sm">
                    {t.type === "Deposit" && <ArrowUpCircle size={18} className="text-green-400" />}
                    {t.type === "Ad Spend" && <ArrowDownCircle size={18} className="text-red-400" />}
                    {t.type === "Refund" && <ArrowUpCircle size={18} className="text-blue-400" />}
                    {t.type}
                  </td>
                  <td className={`py-3 px-5 font-medium text-sm ${t.color}`}>{t.amount}</td>
                  <td className="py-3 px-5 text-gray-300 text-sm">{t.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Card View */}
        <div className="md:hidden divide-y divide-white/5">
          {transactions.map((t) => (
            <div key={t.id} className="p-4 hover:bg-white/5 transition">
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center gap-2">
                  {t.type === "Deposit" && <ArrowUpCircle size={18} className="text-green-400" />}
                  {t.type === "Ad Spend" && <ArrowDownCircle size={18} className="text-red-400" />}
                  {t.type === "Refund" && <ArrowUpCircle size={18} className="text-blue-400" />}
                  <span className="font-medium text-sm">{t.type}</span>
                </div>
                <span className={`font-bold text-sm ${t.color}`}>{t.amount}</span>
              </div>
              <div className="flex justify-between items-center text-xs text-gray-400">
                <span>{t.date}</span>
                <span className="text-gray-300">{t.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </SidebarLayout>
  );
}

export default WalletPage;