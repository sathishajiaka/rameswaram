import Image from "next/image";
import Script from "next/script";

export default function Home() {
  return (
    <div className="min-h-screen w-full font-sans bg-gradient-to-b from-amber-100 via-rose-100 to-cyan-100 text-slate-900">
      {/* JSON-LD structured data */}
      <Script id="ld-json" type="application/ld+json" strategy="afterInteractive">
        {JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'TouristDestination',
          name: 'Rameswaram',
          description:
            'Rameswaram travel guide with temples, beaches, Dhanushkodi, Pamban Bridge and rituals.',
          url: 'http://localhost:3000/',
          image: [
            '/places/1.png',
            '/places/3.png',
            '/places/4.png'
          ],
          touristType: ['Pilgrimage', 'Beach'],
          geo: {
            '@type': 'GeoCoordinates',
            latitude: 9.287,
            longitude: 79.312
          },
          sameAs: [
            'https://en.wikipedia.org/wiki/Rameswaram',
            'https://www.tamilnadutourism.tn.gov.in/destinations/rameswaram'
          ],
          hasPart: [
            {
              '@type': 'TouristAttraction',
              name: 'Sri Ramanathaswamy Temple',
              url: 'https://maps.google.com/?q=Ramanathaswamy+Temple+Rameswaram'
            },
            {
              '@type': 'TouristAttraction',
              name: 'Dhanushkodi',
              url: 'https://maps.google.com/?q=Dhanushkodi'
            },
            {
              '@type': 'TouristAttraction',
              name: 'Pamban Bridge',
              url: 'https://maps.google.com/?q=Pamban+Bridge'
            }
          ]
        })}
      </Script>
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
            <a href="#places" className="hover:text-rose-700 transition-colors">Places</a>
            <a href="#map" className="hover:text-indigo-700 transition-colors">Map</a>
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

      {/* Places to Visit */}
      <section id="places" className="mx-auto max-w-6xl px-6 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Places to Visit</h2>
        <p className="mt-2 text-slate-700 max-w-3xl">Explore the spiritual landmarks and scenic marvels that make Rameswaram a unique blend of devotion and nature.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Ramanathaswamy Temple */}
          <article className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-40 w-full">
              <Image src="/places/1.png" alt="Ramanathaswamy Temple" fill className="object-cover" priority />
            </figure>
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-amber-600 text-white flex items-center justify-center text-lg">ॐ</div>
              <h3 className="mt-4 font-semibold">Sri Ramanathaswamy Temple</h3>
              <p className="mt-2 text-sm text-slate-700">Famed for its long corridors and sacred 22 theerthams; a key Jyotirlinga shrine dedicated to Lord Shiva.</p>
              <div className="mt-3 text-xs text-amber-900/80">Timing: 5 AM – 1 PM, 3 PM – 9 PM</div>
              <div className="mt-4">
                <a className="text-amber-700 hover:text-amber-900 text-sm underline" href="https://maps.google.com/?q=Ramanathaswamy+Temple+Rameswaram" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </article>

          {/* Nambunayaki Amman Temple */}
          <article className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-40 w-full">
              <Image src="/places/2.png" alt="Nambunayaki Amman Temple" fill className="object-cover" />
            </figure>
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-rose-600 text-white flex items-center justify-center text-lg">🛕</div>
              <h3 className="mt-4 font-semibold">Nambunayaki Amman Temple</h3>
              <p className="mt-2 text-sm text-slate-700">A revered goddess temple known for blessings of health and prosperity; serene ambience near the coast.</p>
              <div className="mt-3 text-xs text-rose-900/80">Best time: Morning prayers and evenings</div>
              <div className="mt-4">
                <a className="text-rose-700 hover:text-rose-900 text-sm underline" href="https://maps.google.com/?q=Nambunayaki+Amman+Temple+Rameswaram" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </article>

          {/* Karaiyoor poormari amman */}
          <article className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-40 w-full">
              <Image src="/places/8.png" alt="Karaiyoor poormari amman" fill className="object-cover" />
            </figure>
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-slate-800 text-white flex items-center justify-center text-lg">🎖️</div>
              <h3 className="mt-4 font-semibold">Karaiyoor Poomari Amman Temple</h3>
              <p className="mt-2 text-sm text-slate-700">🕉️ An ancient coastal temple, 80 years of faith and divine blessings.</p>
              <div className="mt-3 text-xs text-slate-900/80">Best time: Morning prayers and evenings</div>
              <div className="mt-4">
                <a className="text-slate-800 hover:text-black text-sm underline" href="https://maps.app.goo.gl/AQ1zzF8vd5Sy23nXA" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </article>

          {/* Dhanushkodi */}
          <article className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-40 w-full">
              <Image src="/places/3.png" alt="Dhanushkodi beach and ruins" fill className="object-cover" />
            </figure>
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-cyan-600 text-white flex items-center justify-center text-lg">🌊</div>
              <h3 className="mt-4 font-semibold">Dhanushkodi</h3>
              <p className="mt-2 text-sm text-slate-700">The ‘end of land’ where the Bay of Bengal meets the Indian Ocean; ethereal ruins, blue waters, and windswept sands.</p>
              <div className="mt-3 text-xs text-cyan-900/80">Tip: Visit near sunrise/sunset for magical hues</div>
              <div className="mt-4">
                <a className="text-cyan-700 hover:text-cyan-900 text-sm underline" href="https://maps.google.com/?q=Dhanushkodi" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </article>

          {/* Pamban Bridge */}
          <article className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-40 w-full">
              <Image src="/places/4.png" alt="Pamban Bridge over the sea" fill className="object-cover" />
            </figure>
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-indigo-700 text-white flex items-center justify-center text-lg">🌉</div>
              <h3 className="mt-4 font-semibold">Pamban Bridge</h3>
              <p className="mt-2 text-sm text-slate-700">Historic sea bridge with panoramic vistas; watch trains glide over the shimmering waters.</p>
              <div className="mt-3 text-xs text-indigo-900/80">Photography: Golden hour on clear days</div>
              <div className="mt-4">
                <a className="text-indigo-700 hover:text-indigo-900 text-sm underline" href="https://maps.google.com/?q=Pamban+Bridge" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </article>

          {/* Agni Theertham */}
          <article className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-40 w-full">
              <Image src="/places/5.png" alt="Agni Theertham beachfront" fill className="object-cover" />
            </figure>
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-amber-500 text-white flex items-center justify-center text-lg">🔥</div>
              <h3 className="mt-4 font-semibold">Agni Theertham</h3>
              <p className="mt-2 text-sm text-slate-700">A sacred beachfront for ritual baths before temple darshan; tranquil mornings and soft tides.</p>
              <div className="mt-3 text-xs text-amber-900/80">Carry modest attire; maintain cleanliness</div>
              <div className="mt-4">
                <a className="text-amber-700 hover:text-amber-900 text-sm underline" href="https://maps.google.com/?q=Agni+Theertham+Rameswaram" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </article>

          {/* Gandhamadhana Parvatham */}
          <article className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-40 w-full">
              <Image src="/places/6.png" alt="Gandhamadhana Parvatham view" fill className="object-cover" />
            </figure>
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-emerald-600 text-white flex items-center justify-center text-lg">⛰️</div>
              <h3 className="mt-4 font-semibold">Gandhamadhana Parvatham</h3>
              <p className="mt-2 text-sm text-slate-700">The island’s highest point with a shrine and panoramic views across seas and sands.</p>
              <div className="mt-3 text-xs text-emerald-900/80">Light climb; best in early morning</div>
              <div className="mt-4">
                <a className="text-emerald-700 hover:text-emerald-900 text-sm underline" href="https://maps.google.com/?q=Gandhamadhana+Parvatham" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </article>

          {/* Dr. A.P.J. Abdul Kalam Memorial */}
          <article className="rounded-2xl bg-white/70 backdrop-blur border border-white/60 p-0 shadow-sm hover:shadow-md transition-shadow overflow-hidden">
            <figure className="relative h-40 w-full">
              <Image src="/places/7.png" alt="Dr. A.P.J. Abdul Kalam Memorial" fill className="object-cover" />
            </figure>
            <div className="p-6">
              <div className="h-10 w-10 rounded-lg bg-slate-800 text-white flex items-center justify-center text-lg">🎖️</div>
              <h3 className="mt-4 font-semibold">Dr. A.P.J. Abdul Kalam Memorial</h3>
              <p className="mt-2 text-sm text-slate-700">A dignified tribute to India’s former President; exhibits on his life and inspiring journey.</p>
              <div className="mt-3 text-xs text-slate-900/80">Closed on select holidays; check timings</div>
              <div className="mt-4">
                <a className="text-slate-800 hover:text-black text-sm underline" href="https://maps.google.com/?q=Dr.+A.P.J.+Abdul+Kalam+Memorial+Rameswaram" target="_blank" rel="noreferrer">Open in Google Maps</a>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* Map */}
      <section id="map" className="mx-auto max-w-6xl px-6 pb-12 sm:pb-16">
        <div className="rounded-3xl border border-white/60 bg-white/70 backdrop-blur p-4 sm:p-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight px-2">Interactive Map</h2>
          <div className="mt-4 relative w-full overflow-hidden rounded-2xl shadow">
            <iframe
              title="Rameswaram Map"
              className="w-full h-[360px] sm:h-[480px]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3927.118019261407!2d79.312!3d9.287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b01b2b1c6ec4e51%3A0x3de5e41f26b2e2ff!2sRameswaram!5e0!3m2!1sen!2sin!4v1700000000000"
            />
          </div>
          <div className="mt-4 px-2">
            <a href="https://maps.google.com/?q=Rameswaram" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-amber-500 via-rose-500 to-cyan-600 px-5 py-2.5 text-white text-sm font-medium shadow hover:shadow-md">Open in Google Maps</a>
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


      <section className="h-screen relative flex flex-col items-center justify-start bg-[rgb(3,0,49)] animate-hue overflow-x-hidden">
        <div className="light relative max-w-full w-[90%] md:w-[400px] h-[6px] rounded-full bg-[rgb(172,229,255)] shadow-[0_0_20px_rgb(172,229,255),0_0_40px_rgb(172,229,255)]"></div>

        <div className="absolute top-[60%] left-1/2 transform -translate-x-1/2 text-center text-[rgb(172,229,255)] px-4">
          <h2 className="text-xl pb-4 sm:text-2xl md:text-4xl font-bold drop-shadow-[2px_2px_6px_black]">
            Welcome to Rameswaram - A Divine Journey Awaits You! 🌟
          </h2>
        </div>
      </section>


      {/* Footer */}
      <footer className="px-6 pb-10 pt-4">
        <div className="mx-auto max-w-6xl rounded-3xl bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-cyan-600/10 border border-white/60 p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-700">© {new Date().getFullYear()} Rameswaram</p>
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
