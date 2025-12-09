import { motion } from "framer-motion";

const LiveCampaign = () => {
  const features = [
    {
      title: "Instant Visual Feedback",
      description: "Every change you make updates your mock ad instantly so you know exactly how it will look.",
    },
    {
      title: "Platform-Based Format",
      description: "AdsReacher automatically adapts your ad for WhatsApp, Instagram & Google layouts.",
    },
    {
      title: "Smart Copy Suggestions",
      description: "Your captions are enhanced in real-time for better engagement and clicks.",
    },
  ];

  return (
    <section className="px-6 md:px-24 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            See Your Ad Come to Life
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Real-time preview that updates instantly as you make changes
          </p>
        </motion.div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Ad Preview */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="bg-zinc-950 border border-zinc-800 rounded-3xl p-8 shadow-2xl">
              <img
                src="ModernUI.png"
                alt="Live Ad Preview"
                className="rounded-2xl w-full"
              />
            </div>
            {/* Glow Effect */}
            <div className="absolute inset-0 bg-linear-to-br from-blue-500/10 to-indigo-500/10 rounded-3xl blur-3xl -z-10" />
          </motion.div>

          {/* Features List */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-blue-400 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LiveCampaign;