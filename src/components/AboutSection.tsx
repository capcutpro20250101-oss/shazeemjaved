import { useRef, useState } from 'react';
import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import type { Variants } from 'framer-motion';
import aboutPhoto from '../assets/images/Gemini_Generated_Image_vyouw9vyouw9vyou.jfif';

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.1,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

export const AboutSection: React.FC = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isCardHovered, setIsCardHovered] = useState(false);

  // 1. Motion Values
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightX = useMotionValue(200);
  const spotlightY = useMotionValue(200);

  // 2. Springs for 3D Physics
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [12, -12]), { damping: 20, stiffness: 200 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-12, 12]), { damping: 20, stiffness: 200 });

  // 3. Spotlight Background in Toned-Down Crimson
  const spotlightBg = useTransform(
    [spotlightX, spotlightY],
    ([x, y]) => `radial-gradient(circle 240px at ${x}px ${y}px, rgba(255,46,59,0.18), rgba(176,18,26,0.10), transparent 80%)`
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
    spotlightX.set(e.clientX - rect.left);
    spotlightY.set(e.clientY - rect.top);
  };

  const handleMouseEnter = () => setIsCardHovered(true);

  const handleMouseLeave = () => {
    setIsCardHovered(false);
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section 
      id="about" 
      className="relative w-screen min-h-screen bg-black text-[#E8DFD8] font-sans selection:bg-[#B0121A] selection:text-white py-24 lg:py-32 px-6 sm:px-12 lg:px-20 overflow-hidden flex items-center"
    >
      {/* Background Toned-Down Crimson Glows */}
      <motion.div 
        animate={{ scale: [1, 1.15, 1], opacity: [0.04, 0.10, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-1/4 left-1/6 w-[34rem] h-[34rem] bg-[#B0121A] rounded-full blur-[170px] pointer-events-none"
      />
      <motion.div 
        animate={{ scale: [1.15, 1, 1.15], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-1/6 right-1/4 w-[30rem] h-[30rem] bg-[#6E0D12] rounded-full blur-[180px] pointer-events-none"
      />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Eyebrow Header */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center space-x-4 mb-10"
        >
          <span 
            className="text-[11px] font-medium tracking-[0.35em] uppercase text-[#B0121A]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            01 / ABOUT ME
          </span>
          <div className="w-20 h-[1.5px] bg-gradient-to-r from-[#B0121A] via-[#6E0D12] to-transparent shadow-[0_0_5px_rgba(176,18,26,0.3)]" />
        </motion.div>

        {/* Main Grid: Content + Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* ================= LEFT CONTENT (7 COLS) ================= */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            {/* Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-6 select-none">
              <h2
                className="text-5xl sm:text-6xl md:text-7xl lg:text-[5.2rem] tracking-tight uppercase leading-[0.88]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#8A8580]">
                  BRIDGING PERFORMANCE MARKETING
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FF2E3B] via-[#B0121A] to-[#6E0D12] drop-shadow-[0_4px_12px_rgba(176,18,26,0.3)]">
                  WITH AGENTIC AI AUTOMATION.
                </span>
              </h2>
            </motion.div>

            {/* Real Bio */}
            <motion.p
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14.5px] font-light text-[#E8DFD8]/90 leading-[1.85] tracking-wide mb-8 max-w-xl"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I&apos;m <span className="text-white font-medium">Shazeem Javed</span>, a Digital Marketing Specialist, AI Practitioner, and the Founder of <span className="text-[#FF2E3B] font-medium">SJ Media Agency</span> based in Lahore, Pakistan. Over 7+ years I&apos;ve run full-funnel campaigns — Meta Ads, Google Ads, SEO, and AI-powered automation — for clients across Pakistan, UAE, and the UK. I also teach YouTube Automation and Agentic AI at Brains College, training students to build AI content and automation systems from scratch.
            </motion.p>

            {/* Philosophy Highlight Box */}
            <motion.div
              variants={fadeUpVariants}
              className="mb-10 p-5 border-l-2 border-[#B0121A] bg-gradient-to-r from-[#6E0D12]/20 via-[#6E0D12]/5 to-transparent rounded-r-md"
            >
              <span className="block text-[10px] font-mono tracking-widest text-[#B0121A] uppercase mb-1">
                // CORE PHILOSOPHY
              </span>
              <p 
                className="text-xs sm:text-sm font-medium text-white italic"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                &ldquo;I combine performance marketing with AI automation — so growth doesn&apos;t stop when the budget runs out.&rdquo;
              </p>
            </motion.div>

            {/* 4 Stat Counters */}
            <motion.div 
              variants={fadeUpVariants}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-6 pb-2 border-t border-[#6E0D12]/30"
            >
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#FF2E3B] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  7+ YEARS
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8A8580] mt-0.5">
                  Industry Experience
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#E8DFD8] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  Rs11M+
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8A8580] mt-0.5">
                  Managed Ad Spend
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#FF2E3B] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  $111K+
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8A8580] mt-0.5">
                  Client Revenue Generated
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col">
                <span 
                  className="text-3xl sm:text-4xl font-light text-[#E8DFD8] tracking-tight"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  6+
                </span>
                <span className="text-[10px] font-medium tracking-[0.2em] uppercase text-[#8A8580] mt-0.5">
                  Live Websites Delivered
                </span>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT PORTRAIT FRAME (3D HOLOGRAPHIC) ================= */}
          <div className="lg:col-span-5 flex items-center justify-center relative perspective-[1400px]">
            
            {/* Ambient Crimson Glow Ring */}
            <motion.div 
              animate={{
                scale: isCardHovered ? 1.1 : 1,
                opacity: isCardHovered ? 0.25 : 0.1,
              }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute -inset-6 bg-[conic-gradient(from_0deg,#B0121A_0%,#6E0D12_35%,transparent_70%,#B0121A_100%)] blur-xl rounded-3xl pointer-events-none"
            />

            {/* 3D Holographic Card Container */}
            <motion.div
              ref={cardRef}
              style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
              onMouseMove={handleMouseMove}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="relative p-3.5 border border-[#6E0D12]/40 rounded-sm bg-[#080304]/90 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.9)] cursor-pointer group transition-colors duration-300 hover:border-[#B0121A]/80"
            >
              {/* Crimson Corner Brackets */}
              <div className="pointer-events-none">
                <div className="absolute top-0 left-0 w-5 h-5 border-t-2 border-l-2 border-[#B0121A]/80 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute top-0 right-0 w-5 h-5 border-t-2 border-r-2 border-[#B0121A]/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                <div className="absolute bottom-0 left-0 w-5 h-5 border-b-2 border-l-2 border-[#B0121A]/80 transition-transform duration-300 group-hover:-translate-x-0.5 group-hover:translate-y-0.5" />
                <div className="absolute bottom-0 right-0 w-5 h-5 border-b-2 border-r-2 border-[#B0121A]/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
              </div>

              {/* Portrait Image Canvas */}
              <div className="relative overflow-hidden w-full max-w-[390px] aspect-[4/5] bg-black rounded-sm">
                <img
                  src={aboutPhoto}
                  alt="Shazeem Javed"
                  className="w-full h-full object-cover object-top filter brightness-[0.98] contrast-[1.05] group-hover:brightness-105 transition-all duration-500 ease-out"
                />

                {/* Mouse Spotlight Sweep */}
                <motion.div
                  className="absolute inset-0 pointer-events-none mix-blend-overlay transition-opacity duration-300"
                  style={{
                    background: spotlightBg,
                    opacity: isCardHovered ? 1 : 0,
                  }}
                />

                {/* Vignette Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />

                {/* Signature Tag */}
                <div className="absolute bottom-4 right-4 z-20 select-none">
                  <span 
                    className="text-3xl text-[#E8DFD8] transition-colors duration-300 group-hover:text-white"
                    style={{ fontFamily: "'Herr Von Muellerhoff', cursive" }}
                  >
                    Shazeem Javed
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;