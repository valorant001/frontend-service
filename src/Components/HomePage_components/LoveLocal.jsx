const LoveLocal = () => {
    return (      <section className="px-6 md:px-24 py-28 bg-[#070707] border-t border-white/6">
        <h2 className="text-4xl font-bold text-center text-white mb-4">Loved by Local Businesses</h2>
        <p className="text-gray-400 text-center mb-12">Real stories from real shop owners using AdEase every day.</p>

        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-8 bg-[#0F0F10] rounded-2xl shadow-lg border border-white/6">
            <p className="text-gray-300 italic">“In 24 hours my ad reached more people than I could talk to in a month. Zero learning curve.”</p>
            <div className="mt-6 text-white font-semibold">Amit — Mobile Shop Owner</div>
          </div>

          <div className="p-8 bg-[#0F0F10] rounded-2xl shadow-lg border border-white/6">
            <p className="text-gray-300 italic">“I used to depend on agencies. Now I create ads myself in 2 minutes. Sales increased 40%.”</p>
            <div className="mt-6 text-white font-semibold">Pooja — Boutique Owner</div>
          </div>

          <div className="p-8 bg-[#0F0F10] rounded-2xl shadow-lg border border-white/6">
            <p className="text-gray-300 italic">“Best tool for small businesses. Running ads on WhatsApp + Meta without any stress.”</p>
            <div className="mt-6 text-white font-semibold">Rahul — Restaurant Owner</div>
          </div>
        </div>
      </section>);
}
export default LoveLocal;