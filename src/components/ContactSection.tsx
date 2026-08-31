import { useState } from 'react';
import { motion } from 'framer-motion';

const teamMembers = [
  {
    name: 'Abdul Rehman',
    role: 'Meta Specialist',
    agency: 'SJ Media Agency',
  },
  {
    name: 'Muhammad Farazam',
    role: 'Developer',
    agency: 'SJ Media Agency',
  },
  {
    name: 'Salman Anthony',
    role: 'Game Developer',
    agency: 'SJ Media Agency',
  },
];

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <footer
      id="contact"
      className="relative w-full bg-black text-[#E8DFD8] font-sans selection:bg-[#B0121A] selection:text-white pt-20 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      {/* Subtle Background Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[38rem] h-[38rem] bg-[#B0121A]/05 rounded-full blur-[180px] pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Main Grid: Info + Team + Terminal Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column (5 Cols): Direct Contacts & Team */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-10">
            <div>
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
                  05 / CONTACT &amp; DISPATCH
                </span>
                <div className="w-16 h-[1.5px] bg-gradient-to-r from-[#B0121A] via-[#6E0D12] to-transparent shadow-[0_0_5px_rgba(176,18,26,0.3)]" />
              </motion.div>

              {/* Headline */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.8 }}
                className="mb-8"
              >
                <h2
                  className="text-5xl sm:text-6xl md:text-7xl tracking-tight uppercase leading-[0.85] select-none"
                  style={{ fontFamily: "'Bebas Neue', sans-serif" }}
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FFFFFF] via-[#E8DFD8] to-[#8A8580]">
                    LET&apos;S BUILD
                  </span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-b from-[#FF2E3B] via-[#B0121A] to-[#6E0D12] drop-shadow-[0_4px_12px_rgba(176,18,26,0.25)]">
                    WHAT&apos;S NEXT.
                  </span>
                </h2>
              </motion.div>

              <p
                className="text-xs sm:text-[13px] font-light text-[#8A8580] leading-relaxed max-w-md mb-8"
                style={{ fontFamily: "'Montserrat', sans-serif" }}
              >
                Looking for digital ad growth, AI automation pipelines, or agency collaboration? Reach out directly via phone, email, or message.
              </p>

              {/* Direct Contact Cards */}
              <div className="space-y-4 mb-10">
                {/* Email */}
                <a
                  href="mailto:shazeemjaved88@gmail.com"
                  className="group flex items-center justify-between p-4 border border-[#6E0D12]/30 bg-[#080304] rounded-sm hover:border-[#B0121A]/70 transition-all duration-300"
                >
                  <div className="flex flex-col">
                    <span className="text-[9.5px] font-mono tracking-widest text-[#B0121A] uppercase">
                      // DIRECT EMAIL
                    </span>
                    <span className="text-sm font-mono text-white group-hover:text-[#FF2E3B] transition-colors">
                      shazeemjaved88@gmail.com
                    </span>
                  </div>
                  <span className="text-xs text-[#B0121A] group-hover:translate-x-1 transition-transform">↗</span>
                </a>

                {/* Phone */}
                <a
                  href="tel:+923114180628"
                  className="group flex items-center justify-between p-4 border border-[#6E0D12]/30 bg-[#080304] rounded-sm hover:border-[#B0121A]/70 transition-all duration-300"
                >
                  <div className="flex flex-col">
                    <span className="text-[9.5px] font-mono tracking-widest text-[#B0121A] uppercase">
                      // PHONE / WHATSAPP
                    </span>
                    <span className="text-sm font-mono text-white group-hover:text-[#FF2E3B] transition-colors">
                      +92 311 4180628
                    </span>
                  </div>
                  <span className="text-xs text-[#B0121A] group-hover:translate-x-1 transition-transform">↗</span>
                </a>

                {/* Location */}
                <div className="p-4 border border-[#6E0D12]/20 bg-[#080304] rounded-sm flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-[9.5px] font-mono tracking-widest text-[#B0121A] uppercase">
                      // LOCATION &amp; AVAILABILITY
                    </span>
                    <span className="text-sm font-mono text-white">
                      Lahore, Pakistan <span className="text-[#8A8580] text-xs font-sans">(Open to UK Roles)</span>
                    </span>
                  </div>
                  <span className="w-2 h-2 rounded-full bg-[#B0121A] shadow-[0_0_6px_#B0121A]" />
                </div>
              </div>

              {/* Agency Core Team Section */}
              <div className="pt-6 border-t border-[#6E0D12]/20">
                <span className="text-[10px] font-mono tracking-[0.25em] text-[#B0121A] uppercase block mb-3">
                  // SJ MEDIA AGENCY TEAM
                </span>
                <div className="grid grid-cols-1 gap-2.5">
                  {teamMembers.map((member) => (
                    <div
                      key={member.name}
                      className="px-3.5 py-2.5 border border-[#6E0D12]/25 bg-[#080304]/60 rounded-sm flex items-center justify-between"
                    >
                      <span className="text-xs font-mono text-white font-medium">
                        {member.name}
                      </span>
                      <span className="text-[10px] font-mono text-[#8A8580]">
                        {member.role} • {member.agency}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* Right Column: Terminal Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 relative w-full rounded-sm border border-[#6E0D12]/40 bg-[#080304] p-8 sm:p-10 shadow-[0_20px_50px_rgba(0,0,0,0.95)] overflow-hidden"
          >
            {/* Top Crimson Line */}
            <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-[#B0121A]/60 to-transparent" />
            
            {/* Corner Crosshairs */}
            <div className="absolute top-0 left-0 w-3 h-3 border-t border-l border-[#B0121A]/60" />
            <div className="absolute top-0 right-0 w-3 h-3 border-t border-r border-[#B0121A]/60" />
            <div className="absolute bottom-0 left-0 w-3 h-3 border-b border-l border-[#B0121A]/60" />
            <div className="absolute bottom-0 right-0 w-3 h-3 border-b border-r border-[#B0121A]/60" />

            {sent ? (
              <div className="py-16 text-center space-y-4">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-[#B0121A] bg-[#6E0D12]/20 text-[#FF2E3B] text-lg shadow-[0_0_10px_rgba(176,18,26,0.2)]">
                  ✓
                </div>
                <h3 className="text-3xl text-white font-normal uppercase" style={{ fontFamily: "'Bebas Neue', sans-serif" }}>
                  TRANSMISSION SENT
                </h3>
                <p className="text-xs text-[#8A8580] font-light" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                  Thank you! Shazeem Javed will respond to your message shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#B0121A] mb-2">
                      // SENDER NAME
                    </span>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Enter your name"
                      className="w-full bg-[#100507] border border-[#6E0D12]/30 focus:border-[#B0121A] text-xs text-white placeholder-[#8A8580]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>

                  <div>
                    <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#B0121A] mb-2">
                      // EMAIL ADDRESS
                    </span>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email"
                      className="w-full bg-[#100507] border border-[#6E0D12]/30 focus:border-[#B0121A] text-xs text-white placeholder-[#8A8580]/50 px-4 py-3 outline-none rounded-sm transition-colors"
                      style={{ fontFamily: "'Montserrat', sans-serif" }}
                    />
                  </div>
                </div>

                <div>
                  <span className="block text-[9.5px] font-mono tracking-[0.2em] uppercase text-[#B0121A] mb-2">
                    // MESSAGE PAYLOAD
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your project, ad campaign, or inquiry..."
                    className="w-full bg-[#100507] border border-[#6E0D12]/30 focus:border-[#B0121A] text-xs text-white placeholder-[#8A8580]/50 p-4 outline-none rounded-sm transition-colors resize-none"
                    style={{ fontFamily: "'Montserrat', sans-serif" }}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 border border-[#B0121A] bg-[#B0121A] hover:bg-[#FF2E3B] hover:border-[#FF2E3B] text-white text-xs font-semibold tracking-[0.25em] uppercase transition-all duration-300 shadow-[0_0_15px_rgba(176,18,26,0.2)]"
                  style={{ fontFamily: "'Montserrat', sans-serif" }}
                >
                  SEND TRANSMISSION ↗
                </button>

              </form>
            )}
          </motion.div>

        </div>

        {/* Footer Info */}
        <div className="pt-16 mt-16 border-t border-[#6E0D12]/15 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-4">
          <span className="text-[10px] font-mono tracking-widest text-[#B0121A] uppercase">
            SHAZEEM JAVED // DIGITAL MARKETING &amp; AI PRACTITIONER
          </span>
          <span className="text-[10px] font-mono text-[#8A8580]">
            © {new Date().getFullYear()} SHAZEEM JAVED • ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </footer>
  );
};

export default ContactSection;