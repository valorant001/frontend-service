import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate();
  return (
     <header className="relative  overflow-hidden px-6 md:px-24 pt-24 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute -top-44 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-linear-to-br from-blue-700/10 to-indigo-700/5 rounded-full blur-3xl opacity-30 pointer-events-none"
        />

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-4xl md:text-6xl font-extrabold max-w-4xl mx-auto text-white"
        >
         Run Your Ads Easily —{' '}
          <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 to-indigo-500">No Expertise Needed</span>
        </motion.h1>

        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
        >
          AdReacher helps anyone create and publish ads across WhatsApp, Meta, Instagram & Google in minutes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-10 flex justify-center gap-4"
        >
          <button
          onClick={() => navigate('/login')}
          className="px-8 py-3 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-xl shadow-xl hover:scale-[1.02] transition">Get started</button>
          {/* <button className="px-8 py-3 bg-[#0B0B0B] rounded-xl border border-white/8 hover:bg-[#0E0E0E] transition text-gray-300">Book demo</button> */}
        </motion.div>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-14 flex justify-center"
        >
          <div className="w-full max-w-5xl bg-linear-to-br from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-6 shadow-[0_0_40px_rgba(0,0,0,0.6)] border border-white/10 hover:shadow-[0_0_60px_rgba(80,80,255,0.25)] transition-shadow">
            <img src="/dashboard.png" alt="Dashboard preview" className="w-full rounded-2xl shadow-lg" />
          </div>
        </motion.div>
      </header>
  );
}
export default Header;