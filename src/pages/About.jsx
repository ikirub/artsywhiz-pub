import { Link } from 'react-router-dom'

const values = [
  {
    icon: '✍️',
    title: 'Art for Everyone',
    desc: 'Original art shouldn\'t live only in galleries. We price our work to be owned — so that real people can hang real art in their homes without paying gallery prices.',
    bg: 'bg-artsy-pink',
  },
  {
    icon: '🖊️',
    title: 'Authenticity First',
    desc: 'Every piece is drawn by hand by our team. No prints, no AI, no reproductions. You get the actual drawing — exactly as it left the artist\'s desk.',
    bg: 'bg-artsy-yellow',
  },
  {
    icon: '💛',
    title: 'Community Impact',
    desc: 'Every purchase contributes 1% to arts education charities. You decide where it goes — from inner-city community studios to school art programmes in underserved areas.',
    bg: 'bg-artsy-gray',
  },
]

const team = [
  {
    name: 'Nithilaa',
    role: 'Founder & Creative Director',
    bio: 'A fine arts graduate and the driving creative force behind Artsy Whiz. Nithilaa founded the studio to bring original, hand-drawn art directly to people who love it — without the gallery barrier.',
    emoji: '👩‍🎨',
    bg: 'bg-artsy-pink',
  },
]

export default function About() {
  return (
    <div className="pt-28 pb-20 min-h-screen bg-artsy-cream">
      {/* Header */}
      <section className="px-6 py-16 max-w-5xl mx-auto">
        <span className="inline-block bg-artsy-yellow text-artsy-brown text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
          Our Story
        </span>
        <h1 className="text-5xl sm:text-6xl font-bold text-artsy-brown leading-tight mb-6 max-w-2xl">
          We're a team of artists who draw for a living.
        </h1>
        <p className="text-xl text-gray-500 leading-relaxed max-w-2xl">
          Artsy Whiz is our studio's window to the world. Every piece in our collection is drawn by hand by our team and sold directly to the people who love it — no middlemen, no markups, no reproductions. Just original art made by real people.
        </p>
      </section>

      {/* Big visual break */}
      <section className="px-6 mb-16">
        <div className="max-w-5xl mx-auto grid grid-cols-3 gap-4 h-56">
          <div className="bg-artsy-pink rounded-3xl border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center text-7xl">
            🎨
          </div>
          <div className="bg-artsy-yellow rounded-3xl border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex items-center justify-center text-7xl col-span-2">
            🖌️
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-artsy-brown mb-3">What we stand for</h2>
          <p className="text-gray-500 mb-12 text-lg">Three principles that guide every decision we make.</p>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map(v => (
              <div
                key={v.title}
                className="rounded-2xl p-8 border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)] flex flex-col gap-4"
              >
                <div className={`${v.bg} w-14 h-14 rounded-2xl flex items-center justify-center text-3xl border border-black`}>
                  {v.icon}
                </div>
                <h3 className="font-bold text-artsy-brown text-xl">{v.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-6 py-16 bg-artsy-cream">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl font-bold text-artsy-brown mb-3">Meet the team</h2>
          <p className="text-gray-500 mb-12 text-lg">Small but mighty — and all deeply passionate about art.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {team.map(member => (
              <div
                key={member.name}
                className="rounded-2xl overflow-hidden border border-black shadow-[4px_4px_0px_rgba(0,0,0,1)]"
              >
                <div className={`${member.bg} h-40 flex items-center justify-center text-7xl`}>
                  {member.emoji}
                </div>
                <div className="bg-white p-6">
                  <h3 className="font-bold text-artsy-brown text-xl mb-1">{member.name}</h3>
                  <p className="text-artsy-yellow font-semibold text-sm mb-3">{member.role}</p>
                  <p className="text-gray-500 text-sm leading-relaxed">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16 bg-black text-white">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">Find a piece you'll keep forever.</h2>
          <p className="text-gray-400 text-lg mb-8">
            Browse our collection, learn about our charity partners, or just say hello.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/shop"
              className="bg-artsy-yellow text-black font-semibold px-8 py-4 rounded-full hover:opacity-90 transition-opacity"
            >
              Browse the Collection
            </Link>
            <Link
              to="/discover"
              className="border-2 border-white text-white font-semibold px-8 py-4 rounded-full hover:bg-white/10 transition-colors"
            >
              Our Impact
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
