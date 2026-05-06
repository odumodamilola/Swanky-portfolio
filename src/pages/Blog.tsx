import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { blogPosts } from '../data/siteData';

const categories = ['ALL', 'Production Design', 'Behind the Scenes', 'Art & Process', 'Industry Talk'];

export default function Blog() {
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filtered = activeFilter === 'ALL'
    ? blogPosts
    : blogPosts.filter(p => p.category === activeFilter);

  const featuredPost = blogPosts.find(p => p.featured) || blogPosts[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero / Featured Post */}
      <section className="pt-24 pb-16">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <ScrollReveal>
            <Link to="#" className="group block relative overflow-hidden" data-cursor-hover>
              <div className="aspect-[21/9] overflow-hidden">
                <img
                  src={featuredPost.image}
                  alt={featuredPost.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-void)] via-[var(--gradient-hero-via)] to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
                <p className="font-mono text-[10px] text-[#C9A84C] tracking-[0.15em] mb-3">
                  FEATURED &mdash; {featuredPost.category}
                </p>
                <h1 className="font-display italic text-3xl md:text-5xl text-[#F0EDE6] mb-4 group-hover:text-[#C9A84C] transition-colors">
                  {featuredPost.title}
                </h1>
                <p className="font-body text-[#D4D4D4] mb-4 max-w-xl hidden md:block">
                  {featuredPost.excerpt}
                </p>
                <p className="font-mono text-[10px] text-[#8A8A8A]">
                  {featuredPost.date} &middot; {featuredPost.readTime}
                </p>
              </div>
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter */}
      <section className="sticky top-[72px] z-[100] bg-[var(--color-void)]/90 backdrop-blur-md border-b border-[var(--color-steel)] py-4">
        <div className="max-w-[1440px] mx-auto px-[5vw] flex gap-4 md:gap-8 overflow-x-auto">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`font-nav text-sm tracking-[0.15em] whitespace-nowrap pb-1 transition-colors duration-200 ${
                activeFilter === cat
                  ? 'text-[var(--color-gold)] border-b-2 border-[var(--color-gold)]'
                  : 'text-[var(--color-silver)] hover:text-[var(--color-ivory)]'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>
      </section>

      {/* Post Grid */}
      <section className="section-padding">
        <div className="max-w-[1440px] mx-auto px-[5vw]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <ScrollReveal key={post.id} delay={i * 0.08}>
                <Link to="#" className="group block" data-cursor-hover>
                  <div className="aspect-video overflow-hidden mb-4">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                  </div>
                  <p className="font-mono text-[10px] text-[var(--color-gold)] mb-2">{post.category}</p>
                  <h3 className="font-display italic text-xl md:text-2xl text-[var(--color-ivory)] group-hover:text-[var(--color-gold)] transition-colors mb-2">
                    {post.title}
                  </h3>
                  <p className="font-body text-sm text-[var(--color-chalk)] mb-3 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <p className="font-mono text-[10px] text-[var(--color-silver)]">
                    {post.date} &middot; {post.readTime}
                  </p>
                </Link>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-32 bg-[var(--color-graphite)]">
        <div className="max-w-[700px] mx-auto px-[5vw] text-center">
          <ScrollReveal>
            <h2 className="font-display italic text-4xl text-[var(--color-ivory)] mb-4">
              Stay in the Loop
            </h2>
            <p className="font-body text-[var(--color-chalk)] mb-8">
              New art process insights, behind-the-scenes stories, and workshop announcements delivered to your inbox.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 bg-[var(--color-void)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] placeholder:text-[var(--color-ash)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
              />
              <button
                className="font-nav text-sm tracking-[0.2em] px-8 py-3 bg-[var(--color-gold)] text-[var(--color-void)] hover:bg-[var(--color-amber)] transition-all duration-300"
                data-cursor-hover
              >
                SUBSCRIBE
              </button>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <Footer />
    </div>
  );
}

