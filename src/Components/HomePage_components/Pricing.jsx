const Pricing = () => {
  return (

      <section id="pricing" className="px-6 md:px-24 py-20 bg-[#050505]">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Pricing Plans</h2>
        <p className="text-gray-400 text-center mb-12">Transparent plans for every size of business.</p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-[#0F0F10] rounded-2xl shadow-md border border-white/6 text-center">
            <div className="text-xl font-semibold text-white">Starter</div>
            <div className="text-3xl font-bold my-4 text-white">₹499<span className="text-sm text-gray-400">/mo</span></div>
            <ul className="text-sm text-gray-400 space-y-2 mb-4">
              <li>30 Ads / month</li>
              <li>Basic analytics</li>
              <li>Email support</li>
            </ul>
            <button className="mt-4 px-5 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-md">Choose</button>
          </div>

          <div className="p-6 bg-linear-to-r from-[#081226] to-[#0b0820] rounded-2xl shadow-2xl border-2 border-blue-400 text-center">
            <div className="text-xl font-semibold text-white">Professional</div>
            <div className="text-3xl font-bold my-4 text-white">₹999<span className="text-sm text-gray-400">/mo</span></div>
            <ul className="text-sm text-gray-400 space-y-2 mb-4">
              <li>Unlimited ads</li>
              <li>Advanced analytics</li>
              <li>Priority support</li>
            </ul>
            <button className="mt-4 px-5 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-md">Choose</button>
          </div>

          <div className="p-6 bg-[#0F0F10] rounded-2xl shadow-md border border-white/6 text-center">
            <div className="text-xl font-semibold text-white">Agency</div>
            <div className="text-3xl font-bold my-4 text-white">₹4999<span className="text-sm text-gray-400">/mo</span></div>
            <ul className="text-sm text-gray-400 space-y-2 mb-4">
              <li>Multi-client dashboard</li>
              <li>Automated reporting</li>
              <li>Dedicated manager</li>
            </ul>
            <button className="mt-4 px-5 py-2 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-md">Choose</button>
          </div>
        </div>
      </section>
  );
}
export default Pricing;