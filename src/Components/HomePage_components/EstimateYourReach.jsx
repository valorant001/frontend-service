import { useState } from "react";

const EstimateYourReach = () => {
      const [budget, setBudget] = useState(500);
  const [days, setDays] = useState(7);

  const estimatedReach = Math.round((budget * days) / 2);
  return (
          <section id="roi" className="px-6 md:px-24 py-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h2 className="text-3xl font-bold text-white mb-4">Estimate Your Reach</h2>
            <p className="text-gray-400 mb-6">Use this simple calculator to estimate how many people your campaign could reach.</p>

            <div className="flex gap-3 items-center mb-4">
              <label className="text-sm text-gray-300 w-28">Daily budget</label>
              <input type="number" value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full md:w-48 p-3 rounded-lg bg-[#0B0B0B] border border-white/6 text-white" />
            </div>

            <div className="flex gap-3 items-center mb-4">
              <label className="text-sm text-gray-300 w-28">Days</label>
              <input type="number" value={days} onChange={(e) => setDays(Number(e.target.value))} className="w-full md:w-48 p-3 rounded-lg bg-[#0B0B0B] border border-white/6 text-white" />
            </div>

            <div className="mt-4 p-4 rounded-lg bg-[#0F0F10] border border-white/6">
              <div className="text-sm text-gray-400">Estimated total spend</div>
              <div className="text-2xl font-bold text-white">₹{budget * days}</div>
              <div className="text-sm text-gray-400 mt-2">Estimated reach</div>
              <div className="text-2xl font-bold text-white">{estimatedReach} people</div>
            </div>
          </div>

          <div className="p-6 bg-[#0F0F10] rounded-2xl border border-white/6 shadow-md">
            <h3 className="text-xl font-semibold text-white mb-2">Why this matters</h3>
            <p className="text-gray-400">Start small and scale. Our smart budget engine optimizes delivery so even low spends can produce meaningful results.</p>

            <div className="mt-6 grid grid-cols-1 gap-3">
              <div className="p-3 rounded-lg bg-[#0A0A0A] border border-white/6 text-gray-300">Automatic bidding and placement selection</div>
              <div className="p-3 rounded-lg bg-[#0A0A0A] border border-white/6 text-gray-300">Clear reporting and ROI metrics</div>
              <div className="p-3 rounded-lg bg-[#0A0A0A] border border-white/6 text-gray-300">Wallet & invoicing built-in</div>
            </div>
          </div>
        </div>
      </section>
  );}
export default EstimateYourReach;