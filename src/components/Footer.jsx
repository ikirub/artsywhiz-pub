import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-14 pb-8 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/circle-logo.png" alt="Artsy Whiz" className="w-10 h-10" />
              <span className="font-bold text-xl">Artsy Whiz</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium art supplies for every level of creator. A portion of every sale supports arts education charities.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-artsy-yellow mb-4 text-sm uppercase tracking-widest">
              Explore
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><Link to="/shop" className="hover:text-white transition-colors">Shop</Link></li>
              <li><Link to="/discover" className="hover:text-white transition-colors">Discover</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">About</Link></li>
            </ul>
          </div>

          {/* Discover */}
          <div>
            <h4 className="font-semibold text-artsy-yellow mb-4 text-sm uppercase tracking-widest">
              Discover
            </h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li>
                <Link to="/discover#charity" className="hover:text-white transition-colors">
                  Choose the Charity
                </Link>
              </li>
              <li>
                <Link to="/discover#faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row justify-between items-center gap-3 text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Artsy Whiz. All rights reserved.</p>
          <p>Made with love for artists everywhere.</p>
        </div>
      </div>
    </footer>
  )
}
