import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Filter, Sparkles, ArrowRight } from 'lucide-react';
import { portfolioCategories, portfolioProjects } from '../data/portfolioData';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import ProjectModal from '../components/portfolio/ProjectModal';
import HomeCTA from '../components/home/HomeCTA';
import Button from '../components/ui/Button';

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(8);

  const filteredProjects = portfolioProjects.filter((project) => {
    if (activeCategory === 'All') return true;
    return project.category === activeCategory;
  });

  const visibleProjects = filteredProjects.slice(0, visibleCount);

  return (
    <div className="pt-24 min-h-screen bg-brand-navy">
      {/* Page Header */}
      <div className="py-14 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-brand-mint transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-mint">Portfolio</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              Our Portfolio:{' '}
              <span className="text-gradient-teal">Crafted for Impact</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              Explore our curated portfolio of enterprise websites, responsive mobile applications, cohesive brand identities, and high-ROI digital campaigns.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Pill Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-muted pr-2 shrink-0">
            <Filter className="w-3.5 h-3.5 text-brand-teal" />
            <span>Filter:</span>
          </div>
          {portfolioCategories.map((cat) => {
            const isActive = activeCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setVisibleCount(8);
                }}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-200 shrink-0 border ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-teal to-brand-mint text-brand-navy border-brand-mint shadow-glow-teal font-bold'
                    : 'bg-white/5 text-brand-muted border-white/10 hover:border-brand-teal/40 hover:text-white'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Responsive 4-Column Desktop Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-7">
          {visibleProjects.map((project) => (
            <PortfolioCard
              key={project.id}
              project={project}
              onSelect={(p) => setSelectedProject(p)}
            />
          ))}
        </div>

        {/* View More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-14 text-center">
            <Button
              variant="secondary"
              size="lg"
              icon={ArrowRight}
              onClick={() => setVisibleCount((prev) => prev + 4)}
              className="shadow-md hover:shadow-glow-teal"
            >
              View More Our Work
            </Button>
          </div>
        )}
      </div>

      {/* Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Bottom CTA */}
      <HomeCTA
        title="Inspired by what you see?"
        subtitle="Let's build a flagship digital product or brand experience that establishes leadership in your category."
        buttonText="Discuss Your Project"
      />
    </div>
  );
}
