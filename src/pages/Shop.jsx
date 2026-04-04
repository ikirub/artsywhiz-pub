import { useState } from 'react'
import { products, categories } from '../data/products'

function ProductCard({ product }) {
  return (
    <div className="rounded-2xl overflow-hidden border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_rgba(0,0,0,1)] hover:-translate-y-0.5 transition-all duration-200 flex flex-col bg-white">
      <div className={`${product.bg} flex items-center justify-center h-44 text-6xl relative`}>
        {product.emoji}
        {product.badge && (
          <span className="absolute top-3 right-3 bg-black text-white text-xs font-semibold px-2 py-1 rounded-full">
            {product.badge}
          </span>
        )}
      </div>
      <div className="p-5 flex flex-col gap-2 flex-1">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
          {product.category}
        </p>
        <h3 className="font-bold text-artsy-brown text-lg leading-tight">{product.name}</h3>
        <p className="text-sm text-gray-500 leading-relaxed flex-1">{product.description}</p>
        <div className="flex items-center justify-between mt-3">
          <span className="font-bold text-artsy-brown text-xl">${product.price}</span>
          <button className="bg-black text-white text-sm font-semibold px-4 py-2 rounded-full hover:bg-artsy-brown transition-colors">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Shop() {
  const [active, setActive] = useState('All')

  const visible = active === 'All' ? products : products.filter(p => p.category === active)

  return (
    <div className="pt-28 pb-20 px-6 min-h-screen bg-artsy-cream">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h1 className="text-5xl font-bold text-artsy-brown mb-3">Shop</h1>
          <p className="text-gray-500 text-lg">
            Artist-grade materials for every medium and skill level.
          </p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-semibold border border-black transition-all ${
                active === cat
                  ? 'bg-black text-white shadow-[3px_3px_0px_rgba(0,0,0,0.3)]'
                  : 'bg-white text-artsy-brown hover:bg-artsy-gray'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Count */}
        <p className="text-sm text-gray-400 mb-6">{visible.length} product{visible.length !== 1 ? 's' : ''}</p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  )
}
