import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { siteImages } from '../assets/siteImages';
import { gearItems, timelineMilestones } from '../data/siteData';
import { PUBLISHED_ROUTES } from '../config/featureFlags';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const timelineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Horizontal scroll for timeline
      if (timelineRef.current) {
        const items = timelineRef.current.querySelectorAll('.timeline-item');
        gsap.to(items, {
          xPercent: -100 * (items.length - 1),
          ease: 'none',
          scrollTrigger: {
            trigger: timelineRef.current,
            pin: true,
            scrub: 1,
            end: () => '+=' + timelineRef.current!.offsetWidth,
          },
        });
      }
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${siteImages.heroAbout})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center top',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)] via-[var(--gradient-hero-from)] to-transparent" />
        <div className="relative z-10 flex flex-col justify-end h-full px-[5vw] pb-20">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[#C9A84C] tracking-[0.15em] mb-4">ABOUT</p>
            <h1 className="font-display italic text-[12vw] md:text-[10vw] text-[#F0EDE6] leading-none">
              OLALEKAN<br />SWANKY ISIAKA
            </h1>
          </ScrollReveal>
        </div>
      </section>

      {/* Bio */}
      <section className="section-padding">
        <div className="max-w-[800px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-body text-lg md:text-xl text-[var(--color-chalk)] leading-relaxed mb-8">
              Olalekan "Swanky" Isiaka is a Nigerian multidisciplinary visual artist, production designer, and acclaimed Nollywood art director. He is widely recognised for bridging fine art and large-scale production design in the Nigerian film and television industry. His work spans painting, film, broadcast set design, and experiential installations, with a distinctive style rooted in faith, storytelling, and immersive visual environments.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="font-body text-lg md:text-xl text-[var(--color-chalk)] leading-relaxed mb-8">
              Isiaka began his creative journey at The Polytechnic, Ibadan, studying Fine Arts (Painting) under the department of Art Design and Printing Technology. In 2009, he met Mr. Bedford Boluebi, a renowned production designer known for his work on MTN Project Fame and Nigerian Idol. This encounter marked a turning point, leading him into stage and set design. He began practical training on "Let's Dance", an Endemol and M-Net production, before advancing through F4D Media Production, T.E.F.T, and Something Unusual Studios.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <blockquote className="border-l-2 border-[var(--color-gold)] pl-6 my-12">
              <p className="font-display italic text-2xl md:text-3xl text-[var(--color-ivory)] leading-relaxed">
                "Personal development is integral to creative success. Professionalism builds respect, personal presentation reflects artistic discipline, and leadership within art departments shapes production outcomes."
              </p>
            </blockquote>
          </ScrollReveal>
          <ScrollReveal delay={0.3}>
            <p className="font-body text-lg md:text-xl text-[var(--color-chalk)] leading-relaxed mb-8">
              In 2013, he launched Just Art Ltd, a creative studio specialising in visual art, production design, and set construction. He has since become one of Nollywood's most sought-after art directors, with credits on blockbusters including A Tribe Called Judah, Everybody Loves Jenifa, Gingerrr, Tokunbo, and Cordelia, as well as Netflix originals Shanty Town and The Party. He is an AMVCA nominee for Best Art Director.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <p className="font-body text-lg md:text-xl text-[var(--color-chalk)] leading-relaxed">
              A pioneer in Nigerian broadcast design, he was the first set designer for Wazobia TV and has designed studios for NTA Abuja ("Gudu Morning Naija"), Lagos Television, and Kaduna State Media Corporation. His portfolio extends to game shows, podcast studios, and the Big Brother Naija Reunion set (2025). In 2025, he held his debut solo exhibition "Hues That Heal" at Victoria Garden City, Lekki, Lagos — a faith-inspired collection exploring healing, restoration, and spirituality.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Career Timeline */}
      <section className="py-20 overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-[5vw] mb-12">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">TIMELINE</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)]">
              Career Journey
            </h2>
          </ScrollReveal>
        </div>
        <div ref={timelineRef} className="flex">
          {timelineMilestones.map((milestone) => (
            <div
              key={milestone.year}
              className="timeline-item flex-shrink-0 w-[85vw] md:w-[40vw] px-[5vw] py-8"
            >
              <p className="font-display italic text-7xl md:text-8xl text-[var(--color-gold)] opacity-30 mb-4">
                {milestone.year}
              </p>
              <h3 className="font-display italic text-2xl text-[var(--color-ivory)] mb-3">
                {milestone.title}
              </h3>
              <p className="font-body text-[var(--color-chalk)] leading-relaxed max-w-sm">
                {milestone.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Gear Section */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">STUDIO &amp; TOOLS</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              What I Create With
            </h2>
          </ScrollReveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {gearItems.map((item, i) => (
              <ScrollReveal key={item.name} delay={i * 0.1}>
                <div className="bg-[var(--color-void)] p-8 border border-[var(--color-steel)] hover:border-[var(--color-gold)] transition-colors duration-300">
                  <p className="font-mono text-[10px] text-[var(--color-gold)] mb-2">{item.category}</p>
                  <h4 className="font-display italic text-2xl text-[var(--color-ivory)] mb-3">{item.name}</h4>
                  <p className="font-body text-sm text-[var(--color-chalk)] leading-relaxed">{item.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Awards / Press */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">RECOGNITION</p>
            <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] mb-12">
              As Seen In
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {['Netflix', 'AMVCA Nominee', 'Wazobia TV', 'NTA Abuja', 'Lagos Television', 'Africa Magic', 'BBNaija', 'Lagos Art Party'].map((logo) => (
                <div key={logo} className="text-center py-6">
                  <p className="font-nav text-xl md:text-2xl text-[var(--color-silver)] tracking-[0.1em]">{logo}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Teaching Philosophy */}
      <section className="section-padding bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">TEACHING</p>
                <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-6">
                  Teaching Philosophy
                </h2>
                <p className="font-body text-[var(--color-chalk)] leading-relaxed mb-6">
                  I believe that great art cannot be taught through theory alone. It requires getting your hands dirty, making mistakes, and learning to trust your instincts. Through the KAP Masterclass and Chase Media Masterclass, I emphasise both technical excellence and personal development.
                </p>
                <p className="font-body text-[var(--color-chalk)] leading-relaxed mb-8">
                  My teachings advocate professionalism, discipline, and personal presentation within creative industries. I promote a culture of excellence and intentionality within film production spaces.
                </p>
                {PUBLISHED_ROUTES.workshops && (
                  <Link
                    to="/workshops"
                    className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all"
                  >
                    EXPLORE WORKSHOPS <ArrowRight size={16} />
                  </Link>
                )}
              </div>
              <div className="aspect-video overflow-hidden">
                <img
                  src={siteImages.heroWorkshops}
                  alt="Olalekan Swanky Isiaka in studio"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

