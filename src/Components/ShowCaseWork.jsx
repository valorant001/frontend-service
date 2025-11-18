import { motion } from "framer-motion";

const ShowcaseWork = () => {
  const features = [
    {
      title: "Simple Ad Creation",
      description: "Upload a photo, write a caption, choose a goal — AdEase formats it perfectly.",
    },
    {
      title: "AI Optimization",
      description: "AI improves captions, bidding & delivery to get maximum results.",
    },
    {
      title: "Beginner Friendly",
      description: "Made for shop owners — no marketing experience needed.",
    },
  ];

  return (
    <section className="px-6 md:px-24 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="group"
            >
              <div className="h-full bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ShowcaseWork;