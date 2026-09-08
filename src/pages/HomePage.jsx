import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsBar from '../components/home/StatsBar';
import ServiceOverview from '../components/home/ServiceOverview';
import ProcessPreview from '../components/home/ProcessPreview';
import HomeCTA from '../components/home/HomeCTA';
import { SectionHeader } from '../components/ui/SectionHeader';
import PortfolioCard from '../components/portfolio/PortfolioCard';
import { portfolioProjects } from '../data/portfolioData';
import FAQAccordion from '../components/faq/FAQAccordion';
import Button from '../components/ui/Button';
import { ArrowRight, Sparkles } from 'lucide-react';
import ProjectModal from '../components/portfolio/ProjectModal';

export default function HomePage() {
  const [selectedProject, setSelectedProject] = React.useState(null);
  const featuredProjects = portfolioProjects.slice(0, 3);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Dark Stats Bar with Client Logos */}
      <StatsBar />

      {/* Light Card Section: End-to-End Digital Solutions Under One Roof */}
      <ServiceOverview />

      {/* Featured Portfolio Section */}
      <section className="bg-brand-navy py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden border-t border-white/5">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <SectionHeader
              badge="Selected Works"
              badgeVariant="teal"
              title="Impact-Driven Results"
              highlight="Across Industries"
              description="Explore how our technology architecture and brand design accelerate real-world revenue and operational efficiency."
              align="left"
            />
            <Button
              to="/portfolio"
              variant="secondary"
              size="md"
              icon={ArrowRight}
              className="shrink-0 self-start md:self-end"
            >
              Explore Full Portfolio
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <PortfolioCard
                key={project.id}
                project={project}
                onSelect={(p) => setSelectedProject(p)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 5-Step Process Preview */}
      <ProcessPreview />

      {/* Quick FAQ Section */}
      <section className="bg-brand-navy-light py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative">
        <div className="max-w-4xl mx-auto relative z-10">
          <SectionHeader
            badge="Client Inquiries"
            badgeVariant="teal"
            title="Frequently Asked"
            highlight="Questions"
            description="Clear, straightforward answers about how we collaborate, manage delivery sprints, and provide ongoing support."
            align="center"
            className="mb-14"
          />

          <FAQAccordion limit={4} />

          <div className="mt-10 text-center">
            <Button
              to="/faq"
              variant="secondary"
              size="sm"
              icon={ArrowRight}
            >
              View All 7 Questions & Answers
            </Button>
          </div>
        </div>
      </section>

      {/* Ready to start your project CTA */}
      <HomeCTA />

      {/* Project details modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}
