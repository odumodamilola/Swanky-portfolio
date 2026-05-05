import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Rates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-[5vw] text-center">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">INVESTMENT</p>
            <h1 className="font-display italic text-6xl md:text-8xl text-[var(--color-ivory)] mb-6">
              Rates
            </h1>
            <p className="font-body text-lg text-[var(--color-chalk)] max-w-2xl mx-auto leading-relaxed">
              Great art requires investment. Here is what working with Olalekan looks like. All rates are tailored to the scope and complexity of each project.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Day Rates */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[1200px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">PROJECT RATES</p>
            <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-12">
              Art &amp; Design Services
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="border border-[var(--color-steel)] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-void)] border-b border-[var(--color-steel)]">
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4 px-6">SERVICE</th>
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4 px-6">DETAIL</th>
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-right py-4 px-6">RATE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "Film Art Direction", detail: "Full art direction for Nollywood features and series", rate: "POA" },
                    { service: "Production Design", detail: "Complete set design and construction for film or TV", rate: "POA" },
                    { service: "Broadcast Studio Design", detail: "Camera-ready studio environments for TV, talk shows, game shows", rate: "POA" },
                    { service: "Online / Remote Consulting", detail: "Portfolio review, creative feedback, project guidance", rate: "POA" },
                    { service: "Art Commission", detail: "Bespoke original painting or mixed-media artwork", rate: "POA" },
                    { service: "Event / Premiere Design", detail: "Experiential installations and premiere set design", rate: "POA" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[var(--color-steel)] hover:bg-[var(--color-void)]/50 transition-colors">
                      <td className="font-display italic text-lg text-[var(--color-ivory)] py-5 px-6">{row.service}</td>
                      <td className="font-body text-sm text-[var(--color-chalk)] py-5 px-6">{row.detail}</td>
                      <td className="font-mono text-sm text-[var(--color-gold)] py-5 px-6 text-right">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Workshop Rates */}
      <section className="section-padding">
        <div className="max-w-[1200px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">WORKSHOPS</p>
            <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-12">
              Teaching & Speaking
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="border border-[var(--color-steel)] overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="bg-[var(--color-graphite)] border-b border-[var(--color-steel)]">
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4 px-6">SERVICE</th>
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4 px-6">DETAIL</th>
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-right py-4 px-6">RATE</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { service: "Keynote / Industry Talk", detail: "45-60 minute presentation + Q&A", rate: "POA" },
                    { service: "Full-Day Group Workshop", detail: "6-12 participants, hands-on training", rate: "£395 / person" },
                    { service: "Private Half-Day Mentorship", detail: "One-on-one, 4 hours intensive", rate: "POA" },
                    { service: "Private Full-Day Mentorship", detail: "One-on-one, 8 hours intensive", rate: "POA" },
                    { service: "Two-Day Private Intensive", detail: "Deep-dive into production design or fine art", rate: "POA" },
                    { service: "Corporate Creative Training", detail: "Bespoke team training for production companies, 1-3 days", rate: "POA" },
                  ].map((row, i) => (
                    <tr key={i} className="border-b border-[var(--color-steel)] hover:bg-[var(--color-graphite)]/50 transition-colors">
                      <td className="font-display italic text-lg text-[var(--color-ivory)] py-5 px-6">{row.service}</td>
                      <td className="font-body text-sm text-[var(--color-chalk)] py-5 px-6">{row.detail}</td>
                      <td className="font-mono text-sm text-[var(--color-gold)] py-5 px-6 text-right">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Notes */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[800px] mx-auto px-[5vw]">
          <ScrollReveal>
            <h2 className="font-display italic text-3xl text-[var(--color-ivory)] mb-8">
              Important Notes
            </h2>
            <div className="space-y-4">
              {[
                "All rates are exclusive of VAT where applicable.",
                "Travel and accommodation costs are additional and quoted per project.",
                "Materials and fabrication costs are not included unless specified.",
                "Rates are negotiable for long-term bookings, multi-project engagements, and repeat clients.",
                "A 50% deposit is required to confirm bookings.",
                "Cancellation fees apply within 14 days of the scheduled date.",
              ].map((note, i) => (
                <p key={i} className="font-body text-[var(--color-chalk)] leading-relaxed flex items-start gap-3">
                  <span className="text-[var(--color-gold)] mt-1">&mdash;</span>
                  {note}
                </p>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div className="max-w-[1440px] mx-auto px-[5vw] text-center">
          <ScrollReveal>
            <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-6">
              Discuss Your Project
            </h2>
            <p className="font-body text-[var(--color-chalk)] mb-10 max-w-lg mx-auto">
              Every project is unique. Get in touch to discuss your specific requirements and receive a tailored quote.
            </p>
            <Link
              to="/contact"
              className="inline-block font-nav text-sm tracking-[0.2em] px-10 py-4 bg-[var(--color-gold)] text-[var(--color-void)] hover:bg-[var(--color-amber)] transition-all duration-300"
              data-cursor-hover
            >
              GET IN TOUCH
            </Link>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

