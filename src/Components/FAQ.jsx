const FAQ = () => {
  return (
          <section className="px-6 md:px-24 py-16">
        <h2 className="text-2xl font-bold text-center mb-6 text-white">Frequently Asked Questions</h2>
        <div className="max-w-4xl mx-auto space-y-6 text-gray-400">
          <div>
            <div className="font-semibold">How does AdEase publish my ads?</div>
            <div>We use official advertising APIs (Meta, Google) and follow all policies.</div>
          </div>

          <div>
            <div className="font-semibold">Do I need a Google Ads account?</div>
            <div>No — you can run ads through AdEase manager account or connect your own account.</div>
          </div>

          <div>
            <div className="font-semibold">How does billing work?</div>
            <div>We support wallet top-ups and transparent billing with invoices.</div>
          </div>
        </div>
      </section>
  );
}
export default FAQ;