import React, { useState } from "react";
import { User, Shield, Bell, CreditCard, Globe, Moon, LogOut, Trash2, ChevronRight, Check } from "lucide-react";
import SidebarLayout from "../Sidebar/Sidebar";

const Settings = () => {
  return (
    <SidebarLayout>
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a] text-white">
      {/* Header */}
      <div className="border-b border-white/5 bg-black/20 backdrop-blur-xl sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-br from-indigo-500/20 to-purple-500/20 rounded-xl">
              <Shield size={24} className="text-indigo-400"/>
            </div>
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">Settings</h1>
              <p className="text-sm text-gray-400 mt-1">Manage your account and preferences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Profile Settings - Spans 2 columns on large screens */}
          <div className="lg:col-span-2 bg-gradient-to-br from-[#1a1a1a] to-[#161616] p-6 sm:p-8 rounded-3xl border border-white/5 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-500/10 rounded-lg">
                <User size={20} className="text-blue-400"/>
              </div>
              <h2 className="text-xl font-semibold">Profile Information</h2>
            </div>

            <div className="space-y-5">
              <InputField label="Full Name" placeholder="Enter your name" />
              <InputField label="Email Address" type="email" placeholder="name@gmail.com" />
              <InputField label="Business Name" placeholder="Company / Store Name" />
              
              <div className="pt-4">
                <button className="w-full sm:w-auto px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all duration-300">
                  Save Changes
                </button>
              </div>
            </div>
          </div>

          {/* Security Card */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] p-6 rounded-3xl border border-white/5 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Shield size={20} className="text-red-400"/>
              </div>
              <h2 className="text-xl font-semibold">Security</h2>
            </div>

            <div className="space-y-3">
              <SettingButton label="Change Password" />
              <ToggleButton label="Two-Factor Auth" enabled={true} />
            </div>

            <div className="mt-4 p-3 bg-emerald-500/5 border border-emerald-500/20 rounded-xl">
              <p className="text-xs text-emerald-400 flex items-center gap-2">
                <Check size={14}/> Account secured with 2FA
              </p>
            </div>
          </div>

          {/* Notifications */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] p-6 rounded-3xl border border-white/5 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <Bell size={20} className="text-yellow-400"/>
              </div>
              <h2 className="text-xl font-semibold">Notifications</h2>
            </div>

            <div className="space-y-3">
              <SettingToggle label="Email Updates" />
              <SettingToggle label="Low Balance Alerts" defaultOn />
              <SettingToggle label="Campaign Alerts" />
              <SettingToggle label="WhatsApp Alerts" defaultOn />
            </div>
          </div>

          {/* Payment */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] p-6 rounded-3xl border border-white/5 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-500/10 rounded-lg">
                <CreditCard size={20} className="text-purple-400"/>
              </div>
              <h2 className="text-xl font-semibold">Billing</h2>
            </div>

            <div className="space-y-3">
              <SettingButton label="Payment Methods" />
              <SettingButton label="Payment History" />
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-gradient-to-br from-[#1a1a1a] to-[#161616] p-6 rounded-3xl border border-white/5 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-green-500/10 rounded-lg">
                <Globe size={20} className="text-green-400"/>
              </div>
              <h2 className="text-xl font-semibold">Preferences</h2>
            </div>

            <div className="space-y-3">
              <SettingToggle label="Dark Mode" defaultOn icon={<Moon size={16}/>}/>
              <SettingButton label="Language: English" />
            </div>
          </div>

          {/* Danger Zone - Full width on mobile, spans remaining space */}
          <div className="lg:col-span-3 bg-gradient-to-br from-red-950/20 to-[#161616] p-6 sm:p-8 rounded-3xl border border-red-500/20 shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-red-500/10 rounded-lg">
                <Trash2 size={20} className="text-red-500"/>
              </div>
              <div>
                <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>
                <p className="text-sm text-gray-400 mt-1">Irreversible actions</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <button className="flex-1 px-6 py-3 bg-red-500/10 text-red-300 rounded-xl border border-red-500/30 hover:bg-red-500/20 transition-all duration-300 font-medium">
                Delete Account
              </button>
              <button className="flex items-center justify-center gap-2 px-6 py-3 bg-white/5 text-gray-300 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 font-medium">
                <LogOut size={18}/> Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </SidebarLayout>
  );
};

/* Input Field Component */
const InputField = ({ label, type = "text", placeholder }) => {
  return (
    <div>
      <label className="text-sm font-medium text-gray-400 mb-2 block">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full bg-[#0f0f0f] p-3 rounded-xl border border-white/10 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 outline-none transition-all duration-300"
      />
    </div>
  );
};

/* Setting Button Component */
const SettingButton = ({ label }) => {
  return (
    <button className="w-full flex justify-between items-center bg-[#0f0f0f] p-3.5 rounded-xl border border-white/5 hover:bg-[#1a1a1a] hover:border-white/10 transition-all duration-300 group">
      <span className="text-sm font-medium">{label}</span>
      <ChevronRight size={18} className="text-gray-500 group-hover:text-gray-300 transition-colors"/>
    </button>
  );
};

/* Toggle Button Component */
const ToggleButton = ({ label, enabled }) => {
  return (
    <button className="w-full flex justify-between items-center bg-[#0f0f0f] p-3.5 rounded-xl border border-white/5 hover:bg-[#1a1a1a] hover:border-white/10 transition-all duration-300">
      <span className="text-sm font-medium">{label}</span>
      <div className={`px-3 py-1 rounded-full text-xs font-semibold ${enabled ? 'bg-emerald-500/20 text-emerald-400' : 'bg-gray-500/20 text-gray-400'}`}>
        {enabled ? 'Enabled' : 'Disabled'}
      </div>
    </button>
  );
};

/* Toggle Component */
const SettingToggle = ({ label, defaultOn = false, icon }) => {
  const [isOn, setIsOn] = useState(defaultOn);

  return (
    <div className="flex justify-between items-center bg-[#0f0f0f] p-3.5 rounded-xl border border-white/5 hover:bg-[#1a1a1a] hover:border-white/10 transition-all duration-300">
      <span className="flex items-center gap-2 text-sm font-medium">
        {icon && <span className="text-gray-400">{icon}</span>}
        {label}
      </span>
      <button
        onClick={() => setIsOn(!isOn)}
        className={`relative w-11 h-6 rounded-full transition-all duration-300 ${
          isOn ? 'bg-gradient-to-r from-emerald-500 to-emerald-600' : 'bg-gray-700'
        }`}
      >
        <div
          className={`absolute w-5 h-5 bg-white rounded-full top-0.5 transition-all duration-300 shadow-lg ${
            isOn ? 'left-5' : 'left-0.5'
          }`}
        />
      </button>
    </div>
  );
};

export default Settings;