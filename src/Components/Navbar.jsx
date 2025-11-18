import { motion } from "framer-motion";

const NavigationBar = () => {
  return (
         <motion.nav
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        whileHover={{ backgroundColor: 'rgba(0,0,0,0.75)' }}
         className="w-full px-6 md:px-24 py-5 flex items-center justify-between bg-black/60 backdrop-blur-lg border-b border-white/6 sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-4">
          <div className="text-2xl font-bold tracking-tight text-white">AdEase</div>
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300 ml-6">
            <a href="#features" className="hover:text-white transition">Features</a>
            <a href="#how" className="hover:text-white transition">How it works</a>
            <a href="#pricing" className="hover:text-white transition">Pricing</a>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="px-4 py-2 text-gray-300 hover:text-white transition">Sign in</button>
          <button className="px-5 py-2 rounded-lg bg-linear-to-r from-blue-600 to-indigo-600 text-white shadow-lg hover:opacity-95 transition">Sign up</button>
        </div>
      </motion.nav>
  );
}
export default NavigationBar;