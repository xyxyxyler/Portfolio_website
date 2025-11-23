import React, { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring, useMotionValue } from 'framer-motion';
import { ArrowRight, Download, Brain, Code, Database, TrendingUp, MousePointer2, Smartphone, Monitor } from 'lucide-react';
import { HERO_DATA } from '../constants';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Mouse interaction for 3D tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    x.set((clientX / innerWidth) - 0.5);
    y.set((clientY / innerHeight) - 0.5);
  };

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [5, -5]), { stiffness: 150, damping: 20 });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 20 });

  const stats = [
    { icon: Brain, label: "AI Strategy", color: "text-purple-400", bg: "bg-fintech-950/80", border: "border-purple-500/30" },
    { icon: TrendingUp, label: "Fintech Innovation", color: "text-fintech-accent", bg: "bg-fintech-950/80", border: "border-fintech-accent/30" },
    { icon: Smartphone, label: "Digital Product", color: "text-blue-400", bg: "bg-fintech-950/80", border: "border-blue-500/30" },
  ];

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('contact');
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section
      id="about"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-24 pb-10 lg:pt-24"
    >
      {/* Dynamic Futuristic Background */}
      <div className="absolute inset-0 -z-20 bg-fintech-950/30">
        <div className="absolute inset-0 bg-grid-pattern bg-[size:50px_50px] opacity-[0.1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-fintech-950/0 via-fintech-900/50 to-fintech-950"></div>

        {/* Animated Cyber Rings */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-fintech-800/30 rounded-full opacity-50 animate-[spin_60s_linear_infinite]"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-fintech-700/20 rounded-full opacity-50 animate-[spin_40s_linear_infinite_reverse] border-dashed"></div>

        {/* Floating Data Particles */}
        <motion.div
          animate={{ y: [0, -20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute top-20 right-20 text-fintech-accent/20 font-mono text-sm hidden lg:block"
        >
          01011001
        </motion.div>
        <motion.div
          animate={{ y: [0, 20, 0], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 7, repeat: Infinity }}
          className="absolute bottom-40 left-20 text-purple-500/20 font-mono text-sm hidden lg:block"
        >
          AF32_EXEC
        </motion.div>

        {/* Glow Orbs */}
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-fintech-500/10 rounded-full blur-[120px] mix-blend-screen"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10">

        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 flex flex-col items-start"
        >
          <motion.div
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "auto" }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-4 border border-fintech-accent/40 rounded-full bg-fintech-accent/5 backdrop-blur-md overflow-hidden whitespace-nowrap"
          >
            <span className="w-2 h-2 rounded-full bg-fintech-accent animate-pulse shadow-[0_0_10px_#06b6d4]"></span>
            <span className="text-fintech-accent text-xs font-bold tracking-widest uppercase">Available for Innovation</span>
          </motion.div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white leading-none mb-4 tracking-tight">
            Forging the <br />
            <span className="relative">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-fintech-accent to-fintech-400">
                Future of Banking and Fintech
              </span>
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-fintech-accent opacity-50" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2" fill="none" />
              </svg>
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-6 max-w-lg leading-relaxed border-l-4 border-fintech-accent pl-6 bg-gradient-to-r from-fintech-900/50 to-transparent py-2">
            {HERO_DATA.subtext}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <a
              href="#contact"
              onClick={handleContactClick}
              className="group relative px-8 py-4 bg-white text-fintech-950 font-bold rounded-xl overflow-hidden flex items-center justify-center gap-2 shadow-[0_0_30px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(6,182,212,0.4)] transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white via-gray-200 to-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <span className="relative z-10">Start a Project</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://drive.google.com/file/d/1c9q9hYmz6yC6nnTDPT9--IM86qTsZiru/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 border border-fintech-700 bg-fintech-950/30 backdrop-blur-md text-white rounded-xl hover:border-fintech-accent hover:bg-fintech-accent/10 transition-all flex items-center justify-center gap-2 group"
            >
              <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              <span>Download CV</span>
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6 text-gray-500 text-sm font-medium">
            <div className="flex items-center gap-2 animate-pulse">
              <MousePointer2 className="w-4 h-4" />
              <span>SCROLL TO EXPLORE</span>
            </div>
          </div>
        </motion.div>

        {/* Image & Interactive Elements */}
        <motion.div
          style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 lg:order-2 flex justify-center relative perspective-1000 py-6 lg:py-0"
        >
          {/* Portrait Container for Standing Image */}
          <div className="relative w-[280px] h-[420px] md:w-[360px] md:h-[540px]">

            {/* Tech Decoration - Rectangular Frame */}
            <div className="absolute -inset-4 border border-fintech-accent/20 rounded-[40px] animate-pulse"></div>
            <div className="absolute -inset-2 border border-fintech-700/20 rounded-[35px]"></div>

            {/* Main Image Container */}
            <div className="absolute inset-0 rounded-[30px] bg-fintech-800 border-2 border-fintech-700/50 shadow-2xl overflow-hidden z-10 transform transition-transform group">
              <img
                src="/anthony.png"
                alt="Anthony Boakye"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Info Cards - Adjusted for Portrait */}
            {stats.map((stat, index) => {
              const positions = [
                "top-12 -left-12",
                "bottom-24 -right-16",
                "bottom-8 left-[-20px]"
              ];

              return (
                <motion.div
                  key={index}
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 4, delay: index * 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className={`absolute ${positions[index]} z-20 ${stat.bg} backdrop-blur-xl p-3 pr-5 rounded-2xl border ${stat.border} shadow-lg shadow-black/50 flex items-center gap-3`}
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className={`p-2.5 rounded-xl bg-fintech-950/50 ${stat.color} border border-white/5`}>
                    <stat.icon size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Expertise</p>
                    <p className="text-white font-bold text-sm leading-tight">{stat.label}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;