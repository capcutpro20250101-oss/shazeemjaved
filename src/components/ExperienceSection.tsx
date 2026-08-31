import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface RouteStop {
  id: string;
  year: string;
  title: string;
  organization: string;
  description: string;
}

const journey: RouteStop[] = [
  {
    id: '01',
    year: 'JUN 2026 – PRESENT',
    title: 'YOUTUBE AUTOMATION & AGENTIC AI INSTRUCTOR',
    organization: 'BRAINS COLLEGE, LAHORE',
    description: 'Teaching YouTube Automation and Agentic AI; designing curriculum on scripting, voice generation, video automation, and AI agent workflows (ChatGPT, Claude, n8n, Make).',
  },
  {
    id: '02',
    year: 'JAN 2018 – PRESENT',
    title: 'CEO & FOUNDER',
    organization: 'SJ MEDIA AGENCY, LAHORE',
    description: 'Founded and scaled a full-service digital agency (Meta Ads, Google Ads, SEO, web dev, creative). Managed Rs11M+ ad spend across e-commerce, fashion, education, and retail. Leading a 4-person team serving clients in Pakistan, UAE, and the UK.',
  },
  {
    id: '03',
    year: '2021 – PRESENT',
    title: 'AI PRACTITIONER & TRAINER',
    organization: 'SELF-DIRECTED / FREELANCE',
    description: '4+ years applying and teaching AI tools (ChatGPT, Claude, Gemini, Midjourney, ElevenLabs, Runway ML) across marketing and content workflows — cutting production time by 60%+.',
  },
  {
    id: '04',
    year: 'JAN 2024 – MAY 2026',
    title: 'DIGITAL MARKETING INSTRUCTOR',
    organization: 'AIM COMPUTER COLLEGE & ACADEMY',
    description: 'Taught SEO, Meta Ads, Google Ads, and social media management to aspiring digital marketers.',
  },
  {
    id: '05',
    year: '2023 – 2024',
    title: 'SOCIAL MEDIA MANAGER',
    organization: 'SAM & FIZA BEAUTY SALON',
    description: 'Managed full social media presence, promotional video campaigns, brand aesthetics, and customer engagement.',
  },
  {
    id: '06',
    year: '2018 – 2022',
    title: 'SALES & MARKETING MANAGER',
    organization: 'BOBBY COMMUNICATION',
    description: 'Led sales operations, client acquisition pipelines, and strategic marketing campaigns across regional markets.',
  },
  {
    id: '07',
    year: '2019 – 2021',
    title: 'SOCIAL MEDIA MANAGER',
    organization: 'SÍC BY SAIRA',
    description: 'Curated digital content strategies, influencer outreach, and fashion e-commerce social campaigns.',
  },
];

export const ExperienceSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 70%', 'end 90%'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <section
      id="experience"
      ref={containerRef}
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#B0121A] selection:text-white pt-10 pb-28 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Background Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] bg-[#B0121A]/[0.02] rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-4xl mx-auto w-full relative z-10">
        
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
            03 / EXPERIENCE &amp; LEADERSHIP
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#B0121A] via-[#6E0D12] to-transparent shadow-[0_0_5px_rgba(176,18,26,0.3)]" />
        </motion.div>

        {/* Section Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mb-16"
        >
          <h2
            className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] tracking-tight uppercase leading-[0.85] select-none"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#8A8580]">
              CAREER TIMELINE &amp;
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FF2E3B] via-[#B0121A] to-[#6E0D12] drop-shadow-[0_4px_12px_rgba(176,18,26,0.25)]">
              KEY ROLES.
            </span>
          </h2>
        </motion.div>

        {/* Timeline Route Map */}
        <div className="relative w-full">
          
          {/* Background Track */}
          <div className="absolute left-[19px] md:left-[140px] top-4 bottom-8 w-[1px] bg-[#6E0D12]/20" />
          
          {/* Animated Crimson Track */}
          <motion.div
            style={{ height: lineHeight }}
            className="absolute left-[19px] md:left-[140px] top-4 w-[2px] bg-gradient-to-b from-[#FF2E3B] via-[#B0121A] to-[#6E0D12]/40 shadow-[0_0_6px_rgba(176,18,26,0.3)] origin-top"
          />

          <div className="space-y-12">
            {journey.map((stop, idx) => (
              <motion.div
                key={stop.id}
                initial={{ opacity: 0, x: -15 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative flex flex-col md:flex-row items-start group"
              >
                {/* Desktop Year (Left side of track) */}
                <div className="hidden md:block w-[140px] shrink-0 pr-8 pt-0.5 text-right">
                  <span className="text-[10px] font-mono tracking-[0.2em] text-[#8A8580] group-hover:text-[#B0121A] transition-colors">
                    {stop.year}
                  </span>
                </div>

                {/* Route Node */}
                <div className="absolute left-[19px] md:left-[140px] top-1.5 -translate-x-1/2 flex items-center justify-center">
                  <div className="absolute w-6 h-6 rounded-full border border-[#B0121A]/0 group-hover:border-[#B0121A]/40 group-hover:scale-125 transition-all duration-300 ease-out" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#080304] border border-[#6E0D12] group-hover:bg-[#B0121A] group-hover:border-[#B0121A] transition-colors duration-300" />
                </div>

                {/* Content (Right side of track) */}
                <div className="ml-14 md:ml-12 pl-2">
                  {/* Mobile Year */}
                  <div className="md:hidden mb-1.5">
                    <span className="text-[10px] font-mono tracking-[0.2em] text-[#B0121A]">
                      {stop.year}
                    </span>
                  </div>

                  <h3
                    className="text-3xl sm:text-4xl tracking-wide text-white group-hover:text-[#FF2E3B] transition-colors mb-1 leading-none"
                    style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                  >
                    {stop.title}
                  </h3>
                  
                  <span 
                    className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#B0121A] mb-2"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.organization}
                  </span>
                  
                  <p 
                    className="text-xs sm:text-[13px] font-light text-[#8A8580] leading-[1.7] max-w-lg group-hover:text-[#E8DFD8] transition-colors"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  >
                    {stop.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

        {/* Education Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.7 }}
          className="mt-20 p-8 rounded-sm border border-[#6E0D12]/40 bg-[#080304]/80 backdrop-blur-xl relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B0121A]/50 to-transparent" />
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono tracking-widest text-[#B0121A] uppercase block mb-1">
                // EDUCATION &amp; ACADEMICS
              </span>
              <h4 className="text-2xl sm:text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                BACHELOR OF ARTS (B.A.)
              </h4>
              <p className="text-xs text-[#8A8580] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                University of the Punjab, Lahore • Graduated 2018
              </p>
            </div>
            <span className="px-4 py-2 border border-[#6E0D12]/60 bg-[#120507] text-[#FF2E3B] text-[10px] font-mono tracking-widest uppercase rounded-sm">
              GRADUATE 2018
            </span>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;