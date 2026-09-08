import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { blogPosts } from '../data/blogData';
import HomeCTA from '../components/home/HomeCTA';
import Button from '../components/ui/Button';

export default function BlogPage() {
  const [selectedTag, setSelectedTag] = useState('All');

  const allTags = ['All', 'React', 'Performance', 'Design Systems', 'Branding', 'PPC', 'Growth', 'Automation'];

  const filteredPosts = blogPosts.filter((post) => {
    if (selectedTag === 'All') return true;
    return post.tags.includes(selectedTag);
  });

  return (
    <div className="pt-24 min-h-screen bg-brand-navy">
      {/* Header */}
      <div className="py-14 sm:py-20 border-b border-white/10 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[850px] h-[350px] bg-hero-glow pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <nav className="flex items-center gap-2 text-xs font-semibold text-brand-muted uppercase tracking-wider mb-4">
            <Link to="/" className="hover:text-brand-mint transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-brand-mint">Blog</span>
          </nav>

          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight">
              A3S Insights &{' '}
              <span className="text-gradient-teal">Engineering Blog</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-brand-muted leading-relaxed">
              Perspectives on modern web architectures, conversion design, Core Web Vitals, performance marketing, and enterprise IT transformation from our Madurai engineering lab.
            </p>
          </div>
        </div>
      </div>

      {/* Filter by Tag */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10">
        <div className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none">
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all shrink-0 border ${
                selectedTag === tag
                  ? 'bg-brand-teal text-brand-navy border-brand-teal font-bold shadow-glow-teal'
                  : 'bg-white/5 text-brand-muted border-white/10 hover:text-white'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Articles Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPosts.map((post) => (
            <article
              key={post.id}
              className="glass-card rounded-3xl p-8 border border-white/10 hover:border-brand-teal/40 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group shadow-xl"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-brand-muted">
                  <span className="px-3 py-1 rounded-full bg-brand-teal/15 text-brand-mint border border-brand-teal/30 font-semibold">
                    {post.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-brand-teal" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-xl sm:text-2xl font-bold text-white group-hover:text-brand-mint transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="text-sm text-brand-muted leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                <div className="text-xs text-brand-muted">
                  By <span className="text-white font-medium">{post.author}</span> &bull; {post.date}
                </div>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-mint hover:underline"
                >
                  Read Article &rarr;
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Bottom CTA */}
      <HomeCTA
        title="Stay ahead of the digital curve"
        subtitle="Want our team to conduct a comprehensive audit of your website or digital marketing strategy?"
        buttonText="Request Free Audit"
      />
    </div>
  );
}
