import { motion } from "framer-motion";

const LeftSideComponents = () => {
    return (
      <motion.div
        initial={{ x: -40, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className="hidden md:flex flex-col justify-center px-16 bg-linear-to-br  border-r border-black"
      >
        
        <img
          src="signup.png"
          className="mt-10 rounded-2xl shadow-2xl "
        />
      </motion.div>
    );
}
export default LeftSideComponents;