import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import gsap from 'gsap';
import { siteImages } from '../assets/siteImages';

export default function Splash() {
  const containerRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background slow zoom
      gsap.fromTo(
        imgRef.current,
        { scale: 1.1 },
        { scale: 1, duration: 10, ease: 'none' }
      );

      // Name fade in with character stagger
      gsap.from(nameRef.current, {
        opacity: 0,
        y: 50,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.3,
      });

      // Subtitle fade in
      gsap.from(subtitleRef.current, {
        opacity: 0,
        y: 20,
        duration: 1,
        ease: 'power3.out',
        delay: 0.9,
      });

      // Scroll indicator pulse
      gsap.to(scrollRef.current, {
        opacity: 0.4,
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.5,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[var(--color-void)]"
    >
      {/* Background Image with Ken Burns */}
      <div
        ref={imgRef}
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: `url(${siteImages.heroSplash})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--gradient-hero-from)] via-[var(--gradient-hero-via)] to-[var(--gradient-hero-to)]" />

      {/* Vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, var(--gradient-vignette) 100%)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-[5vw]">
        <h1
          ref={nameRef}
          className="font-display italic text-[14vw] md:text-[12vw] text-[var(--color-ivory)] text-center leading-none tracking-tight"
        >
          Olalekan Swanky Isiaka
        </h1>
        <p
          ref={subtitleRef}
          className="font-nav text-sm md:text-base text-[var(--color-gold)] tracking-[0.5em] mt-6 md:mt-8"
        >
          VISUAL ARTIST &middot; PRODUCTION DESIGNER &middot; NOLLYWOOD ART DIRECTOR
        </p>
      </div>

      {/* Enter Site Link */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-4">
        <Link
          to="/home"
          className="font-nav text-xs text-[var(--color-silver)] hover:text-[var(--color-gold)] transition-colors tracking-[0.3em]"
        >
          ENTER SITE
        </Link>
        <div
          ref={scrollRef}
          className="w-[1px] h-12 bg-[var(--color-silver)]"
        />
      </div>

      {/* Social Icons Top Right */}
      <div className="absolute top-8 right-[5vw] z-10 flex gap-3">
        {[
          { icon: FaInstagram, href: '#', label: 'Instagram' },
          { icon: FaXTwitter, href: '#', label: 'X' },
          { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
        ].map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            aria-label={label}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-silver)] hover:text-[var(--color-gold)] transition-colors duration-300"
          >
            <Icon size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}

