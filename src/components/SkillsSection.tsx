import { useState } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const bentoCategories = [
  {
    title: 'PAID ADVERTISING',
    badge: 'PERFORMANCE MARKETING',
    items: ['Meta Ads (FB & IG)', 'Google Ads', 'Retargeting', 'Lead Gen', 'Advantage+'],
    description: 'Specialized in multi-funnel campaign creation, audience segmentation, A/B creative testing, and high-ROI ad spend allocation across Meta & Google networks.',
    stat: 'Rs11M+ SPEND',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'SEARCH ENGINE OPTIMIZATION',
    badge: 'ORGANIC GROWTH',
    items: ['On-Page SEO', 'Off-Page SEO', 'Technical SEO', 'Keyword Research', 'Website Audits'],
    description: 'Building long-term organic traffic engines through technical site optimizations, link building, structured schema markup, and keyword ranking.',
    stat: 'RANKINGS & TRAFFIC',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'AI & AUTOMATION WORKFLOWS',
    badge: 'AI PRACTITIONER',
    items: ['ChatGPT', 'Claude', 'Gemini', 'Midjourney', 'ElevenLabs', 'Runway ML', 'n8n', 'Make', 'AI Agents'],
    description: 'Architecting custom AI agent workflows and video/scripting pipelines that reduce manual content production time by 60%+ for agency clients and students.',
    stat: '-60% PROD TIME',
    colSpan: 'lg:col-span-7',
  },
  {
    title: 'WEB DEVELOPMENT & E-COMMERCE',
    badge: 'FULL-STACK SITES',
    items: ['WordPress', 'WooCommerce', 'Shopify', 'Landing Pages', 'UI/UX Design'],
    description: 'Designing high-converting e-commerce stores, custom landing pages, and responsive corporate sites optimized for speed and checkout conversions.',
    stat: '6+ LIVE SITES',
    colSpan: 'lg:col-span-5',
  },
  {
    title: 'CREATIVE & VIDEO EDITING',
    badge: 'BRAND MEDIA',
    items: ['Photoshop', 'Illustrator', 'Premiere Pro', 'Final Cut Pro', 'Video Editing'],
    description: 'Crafting high-impact video ads, social media post assets, infographics, and brand visuals engineered to stop the scroll.',
    stat: 'HIGH CONVERSION',
    colSpan: 'lg:col-span-6',
  },
  {
    title: 'ANALYTICS & METRICS INTELLIGENCE',
    badge: 'DATA TRACKING',
    items: ['Google Analytics 4', 'Meta Business Suite', 'Shopify Analytics', 'Conversion API'],
    description: 'Setting up custom event tracking, pixel integrations, GA4 conversion paths, and ROI dashboards to monitor full-funnel campaign performance.',
    stat: 'TRACKED ROI',
    colSpan: 'lg:col-span-6',
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const SkillsSection: React.FC = () => {
  const [, setHoveredIdx] = useState<number | null>(null);

  return (
    <section
      id="skills"
      className="relative w-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#B0121A] selection:text-white pt-12 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden flex flex-col justify-center"
    >
      {/* Background Subtle Glows */}
      <div className="absolute top-1/3 left-1/4 w-[34rem] h-[34rem] bg-[#B0121A]/05 rounded-full blur-[170px] pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[28rem] h-[28rem] bg-[#6E0D12]/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="flex items-center space-x-4 mb-7"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#B0121A]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            02 / CORE SKILLS &amp; STACK
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#B0121A] via-[#6E0D12] to-transparent shadow-[0_0_5px_rgba(176,18,26,0.3)]" />
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#8A8580]">
              MARKETING MASTERY.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FF2E3B] via-[#B0121A] to-[#6E0D12] drop-shadow-[0_4px_12px_rgba(176,18,26,0.25)]">
              AI-POWERED PRECISION.
            </span>
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-6"
        >
          {bentoCategories.map((block, idx) => (
            <motion.div
              key={block.title}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIdx(idx)}
              onMouseLeave={() => setHoveredIdx(null)}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className={`${block.colSpan} relative p-8 sm:p-9 rounded-sm border border-[#6E0D12]/30 bg-[#080304]/85 backdrop-blur-xl overflow-hidden transition-all duration-300 hover:border-[#B0121A]/70 hover:shadow-[0_12px_30px_rgba(176,18,26,0.12)] cursor-pointer group`}
            >
              {/* Top Border Highlight */}
              <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B0121A]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Minimal Corner Brackets */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#6E0D12]/40 group-hover:border-[#B0121A] transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#6E0D12]/40 group-hover:border-[#B0121A] transition-colors duration-300" />

              {/* Card Meta Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-mono tracking-[0.25em] uppercase text-[#B0121A] group-hover:text-[#FF2E3B] transition-colors">
                  {block.badge}
                </span>
                <span className="text-[10px] font-mono px-2.5 py-0.5 border border-[#6E0D12]/40 text-[#E8DFD8] bg-[#120507] group-hover:border-[#B0121A]/60 group-hover:text-white transition-all">
                  {block.stat}
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-3xl sm:text-4xl font-normal tracking-wide text-white mb-3 group-hover:text-[#FF2E3B] transition-colors"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                {block.title}
              </h3>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-[#8A8580] font-light leading-relaxed mb-7 max-w-xl group-hover:text-[#E8DFD8] transition-colors"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                {block.description}
              </p>

              {/* Tag Chips */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-[#6E0D12]/20">
                {block.items.map((tech) => (
                  <span
                    key={tech}
                    className="px-3.5 py-1.5 text-[10.5px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#6E0D12]/40 bg-[#120507] text-[#E8DFD8] group-hover:border-[#B0121A]/60 group-hover:bg-[#1C080A] group-hover:text-white transition-all duration-300"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default SkillsSection;