import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { ExternalLink, Github } from 'lucide-react';
const projects = [{
  title: 'AI Knowledge Assistant (RAG)',
  description: 'An AI Knowledge Assistant that reads, understands, and responds to questions using internal documents. Helps teams quickly find precise answers from large volumes of information.',
  tags: ['Python', 'FastAPI', 'Vector DB', 'RAG', 'Chatbot'],
  link: 'https://github.com/muddassarH/',
  color: 'from-blue-500 to-cyan-500'
}, {
  title: 'BayMax - MultiAgent Test Generator',
  description: 'AI-powered multi-agent test case generator that automates testing workflow. Reads code, plans test strategy, generates production-ready test cases, and fixes errors through a 5-agent pipeline.',
  tags: ['Python', 'FastAPI', 'AI Agents', 'Test Automation'],
  link: 'https://github.com/muddassarH/',
  color: 'from-purple-500 to-pink-500'
}, {
  title: 'QueryGenie',
  description: 'MCP-powered server application that converts natural language into executable PostgreSQL queries. Makes databases accessible to non-technical users with instant SQL generation.',
  tags: ['Python', 'FastAPI', 'Streamlit', 'PostgreSQL', 'AI'],
  link: 'https://github.com/muddassarH/',
  color: 'from-green-400 to-emerald-600'
}, {
  title: 'License Generator',
  description: 'Web application using Django to create RESTful APIs for seamless data interaction. Synchronizes data from Point of Sale (POS) software to web platform with real-time updates.',
  tags: ['Django', 'jQuery', 'Python', 'MySQL', 'REST API'],
  link: 'https://github.com/muddassarH/',
  color: 'from-orange-400 to-red-500'
}, {
  title: 'Real-time Gaming Platform',
  description: 'Rillabox gaming platform backend with WebSocket support for live battles. Supports multiple game modes (1v1, 2v2, 3v3) with real-time notifications and spectator mode.',
  tags: ['Django', 'WebSockets', 'Real-time', 'REST API'],
  link: 'https://github.com/muddassarH/',
  color: 'from-cyan-400 to-blue-600'
}, {
  title: 'Enterprise API Integration',
  description: 'Designed and deployed scalable REST APIs for enterprise systems. Implemented microservices architecture with Spring Boot and integrated third-party services.',
  tags: ['Spring Boot', 'REST API', 'Microservices', 'Integration'],
  link: 'https://www.upwork.com/freelancers/~019ff3ebfd79421b14',
  color: 'from-indigo-500 to-purple-600'
}, {
  title: 'Backend Performance Optimization',
  description: 'Optimized Django and Spring Boot backend systems for high-traffic applications. Implemented caching strategies and query optimization for 40%+ performance improvement.',
  tags: ['Django', 'Spring Boot', 'Optimization', 'Performance'],
  link: 'https://www.upwork.com/freelancers/~019ff3ebfd79421b14',
  color: 'from-teal-400 to-green-500'
}, {
  title: 'Data Synchronization System',
  description: 'Built robust data synchronization systems between multiple databases. Implemented real-time data pipelines with error handling, logging, and monitoring capabilities.',
  tags: ['Python', 'Django', 'Data Sync', 'Celery'],
  link: 'https://www.upwork.com/freelancers/~019ff3ebfd79421b14',
  color: 'from-blue-400 to-indigo-500'
}];
export function Projects() {
  return <section id="projects" className="py-24 bg-[#0a0e27] relative">
      <div className="max-w-7xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Featured Projects</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => <FadeIn key={index} delay={index * 0.1}>
              <div className="group h-full bg-[#151f3f]/40 backdrop-blur-sm border border-slate-800 rounded-xl overflow-hidden hover:border-[#00d4ff]/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)] flex flex-col">
                {/* Gradient Top Line */}
                <div className={`h-1 w-full bg-gradient-to-r ${project.color}`} />

                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#00d4ff] transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, i) => <span key={i} className="px-2.5 py-1 text-xs font-medium rounded-full bg-[#0a0e27] border border-slate-700 text-slate-300">
                        {tag}
                      </span>)}
                  </div>

                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-sm font-semibold text-[#00d4ff] hover:text-[#00ffaa] transition-colors">
                    View Project <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </FadeIn>)}
        </div>
      </div>
    </section>;
}