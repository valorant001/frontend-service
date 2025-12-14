const GetBillingStatus = () => {
     const billingHistory = [
    { date: 'December 2024', amount: '29.99', plan: 'Premium' },
    { date: 'November 2024', amount: '29.99', plan: 'Premium' },
    { date: 'October 2024', amount: '29.99', plan: 'Premium' },
    { date: 'September 2024', amount: '19.99', plan: 'Basic' }
  ];
    return (
        <div className="max-w-4xl">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-4">Billing Status</h1>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">Manage your subscription and payments</p>
            
            {/* Current Plan */}
            <div className="relative p-8 sm:p-10 md:p-14 mb-8 sm:mb-12 md:mb-16 border border-gray-900 rounded-2xl sm:rounded-3xl overflow-hidden">
              <div className="absolute inset-0 bg-linear-to-br from-blue-600/10 to-purple-600/10"></div>
              <div className="relative">
                <p className="text-gray-600 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg">Active Plan</p>
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2 sm:mb-3 md:mb-4">Premium</h2>
                <div className="flex items-baseline gap-2 mb-6 sm:mb-8 md:mb-10">
                  <span className="text-3xl sm:text-4xl md:text-5xl font-bold">$29</span>
                  <span className="text-gray-600 text-base sm:text-lg md:text-xl">/month</span>
                </div>
                <button className="px-6 sm:px-8 md:px-10 py-3 sm:py-3.5 md:py-4 text-sm sm:text-base md:text-lg bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all">
                  Change Plan
                </button>
              </div>
            </div>

            {/* Billing History */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-xl sm:text-2xl font-medium mb-4 sm:mb-6 md:mb-8">Transaction History</h3>
              {billingHistory.map((bill, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between p-4 sm:p-6 md:p-8 border border-gray-900 rounded-xl sm:rounded-2xl hover:border-gray-800 transition-all"
                >
                  <div>
                    <p className="font-medium text-sm sm:text-base md:text-lg mb-0.5 sm:mb-1">{bill.plan}</p>
                    <p className="text-gray-600 text-xs sm:text-sm md:text-base">{bill.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xl sm:text-2xl md:text-3xl font-bold mb-0.5 sm:mb-1">${bill.amount}</p>
                    <p className="text-green-500 text-xs sm:text-sm md:text-base">✓ Paid</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
    );
};

export default GetBillingStatus;