import React, { useEffect, useState } from 'react';
import { Facebook, MessageCircle } from 'lucide-react';
import SidebarLayout from '../Sidebar/Sidebar';
import ListofPages from './ListofPages';
import { useDispatch, useSelector } from 'react-redux';
import { setActivateTab } from '../Redux/TabsChangeLinkAccount/TabsChangeRedux';

const LinkAccountPage = () => {
   const dispatch = useDispatch();
  const ActiveTab = useSelector((state)=>state.tabsActivate.tabs)  
  const [accounts, setAccounts] = useState({
    facebook: false,
    whatsapp: false
  });
  const tabs = ['Linked Accounts', 'List of Pages', 'Billing Status'];
  const billingHistory = [
    { date: 'December 2024', amount: '29.99', plan: 'Premium' },
    { date: 'November 2024', amount: '29.99', plan: 'Premium' },
    { date: 'October 2024', amount: '29.99', plan: 'Premium' },
    { date: 'September 2024', amount: '19.99', plan: 'Basic' }
  ];

  const APP_ID = "2656339064721682";
  const REDIRECT_URI = "https://adsreacher.com/link-accounts";
  const SCOPES = [
    "ads_management",
    "ads_read",
    "business_management",
    "pages_show_list",
    "pages_read_engagement",
    "instagram_basic",
    "instagram_manage_insights",
    "whatsapp_business_management",
    "whatsapp_business_messaging"
  ].join(",");


  function changeTabs(tabsIndex){
    //setActiveTab(tabsIndex);
     dispatch(setActivateTab({tabs:tabsIndex}));
  }

  // Check URL params for OAuth callback
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");
    const responseType = urlParams.get("state");

    if (code && responseType === "connect_fb") {
      setAccounts(prev => ({
        ...prev,
        facebook: true
      }));
      // Clean URL
      window.history.replaceState({}, '', window.location.pathname);
    }
  }, []);

  const handleConnectFacebook = () => {
    const oauthURL = `https://www.facebook.com/v21.0/dialog/oauth?client_id=${APP_ID}&redirect_uri=${encodeURIComponent(
      REDIRECT_URI
    )}&scope=${SCOPES}&response_type=code&state=connect_fb`;
    window.location.href = oauthURL;
  };

  const handleConnectWhatsApp = () => {
    // WhatsApp connection logic here
    setAccounts(prev => ({
      ...prev,
      whatsapp: !prev.whatsapp
    }));
  };

  const toggleAccount = (account) => {
    if (account === 'facebook') {
      if (accounts.facebook) {
        // Disconnect
        setAccounts(prev => ({ ...prev, facebook: false }));
      } else {
        // Connect via OAuth
        handleConnectFacebook();
      }
    } else if (account === 'whatsapp') {
      handleConnectWhatsApp();
    }
  };

  return (
    <SidebarLayout>
    <div className="min-h-screen bg-black text-white">
      {/* Top Navigation */}
      <div className="border-b border-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="flex gap-4 sm:gap-6 md:gap-8 overflow-x-auto">
            {tabs.map((tab, index) => (
              <button
                key={index}
                onClick={() => changeTabs(index)}
                className={`relative pb-3 sm:pb-4 text-sm sm:text-base whitespace-nowrap transition-all duration-300 ${
                  ActiveTab === index
                    ? 'text-white font-medium'
                    : 'text-gray-600 hover:text-gray-400'
                }`}
              >
                {tab}
                {ActiveTab === index && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-white"></div>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto mt-4 sm:mt-6 md:mt-8 px-4 sm:px-6">
        {/* Linked Accounts */}
        {ActiveTab === 0 && (
          <div className="max-w-4xl">
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold">Link Accounts</h3>
            <p className="text-gray-600 text-sm sm:text-base md:text-lg mb-8 sm:mb-12 md:mb-16">Connect your social media accounts</p>
            
            <div className="space-y-4 sm:space-y-6">
              {/* Facebook */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-blue-600/0 via-blue-600/5 to-blue-600/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center  flex-row gap-4  w-full justify-between p-4  border border-gray-900 rounded-2xl sm:rounded-3xl group-hover:border-blue-900 transition-all">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <Facebook size={24} className="sm:hidden" strokeWidth={1.5} />
                      <Facebook size={28} className="hidden sm:block md:hidden" strokeWidth={1.5} />
                      <Facebook size={32} className="hidden md:block" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-0.5 sm:mb-1">Facebook</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {accounts.facebook ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleAccount('facebook')}
                    className={`px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all ${
                      accounts.facebook
                        ? 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {accounts.facebook ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              </div>

              {/* WhatsApp */}
              <div className="group relative overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-r from-green-600/0 via-green-600/5 to-green-600/0 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative flex items-center  flex-row gap-4  w-full justify-between p-4  border border-gray-900 rounded-2xl sm:rounded-3xl group-hover:border-blue-900 transition-all">
                  <div className="flex items-center gap-3 sm:gap-4 md:gap-6">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-green-600 rounded-xl sm:rounded-2xl flex items-center justify-center">
                      <MessageCircle size={24} className="sm:hidden" strokeWidth={1.5} />
                      <MessageCircle size={28} className="hidden sm:block md:hidden" strokeWidth={1.5} />
                      <MessageCircle size={32} className="hidden md:block" strokeWidth={1.5} />
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl md:text-2xl font-medium mb-0.5 sm:mb-1">WhatsApp</h3>
                      <p className="text-gray-600 text-sm sm:text-base">
                        {accounts.whatsapp ? 'Connected' : 'Not connected'}
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={() => toggleAccount('whatsapp')}
                    className={`px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all ${
                      accounts.whatsapp
                        ? 'bg-gray-900 text-gray-400 hover:bg-gray-800'
                        : 'bg-white text-black hover:bg-gray-200'
                    }`}
                  >
                    {accounts.whatsapp ? 'Disconnect' : 'Connect'}
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* List of Pages */}
        {ActiveTab === 1 && (
          <ListofPages></ListofPages>
        )}

        {/* Billing Status */}
        {ActiveTab === 2 && (
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
        )}
      </div>
    </div>
    </SidebarLayout>
  );
};

export default LinkAccountPage;