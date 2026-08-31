import { useState, useEffect, useRef, useCallback } from 'react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

const TOTAL_FRAMES = 240;

const getFramePath = (index: number) => {
  const paddedIndex = String(index + 1).padStart(6, '0');
  return `/hero-section/frame_${paddedIndex}.jpg`;
};

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
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

const navItems = [
  { name: 'ABOUT', href: '#about' },
  { name: 'SKILLS', href: '#skills' },
  { name: 'EXPERIENCE', href: '#experience' },
  { name: 'PROJECTS', href: '#work' },
  { name: 'CONTACT', href: '#contact' },
];

export const HeroSection: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);

  const cursorRef = useRef<HTMLDivElement | null>(null);
  const isHoveredRef = useRef(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const currentFrameRef = useRef<number>(0);
  const requestRef = useRef<number | null>(null);

  // Sync ref for cursor hover
  useEffect(() => {
    isHoveredRef.current = isHovered;
  }, [isHovered]);

  // Direct DOM cursor movement for zero-lag 60fps responsiveness without React state re-renders
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        const size = isHoveredRef.current ? 48 : 12;
        cursorRef.current.style.transform = `translate3d(${e.clientX - size / 2}px, ${e.clientY - size / 2}px, 0)`;
        cursorRef.current.style.width = `${size}px`;
        cursorRef.current.style.height = `${size}px`;
        cursorRef.current.style.backgroundColor = isHoveredRef.current ? 'rgba(176, 18, 26, 0.12)' : 'rgba(176, 18, 26, 0.75)';
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Draw frame to canvas safely with high-DPI scaling and aspect ratio cover
  const drawFrame = useCallback((index: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const img = imagesRef.current[index];
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    if (rect.width <= 0 || rect.height <= 0 || img.width <= 0 || img.height <= 0) return;

    if (canvas.width !== Math.floor(rect.width * dpr) || canvas.height !== Math.floor(rect.height * dpr)) {
      canvas.width = Math.floor(rect.width * dpr);
      canvas.height = Math.floor(rect.height * dpr);
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Calculate aspect cover ratio safely
    const hRatio = canvas.width / img.width;
    const vRatio = canvas.height / img.height;
    const ratio = Math.max(hRatio, vRatio);

    if (!isFinite(ratio) || ratio <= 0) return;

    const centerShiftX = (canvas.width - img.width * ratio) / 2;
    const centerShiftY = (canvas.height - img.height * ratio) / 2;

    try {
      ctx.drawImage(
        img,
        0, 0, img.width, img.height,
        centerShiftX, centerShiftY, img.width * ratio, img.height * ratio
      );
    } catch {
      // Ignore transient canvas draw errors
    }
  }, []);

  const renderFrameThrottled = useCallback((index: number) => {
    currentFrameRef.current = index;
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(() => {
      drawFrame(index);
    });
  }, [drawFrame]);

  // Preload & decode all 240 frame images & render frame 0 instantly
  useEffect(() => {
    let loadedCount = 0;
    const images: HTMLImageElement[] = [];

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = getFramePath(i);
      
      const onImageReady = () => {
        loadedCount++;
        setLoadProgress(Math.floor((loadedCount / TOTAL_FRAMES) * 100));

        if (i === 0) {
          setIsLoaded(true);
          requestAnimationFrame(() => drawFrame(0));
        }

        if (loadedCount === TOTAL_FRAMES) {
          setIsLoaded(true);
        }
      };

      img.onload = () => {
        if (img.decode) {
          img.decode().then(onImageReady).catch(onImageReady);
        } else {
          onImageReady();
        }
      };

      img.onerror = onImageReady;

      images.push(img);
    }

    imagesRef.current = images;
  }, [drawFrame]);

  // Handle Resize & Initial Draw once loaded
  useEffect(() => {
    if (isLoaded) {
      drawFrame(currentFrameRef.current);
      const handleResize = () => drawFrame(currentFrameRef.current);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isLoaded, drawFrame]);

  // Handle Scroll-linked Frame Scrubbing + Auto loop when at top
  useEffect(() => {
    let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const heroHeight = window.innerHeight;
      const progress = Math.min(1, Math.max(0, scrollY / heroHeight));
      const targetFrame = Math.min(TOTAL_FRAMES - 1, Math.floor(progress * (TOTAL_FRAMES - 1)));

      if (autoPlayInterval && scrollY > 10) {
        clearInterval(autoPlayInterval);
        autoPlayInterval = null;
      }

      renderFrameThrottled(targetFrame);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    autoPlayInterval = setInterval(() => {
      if (window.scrollY < 20 && isLoaded) {
        const nextFrame = (currentFrameRef.current + 1) % TOTAL_FRAMES;
        renderFrameThrottled(nextFrame);
      }
    }, 45); // ~22 FPS smooth idle playback

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (autoPlayInterval) clearInterval(autoPlayInterval);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
    };
  }, [isLoaded, renderFrameThrottled]);

  return (
    <section className="hero-section relative w-screen h-screen overflow-hidden text-[#E8DFD8] font-sans selection:bg-[#B0121A] selection:text-white cursor-none">

      {/* ================= 1. DIRECT DOM HIGH-PERFORMANCE CUSTOM CURSOR ================= */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 pointer-events-none z-50 rounded-full border border-[#B0121A]/80 flex items-center justify-center backdrop-blur-[1px] shadow-[0_0_8px_rgba(176,18,26,0.3)] transition-colors duration-200"
        style={{
          width: '12px',
          height: '12px',
          backgroundColor: 'rgba(176, 18, 26, 0.75)',
          transform: 'translate3d(-100px, -100px, 0)',
        }}
      />

      {/* ================= 2. FRAME-SCRUB CANVAS ANIMATION LAYER ================= */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none flex items-center justify-end">
        {/* Soft Toned-Down Radial Light Glow Behind Subject */}
        <div 
          className="absolute right-4 top-1/2 -translate-y-1/2 w-[45vw] h-[75vh] rounded-full pointer-events-none z-0" 
          style={{ background: 'radial-gradient(circle, rgba(232, 223, 216, 0.10) 0%, rgba(176, 18, 26, 0.08) 45%, transparent 70%)' }} 
        />
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[55vw] h-[85vh] bg-[#6E0D12]/12 rounded-full blur-[140px] pointer-events-none z-0" />

        {/* Loading Progress Indicator (only shown while under 100%) */}
        {loadProgress < 100 && (
          <div className="absolute right-6 bottom-6 lg:right-12 lg:bottom-12 z-30 flex items-center space-x-3 bg-[#080304]/90 px-4 py-2 border border-[#6E0D12]/50 rounded-sm backdrop-blur-md">
            <div className="w-2 h-2 rounded-full bg-[#B0121A] animate-ping" />
            <span className="text-[10px] font-mono tracking-widest text-[#E8DFD8]">
              LOADING FRAMES ({loadProgress}%)
            </span>
          </div>
        )}

        {/* Main Canvas Frame Renderer */}
        <div className="relative w-full md:w-3/5 lg:w-1/2 h-full flex items-center justify-center z-10">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover filter brightness-[1.12] contrast-[1.04] saturate-[1.04]"
          />

          {/* Smooth Vertical Fade to Black */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/15 pointer-events-none" />
        </div>
      </div>

      {/* ================= 3. CONTENT LAYER ================= */}
      <div className="relative z-10 flex flex-col justify-between h-full w-full px-6 sm:px-12 lg:px-16 pt-6 pb-8 pointer-events-none">
        
        {/* Navigation Bar */}
        <header className="relative flex items-center justify-between w-full pointer-events-auto">
          {/* Logo / Brand Mark */}
          <a
            href="#"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-xs sm:text-sm font-bold tracking-[0.35em] uppercase text-[#E8DFD8] hover:text-[#B0121A] transition-colors"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span className="w-2.5 h-2.5 bg-[#B0121A] rounded-full shadow-[0_0_6px_#B0121A] inline-block group-hover:scale-125 transition-transform" />
            <span>SHAZEEM JAVED</span>
          </a>

          {/* Navigation Links */}
          <nav
            className="hidden md:flex items-center space-x-8 lg:space-x-10 text-[11px] tracking-[0.28em] font-light uppercase text-[#8A8580] absolute left-1/2 -translate-x-1/2"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="relative group py-1 transition-colors duration-300 text-[#E8DFD8] hover:text-[#B0121A]"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#B0121A] transition-all duration-300 group-hover:w-full shadow-[0_0_6px_#B0121A]" />
              </a>
            ))}
          </nav>

          {/* Right CTA Action */}
          <a
            href="#contact"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="group flex items-center space-x-2 text-[11px] tracking-[0.24em] font-medium uppercase py-2 px-5 border border-[#6E0D12]/60 hover:border-[#B0121A] bg-[#6E0D12]/15 hover:bg-[#B0121A] text-[#E8DFD8] hover:text-white transition-all duration-300 backdrop-blur-sm ml-auto md:ml-0 shadow-[0_0_10px_rgba(176,18,26,0.15)]"
            style={{ fontFamily: "'Montserrat', sans-serif" }}
          >
            <span>LET&apos;S TALK</span>
            <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
              ↗
            </span>
          </a>
        </header>

        {/* Main Hero Row */}
        <div className="relative flex flex-col md:flex-row items-center justify-between w-full pt-4 pb-2 my-auto">
          
          {/* LEFT: Headline & Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-sm sm:max-w-md md:max-w-xl lg:max-w-[42rem] xl:max-w-[46rem] pointer-events-auto z-20"
          >
            {/* Title / Role Subhead */}
            <motion.div variants={fadeUpVariants} className="mb-3 flex items-center space-x-3">
              <span className="px-3 py-1 bg-[#6E0D12]/30 border border-[#B0121A]/40 text-[#E8DFD8] text-[10px] font-mono tracking-[0.25em] uppercase rounded-sm">
                AGENCY FOUNDER &amp; AI PRACTITIONER
              </span>
            </motion.div>

            {/* Massive Condensed Headline */}
            <motion.div variants={fadeUpVariants} className="relative mb-4 select-none">
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-[6.8rem] xl:text-[7.5rem] tracking-tight uppercase leading-[0.84]"
                style={{ fontFamily: "'Bebas Neue', sans-serif" }}
              >
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#8A8580]">
                  SHAZEEM JAVED
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FF2E3B] via-[#B0121A] to-[#6E0D12] drop-shadow-[0_4px_12px_rgba(176,18,26,0.35)]">
                  DIGITAL MARKETING
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#E8DFD8] via-[#8A8580] to-[#403C39]">
                  &amp; AI SYSTEMS
                </span>
              </h1>
            </motion.div>

            {/* Intro Copy */}
            <motion.div
              variants={fadeUpVariants}
              className="text-xs sm:text-sm md:text-[14px] font-light text-[#E8DFD8]/90 leading-[1.8] tracking-wide max-w-xl mb-7 space-y-2 border-l-2 border-[#B0121A] pl-4 bg-gradient-to-r from-[#6E0D12]/15 to-transparent py-2"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              <p>
                7+ years scaling brands across Pakistan, UAE &amp; the UK — <strong className="text-white font-medium">Rs11M+</strong> in managed ad spend, <strong className="text-white font-medium">$111K+</strong> in tracked client revenue, and AI-powered marketing systems that cut production time by 60%.
              </p>
            </motion.div>

            {/* CTA Action Buttons */}
            <motion.div
              variants={fadeUpVariants}
              className="flex flex-row items-center gap-4 sm:gap-6"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              {/* Explore My Work CTA */}
              <motion.a
                href="#work"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-3 px-6 sm:px-8 py-3.5 border border-[#B0121A] bg-[#B0121A] hover:bg-[#FF2E3B] hover:border-[#FF2E3B] text-white text-[11px] font-semibold tracking-[0.24em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(176,18,26,0.25)]"
              >
                <span>EXPLORE PROJECTS</span>
                <span className="transform transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-xs">
                  ↗
                </span>
              </motion.a>

              {/* Contact Me Button */}
              <motion.a
                href="#contact"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.02 }}
                className="relative inline-flex items-center space-x-2 px-6 sm:px-7 py-3.5 border border-[#6E0D12]/60 hover:border-[#B0121A] bg-[#000000]/60 text-[#E8DFD8] hover:text-white text-[11px] font-medium tracking-[0.24em] uppercase transition-all duration-300 backdrop-blur-md"
              >
                <span>CONTACT ME</span>
                <span className="text-xs">↓</span>
              </motion.a>
            </motion.div>
          </motion.div>

          {/* RIGHT: Floating Quote & Monoline Signature Card */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-start pointer-events-auto pr-16 xl:pr-24 z-20 select-none max-w-xs"
          >
            {/* Quote Icon */}
            <span className="text-3xl text-[#B0121A] leading-none font-serif mb-2 drop-shadow-[0_0_6px_#B0121A]">
              “
            </span>

            {/* Philosophy Quote */}
            <p 
              className="text-[11px] font-light tracking-wide text-[#E8DFD8] leading-relaxed mb-3 italic"
              style={{ fontFamily: "'Montserrat', sans-serif" }}
            >
              I combine performance marketing with AI automation — so growth doesn&apos;t stop when the budget runs out.
            </p>

            {/* Crimson Accent Divider */}
            <div className="w-28 h-[1.5px] bg-gradient-to-r from-[#B0121A] via-[#6E0D12] to-transparent shadow-[0_0_6px_#B0121A] mb-2" />

            {/* Monoline Signature */}
            <div 
              className="text-[2.5rem] text-[#E8DFD8] font-normal leading-none -ml-0.5"
              style={{ 
                fontFamily: "'Herr Von Muellerhoff', 'Allura', cursive",
                letterSpacing: '0.04em',
              }}
            >
              Shazeem Javed
            </div>
            <span className="text-[9px] font-mono tracking-widest text-[#8A8580] uppercase mt-1">
              Founder, SJ Media Agency
            </span>
          </motion.div>

        </div>

        {/* Bottom Spacer */}
        <div className="h-2" />
      </div>
    </section>
  );
};

export default HeroSection;