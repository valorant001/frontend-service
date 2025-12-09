const Footer = () => {
    return (
              <footer className="px-6 md:px-24 py-16 bg-black/80 border-t border-white/10 text-gray-300">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">AdsReacher</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                The all‑in‑one advertising platform for small businesses. Publish ads everywhere in one click.
              </p>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Product</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#features" className="hover:text-white transition">Features</a></li>
                <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
                <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
                <li><a href="#integrations" className="hover:text-white transition">Integrations</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#about" className="hover:text-white transition">About Us</a></li>
                <li><a href="#contact" className="hover:text-white transition">Contact</a></li>
                <li><a href="#careers" className="hover:text-white transition">Careers</a></li>
                <li><a href="#blog" className="hover:text-white transition">Blog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-3">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="/privacy-policy" className="hover:text-white transition">Privacy Policy</a></li>
                <li><a href="/TermsAndConditions" className="hover:text-white transition">Terms of Service</a></li>
                <li><a href="#refunds" className="hover:text-white transition">Refund Policy</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center text-xs text-gray-500">
            © {new Date().getFullYear()} AdsReacher — All rights reserved.
          </div>
        </footer>
    );
}
export default Footer;