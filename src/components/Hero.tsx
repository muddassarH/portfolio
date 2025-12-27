import React from 'react';
import { ArrowRight, Github } from 'lucide-react';
import { FadeIn } from './ui/FadeIn';
export function Hero() {
  return <section id="about" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full bg-[#00d4ff]/10 blur-[100px] animate-float" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] rounded-full bg-[#a855f7]/10 blur-[100px] animate-float-reverse" />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="order-2 lg:order-1 text-center lg:text-left">
          <FadeIn delay={0.1}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
              <span className="block">Hi, I'm</span>
              <span className="text-gradient animate-gradient-x">
                Muddassar Hussain
              </span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.2}>
            <h2 className="text-xl md:text-2xl text-slate-400 font-light mb-8 max-w-2xl mx-auto lg:mx-0">
              Python Developer | Django Specialist | Java Spring Boot Developer
              | Full Stack Engineer
            </h2>
          </FadeIn>

          <FadeIn delay={0.3}>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              Backend Developer specializing in Java Spring Boot and Python.
              Expert in building scalable APIs, microservices, and real-time
              systems with Django & Spring Boot. Passionate about delivering
              production-ready solutions with clean code and solid architecture.
            </p>
          </FadeIn>

          <FadeIn delay={0.4}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="group relative px-8 py-3.5 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-white font-semibold rounded-lg overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(0,212,255,0.4)] hover:scale-105 active:scale-95">
                <span className="relative z-10 flex items-center gap-2">
                  Get In Touch{' '}
                  <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-[#a855f7] to-[#00d4ff] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>

              <a href="https://github.com/muddassarH/" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-transparent border border-[#00d4ff] text-[#00d4ff] font-semibold rounded-lg hover:bg-[#00d4ff]/10 transition-all hover:scale-105 active:scale-95 flex items-center justify-center gap-2">
                <Github size={18} />
                View My Work
              </a>
            </div>
          </FadeIn>
        </div>

        <div className="order-1 lg:order-2 flex justify-center">
          <FadeIn delay={0.2} direction="left">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#00d4ff] to-[#a855f7] animate-spin-slow opacity-70 blur-md" />
              <div className="absolute inset-1 rounded-full bg-[#0a0e27] z-10 flex items-center justify-center overflow-hidden border-4 border-[#151f3f]">
                <img src="https://agi-prod-file-upload-public-main-use1.s3.amazonaws.com/547940cc-1e0a-4885-948f-0c1d45869f27" alt="Muddassar Hussain" className="w-full h-full object-cover animate-float hover:scale-110 transition-transform duration-700" />
              </div>

              {/* Decorative Orbs */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-[#00ffaa] rounded-full blur-md animate-float z-20 opacity-80" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#a855f7] rounded-full blur-md animate-float-reverse z-20 opacity-80" />
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-slate-500">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </div>
    </section>;
}