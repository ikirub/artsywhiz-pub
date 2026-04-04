import { useState } from 'react'
import { Link } from 'react-router-dom'

const charities = [
  {
    name: 'Pencils of Promise',
    focus: 'Arts Education',
    desc: 'Builds schools and delivers creative learning programmes in low-income communities across the globe.',
    emoji: '✏️',
    bg: 'bg-artsy-yellow',
  },
  {
    name: 'Art Education Fund',
    focus: 'Community Studios',
    desc: 'Funds free studio access and materials for young artists in underserved urban neighbourhoods.',
    emoji: '🎨',
    bg: 'bg-artsy-pink',
  },
  {
    name: 'Create Foundation',
    focus: 'Youth Mentorship',
    desc: 'Pairs emerging artists with professional mentors, providing guidance, materials, and exhibition opportunities.',
    emoji: '🌱',
    bg: 'bg-artsy-gray',
  },
]

const faqs = [
  {
    q: 'How does the charity contribution work?',
    a: '1% of every order total is pooled each month and distributed to our charity partners. You can vote on which charity receives the largest share — the results are published on this page every month.',
  },
  {
    q: 'Can I choose where my contribution goes?',
    a: 'Yes! After each purchase you\'ll receive an email with a link to cast your vote. The charity with the most votes at the end of the month receives 60% of the monthly fund, with the remainder split between the other partners.',
  },
  {
    q: 'Are the charities independently verified?',
    a: 'All partner charities are registered non-profits and have been independently reviewed for financial transparency and impact by a third-party auditor. We re-evaluate partners annually.',
  },
  {
    q: 'What products are eligible for free shipping?',
    a: 'All orders over $50 qualify for free standard shipping anywhere in the country. Orders under $50 attract a flat $5.99 shipping fee. Express and international options are available at checkout.',
  },
  {
    q: 'Do you offer student or school discounts?',
    a: 'Yes — students with a valid institution email receive 10% off all orders. Schools and institutions can contact us for bulk pricing.',
  },
  {
    q: 'What is your returns policy?',
    a: 'We offer a 30-day no-questions-asked return policy for unused items in original packaging. If a product is defective, we\'ll replace it or refund you in full, no return necessary.',
  },
]

function FaqItem({ question, answer }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border border-black rounded-2xl overflow-hidden shadow-[3px_3px_0px_rgba(0,0,0,1)]">
      <button
        className="w-full flex items-center justify-between p-6 text-left bg-white hover:bg-artsy-cream transition-colors"
        onClick={() => setOpen(v => !v)}
      >
        <span className="font-semibold text-artsy-brown text-lg pr-4">{question}</span>
        <span className="text-2xl text-artsy-brown shrink-0">{open ? '−' : '+'}</span>
      </button>
      {open && (
        <div className="px-6 pb-6 bg-white">
          <p className="text-gray-500 leading-relaxed">{answer}</p>
        </div>
      )}
    </div>
  )
}

export default function Discover() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-artsy-cream">
      {/* Header */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <span className="inline-block bg-artsy-yellow text-artsy-brown text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Discover
        </span>
        <h1 className="text-5xl sm:text-6xl font-bold text-artsy-brown leading-tight mb-6 max-w-2xl">
          Art that gives back.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
          Shopping with us means supporting the arts beyond your own studio. Every month, 1% of all sales is donated to one of our charity partners — and you decide where it goes.
        </p>
      </section>

      {/* Charity partners */}
      <section id="charity" className="px-6 py-16 bg-white scroll-mt-28">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-artsy-brown mb-3">Choose the Charity</h2>
          <p className="text-gray-500 text-lg mb-12">
            Our current partner organisations. After each purchase, you vote on where the monthly fund is directed.
          </p>
          <div className="grid sm:grid-cols-3 gap-6 mb-10">
            {charities.map(c => (
              <div
                key={c.name}
                className="rounded-2xl overflow-hidden border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col"
              >
                <div className={`${c.bg} h-36 flex items-center justify-center text-6xl`}>
                  {c.emoji}
                </div>
                <div className="bg-white p-6 flex-1 flex flex-col gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                    {c.focus}
                  </span>
                  <h3 className="font-bold text-artsy-brown text-xl">{c.name}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* How it works */}
          <div className="bg-black text-white rounded-3xl p-10">
            <h3 className="text-2xl font-bold mb-8">How it works</h3>
            <div className="grid sm:grid-cols-3 gap-6">
              {[
                { step: '01', title: 'You shop', desc: 'Browse our full collection and add your favourite supplies to your cart.' },
                { step: '02', title: 'We donate', desc: '1% of your order total is added to that month\'s charity fund — automatically, at no extra cost to you.' },
                { step: '03', title: 'You vote', desc: 'You\'ll get an email with a link to cast your vote on which charity receives the most that month.' },
              ].map(item => (
                <div key={item.step} className="flex flex-col gap-3">
                  <span className="text-artsy-yellow font-bold text-3xl">{item.step}</span>
                  <h4 className="font-semibold text-xl">{item.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="px-6 py-16 bg-artsy-cream scroll-mt-28">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold text-artsy-brown mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500 text-lg mb-10">
            Everything you need to know about our products, shipping, and charity programme.
          </p>
          <div className="flex flex-col gap-4">
            {faqs.map(faq => (
              <FaqItem key={faq.q} question={faq.q} answer={faq.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-artsy-pink border-y border-black">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-artsy-brown mb-4">Start creating. Start giving.</h2>
          <p className="text-artsy-brown/70 text-lg mb-8">
            Every brush stroke you make helps a young artist find theirs.
          </p>
          <Link
            to="/shop"
            className="inline-block bg-black text-white font-semibold px-10 py-4 rounded-full hover:bg-artsy-brown transition-colors"
          >
            Shop the Collection
          </Link>
        </div>
      </section>
    </div>
  )
}
