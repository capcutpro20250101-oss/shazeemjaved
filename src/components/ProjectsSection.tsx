import { motion } from 'framer-motion';
import ScrollStack, { ScrollStackItem } from './ScrollStack';

interface Project {
  number: string;
  title: string;
  category: string;
  description: string;
  projectUrl?: string;
  tech: string[];
  metrics: { label: string; value: string }[];
}

const projects: Project[] = [
  {
    number: '01',
    title: 'Ayesha & Usman',
    category: 'FASHION E-COMMERCE / META ADS',
    description:
      'Full-funnel Meta Ads growth campaign engineered for a high-end luxury fashion brand. Scaled acquisition strategy across Facebook and Instagram retargeting pipelines.',
    projectUrl: 'https://ayeshaandusman.com/',
    tech: ['Meta Ads', 'Shopify', 'FB Pixel', 'Retargeting', 'Google Analytics 4'],
    metrics: [
      { label: 'TRACKED REVENUE', value: '$111,358 (+133%)' },
      { label: 'STORE SESSIONS', value: '537K (+231%)' },
      { label: 'CAMPAIGN TYPE', value: 'Full-Funnel Scaling' },
    ],
  },
  {
    number: '02',
    title: 'KK Sports',
    category: 'SPORTS E-COMMERCE / ADVANTAGE+',
    description:
      'Targeted Meta Advantage+ sales campaign optimization for premier sports gear retailer. Achieved high-volume customer conversion at an exceptionally low CPA.',
    projectUrl: 'https://kksports.com.pk/',
    tech: ['Meta Advantage+', 'WooCommerce', 'Conversion API', 'A/B Testing'],
    metrics: [
      { label: 'TOTAL PURCHASES', value: '415 Orders' },
      { label: 'COST PER PURCHASE', value: 'PKR 166' },
      { label: 'OPTIMIZATION', value: 'Advantage+ AI' },
    ],
  },
  {
    number: '03',
    title: 'Trend2Spent',
    category: 'E-COMMERCE / PERFORMANCE SCALE',
    description:
      'Multi-campaign Meta Ads management scaling e-commerce sales. Direct oversight of Rs11.1M+ total ad spend across high-velocity product offerings.',
    projectUrl: 'https://trend2spent.com/',
    tech: ['Meta Ads', 'Google Ads', 'Shopify', 'Audience Scaling', 'CRO'],
    metrics: [
      { label: 'MANAGED AD SPEND', value: 'Rs11.1M+' },
      { label: 'CAMPAIGNS', value: 'Multi-Network' },
      { label: 'ROI STATUS', value: 'Profitable Scale' },
    ],
  },
  {
    number: '04',
    title: 'Superior College',
    category: 'EDUCATION / LEAD GENERATION',
    description:
      'Social media strategy, poster design, and Meta lead-gen advertising for the international scholarships program. Significantly outperformed national industry benchmarks.',
    projectUrl: undefined,
    tech: ['Meta Lead Ads', 'Posters', 'Copywriting', 'Conversion Funnel'],
    metrics: [
      { label: 'COST PER LEAD', value: '68% Lower' },
      { label: 'BENCHMARK', value: 'Meta-Verified' },
      { label: 'PROGRAM', value: 'Intl Scholarships' },
    ],
  },
  {
    number: '05',
    title: 'Voice of World',
    category: 'UK NONPROFIT / WEB DEVELOPMENT',
    description:
      'Custom WordPress website design and development for a UK-based nonprofit organization. Fully responsive architecture, donation funnel, and accessible UI.',
    projectUrl: 'https://voiceofworld.org.uk/',
    tech: ['WordPress', 'PHP', 'UI/UX Design', 'Technical SEO', 'Elementor'],
    metrics: [
      { label: 'CLIENT REGION', value: 'United Kingdom' },
      { label: 'PLATFORM', value: 'WordPress Custom' },
      { label: 'TYPE', value: 'Nonprofit Portal' },
    ],
  },
  {
    number: '06',
    title: 'TugOfMath',
    category: 'GAME DEVELOPMENT / MULTIPLAYER',
    description:
      'Real-time multiplayer educational math game developed in Unity and Photon. Runs seamlessly in web browsers with zero downloads required.',
    projectUrl: undefined,
    tech: ['Unity Engine', 'Photon Networking', 'C#', 'WebGL', 'Game Dev'],
    metrics: [
      { label: 'NETWORKING', value: 'Photon Real-Time' },
      { label: 'PLATFORM', value: 'Browser WebGL' },
      { label: 'TYPE', value: 'Multiplayer Game' },
    ],
  },
  {
    number: '07',
    title: 'Tech By Hadi',
    category: 'TECH E-COMMERCE / GROWTH',
    description:
      'E-commerce store optimization and Meta ad campaign management. Generated massive sales volume jump and traffic multiplication.',
    projectUrl: 'https://techbyhadi.com/',
    tech: ['Shopify', 'Meta Ads', 'Conversion Rate Opt', 'Analytics'],
    metrics: [
      { label: 'SESSIONS GROWTH', value: '+189%' },
      { label: 'TRACKED SALES', value: 'PKR 104.5K' },
      { label: 'ORDERS INCREASE', value: '+500%' },
    ],
  },
  {
    number: '08',
    title: 'Meerzah.pk',
    category: 'JEWELRY E-COMMERCE / BRAND SCALING',
    description:
      'Performance marketing and creative strategy for online jewelry brand. Rapidly expanded brand reach and customer acquisition profitability.',
    projectUrl: undefined,
    tech: ['Meta Ads', 'Instagram Growth', 'Jewelry Visuals', 'Analytics'],
    metrics: [
      { label: 'TOTAL SALES', value: 'Rs243,934 (+51%)' },
      { label: 'ROAS', value: 'High Return' },
      { label: 'NICHE', value: 'Luxury Jewelry' },
    ],
  },
];

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="work"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#B0121A] selection:text-white pt-20 pb-32 px-6 sm:px-12 lg:px-20"
    >
      {/* Subtle Ambient Glows */}
      <div className="absolute top-1/4 left-1/3 w-[36rem] h-[36rem] bg-[#B0121A]/05 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-[#6E0D12]/10 rounded-full blur-[170px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="flex items-center space-x-4 mb-5"
        >
          <span
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#B0121A]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            04 / FEATURED CASE STUDIES
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#B0121A] via-[#6E0D12] to-transparent shadow-[0_0_5px_rgba(176,18,26,0.3)]" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#8A8580]">
              REAL RESULTS.
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FF2E3B] via-[#B0121A] to-[#6E0D12] drop-shadow-[0_4px_12px_rgba(176,18,26,0.25)]">
              PROVEN CAMPAIGNS.
            </span>
          </h2>

          <p
            className="text-xs sm:text-sm font-light text-[#8A8580] max-w-sm mt-4 md:mt-0 leading-relaxed"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            Scroll down to stack the case study cards. Every project demonstrates tracked revenue, lower acquisition costs, or custom web architecture.
          </p>
        </motion.div>

        {/* Stacking Deck */}
        <ScrollStack
          itemDistance={20}
          itemScale={0.035}
          itemStackDistance={28}
          stackPosition="15%"
          scaleEndPosition="6%"
          baseScale={0.88}
          useWindowScroll={true}
        >
          {projects.map((project) => (
            <ScrollStackItem key={project.title}>
              <div className="relative w-full rounded-2xl border border-[#6E0D12]/40 bg-[#080304] p-8 sm:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.95)] group overflow-hidden transition-colors duration-300 hover:border-[#B0121A]/70">
                
                {/* Top Border Light Flare */}
                <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B0121A]/60 to-transparent" />

                {/* Corner Minimal L-Brackets */}
                <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#6E0D12]/60 group-hover:border-[#B0121A] transition-colors" />
                <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#6E0D12]/60 group-hover:border-[#B0121A] transition-colors" />
                <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#6E0D12]/60 group-hover:border-[#B0121A] transition-colors" />
                <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#6E0D12]/60 group-hover:border-[#B0121A] transition-colors" />

                {/* Watermark Number */}
                <span
                  className="absolute -bottom-6 -right-3 text-8xl sm:text-9xl font-bold text-[#B0121A]/05 select-none pointer-events-none leading-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  {project.number}
                </span>

                {/* Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative z-10">
                  
                  {/* Left Column (7 Cols) */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center space-x-3 mb-4">
                        <span className="text-xs font-mono font-bold text-[#B0121A]">
                          {project.number} //
                        </span>
                        <span className="text-[10.5px] font-mono tracking-[0.25em] uppercase text-[#8A8580]">
                          {project.category}
                        </span>
                      </div>

                      <h3
                        className="text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-white mb-4 group-hover:text-[#FF2E3B] transition-colors uppercase leading-[0.9]"
                        style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                      >
                        {project.title}
                      </h3>

                      <p
                        className="text-xs sm:text-sm md:text-[14px] font-light text-[#E8DFD8]/90 leading-[1.85] tracking-wide mb-8 max-w-2xl"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        {project.description}
                      </p>
                    </div>

                    {/* Tech Pills */}
                    <div className="flex flex-wrap gap-2 pt-6 border-t border-[#6E0D12]/20">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-3 py-1 text-[10px] font-medium tracking-[0.16em] uppercase rounded-sm border border-[#6E0D12]/40 bg-[#120507] text-[#E8DFD8] group-hover:border-[#B0121A]/60 transition-all duration-300"
                          style={{ fontFamily: "'Montserrat', sans-serif" }}
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Right Column (5 Cols) */}
                  <div className="lg:col-span-5 flex flex-col justify-between h-full space-y-6 lg:pl-6 lg:border-l lg:border-[#6E0D12]/20">
                    <div className="space-y-3">
                      <span className="text-[9.5px] font-mono tracking-[0.25em] uppercase text-[#B0121A] block mb-2">
                        // VERIFIED METRICS
                      </span>
                      {project.metrics.map((m) => (
                        <div
                          key={m.label}
                          className="p-3.5 rounded-sm border border-[#6E0D12]/30 bg-[#050203] flex items-center justify-between"
                        >
                          <span className="text-[10px] font-mono text-[#8A8580]">
                            {m.label}
                          </span>
                          <span className="text-[11px] font-mono font-medium text-[#FF2E3B]">
                            {m.value}
                          </span>
                        </div>
                      ))}
                    </div>

                    {project.projectUrl ? (
                      <a
                        href={project.projectUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center space-x-3 px-6 py-3.5 border border-[#B0121A] bg-[#6E0D12]/20 hover:bg-[#B0121A] text-[#E8DFD8] hover:text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_10px_rgba(176,18,26,0.12)]"
                        style={{ fontFamily: "'Montserrat', sans-serif" }}
                      >
                        <span>VISIT LIVE SITE</span>
                        <span className="text-xs">↗</span>
                      </a>
                    ) : (
                      <div className="px-6 py-3.5 border border-[#6E0D12]/30 bg-[#050203] text-[#8A8580] text-[10.5px] font-mono tracking-[0.2em] uppercase text-center rounded-sm">
                        CAMPAIGN CASE STUDY
                      </div>
                    )}
                  </div>

                </div>
              </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>

      </div>
    </section>
  );
};

export default ProjectsSection;