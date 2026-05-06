import { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { siteImages } from '../assets/siteImages';
import { stockClips } from '../data/siteData';

const categories = ['ALL', 'PAINTINGS'];

export default function Stock() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = activeFilter === 'ALL'
    ? stockClips
    : stockClips.filter(c => c.category.toUpperCase() === activeFilter);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${siteImages.stock.nature})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)] via-[var(--gradient-vignette)] to-[var(--gradient-hero-from)]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-[5vw] text-center">
          <ScrollReveal>
            <h1 className="font-display italic text-6xl md:text-8xl text-[#F0EDE6] mb-4">
              Art Prints
            </h1>
            <p className="font-nav text-sm text-[#C9A84C] tracking-[0.5em]">
              LIMITED-EDITION GICLÉE PRINTS AVAILABLE
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] z-[100] bg-[var(--color-void)]/90 backdrop-blur-md border-b border-[var(--color-steel)] py-4">
        <div className="max-w-[1440px] mx-auto px-[5vw] flex gap-4 md:gap-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-nav text-sm tracking-[0.15em] whitespace-nowrap pb-1 transition-colors duration-200 ${
                activeFilter === cat
                  ? 'text-[var(--color-gold)] border-b-2 border-[var(--color-gold)]'
                  : 'text-[var(--color-silver)] hover:text-[var(--color-ivory)]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Stock Grid */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((clip, i) => (
              <ScrollReveal key={clip.id} delay={i * 0.08}>
                <div className="group relative overflow-hidden bg-[var(--color-graphite)] cursor-pointer" data-cursor-hover>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={clip.image}
                      alt={clip.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--gradient-card-from)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-5">
                    <h4 className="font-display italic text-xl text-[#F0EDE6]">{clip.title}</h4>
                    <p className="font-mono text-[10px] text-[#C9A84C] mt-1">{clip.category}</p>
                  </div>
                  <div className="absolute top-3 right-3 flex gap-2">
                    <span className="font-mono text-[10px] bg-[var(--color-void)]/80 text-[var(--color-chalk)] px-2 py-1">
                      {clip.duration}
                    </span>
                    <span className="font-mono text-[10px] bg-[var(--color-gold)]/90 text-[var(--color-void)] px-2 py-1">
                      {clip.resolution}
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Licensing */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">LICENSING</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              How to Purchase
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Open Edition",
                desc: "High-quality giclée prints on archival paper. Signed by the artist. Available in A3 and A2 formats.",
                price: "From £150 per print",
              },
              {
                title: "Limited Edition",
                desc: "Numbered and signed prints in runs of 25 or fewer. Includes certificate of authenticity. Available in A2 and A1 formats.",
                price: "From £500 per print",
              },
              {
                title: "Commission",
                desc: "Bespoke original artwork created to your brief. Includes consultation, concept development, and delivery.",
                price: "POA",
              },
            ].map((license, i) => (
              <ScrollReveal key={license.title} delay={i * 0.1}>
                <div className="bg-[var(--color-void)] p-8 border border-[var(--color-steel)] hover:border-[var(--color-gold)] transition-colors duration-300 h-full flex flex-col">
                  <h3 className="font-display italic text-2xl text-[var(--color-ivory)] mb-4">{license.title}</h3>
                  <p className="font-body text-sm text-[var(--color-chalk)] leading-relaxed mb-6 flex-grow">{license.desc}</p>
                  <p className="font-nav text-sm text-[var(--color-gold)] tracking-[0.15em]">{license.price}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-[5vw] text-center">
          <ScrollReveal>
            <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-6">
              Need Something Specific?
            </h2>
            <p className="font-body text-[var(--color-chalk)] mb-10 max-w-lg mx-auto">
              I regularly create bespoke artwork for specific client needs. If you cannot find what you are looking for, let me know.
            </p>
            <a
              href="mailto:olalekan@swankyi.com"
              className="inline-block font-nav text-sm tracking-[0.2em] px-10 py-4 bg-[var(--color-gold)] text-[var(--color-void)] hover:bg-[var(--color-amber)] transition-all duration-300"
              data-cursor-hover
            >
              REQUEST ARTWORK
            </a>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

