import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Code2, Database, Layout, Server, Shield, Terminal } from 'lucide-react';
const skillCategories = [{
  title: 'Programming Languages',
  icon: <Code2 className="w-6 h-6 text-[#00d4ff]" />,
  skills: ['Python', 'Java', 'SQL', 'JavaScript']
}, {
  title: 'Frameworks & Libraries',
  icon: <Layout className="w-6 h-6 text-[#a855f7]" />,
  skills: ['Django & DRF', 'Flask', 'Spring Boot', 'PyQt5', 'React.js', 'Streamlit']
}, {
  title: 'Databases',
  icon: <Database className="w-6 h-6 text-[#00ffaa]" />,
  skills: ['PostgreSQL', 'MySQL', 'SQLite', 'SQL Server', 'ClickHouse']
}, {
  title: 'Tools & Platforms',
  icon: <Terminal className="w-6 h-6 text-[#00d4ff]" />,
  skills: ['Docker', 'Git/GitHub', 'AWS S3', 'Railway', 'Vercel']
}, {
  title: 'Authentication & Security',
  icon: <Shield className="w-6 h-6 text-[#a855f7]" />,
  skills: ['Keycloak', 'Google OAuth', 'JWT', 'SSO Implementation']
}, {
  title: 'Other',
  icon: <Server className="w-6 h-6 text-[#00ffaa]" />,
  skills: ['Real-time WebSockets', 'Microservices', 'RESTful APIs', 'PDF Generation', 'English, Urdu']
}];
export function Skills() {
  return <section id="skills" className="py-24 bg-[#0a0e27] relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Skills & Expertise</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => <FadeIn key={index} delay={index * 0.1}>
              <div className="group h-full bg-[#151f3f]/50 backdrop-blur-sm border border-slate-800 rounded-xl p-6 hover:border-[#00d4ff]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(0,212,255,0.1)]">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-lg bg-[#0a0e27] border border-slate-800 group-hover:border-[#00d4ff]/30 transition-colors">
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-[#00d4ff] transition-colors">
                    {category.title}
                  </h3>
                </div>
                <ul className="space-y-2">
                  {category.skills.map((skill, i) => <li key={i} className="flex items-center text-slate-400 group-hover:text-slate-300 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] mr-2.5 opacity-60 group-hover:opacity-100" />
                      {skill}
                    </li>)}
                </ul>
              </div>
            </FadeIn>)}
        </div>
      </div>
    </section>;
}