import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-graphite)] border-t border-[var(--color-steel)]">
      <div className="max-w-[1440px] mx-auto px-[5vw] py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {/* Contact */}
          <div>
            <h4 className="font-nav text-sm text-[var(--color-gold)] mb-6">CONTACT</h4>
            <p className="font-body text-[var(--color-chalk)] mb-2">olalekan@swankyi.com</p>
            <p className="font-body text-[var(--color-silver)] text-sm">Based in the UK. Available worldwide.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-nav text-sm text-[var(--color-gold)] mb-6">NAVIGATION</h4>
            <div className="grid grid-cols-2 gap-3">
              {['Home', 'About', 'Work', 'Workshops', 'Stock', 'Rates', 'Presenting', 'Blog', 'Contact'].map((item) => (
                <Link
                  key={item}
                  to={`/${item.toLowerCase()}`}
                  className="font-body text-sm text-[var(--color-silver)] hover:text-[var(--color-gold)] transition-colors duration-200 flex items-center gap-1"
                >
                  {item} <ArrowUpRight size={12} />
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-nav text-sm text-[var(--color-gold)] mb-6">SOCIAL</h4>
            <div className="flex flex-col gap-3">
              {['Vimeo', 'Instagram', 'YouTube', 'X (Twitter)', 'LinkedIn', 'Facebook'].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="font-body text-sm text-[var(--color-silver)] hover:text-[var(--color-gold)] transition-colors duration-200 flex items-center gap-1"
                >
                  {social} <ArrowUpRight size={12} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-[var(--color-steel)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-mono text-[var(--color-ash)]">
            &copy; Olalekan Swanky Isiaka 2025. All Rights Reserved.
          </p>
          <div className="flex gap-6">
            <Link to="#" className="font-mono text-[var(--color-ash)] hover:text-[var(--color-gold)] transition-colors">
              Privacy Policy
            </Link>
            <Link to="#" className="font-mono text-[var(--color-ash)] hover:text-[var(--color-gold)] transition-colors">
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

