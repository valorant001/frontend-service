import React from "react";
import { motion } from "framer-motion";
import LeftSideComponents from "../Components/Login_components/LeftSideComponents";

export default function LoginPage() {
  return (
    <div className="min-h-screen w-full bg-[#050506] grid grid-cols-1 md:grid-cols-2">
     <LeftSideComponents/>

      {/* RIGHT SIDE – LOGIN FORM */}
      <div className="flex items-center justify-center px-6 py-20 text-gray-200">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-[#0B0B0B] p-10 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-xl"
        >
          <h1 className="text-3xl font-bold text-center mb-8 text-white">Welcome Back</h1>

          <form className="space-y-6">
            <div>
              <label className="text-sm text-gray-400">Email</label>
              <input
                type="email"
                className="w-full mt-2 p-3 rounded-xl bg-[#111] border border-white/10 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400">Password</label>
              <input
                type="password"
                className="w-full mt-2 p-3 rounded-xl bg-[#111] border border-white/10 text-white focus:outline-none focus:border-blue-500"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex justify-between text-sm text-gray-400">
              <a href="#" className="hover:text-white transition">Forgot Password?</a>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold shadow-lg hover:opacity-90 transition"
            >
              Login
            </button>
          </form>

          <p className="text-center text-gray-400 text-sm mt-6">
            Don't have an account?{' '}
            <a href="#" className="text-blue-400 hover:underline">Sign Up</a>
          </p>
        </motion.div>
      </div>

    </div>
  );
}
