const StartGrowing = () => {
    return (      <section className="px-6 md:px-24 py-28 text-center bg-[#0D0D0D] border-t border-white/6">
        <h2 className="text-4xl font-bold text-white mb-6">Start Growing Your Business Today</h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-10">
          Join 200+ shop owners already using AdEase to run ads easily, affordably, and without hiring a marketer.
        </p>

        <div className="flex justify-center gap-6">
          <button className="px-10 py-4 bg-linear-to-r from-blue-600 to-indigo-600 text-white rounded-2xl text-lg font-semibold shadow-xl hover:opacity-90 transition-transform hover:scale-[1.02]">
            Get Started
          </button>
          <button className="px-10 py-4 bg-[#1A1A1A] rounded-2xl text-lg font-semibold border border-gray-700 hover:bg-[#222] transition text-gray-300">
            Book Demo
          </button>
        </div>
      </section>);
}
export default StartGrowing;