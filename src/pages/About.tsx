import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { siteImages } from '../assets/siteImages';
import { timelineMilestones } from '../data/siteData';
import { PUBLISHED_ROUTES } from '../config/featureFlags';

import portraitThinking from '../assets/images/portraits/artist-portrait-thinking.jpg';
import portraitPainting from '../assets/images/portraits/artist-portrait-with-painting.jpg';
import portraitAction from '../assets/images/portraits/artist-painting-action.jpg';
import portraitProfile from '../assets/images/portraits/artist-portrait-profile-patterned.jpg';
import portraitFront from '../assets/images/portraits/artist-portrait-front-patterned.jpg';

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero — Full bleed image */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${siteImages.heroAbout})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)] via-transparent to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full px-[5vw] pb-20">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">THE ARTIST</p>
            <h1 className="font-display italic text-[12vw] md:text-[8vw] text-[var(--color-ivory)] leading-[0.9]">
              Olalekan<br /><span className="text-[var(--color-gold)]">Swanky</span> Isiaka
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Intro — Image + short text side by side */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={portraitFront}
                  alt="Olalekan Swanky Isiaka"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div>
                <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-6">WHO I AM</p>
                <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-6 leading-tight">
                  Artist. Designer.<br />Storyteller.
                </h2>
                <p className="font-body text-lg text-[var(--color-chalk)] leading-relaxed mb-6">
                  Nigerian multidisciplinary visual artist, production designer, and Nollywood art director — bridging fine art and large-scale production design across film, broadcast, and experiential installations.
                </p>
                <p className="font-body text-[var(--color-silver)] leading-relaxed">
                  AMVCA nominee. Netflix collaborator. Pioneer in Nigerian broadcast design.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Quote break — full width with background */}
      <section className="relative py-32 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${portraitProfile})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-[var(--color-void)]/80" />
        <div className="relative z-10 max-w-[900px] mx-auto px-[5vw] text-center">
          <ScrollReveal>
            <blockquote>
              <p className="font-display italic text-3xl md:text-4xl text-[var(--color-ivory)] leading-relaxed">
                "Personal development is integral to creative success. Professionalism builds respect, and leadership within art departments shapes production outcomes."
              </p>
            </blockquote>
          </ScrollReveal>
        </div>
      </section>

      {/* Journey — Text left, image right */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <ScrollReveal>
              <div>
                <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-6">THE JOURNEY</p>
                <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-6 leading-tight">
                  From Canvas<br />to Camera
                </h2>
                <p className="font-body text-lg text-[var(--color-chalk)] leading-relaxed mb-4">
                  Trained in Fine Arts at The Polytechnic, Ibadan. Mentored by Bedford Boluebi (MTN Project Fame, Nigerian Idol). Launched Just Art Ltd in 2013.
                </p>
                <p className="font-body text-[var(--color-silver)] leading-relaxed">
                  Credits include A Tribe Called Judah, Everybody Loves Jenifa, Shanty Town, The Party, and Big Brother Naija Reunion.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={portraitPainting}
                  alt="Olalekan with artwork"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Gallery strip — 3 images */}
      <section className="py-4">
        <div className="grid grid-cols-3 gap-2 md:gap-4 px-2 md:px-4">
          <ScrollReveal>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={portraitAction} alt="Painting in studio" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={portraitThinking} alt="Artist thinking" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden">
              <img src={siteImages.heroWorkshops} alt="Speaking at event" className="w-full h-full object-cover" loading="lazy" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timeline — minimal horizontal */}
      <section className="py-20 md:py-32">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">MILESTONES</p>
            <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-16">
              Career Timeline
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {timelineMilestones.slice(0, 6).map((milestone, i) => (
              <ScrollReveal key={milestone.year} delay={i * 0.08}>
                <div className="border-t border-[var(--color-steel)] pt-6">
                  <p className="font-display italic text-4xl text-[var(--color-gold)] opacity-50 mb-2">
                    {milestone.year}
                  </p>
                  <h3 className="font-display italic text-xl text-[var(--color-ivory)] mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-silver)] leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Recognition — brands bar */}
      <section className="py-16 bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-8 text-center">AS SEEN IN</p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {['Netflix', 'AMVCA Nominee', 'Wazobia TV', 'NTA Abuja', 'Lagos Television', 'Africa Magic', 'BBNaija', 'Lagos Art Party'].map((name) => (
                <div key={name} className="text-center py-4 border border-[var(--color-steel)] hover:border-[var(--color-gold)] transition-colors">
                  <p className="font-nav text-sm md:text-base text-[var(--color-silver)] tracking-[0.1em]">{name}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Teaching — visual CTA */}
      {PUBLISHED_ROUTES.workshops && (
        <section className="py-20 md:py-32">
          <div className="max-w-[1440px] mx-auto px-[5vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
              <ScrollReveal>
                <div className="aspect-video overflow-hidden">
                  <img
                    src={siteImages.heroWorkshops}
                    alt="Teaching at masterclass"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </ScrollReveal>
              <ScrollReveal delay={0.15}>
                <div>
                  <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-6">TEACHING</p>
                  <h2 className="font-display italic text-4xl text-[var(--color-ivory)] mb-4">
                    Learn From Experience
                  </h2>
                  <p className="font-body text-[var(--color-chalk)] leading-relaxed mb-8">
                    KAP Masterclass & Chase Media Masterclass — technical excellence meets personal development for emerging creatives.
                  </p>
                  <Link
                    to="/workshops"
                    className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    EXPLORE WORKSHOPS <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 text-center">
        <ScrollReveal>
          <p className="font-display italic text-3xl md:text-4xl text-[var(--color-ivory)] mb-8">
            Let's create something extraordinary.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] hover:gap-5 transition-all"
          >
            GET IN TOUCH <ArrowRight size={16} />
          </Link>
        </ScrollReveal>
      </section>

      <Footer />
    </div>
  );
}

