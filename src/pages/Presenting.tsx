import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { pastEvents } from '../data/siteData';

export default function Presenting() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">PUBLIC SPEAKING</p>
            <h1 className="font-display italic text-6xl md:text-8xl text-[var(--color-ivory)] mb-6">
              Presenting
            </h1>
            <p className="font-body text-lg text-[var(--color-chalk)] max-w-2xl leading-relaxed">
              With years of experience across Nollywood, Netflix, broadcast design, and fine art, Olalekan brings authority, warmth, and industry insight to every event. From conference keynotes to intimate masterclasses.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* What I Offer */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">SERVICES</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              What Olalekan Offers
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Keynotes", desc: "Inspiring keynote addresses for conferences, industry events, and creative summits. Up to 60 minutes with Q&A." },
              { title: "Panel Discussions", desc: "Thoughtful contributions to panel debates on Nollywood production, broadcast design, and the future of Nigerian creative industries." },
              { title: "Masterclasses", desc: "Intensive educational sessions for aspiring and working creatives. Deep dives into production design, set construction, and art direction." },
              { title: "Industry Workshops", desc: "Hands-on workshops through KAP Masterclass and Chase Media Masterclass programmes. Technical excellence meets personal development." },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="bg-[var(--color-void)] p-8 border border-[var(--color-steel)] hover:border-[var(--color-gold)] transition-colors duration-300 h-full">
                  <h3 className="font-display italic text-2xl text-[var(--color-ivory)] mb-4">{item.title}</h3>
                  <p className="font-body text-sm text-[var(--color-chalk)] leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">HISTORY</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              Past Events
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pastEvents.map((event, i) => (
              <ScrollReveal key={event.name} delay={i * 0.08}>
                <div className="bg-[var(--color-graphite)] p-8 border border-[var(--color-steel)] hover:border-[var(--color-gold)] transition-colors duration-300">
                  <p className="font-mono text-[10px] text-[var(--color-gold)] mb-2">{event.year} &mdash; {event.location}</p>
                  <h3 className="font-display italic text-2xl text-[var(--color-ivory)] mb-3">{event.name}</h3>
                  <p className="font-body text-sm text-[var(--color-chalk)] leading-relaxed">{event.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Topics */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">TOPICS</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              Speaking Topics
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
            {[
              { title: "Production Design in Nollywood", desc: "How to create visually cohesive worlds that enhance storytelling — lessons from A Tribe Called Judah, Shanty Town, and more." },
              { title: "Broadcast & Studio Design", desc: "Designing camera-ready environments for TV, talk shows, and game shows. Pioneering studio design in Nigeria." },
              { title: "Building a Creative Business", desc: "From launching Just Art Ltd to working with Netflix: lessons in building a sustainable creative enterprise." },
              { title: "Art as Healing", desc: "Exploring the therapeutic power of colour, faith, and visual storytelling. Insights from the \"Hues That Heal\" exhibition." },
              { title: "Professionalism in Creative Industries", desc: "Why personal development, discipline, and presentation are integral to creative success on set and beyond." },
              { title: "Mentorship & Legacy", desc: "Why investing in the next generation of Nigerian creatives through masterclasses and hands-on training is non-negotiable." },
            ].map((topic, i) => (
              <ScrollReveal key={topic.title} delay={i * 0.06}>
                <div className="border-b border-[var(--color-steel)] py-8 px-4 hover:bg-[var(--color-void)]/50 transition-colors">
                  <h3 className="font-display italic text-2xl text-[var(--color-ivory)] mb-2">{topic.title}</h3>
                  <p className="font-body text-sm text-[var(--color-chalk)]">{topic.desc}</p>
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
            <h2 className="font-display italic text-4xl md:text-6xl text-[var(--color-ivory)] mb-6">
              Book Olalekan for Your Event
            </h2>
            <p className="font-body text-[var(--color-chalk)] mb-10 max-w-xl mx-auto">
              Available for keynotes, panels, workshops, and festival appearances worldwide. Get in touch to discuss dates and requirements.
            </p>
            <Link
              to="/contact"
              className="inline-block font-nav text-sm tracking-[0.2em] px-10 py-4 bg-[var(--color-gold)] text-[var(--color-void)] hover:bg-[var(--color-amber)] transition-all duration-300"
              data-cursor-hover
            >
              ENQUIRE NOW
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

