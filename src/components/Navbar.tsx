import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import LightModeToggle from "./LightModeToggle";
import { isRoutePublished } from "../config/featureFlags";

const allNavLinks = [
  { label: "HOME", path: "/home" },
  { label: "ABOUT", path: "/about" },
  { label: "WORK", path: "/work" },
  { label: "WORKSHOPS", path: "/workshops" },
  { label: "STOCK", path: "/stock" },
  { label: "RATES", path: "/rates" },
  { label: "PRESENTING", path: "/presenting" },
  { label: "BLOG", path: "/blog" },
  { label: "CONTACT", path: "/contact" },
];

const navLinks = allNavLinks.filter((link) => isRoutePublished(link.path));

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full z-[1000] transition-all duration-500 ${
          scrolled ? 'bg-[var(--color-overlay)] backdrop-blur-md nav-scrolled' : 'bg-transparent nav-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-[5vw] py-5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link to="/" className={`font-display text-xl italic tracking-wide transition-colors duration-300 ${scrolled ? 'text-[var(--color-ivory)]' : 'text-[#F0EDE6]'}`}>
              OSI
            </Link>
            {/* Light/Dark mode toggle */}
            <LightModeToggle scrolled={scrolled} />
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`nav-link ${scrolled ? '' : 'nav-link-hero'} ${location.pathname === link.path ? (scrolled ? 'text-[var(--color-ivory)]' : '!text-[#F0EDE6]') : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            className={`lg:hidden p-2 transition-colors duration-300 ${scrolled ? 'text-[var(--color-ivory)]' : 'text-[#F0EDE6]'}`}
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <Menu size={24} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 z-[1001] bg-[var(--color-void)] flex flex-col items-center justify-center transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          className="absolute top-6 right-6 text-[var(--color-ivory)] p-2"
          onClick={() => setMenuOpen(false)}
          aria-label="Close menu"
        >
          <X size={28} />
        </button>
        <div className="flex flex-col items-center gap-8">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              className="font-nav text-2xl text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors duration-300"
              style={{
                transitionDelay: menuOpen ? `${i * 50}ms` : '0ms',
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                opacity: menuOpen ? 1 : 0,
                transition: 'all 0.4s ease-out',
              }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}
