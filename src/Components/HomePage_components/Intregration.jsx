const Integration = () => {
  const integrations = [
    { name: "WhatsApp", img: "whatsapp.png" },
    { name: "Meta", img: "meta.png" },
    { name: "Instagram", img: "instagram.png" },
    { name: "Google", img: "googleads.png" },
  ];

  return (
    <section id="integrations" className="px-6 md:px-24 py-32 bg-black">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight">
            Integrations
          </h2>
          <p className="text-gray-500 text-lg">
            Connect with platforms you already use
          </p>
        </div>

        {/* Integration Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {integrations.map((integration) => (
            <div
              key={integration.name}
              className="group relative bg-zinc-950 hover:bg-zinc-900 border border-zinc-800 hover:border-zinc-700 rounded-2xl p-8 transition-all duration-300 cursor-pointer"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 flex items-center justify-center">
                  <img
                    src={integration.img}
                    alt={integration.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-110"
                  />
                </div>
                <span className="text-sm font-medium text-zinc-400 group-hover:text-white transition-colors">
                  {integration.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Integration;