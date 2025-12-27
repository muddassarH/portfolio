import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { GraduationCap, Award } from 'lucide-react';
const certifications = [{
  title: 'Python Data Structures',
  issuer: 'Coursera',
  icon: '🐍'
}, {
  title: 'Programming for Everybody',
  issuer: 'Coursera',
  icon: '👨‍💻'
}, {
  title: 'Advanced Python & OOP',
  issuer: 'Coursera',
  icon: '🎓'
}, {
  title: 'Python for Data Science, AI & ML',
  issuer: 'Coursera',
  icon: '📊'
}, {
  title: 'Machine Learning: Regression & Classification',
  issuer: 'Coursera',
  icon: '🤖'
}, {
  title: 'Advanced Django Development',
  issuer: 'Udemy',
  icon: '🚀'
}, {
  title: 'Django REST APIs',
  issuer: 'Udemy',
  icon: '⚙️'
}];
export function Education() {
  return <section className="py-24 bg-[#0a0e27] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00d4ff]/5 rounded-full blur-[100px] translate-y-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Education & Certifications</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Education Column */}
          <div className="lg:col-span-1">
            <FadeIn delay={0.1}>
              <div className="bg-[#151f3f]/50 backdrop-blur-sm border border-slate-800 rounded-xl p-8 h-full hover:border-[#00d4ff]/30 transition-colors">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 rounded-lg bg-[#0a0e27] border border-slate-800">
                    <GraduationCap className="w-6 h-6 text-[#00d4ff]" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Education</h3>
                </div>

                <div className="relative pl-4 border-l-2 border-slate-700">
                  <div className="mb-1">
                    <h4 className="text-lg font-semibold text-white">
                      Electronic Engineer
                    </h4>
                    <p className="text-[#00ffaa] font-medium text-sm">
                      UET Peshawar (Abbottabad Campus)
                    </p>
                  </div>
                  <p className="text-slate-400 text-sm mt-2">
                    Final Project: Prepaid Electric Meter System
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          {/* Certifications Grid */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {certifications.map((cert, index) => <FadeIn key={index} delay={0.2 + index * 0.05}>
                  <div className="group bg-[#151f3f]/30 border border-slate-800 rounded-xl p-5 hover:bg-[#151f3f]/60 hover:border-[#a855f7]/40 transition-all duration-300 hover:-translate-y-1">
                    <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300 inline-block">
                      {cert.icon}
                    </div>
                    <h4 className="text-white font-semibold text-sm mb-1 group-hover:text-[#00d4ff] transition-colors">
                      {cert.title}
                    </h4>
                    <p className="text-slate-500 text-xs flex items-center gap-1">
                      <Award size={10} /> {cert.issuer}
                    </p>
                  </div>
                </FadeIn>)}
            </div>
          </div>
        </div>
      </div>
    </section>;
}