import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Send, Check } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    message: '',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-16">
            {/* Left Column */}
            <div className="lg:col-span-2">
              <ScrollReveal>
                <p className="font-mono text-[10px] text-[var(--color-gold)] tracking-[0.15em] mb-6">CONTACT</p>
                <h1 className="font-display italic text-5xl md:text-6xl text-[var(--color-ivory)] leading-tight mb-8">
                  Let&apos;s Create<br />Something<br />Extraordinary
                </h1>
                <div className="space-y-4 mb-10">
                  <p className="font-body text-[var(--color-chalk)]">
                    <span className="text-[var(--color-silver)]">Email:</span>{' '}
                    <a href="mailto:olalekan@swankyi.com" className="hover:text-[var(--color-gold)] transition-colors">
                      olalekan@swankyi.com
                    </a>
                  </p>
                  <p className="font-body text-[var(--color-chalk)]">
                    <span className="text-[var(--color-silver)]">Location:</span> Based in the UK. Available worldwide.
                  </p>
                </div>
                <div className="inline-flex items-center gap-2 bg-[var(--color-graphite)] px-4 py-2 border border-[var(--color-steel)]">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <p className="font-mono text-[10px] text-[var(--color-chalk)]">Typically responds within 24 hours</p>
                </div>

                {/* Simple UK Map Indicator */}
                <div className="mt-12 hidden lg:block">
                  <svg viewBox="0 0 200 120" className="w-full max-w-[280px] opacity-30">
                    <path
                      d="M95,20 L105,18 L115,22 L120,30 L118,40 L122,50 L120,60 L115,70 L110,75 L105,80 L100,78 L95,82 L90,78 L85,72 L80,65 L78,55 L80,45 L85,35 L90,28 Z"
                      fill="none"
                      stroke="#C9A84C"
                      strokeWidth="1"
                    />
                    <circle cx="100" cy="50" r="3" fill="#C9A84C" />
                    <text x="108" y="54" fill="#C9A84C" fontSize="8" fontFamily="JetBrains Mono">UK</text>
                  </svg>
                </div>
              </ScrollReveal>
            </div>

            {/* Right Column - Form */}
            <div className="lg:col-span-3">
              <ScrollReveal delay={0.2}>
                {submitted ? (
                  <div className="bg-[var(--color-graphite)] p-12 border border-[var(--color-steel)] text-center">
                    <div className="w-16 h-16 rounded-full bg-[var(--color-gold)] flex items-center justify-center mx-auto mb-6">
                      <Check size={28} className="text-[var(--color-void)]" />
                    </div>
                    <h3 className="font-display italic text-3xl text-[var(--color-ivory)] mb-4">
                      Message Sent
                    </h3>
                    <p className="font-body text-[var(--color-chalk)] mb-8">
                      Thank you for reaching out. Olalekan will be in touch shortly.
                    </p>
                    <Link
                      to="/home"
                      className="font-nav text-sm text-[var(--color-gold)] tracking-[0.2em] hover:text-[var(--color-ivory)] transition-colors"
                    >
                      RETURN HOME
                    </Link>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                        FULL NAME
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] placeholder:text-[var(--color-ash)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                        EMAIL
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] placeholder:text-[var(--color-ash)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                        placeholder="your@email.com"
                      />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                          PROJECT TYPE
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleChange}
                          className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] focus:border-[var(--color-gold)] focus:outline-none transition-colors appearance-none"
                        >
                          <option value="">Select type</option>
                          <option value="film-art-direction">Film Art Direction</option>
                          <option value="production-design">Production Design / Set Build</option>
                          <option value="broadcast-studio">Broadcast Studio Design</option>
                          <option value="art-commission">Art Commission / Painting</option>
                          <option value="event-design">Event / Premiere Design</option>
                          <option value="workshop">Workshop / Masterclass</option>
                          <option value="presenting">Speaking / Industry Talk</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                          BUDGET RANGE
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleChange}
                          className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] focus:border-[var(--color-gold)] focus:outline-none transition-colors appearance-none"
                        >
                          <option value="">Select range</option>
                          <option value="under-10k">Under Â£10,000</option>
                          <option value="10k-25k">Â£10,000 - Â£25,000</option>
                          <option value="25k-50k">Â£25,000 - Â£50,000</option>
                          <option value="50k-100k">Â£50,000 - Â£100,000</option>
                          <option value="over-100k">Over Â£100,000</option>
                          <option value="poa">To be discussed</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="font-mono text-[10px] text-[var(--color-silver)] tracking-[0.15em] mb-2 block">
                        MESSAGE
                      </label>
                      <textarea
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] placeholder:text-[var(--color-ash)] focus:border-[var(--color-gold)] focus:outline-none transition-colors resize-none"
                        placeholder="Tell me about your project..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full md:w-auto font-nav text-sm tracking-[0.2em] px-10 py-4 bg-[var(--color-gold)] text-[var(--color-void)] hover:bg-[var(--color-amber)] transition-all duration-300 flex items-center justify-center gap-3"
                      data-cursor-hover
                    >
                      <Send size={16} />
                      SEND MESSAGE
                    </button>
                  </form>
                )}
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

