import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-b from-amber-200 via-rose-100 to-cyan-100 text-slate-900">
      {/* Top Nav */}
      <header className="w-full sticky top-0 z-20 backdrop-blur supports-[backdrop-filter]:bg-white/40 bg-white/60 border-b border-white/50">
        <div className="mx-auto max-w-6xl px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-gradient-to-tr from-amber-500 via-rose-400 to-cyan-500 shadow" />
            <span className="text-lg font-semibold tracking-tight">Rameswaram</span>
          </div>
          <nav className="hidden sm:flex items-center gap-6 text-sm">
            <a href="#highlights" className="hover:text-rose-600 transition-colors">Highlights</a>
            <a href="#pilgrimage" className="hover:text-amber-600 transition-colors">Pilgrimage</a>
            <a href="#travel" className="hover:text-cyan-700 transition-colors">Plan Trip</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-amber-300/50 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-cyan-300/50 blur-3xl" />
        </div>
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 sm:pt-24 sm:pb-16 flex flex-col items-center text-center">
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight">
            Discover Sacred Serenity in
            <span className="bg-gradient-to-r from-amber-600 via-rose-600 to-cyan-700 bg-clip-text text-transparent"> Rameswaram</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base sm:text-lg text-slate-700">
            A timeless pilgrimage island where the sea meets the sanctity of Ramanathaswamy Temple, pristine beaches, and the iconic Pamban Bridge.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href="#travel"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-600 px-6 py-3 text-white font-medium shadow hover:shadow-md transition-shadow"
            >
              Plan Your Visit
          </a>
          <a
              href="#highlights"
              className="inline-flex items-center justify-center rounded-full border border-rose-300/70 bg-white/70 px-6 py-3 text-rose-700 font-medium hover:bg-white transition-colors"
            >
              Explore Highlights
            </a>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section id="highlights" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Highlights</h2>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-amber-500/90 text-white flex items-center justify-center text-xl">ॐ</div>
            <h3 className="mt-4 font-semibold">Ramanathaswamy Temple</h3>
            <p className="mt-2 text-sm text-slate-700">Walk the famed corridors and perform the sacred theertham bath across 22 holy wells.</p>
          </div>
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-cyan-600/90 text-white flex items-center justify-center text-xl">🌊</div>
            <h3 className="mt-4 font-semibold">Dhanushkodi & Beaches</h3>
            <p className="mt-2 text-sm text-slate-700">Turquoise waters, sunlit shores, and a hauntingly beautiful ghost town at land’s end.</p>
          </div>
          <div className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-6 shadow-sm hover:shadow-md transition-shadow">
            <div className="h-10 w-10 rounded-lg bg-indigo-700/90 text-white flex items-center justify-center text-xl">🌉</div>
            <h3 className="mt-4 font-semibold">Pamban Bridge</h3>
            <p className="mt-2 text-sm text-slate-700">Marvel at the historic sea bridge that connects the island to the mainland.</p>
          </div>
        </div>
      </section>

      {/* Pilgrimage */}
      <section id="pilgrimage" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur p-8 sm:p-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Sacred Journey</h2>
              <p className="mt-3 text-slate-700">Begin at Agni Theertham on the shore, proceed to the temple’s wells for purification, and seek blessings of Lord Shiva. Gentle guidance from local priests is available.</p>
              <ul className="mt-4 space-y-2 text-sm text-slate-700 list-disc pl-5">
                <li>22 Holy Theerthams ritual</li>
                <li>Sunrise at Agni Theertham</li>
                <li>Evening aarti and corridor darshan</li>
              </ul>
            </div>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow">
              <div className="absolute inset-0 bg-gradient-to-tr from-amber-400 via-rose-400 to-cyan-500 opacity-80" />
              <div className="relative h-full w-full flex items-center justify-center text-white font-semibold tracking-wide">Sacred Colors of Rameswaram</div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan Trip */}
      <section id="travel" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur p-8 sm:p-10">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Plan Your Trip</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl p-5 border border-amber-200 bg-amber-50/60">
              <h3 className="font-semibold text-amber-800">Best Season</h3>
              <p className="mt-1 text-sm text-amber-900/80">Oct – Mar for pleasant weather and clear seas.</p>
            </div>
            <div className="rounded-2xl p-5 border border-cyan-200 bg-cyan-50/60">
              <h3 className="font-semibold text-cyan-800">How to Reach</h3>
              <p className="mt-1 text-sm text-cyan-900/80">Rail via Pamban Bridge, road from Madurai/Rameswaram, nearest airport: Madurai.</p>
            </div>
            <div className="rounded-2xl p-5 border border-rose-200 bg-rose-50/60">
              <h3 className="font-semibold text-rose-800">Local Tips</h3>
              <p className="mt-1 text-sm text-rose-900/80">Dress modestly for temple; carry water and sun protection.</p>
            </div>
          </div>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-600 px-6 py-3 text-white font-medium shadow hover:shadow-md transition-shadow">Get Custom Itinerary</a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 pb-10">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-cyan-600/10 border border-white/60 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-700">© {new Date().getFullYear()} Rameswaram Tourism</p>
            <div className="flex items-center gap-4 text-sm">
              <a href="#highlights" className="hover:text-rose-600">Highlights</a>
              <a href="#pilgrimage" className="hover:text-amber-600">Pilgrimage</a>
              <a href="#travel" className="hover:text-cyan-700">Plan Trip</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
