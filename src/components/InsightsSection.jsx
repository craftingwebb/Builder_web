import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';

const INSIGHTS = [
  {
    id: 1,
    tag: 'Stage Architecture',
    date: 'Nov 12, 2026',
    readTime: '5 min read',
    title: 'Engineering High-Retention Keynote Stages for 2,000+ Enterprise Delegates',
    excerpt: 'From ultra-wide immersive pixel canvases to focused directional acoustics \u2014 inside the production mechanics of India’s premier tech summits.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
  {
    id: 2,
    tag: 'Experiential Design',
    date: 'Nov 08, 2026',
    readTime: '4 min read',
    title: 'The Psychology of First Impressions: Transforming Grand Entrances into Brand Equity',
    excerpt: 'How tactile arrival corridors, atmospheric light sequencing, and spatial reveals elevate attendee perception and social amplifications.',
    image: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
  {
    id: 3,
    tag: 'Safety & Logistics',
    date: 'Nov 02, 2026',
    readTime: '6 min read',
    title: 'Institutional Event Security: Deploying Multi-Tiered Protocols at High-Profile Gatherings',
    excerpt: 'Best practices for VIP transit lanes, accredited crowd stewardship, and silent communication networks at large-scale national summits.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?auto=format&fit=crop&w=1200&q=80',
    link: '#',
  },
];

export default function InsightsSection({ onNavigateInsights }) {
  const handleOpenInsights = () => {
    if (onNavigateInsights) {
      onNavigateInsights();
    } else {
      window.location.hash = '#/insights';
    }
  };

  return (
    <section id="insights" className="bg-ivory pt-24 pb-12 sm:pt-32 sm:pb-16 text-ink">
      <div className="site-container">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="w-8 h-px bg-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#8c734b]">
                Industry Perspectives
              </span>
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-semibold tracking-tight text-ink leading-[1.12]">
              Strategic blueprints for{' '}
              <span className="accent-serif italic font-serif text-[#a07e3a]">
                your next landmark stage.
              </span>
            </h2>
          </div>

          <button
            onClick={handleOpenInsights}
            className="inline-flex items-center gap-2 rounded-full border border-ink/20 px-6 py-3 text-xs font-semibold uppercase tracking-wider text-ink transition duration-300 hover:border-ink hover:bg-ink hover:text-white shrink-0 self-start md:self-end cursor-pointer"
          >
            <span>Explore publications</span>
            <ArrowUpRight className="size-4" />
          </button>
        </div>

        {/* 3 Articles Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {INSIGHTS.map((item) => (
            <article
              key={item.id}
              onClick={handleOpenInsights}
              className="group flex flex-col cursor-pointer"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-ink/10">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 rounded-full bg-ink/75 backdrop-blur-md px-3.5 py-1 text-[11px] font-medium text-white">
                  {item.tag}
                </span>
              </div>

              {/* Meta */}
              <div className="mt-5 flex items-center gap-2 text-xs text-ink/50">
                <span>{item.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="size-3.5 text-gold" />
                  <span>{item.readTime}</span>
                </div>
              </div>

              {/* Title & Excerpt */}
              <h3 className="mt-3 text-xl font-semibold leading-snug text-ink transition-colors duration-300 group-hover:text-[#a07e3a]">
                {item.title}
              </h3>
              <p className="mt-2.5 text-sm leading-relaxed text-ink/65 line-clamp-2">
                {item.excerpt}
              </p>

              {/* Read Link */}
              <div className="mt-4 flex items-center gap-1.5 text-xs font-semibold text-ink transition group-hover:text-gold">
                <span>Read insight</span>
                <ArrowUpRight className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
