import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, ArrowRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { siteImages } from '../assets/siteImages';
import { projects, blogPosts } from '../data/siteData';
import { PUBLISHED_ROUTES } from '../config/featureFlags';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const ctx = gsap.context(() => {
      // Hero parallax
      gsap.to(heroRef.current, {
        y: -100,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section ref={heroRef} className="relative w-full h-screen overflow-hidden">
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${siteImages.heroSplash})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-hero-from)] via-[var(--gradient-hero-via)] to-[var(--color-void)]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-[5vw]">
          <h1 className="font-display italic text-[10vw] md:text-[8vw] text-[#F0EDE6] text-center leading-none">
            Olalekan Swanky Isiaka
          </h1>
          <p className="font-nav text-xs md:text-sm text-[#C9A84C] tracking-[0.5em] mt-4 md:mt-6">
            VISUAL ARTIST &middot; PRODUCTION DESIGNER &middot; NOLLYWOOD ART DIRECTOR
          </p>
          <div className="flex gap-6 mt-10">
            <Link
              to="/work"
              className="font-nav text-sm tracking-[0.2em] px-8 py-3 border border-[#F0EDE6] text-[#F0EDE6] hover:bg-[#F0EDE6] hover:text-[#080808] transition-all duration-300"
            >
              VIEW WORK
            </Link>
            <Link
              to="/contact"
              className="font-nav text-sm tracking-[0.2em] px-8 py-3 bg-[#C9A84C] text-[#080808] hover:bg-[#E8821A] transition-all duration-300"
            >
              HIRE OLALEKAN
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              <Link
                to="/work"
                className="group relative bg-[var(--color-graphite)] p-12 md:p-16 border-r border-[var(--color-steel)] hover:bg-[var(--color-steel)] transition-colors duration-500"
              >
                <h3 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-4">
                  Art Direction &amp; Production Design
                </h3>
                <p className="font-body text-[var(--color-chalk)] max-w-md mb-8 leading-relaxed">
                  From Nollywood blockbusters and Netflix originals to broadcast studios and experiential installations — creating immersive visual worlds rooted in storytelling.
                </p>
                <span className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                  VIEW WORK <ArrowRight size={16} />
                </span>
              </Link>
              {PUBLISHED_ROUTES.workshops && (
                <Link
                  to="/workshops"
                  className="group relative bg-[var(--color-graphite)] p-12 md:p-16 hover:bg-[var(--color-steel)] transition-colors duration-500"
                >
                  <h3 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-4">
                    Masterclasses &amp; Mentorship
                  </h3>
                  <p className="font-body text-[var(--color-chalk)] max-w-md mb-8 leading-relaxed">
                    Learn from years of real-world production experience. KAP Masterclass, Chase Media Masterclass, and bespoke mentorship for emerging creatives.
                  </p>
                  <span className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] flex items-center gap-2 group-hover:gap-4 transition-all">
                    LEARN MORE <ArrowRight size={16} />
                  </span>
                </Link>
              )}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest Work Grid */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-12">
              <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)]">
                Selected Work
              </h2>
              <Link
                to="/work"
                className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] hidden md:flex items-center gap-2 hover:gap-4 transition-all"
              >
                VIEW ALL <ArrowRight size={16} />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 6).map((project, i) => (
              <ScrollReveal key={project.id} delay={i * 0.1}>
                <div className="group relative overflow-hidden bg-[var(--color-graphite)] cursor-pointer" data-cursor-hover>
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[var(--gradient-card-from)] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                    <p className="font-mono text-[10px] text-[#C9A84C] mb-1">{project.category} &mdash; {project.year}</p>
                    <h4 className="font-display italic text-2xl text-[#F0EDE6]">{project.title}</h4>
                    <p className="font-body text-sm text-[#D4D4D4] mt-1">{project.client}</p>
                  </div>
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#F0EDE6] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Play size={14} className="text-[#F0EDE6] ml-0.5" />
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="py-20 border-y border-[var(--color-steel)]">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: '15+', label: 'YEARS IN ART & DESIGN' },
                { value: 'AMVCA', label: 'BEST ART DIRECTOR NOMINEE' },
                { value: 'NETFLIX', label: 'SHANTY TOWN · THE PARTY' },
                { value: 'JUST ART LTD', label: 'FOUNDER & CREATIVE DIRECTOR' },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display italic text-3xl md:text-4xl text-[var(--color-gold)] mb-2">{stat.value}</p>
                  <p className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em]">{stat.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* About Teaser */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src={siteImages.homeAboutPortrait}
                  alt="Olalekan Swanky Isiaka on location"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="md:pl-8">
                <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-4">ABOUT</p>
                <h2 className="font-display italic text-4xl md:text-5xl text-[var(--color-ivory)] mb-6">
                  Building Worlds That Tell Stories
                </h2>
                <p className="font-body text-[var(--color-chalk)] leading-relaxed mb-6 max-w-lg">
                  From The Polytechnic, Ibadan to Nollywood blockbusters and Netflix originals — I bridge fine art and large-scale production design, creating visually cohesive worlds that enhance storytelling.
                </p>
                <p className="font-body text-[var(--color-chalk)] leading-relaxed mb-8 max-w-lg">
                  Whether it is a film set, a broadcast studio, or a gallery exhibition — every space I design is rooted in faith, cultural authenticity, and immersive visual storytelling.
                </p>
                <Link
                  to="/about"
                  className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] flex items-center gap-2 hover:gap-4 transition-all"
                >
                  READ FULL BIO <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Latest Blog Posts — hidden when blog is unpublished */}
      {PUBLISHED_ROUTES.blog && (
        <section className="section-padding">
          <div className="max-w-[1440px] mx-auto px-[5vw]">
            <ScrollReveal>
              <div className="flex items-end justify-between mb-12">
                <h2 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)]">
                  From the Blog
                </h2>
                <Link
                  to="/blog"
                  className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] hidden md:flex items-center gap-2 hover:gap-4 transition-all"
                >
                  ALL POSTS <ArrowRight size={16} />
                </Link>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogPosts.slice(0, 3).map((post, i) => (
                <ScrollReveal key={post.id} delay={i * 0.1}>
                  <Link to="/blog" className="group block" data-cursor-hover>
                    <div className="aspect-video overflow-hidden mb-4">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <p className="font-mono text-[10px] text-[var(--color-gold)] mb-2">{post.category}</p>
                    <h4 className="font-display italic text-xl text-[var(--color-ivory)] group-hover:text-[var(--color-gold)] transition-colors mb-2">
                      {post.title}
                    </h4>
                    <p className="font-body text-sm text-[var(--color-silver)]">{post.date} &middot; {post.readTime}</p>
                  </Link>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Footer CTA */}
      <section className="py-32 bg-[var(--color-graphite)]">
        <div className="max-w-[1440px] mx-auto px-[5vw] text-center">
          <ScrollReveal>
            <h2 className="font-display italic text-4xl md:text-6xl text-[var(--color-ivory)] mb-6">
              Ready to Create Something<br />Extraordinary?
            </h2>
            <p className="font-body text-[var(--color-chalk)] mb-10 max-w-lg mx-auto">
              Whether you need a visual artist for your next project, a production designer for stage or screen, or want to commission a bespoke artwork — let us start a conversation.
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



