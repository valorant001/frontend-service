import { motion } from "framer-motion";

const WhyAdEase = () => {
  const features = [
    {
      icon: "⚡",
      title: "One-Click Publishing",
      description: "Push ads to all platforms instantly.",
    },
    {
      icon: "📊",
      title: "Visual Analytics",
      description: "Track performance in one simple dashboard.",
    },
    {
      icon: "💡",
      title: "Smart Budgeting",
      description: "Automatic spend optimization.",
    },
  ];

  return (
    <section id="features" className="px-6 md:px-24 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
              Why AdEase?
            </h2>
            <p className="text-gray-500 text-lg mb-12">
              Simple yet powerful dashboard with one-click publishing, analytics and automated budgeting
            </p>

            <div className="space-y-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Preview Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-6 shadow-2xl">
              <img
                src="view.png"
                alt="Feature preview"
                className="w-full rounded-2xl"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-tl from-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyAdEase;