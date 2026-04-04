import { Link } from 'react-router-dom'
import { featured } from '../data/products'

const categories = [
  {
    title: 'Watercolor',
    desc: 'Luminous, flowing, and endlessly expressive. Discover transparent pigments that bloom on wet paper.',
    bg: 'bg-artsy-pink',
    emoji: '💧',
    to: '/shop',
  },
  {
    title: 'Acrylics',
    desc: 'Versatile and vibrant. Build texture, glaze with transparency, or paint flat fields of bold colour.',
    bg: 'bg-artsy-yellow',
    emoji: '🎨',
    to: '/shop',
  },
  {
    title: 'Drawing',
    desc: 'From a first sketch to a finished illustration — pencils, inks, and markers for every hand.',
    bg: 'bg-artsy-gray',
    emoji: '✏️',
    to: '/shop',
  },
  {
    title: 'Oil Painting',
    desc: 'Rich, slow-drying, and deeply rewarding. The classic medium of the masters, now for everyone.',
    bg: 'bg-stone-200',
    emoji: '🖼️',
    to: '/shop',
  },
]

function ProductCard({ product }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col">
      {/* Color swatch area */}
      <div className={`${product.bg} flex items-center justify-center h-40 text-6xl relative`}>
        {product.emoji}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      {/* Info */}
      <div className="bg-white p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          {product.category}
        </p>
        <h3 className="font-bold text-artsy-brown text-lg leading-tight">{product.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{product.description}</p>
        <div className="flex items-center justify-between mt-auto pt-3">
          <span className="font-bold text-artsy-brown text-xl">${product.price}</span>
          <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-artsy-brown transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Home() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-artsy-cream pt-28 pb-16 px-6">
        {/* Decorative blobs */}
        <div className="absolute top-20 right-[-80px] w-96 h-96 bg-artsy-pink rounded-full opacity-50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 left-[-60px] w-72 h-72 bg-artsy-yellow rounded-full opacity-40 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto w-full grid md:grid-cols-2 gap-12 items-center relative">
          {/* Text */}
          <div>
            <span className="inline-block bg-artsy-yellow text-artsy-brown text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Art Supplies + Impact
            </span>
            <h1 className="text-5xl sm:text-6xl font-bold text-artsy-brown leading-tight mb-6">
              Unleash Your <span className="yellow-underline">Creativity</span>
            </h1>
            <p className="text-lg text-gray-500 leading-relaxed mb-8 max-w-md">
              Premium drawing and painting materials, curated for artists at every level. Every purchase you make helps fund arts education for those who need it most.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/shop"
                className="bg-black text-white font-semibold px-8 py-4 rounded-full hover:bg-artsy-brown transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.2)]"
              >
                Shop Now
              </Link>
              <Link
                to="/discover"
                className="border-2 border-black text-artsy-brown font-semibold px-8 py-4 rounded-full hover:bg-artsy-gray transition-colors"
              >
                Our Mission
              </Link>
            </div>
            {/* Trust row */}
            <div className="flex flex-wrap gap-6 mt-10 text-sm text-gray-500">
              <span className="flex items-center gap-2">✅ Artist-grade quality</span>
              <span className="flex items-center gap-2">🎁 Free shipping over $50</span>
              <span className="flex items-center gap-2">💛 1% to arts charities</span>
            </div>
          </div>

          {/* Visual collage */}
          <div className="hidden md:grid grid-cols-2 gap-4">
            <div className="bg-artsy-pink rounded-3xl h-52 flex items-center justify-center text-7xl border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]">
              🎨
            </div>
            <div className="bg-artsy-yellow rounded-3xl h-52 flex items-center justify-center text-7xl border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-8">
              ✏️
            </div>
            <div className="bg-artsy-gray rounded-3xl h-52 flex items-center justify-center text-7xl border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] -mt-4">
              🖌️
            </div>
            <div className="bg-stone-200 rounded-3xl h-52 flex items-center justify-center text-7xl border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] mt-4">
              🖼️
            </div>
          </div>
        </div>
      </section>

      {/* ── Categories ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-artsy-brown mb-3">Explore by Medium</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">
              Whether you're picking up a brush for the first time or refining a lifelong practice, we have the right tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {categories.map(cat => (
              <Link
                key={cat.title}
                to={cat.to}
                className={`${cat.bg} rounded-2xl p-6 border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col gap-3`}
              >
                <span className="text-4xl">{cat.emoji}</span>
                <h3 className="font-bold text-artsy-brown text-xl">{cat.title}</h3>
                <p className="text-sm text-artsy-brown/70 leading-relaxed">{cat.desc}</p>
                <span className="mt-auto text-sm font-semibold text-artsy-brown underline underline-offset-4">
                  Browse →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Featured Products ── */}
      <section className="py-20 px-6 bg-artsy-cream">
        <div className="max-w-5xl mx-auto">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-artsy-brown mb-2">Featured Products</h2>
              <p className="text-gray-500">Handpicked favourites from our collection.</p>
            </div>
            <Link
              to="/shop"
              className="hidden sm:block text-artsy-brown font-semibold border-b-2 border-artsy-yellow pb-0.5 hover:text-black transition-colors"
            >
              View all →
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="mt-8 text-center sm:hidden">
            <Link
              to="/shop"
              className="inline-block border-2 border-black text-artsy-brown font-semibold px-8 py-3 rounded-full hover:bg-artsy-gray transition-colors"
            >
              View all products →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Mission / Impact ── */}
      <section className="py-20 px-6 bg-black text-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Stats */}
          <div className="grid grid-cols-2 gap-5">
            {[
              { value: '500+', label: 'Products curated' },
              { value: '1%', label: 'Of every sale donated' },
              { value: '12', label: 'Charity partners' },
              { value: '10k+', label: 'Happy creators' },
            ].map(stat => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center hover:bg-white/10 transition-colors"
              >
                <div className="text-4xl font-bold text-artsy-yellow mb-1">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Text */}
          <div>
            <span className="inline-block bg-artsy-yellow text-black text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
              Art + Impact
            </span>
            <h2 className="text-4xl font-bold mb-5 leading-tight">
              Every purchase funds a young artist's future
            </h2>
            <p className="text-gray-400 leading-relaxed mb-5">
              We believe creativity shouldn't be a privilege. 1% of every sale goes directly to arts education programs and community studios that give young artists access to the tools and mentorship they need to thrive.
            </p>
            <p className="text-gray-400 leading-relaxed mb-8">
              You choose where it goes. Each month, we highlight a new charity partner — and you vote on where the collective fund is directed.
            </p>
            <Link
              to="/discover"
              className="inline-block bg-artsy-yellow text-black font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Learn more →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Why Artsy Whiz ── */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-artsy-brown mb-3">Why Artsy Whiz?</h2>
          <p className="text-gray-500 text-lg mb-14 max-w-xl mx-auto">
            We're not just a shop. We're a community built around the belief that making art makes life better.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                icon: '⭐',
                title: 'Artist-Grade Quality',
                desc: "Every product is tested by working artists. We only stock what we'd use ourselves.",
                bg: 'bg-artsy-yellow',
              },
              {
                icon: '🌍',
                title: 'Ethical Sourcing',
                desc: 'We partner with suppliers who use sustainable materials and fair labour practices.',
                bg: 'bg-artsy-pink',
              },
              {
                icon: '📦',
                title: 'Free Shipping over $50',
                desc: 'Fast, carbon-neutral delivery across the country. No minimum order faff.',
                bg: 'bg-artsy-gray',
              },
            ].map(item => (
              <div
                key={item.title}
                className="rounded-2xl p-8 border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] text-left flex flex-col gap-4"
              >
                <div className={`${item.bg} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border border-black`}>
                  {item.icon}
                </div>
                <h3 className="font-bold text-artsy-brown text-xl">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-16 px-6 bg-artsy-pink border-y border-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-artsy-brown mb-4">Ready to start creating?</h2>
          <p className="text-artsy-brown/70 text-lg mb-8">
            Browse over 500 curated art supplies — and help build a more creative world while you're at it.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-black text-white font-semibold px-10 py-4 rounded-full hover:bg-artsy-brown transition-colors shadow-[4px_4px_0px_rgba(0,0,0,0.3)]"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </>
  )
}
