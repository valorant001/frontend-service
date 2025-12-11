import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      title: "Upload Your Creative",
      text: "Choose a product photo, banner, or poster. AdsReacher adjusts it automatically.",
    },
    {
      title: "Write a Short Caption",
      text: "Describe your offer in simple language. AdsReacher enhances it for engagement.",
    },
    {
      title: "Set Your Budget",
      text: "Pick any daily budget — even ₹50 works. AdsReacher optimizes it for performance.",
    },
    {
      title: "Publish Everywhere",
      text: "Go live on WhatsApp, Instagram, Facebook & Google with a single tap.",
    },
  ];

  return (
    <section id="how" className="px-6 md:px-24 py-32 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            How It Works
          </h2>
          <p className="text-gray-500 text-lg">
            Four simple steps to launch your campaign
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
              className="group relative"
            >
              <div className="h-full bg-zinc-950 border border-zinc-800 rounded-3xl p-8 hover:border-zinc-700 transition-all duration-300">
                {/* Step Number */}
                <div className="mb-6">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white font-bold text-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-white font-semibold text-lg mb-3 leading-snug">
                  {step.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.text}
                </p>

                {/* Connector Line (hidden on last item) */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-14 -right-3 w-6 h-px bg-linear-to-r from-zinc-800 to-transparent" />
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;