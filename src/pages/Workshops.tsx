import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ChevronLeft, ChevronRight, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { siteImages } from '../assets/siteImages';
import { testimonials, workshopDates } from '../data/siteData';

export default function Workshops() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const faqs = [
    { q: "What skill level is required for group workshops?", a: "Group workshops and masterclasses are designed for intermediate to advanced creatives working in or aspiring to film production design, set construction, or art direction. Complete beginners may find the pace challenging." },
    { q: "How many people attend a group workshop?", a: "KAP and Chase Media Masterclasses accommodate 25-30 participants. Intensive workshops are limited to 12 participants maximum for hands-on attention." },
    { q: "What is included in the workshop fee?", a: "Workshop fees include tuition, course materials, lunch and refreshments, and a certificate of completion. Accommodation and travel are not included unless specified." },
    { q: "Can I hire Olalekan for private mentorship at my location?", a: "Yes. Private mentorship can be arranged at a location of your choice worldwide. Travel and accommodation costs are additional and quoted separately." },
    { q: "Do you offer online workshops?", a: "Currently, all workshops are in-person. Online consulting sessions are available separately and can be booked through the contact page." },
    { q: "What materials should I bring?", a: "For group workshops, bring your own sketchbook, laptop, and reference materials if possible. We also provide core supplies. A full list is provided upon registration." },
    { q: "Is there a cancellation policy?", a: "Full refunds are available up to 30 days before the workshop. 50% refund for cancellations 14-30 days before. No refund within 14 days, but you may transfer your spot to another attendee." },
    { q: "Do you offer corporate creative training?", a: "Absolutely. I regularly work with production companies, broadcasters, and brands to deliver bespoke training programmes. Contact me to discuss your organisation's needs." },
  ];

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={siteImages.heroWorkshops}
                  alt="Olalekan Swanky Isiaka in workshop"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">WORKSHOPS</p>
                <h1 className="font-display italic text-5xl md:text-7xl text-[var(--color-ivory)] leading-tight mb-6">
                  Elevate Your<br />Production Craft
                </h1>
                <p className="font-body text-lg text-[var(--color-chalk)] leading-relaxed mb-8 max-w-md">
                  Learn from years of real-world Nollywood and broadcast production experience. From intensive masterclasses to bespoke private mentorship, discover the craft behind the set.
                </p>
                <Link
                  to="/contact"
                  className="inline-block font-nav text-sm tracking-[0.2em] px-8 py-3 bg-[var(--color-gold)] text-[var(--color-void)] hover:bg-[var(--color-amber)] transition-all duration-300"
                  data-cursor-hover
                >
                  BOOK A WORKSHOP
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Workshop Types */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">WHAT I OFFER</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              Workshop Types
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Large Venue Talk",
                desc: "Keynotes, conference presentations, and industry talks. Ideal for inspiring large audiences with insights on production design and the Nigerian creative industry.",
                link: "/presenting",
              },
              {
                title: "Group Workshop",
                desc: "Intensive sessions for 6-12 participants through KAP and Chase Media Masterclass programmes. Hands-on set design, colour direction, and collaborative projects.",
                link: "#dates",
              },
              {
                title: "Private Mentorship",
                desc: "One-on-one bespoke mentorship tailored to your specific goals. From production design portfolios to art direction technique, the entire day is designed around your needs.",
                link: "/contact",
              },
            ].map((type, i) => (
              <ScrollReveal key={type.title} delay={i * 0.1}>
                <div className="bg-[var(--color-void)] p-8 border border-[var(--color-steel)] hover:border-[var(--color-gold)] transition-colors duration-300 h-full flex flex-col">
                  <h3 className="font-display italic text-2xl text-[var(--color-ivory)] mb-4">{type.title}</h3>
                  <p className="font-body text-[var(--color-chalk)] leading-relaxed mb-6 flex-grow">{type.desc}</p>
                  <Link
                    to={type.link}
                    className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    LEARN MORE <ArrowRight size={16} />
                  </Link>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">CURRICULUM</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              What You Will Learn
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {['Set Design', 'Colour Direction', 'Art Direction', 'Scenic Art', 'Studio Design', 'Professionalism'].map((skill, i) => (
              <ScrollReveal key={skill} delay={i * 0.08}>
                <div className="text-center p-6 border border-[var(--color-steel)] hover:border-[var(--color-gold)] transition-colors duration-300">
                  <Check size={24} className="text-[var(--color-gold)] mx-auto mb-3" />
                  <p className="font-nav text-sm text-[var(--color-ivory)] tracking-[0.1em]">{skill}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[900px] mx-auto px-[5vw] text-center">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">TESTIMONIALS</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              What Attendees Say
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="relative">
              <div className="min-h-[200px] flex flex-col items-center justify-center">
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-[var(--color-gold)] fill-[var(--color-gold)]" />
                  ))}
                </div>
                <blockquote className="font-display italic text-2xl md:text-3xl text-[var(--color-ivory)] leading-relaxed mb-6 max-w-2xl">
                  &ldquo;{testimonials[currentTestimonial].text}&rdquo;
                </blockquote>
                <p className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em]">
                  {testimonials[currentTestimonial].name} &mdash; {testimonials[currentTestimonial].location}
                </p>
              </div>

              <div className="flex justify-center gap-4 mt-8">
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-[var(--color-steel)] text-[var(--color-silver)] flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
                  data-cursor-hover
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={() => setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)}
                  className="w-10 h-10 rounded-full border border-[var(--color-steel)] text-[var(--color-silver)] flex items-center justify-center hover:border-[var(--color-gold)] hover:text-[var(--color-gold)] transition-colors"
                  data-cursor-hover
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Upcoming Dates */}
      <section id="dates" className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">SCHEDULE</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              Upcoming Workshops
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--color-steel)]">
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4 pr-4">DATE</th>
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4 pr-4">LOCATION</th>
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4 pr-4">TYPE</th>
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4 pr-4">SPACES</th>
                    <th className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] text-left py-4"></th>
                  </tr>
                </thead>
                <tbody>
                  {workshopDates.map((workshop, i) => (
                    <tr key={i} className="border-b border-[var(--color-steel)] hover:bg-[var(--color-graphite)] transition-colors">
                      <td className="font-body text-[var(--color-chalk)] py-5 pr-4">{workshop.date}</td>
                      <td className="font-body text-[var(--color-chalk)] py-5 pr-4">{workshop.location}</td>
                      <td className="font-body text-[var(--color-chalk)] py-5 pr-4">{workshop.type}</td>
                      <td className="font-body text-[var(--color-chalk)] py-5 pr-4">
                        {workshop.spaces <= 1 ? (
                          <span className="text-[var(--color-film-red)]">Enquire</span>
                        ) : workshop.spaces <= 5 ? (
                          <span className="text-[var(--color-amber)]">{workshop.spaces} left</span>
                        ) : (
                          <span className="text-[var(--color-gold)]">Available</span>
                        )}
                      </td>
                      <td className="py-5">
                        <Link
                          to="/contact"
                          className="font-nav text-xs text-[var(--color-gold)] tracking-[0.15em] hover:text-[var(--color-ivory)] transition-colors"
                        >
                          BOOK NOW
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Private Tuition CTA */}
      <section className="py-32 bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw] text-center">
          <ScrollReveal>
            <h2 className="font-display italic text-4xl md:text-6xl text-[var(--color-ivory)] mb-6">
              Book Private Mentorship with Swanky
            </h2>
            <p className="font-body text-[var(--color-chalk)] mb-10 max-w-2xl mx-auto">
              Bespoke one-on-one training, anywhere in the world. Intensive, personalised, and designed around your specific creative goals.
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

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">FAQ</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              Common Questions
            </h2>
          </ScrollReveal>
          <div className="space-y-0">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="border-b border-[var(--color-steel)]">
                  <button
                    onClick={() => setFaqOpen(faqOpen === i ? null : i)}
                    className="w-full py-5 flex items-center justify-between text-left"
                    data-cursor-hover
                  >
                    <span className="font-display italic text-lg text-[var(--color-ivory)]">{faq.q}</span>
                    <span className={`text-[var(--color-gold)] transition-transform duration-300 ${faqOpen === i ? 'rotate-45' : ''}`}>
                      +
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${faqOpen === i ? 'max-h-40 pb-5' : 'max-h-0'}`}
                  >
                    <p className="font-body text-[var(--color-chalk)] leading-relaxed">{faq.a}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

