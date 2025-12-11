import React, { useState } from 'react';
import { Camera, Upload, Instagram, Facebook, MessageCircle, Check, X } from 'lucide-react';
import SidebarLayout from '../Sidebar/Sidebar';

export default function CreateAds() {
  const [uploadedImage, setUploadedImage] = useState(null);
  const [caption, setCaption] = useState('');
  const [selectedBudget, setSelectedBudget] = useState(null);
  const [customBudget, setCustomBudget] = useState('');
  const [selectedPlatforms, setSelectedPlatforms] = useState([]);

  const budgetOptions = [
    { value: 100, label: '₹100' },
    { value: 150, label: '₹150' },
    { value: 250, label: '₹250' },
    { value: 500, label: '₹500' },
  ];

  const platforms = [
    { id: 'instagram', name: 'Instagram', icon: Instagram },
    { id: 'facebook', name: 'Facebook', icon: Facebook },
    { id: 'whatsapp', name: 'WhatsApp', icon: MessageCircle },
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUploadedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const togglePlatform = (platformId) => {
    setSelectedPlatforms(prev =>
      prev.includes(platformId)
        ? prev.filter(id => id !== platformId)
        : [...prev, platformId]
    );
  };

  const captionSuggestions = [
    "Winter Sale — 30% Off",
    "Fresh fruits available daily",
    "Hair Spa only ₹199"
  ];

  const isFormValid = uploadedImage && caption && (selectedBudget || customBudget) && selectedPlatforms.length > 0;

  return (
    <SidebarLayout>
    <div className=" bg-black text-white">
      <div className="">
        
        {/* Header */}
        <div className="text-center mb-12">
          
          <h2 className="text-3xl font-bold mb-2">Create New Ad</h2>
          <p className="text-gray-400">Fill in the details below to create your ad</p>
        </div>

        {/* Form */}
        <div className="bg-[#0a0a0a] border border-gray-800 rounded-2xl p-3">
          <form className="space-y-8">
            
            {/* Upload Photo Field */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Photo <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">Upload one photo you want to promote</p>
              
              {!uploadedImage ? (
                <label
                  onDrop={handleDrop}
                  onDragOver={(e) => e.preventDefault()}
                  className="block cursor-pointer"
                >
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />
                  <div className="bg-black border-2 border-dashed border-gray-800 rounded-xl p-12 hover:border-gray-700 transition-all text-center">
                    <div className="flex flex-col items-center justify-center">
                      <div className="w-16 h-16 bg-gray-800 rounded-xl flex items-center justify-center mb-4">
                        <Upload className="w-8 h-8 text-gray-400" />
                      </div>
                      <p className="text-sm font-medium mb-1">Click to upload or drag and drop</p>
                      <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </label>
              ) : (
                <div className="bg-black border border-gray-800 rounded-xl p-3">
                  <div className="relative">
                    <img
                      src={uploadedImage}
                      alt="Uploaded"
                      className="w-full h-72 object-cover rounded-lg"
                    />
                    <button
                      type="button"
                      onClick={() => setUploadedImage(null)}
                      className="absolute top-3 right-3 p-2 bg-black/80 hover:bg-black rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Caption Field */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Caption <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">Write a short message for your ad (10-12 words recommended)</p>
              
              <textarea
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
                placeholder="e.g., Winter Sale — 30% Off on All Items"
                className="w-full bg-black border border-gray-800 rounded-xl p-4 text-sm focus:outline-none focus:border-gray-700 transition-all resize-none"
                rows="3"
                maxLength="80"
              />
              <div className="flex justify-between items-center mt-2">
                <p className="text-xs text-gray-500">{caption.split(' ').filter(w => w).length} words</p>
                <p className="text-xs text-gray-600">{caption.length}/80 characters</p>
              </div>

              <div className="mt-4">
                <p className="text-xs text-gray-500 mb-2">Try these:</p>
                <div className="flex flex-wrap gap-2">
                  {captionSuggestions.map((suggestion, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setCaption(suggestion)}
                      className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs transition-colors"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Budget Field */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Budget <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">Select how much you want to spend on this ad</p>

              <div className="grid grid-cols-4 gap-3 mb-4">
                {budgetOptions.map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => {
                      setSelectedBudget(option.value);
                      setCustomBudget('');
                    }}
                    className={`p-5 rounded-xl font-semibold text-base transition-all ${
                      selectedBudget === option.value
                        ? 'bg-blue-600 text-white border-2 border-blue-600'
                        : 'bg-black border border-gray-800 hover:border-gray-700'
                    }`}
                  >
                    {option.label}
                  </button>
                ))}
              </div>

              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-500">₹</span>
                <input
                  type="number"
                  value={customBudget}
                  onChange={(e) => {
                    setCustomBudget(e.target.value);
                    setSelectedBudget(null);
                  }}
                  placeholder="Or enter custom amount"
                  className="w-full bg-black border border-gray-800 rounded-xl p-4 pl-10 text-sm focus:outline-none focus:border-gray-700 transition-all"
                />
              </div>

              <div className="mt-4 flex items-start gap-2 text-xs text-gray-400 bg-blue-600/5 border border-blue-600/20 rounded-xl p-4">
                <span className="text-blue-400">ℹ️</span>
                <p>Your ad will run for 1–7 days depending on your budget. Higher budget = longer duration.</p>
              </div>
            </div>

            {/* Platform Selection */}
            <div>
              <label className="block text-sm font-medium mb-3">
                Platforms <span className="text-red-500">*</span>
              </label>
              <p className="text-xs text-gray-500 mb-3">Select where you want your ad to appear</p>

              <div className="grid grid-cols-3 gap-4">
                {platforms.map((platform) => {
                  const Icon = platform.icon;
                  const isSelected = selectedPlatforms.includes(platform.id);
                  
                  return (
                    <button
                      key={platform.id}
                      type="button"
                      onClick={() => togglePlatform(platform.id)}
                      className={`relative p-6 rounded-xl transition-all text-center ${
                        isSelected
                          ? 'bg-blue-600 border-2 border-blue-600'
                          : 'bg-black border border-gray-800 hover:border-gray-700'
                      }`}
                    >
                      {isSelected && (
                        <div className="absolute top-3 right-3 bg-white text-blue-600 rounded-full p-1">
                          <Check className="w-3.5 h-3.5" />
                        </div>
                      )}
                      <Icon className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm font-medium">{platform.name}</p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Business Details (Read-only) */}
            <div>
              <label className="block text-sm font-medium mb-3 text-gray-400">
                Business Details
              </label>
              <p className="text-xs text-gray-500 mb-3">These details are auto-filled from your profile</p>
              
              <div className="bg-black border border-gray-800 rounded-xl divide-y divide-gray-800">
                <div className="flex justify-between p-4">
                  <span className="text-sm text-gray-500">Business Name</span>
                  <span className="text-sm font-medium">Sharma Electronics</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="text-sm text-gray-500">Phone Number</span>
                  <span className="text-sm font-medium">+91 98765 43210</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="text-sm text-gray-500">Location</span>
                  <span className="text-sm font-medium">Connaught Place, Delhi</span>
                </div>
                <div className="flex justify-between p-4">
                  <span className="text-sm text-gray-500">Category</span>
                  <span className="text-sm font-medium">Electronics & Gadgets</span>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="pt-6 border-t border-gray-800 flex gap-4">
              <button
                type="button"
                className="flex-1 bg-gray-800 hover:bg-gray-700 text-white font-medium py-4 rounded-xl transition-colors"
              >
                Save as Draft
              </button>
              <button
                type="submit"
                disabled={!isFormValid}
                className={`flex-1 font-medium py-4 rounded-xl transition-all ${
                  isFormValid
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                }`}
              >
                Publish Ad
              </button>
            </div>

            {!isFormValid && (
              <p className="text-xs text-center text-gray-500 -mt-2">
                Please fill all required fields to publish your ad
              </p>
            )}
          </form>
        </div>

        {/* Footer */}
        <p className="text-center text-xs text-gray-600 mt-8">
          Your ad will be published across all selected platforms
        </p>
      </div>
    </div>
    </SidebarLayout>
  );
}