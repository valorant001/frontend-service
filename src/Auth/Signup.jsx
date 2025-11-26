import React, { useState } from 'react';

 const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessName: '',
    phone: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    alert('Account created successfully!');
  };

  return (
    <div className="min-h-screen bg-black text-white flex">
      {/* Left Section */}
      <div className="flex-1 flex flex-col justify-center px-20">
        <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-green-400 rounded-full mb-10"></div>
        
        <h1 className="text-7xl font-bold mb-5 tracking-tight">AdReacher</h1>
        
        <p className="text-xl text-gray-400 leading-relaxed max-w-lg">
          Run ads across WhatsApp, Meta, Instagram & Google — all from one simple dashboard.
        </p>
      </div>

      {/* Right Section */}
      <div className="flex-1 flex items-center justify-center p-10">
        <div className="bg-neutral-900 border border-neutral-800 rounded-3xl p-12 w-full max-w-2xl">
          <h2 className="text-4xl font-bold mb-8 text-center">Create Account</h2>
          
          <div>
            {/* 2x2 Grid for first 4 fields */}
            <div className="grid grid-cols-2 gap-5 mb-5">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-neutral-750 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-neutral-750 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Business Name</label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleChange}
                  placeholder="Enter your business name"
                  className="w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-neutral-750 transition-all"
                />
              </div>

              <div>
                <label className="block text-sm text-gray-400 mb-2">Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-neutral-750 transition-all"
                />
              </div>
            </div>

            {/* Password field full width */}
            <div className="mb-5">
              <label className="block text-sm text-gray-400 mb-2">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Create a password"
                className="w-full px-4 py-3.5 bg-neutral-800 border border-neutral-700 rounded-xl text-white placeholder-gray-600 focus:outline-none focus:border-blue-500 focus:bg-neutral-750 transition-all"
              />
            </div>

            <button
              onClick={handleSubmit}
              className="w-full py-4 bg-blue-600 hover:bg-blue-700 rounded-xl text-white font-semibold text-base transition-all hover:-translate-y-0.5 mt-6"
            >
              Sign Up
            </button>
          </div>

          <p className="text-center text-gray-400 mt-6">
            Already have an account?{' '}
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors">
              Login
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
export default Signup;