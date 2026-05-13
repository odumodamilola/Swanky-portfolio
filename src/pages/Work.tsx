import { useEffect, useMemo, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ScrollReveal from '../components/ScrollReveal';
import { siteImages } from '../assets/siteImages';
import { projects } from '../data/siteData';

gsap.registerPlugin(ScrollTrigger);

const categories = ['FILM', 'STUDIO DESIGN', 'ART', 'EXHIBITION'];

export default function Work() {
  const [activeFilter, setActiveFilter] = useState('FILM');
  const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [artYearFilter, setArtYearFilter] = useState<'All' | string>('All');

  const filteredProjects = activeFilter === 'ALL'
    ? projects
    : projects.filter(p => p.category.toUpperCase() === activeFilter);

  // Data for Art Catalog view
  const artProjects = useMemo(() => projects.filter(p => p.category === 'Art'), []);
  const artYears = useMemo(() => {
    const ys = Array.from(new Set(artProjects.map(p => p.year)));
    return ys.sort((a, b) => Number(b) - Number(a));
  }, [artProjects]);
  const filteredArtCatalog = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return artProjects
      .filter(p => (artYearFilter === 'All' ? true : p.year === artYearFilter))
      .filter(p =>
        !q
          ? true
          : p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q)
      )
      .sort((a, b) => Number(b.year) - Number(a.year));
  }, [artProjects, artYearFilter, searchQuery]);

  // Temporarily hide duplicates that share the same image asset
  const dedupedArtCatalog = useMemo(() => {
    const seen = new Set<string>();
    return filteredArtCatalog.filter((p) => {
      const key = p.image as unknown as string;
      if (seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }, [filteredArtCatalog]);

  const openProject = (project: typeof projects[0]) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  const nextProject = () => {
    if (!selectedProject) return;
    const idx = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const next = filteredProjects[(idx + 1) % filteredProjects.length];
    setSelectedProject(next);
  };

  const prevProject = () => {
    if (!selectedProject) return;
    const idx = filteredProjects.findIndex(p => p.id === selectedProject.id);
    const prev = filteredProjects[(idx - 1 + filteredProjects.length) % filteredProjects.length];
    setSelectedProject(prev);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
      if (e.key === 'ArrowRight') nextProject();
      if (e.key === 'ArrowLeft') prevProject();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [selectedProject, filteredProjects]);

  return (
    <div className="bg-[var(--color-void)] min-h-screen">
      <Navbar />

      {/* Hero — Background Video */}
      <section className="relative h-[85vh] min-h-[500px] overflow-hidden flex items-center justify-center">
        <video
          src={siteImages.showreelVideo}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={siteImages.heroSplash}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--color-void)]/60 via-[var(--color-void)]/30 to-[var(--color-void)]" />
        <div className="relative z-10 text-center px-[5vw] max-w-4xl">
          <ScrollReveal>
            <p className="font-mono text-[10px] md:text-xs text-[var(--color-gold)] tracking-[0.3em] mb-4">
              SELECTED WORKS
            </p>
            <h1 className="font-display italic text-5xl sm:text-6xl md:text-8xl text-[var(--color-ivory)] leading-[0.95] mb-6">
              Crafting Worlds,<br />Frame by Frame
            </h1>
            <p className="font-body text-sm md:text-base text-[var(--color-chalk)] max-w-lg mx-auto">
              Art direction, production design &amp; visual storytelling across film, TV studio design, art, and exhibition.
            </p>
          </ScrollReveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
          <span className="font-mono text-[9px] text-[var(--color-silver)] tracking-[0.2em]">SCROLL</span>
          <div className="w-px h-6 bg-[var(--color-gold)]/50" />
        </div>
      </section>

      {/* Filter Bar */}
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
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Project Grid / Art Catalog */}
      {activeFilter === 'ART' ? (
        <section className="section-padding">
          <div className="max-w-[1440px] mx-auto px-[5vw]">
            {/* Catalog controls */}
            <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8">
              <div className="flex-1">
                <input
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search artworks by title or description..."
                  className="w-full bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] placeholder:text-[var(--color-ash)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                />
              </div>
              <div>
                <select
                  value={artYearFilter}
                  onChange={(e) => setArtYearFilter(e.target.value as 'All' | string)}
                  className="bg-[var(--color-graphite)] border border-[var(--color-steel)] px-4 py-3 font-body text-[var(--color-chalk)] focus:border-[var(--color-gold)] focus:outline-none transition-colors"
                >
                  <option value="All">All years</option>
                  {artYears.map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Catalog grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
              {dedupedArtCatalog.map((project, i) => (
                <ScrollReveal key={project.id} delay={(i % 8) * 0.06}>
                  <div
                    onClick={() => openProject(project)}
                    className="group cursor-pointer border border-[var(--color-steel)] bg-[var(--color-graphite)] hover:border-[var(--color-gold)] transition-colors"
                    data-cursor-hover
                  >
                    <div className="aspect-square overflow-hidden bg-[var(--color-void)] flex items-center justify-center p-2">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="max-w-full max-h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-4">
                      <p className="font-mono text-[10px] text-[var(--color-gold)] mb-1">{project.year}</p>
                      <h4 className="font-display italic text-lg text-[var(--color-ivory)]">{project.title}</h4>
                      <p className="font-body text-xs text-[var(--color-silver)] mt-1">
                        {project.specs.camera} &middot; {project.specs.lenses}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      ) : (
        <section className="section-padding">
          <div className="max-w-[1440px] mx-auto px-[5vw]">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project, i) => (
                <ScrollReveal key={project.id} delay={i * 0.08}>
                  <div
                    onClick={() => openProject(project)}
                    className="group relative overflow-hidden bg-[var(--color-graphite)] cursor-pointer"
                    data-cursor-hover
                  >
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[var(--gradient-card-from)] via-[var(--gradient-hero-from)] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                      <p className="font-mono text-[10px] text-[#C9A84C] mb-1">
                        {project.category} &mdash; {project.year}
                      </p>
                      <h4 className="font-display italic text-2xl text-[#F0EDE6]">{project.title}</h4>
                      <p className="font-body text-sm text-[#D4D4D4] mt-1">{project.client}</p>
                    </div>
                    {project.video && (
                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full border border-[#F0EDE6] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <Play size={14} className="text-[#F0EDE6] ml-0.5" />
                      </div>
                    )}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-[2000] bg-[var(--color-void)]/95 backdrop-blur-sm flex items-center justify-center p-[5vw]">
          <button
            onClick={closeModal}
            className="absolute top-6 right-6 text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors z-10"
            data-cursor-hover
          >
            <X size={32} />
          </button>

          <button
            onClick={prevProject}
            className="absolute left-6 top-1/2 -translate-y-1/2 text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors z-10 hidden md:block"
            data-cursor-hover
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={nextProject}
            className="absolute right-6 top-1/2 -translate-y-1/2 text-[var(--color-ivory)] hover:text-[var(--color-gold)] transition-colors z-10 hidden md:block"
            data-cursor-hover
          >
            <ChevronRight size={40} />
          </button>

          <div className="max-w-[1000px] w-full max-h-[90vh] overflow-y-auto">
            <div className="aspect-video bg-[var(--color-graphite)] mb-8 relative overflow-hidden">
              {selectedProject.video ? (
                <iframe
                  src={selectedProject.video}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={selectedProject.title}
                />
              ) : (
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className={`w-full h-full ${selectedProject.category === 'Art' ? 'object-contain' : 'object-cover'}`}
                  loading="lazy"
                />
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="font-mono text-[10px] text-[var(--color-gold)] mb-2">
                  {selectedProject.category} &mdash; {selectedProject.year}
                </p>
                <h2 className="font-display italic text-4xl text-[var(--color-ivory)] mb-4">
                  {selectedProject.title}
                </h2>
                <p className="font-body text-[var(--color-chalk)] leading-relaxed mb-6">
                  {selectedProject.description}
                </p>
                <div className="space-y-2">
                  <p className="font-mono text-[10px] text-[var(--color-silver)]">
                    Art Director: <span className="text-[var(--color-chalk)]">{selectedProject.credits.dp}</span>
                  </p>
                  <p className="font-mono text-[10px] text-[var(--color-silver)]">
                    Director: <span className="text-[var(--color-chalk)]">{selectedProject.credits.director}</span>
                  </p>
                  <p className="font-mono text-[10px] text-[var(--color-silver)]">
                    Client: <span className="text-[var(--color-chalk)]">{selectedProject.credits.client}</span>
                  </p>
                </div>
              </div>
              <div>
                <h4 className="font-nav text-sm text-[var(--color-gold)] tracking-[0.15em] mb-4">
                  {selectedProject.category === 'Art' ? 'ARTWORK DETAILS' : 'TECHNICAL'}
                </h4>
                {selectedProject.category === 'Art' ? (
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-[var(--color-steel)] pb-2">
                      <span className="font-mono text-[10px] text-[var(--color-silver)]">MEDIUM</span>
                      <span className="font-body text-sm text-[var(--color-chalk)]">{selectedProject.specs.camera}</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-steel)] pb-2">
                      <span className="font-mono text-[10px] text-[var(--color-silver)]">SIZE</span>
                      <span className="font-body text-sm text-[var(--color-chalk)]">{selectedProject.specs.lenses}</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-steel)] pb-2">
                      <span className="font-mono text-[10px] text-[var(--color-silver)]">YEAR</span>
                      <span className="font-body text-sm text-[var(--color-chalk)]">{selectedProject.year}</span>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <div className="flex justify-between border-b border-[var(--color-steel)] pb-2">
                      <span className="font-mono text-[10px] text-[var(--color-silver)]">MEDIUM</span>
                      <span className="font-body text-sm text-[var(--color-chalk)]">{selectedProject.specs.camera}</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-steel)] pb-2">
                      <span className="font-mono text-[10px] text-[var(--color-silver)]">MATERIALS</span>
                      <span className="font-body text-sm text-[var(--color-chalk)]">{selectedProject.specs.lenses}</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-steel)] pb-2">
                      <span className="font-mono text-[10px] text-[var(--color-silver)]">LOCATION</span>
                      <span className="font-body text-sm text-[var(--color-chalk)]">{selectedProject.specs.location}</span>
                    </div>
                    <div className="flex justify-between border-b border-[var(--color-steel)] pb-2">
                      <span className="font-mono text-[10px] text-[var(--color-silver)]">YEAR</span>
                      <span className="font-body text-sm text-[var(--color-chalk)]">{selectedProject.specs.year}</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

