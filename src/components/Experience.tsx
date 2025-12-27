import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Briefcase, Calendar } from 'lucide-react';
export function Experience() {
  return <section id="experience" className="py-24 bg-[#0a0e27] relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#a855f7]/5 rounded-full blur-[100px] -translate-y-1/2 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6">
        <FadeIn>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="text-gradient">Professional Experience</span>
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#00d4ff] to-[#a855f7] mx-auto rounded-full" />
          </div>
        </FadeIn>

        <div className="space-y-12">
          {/* Experience Item 1 */}
          <FadeIn delay={0.1}>
            <div className="relative pl-8 md:pl-0">
              {/* Timeline Line (Desktop) */}
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

              <div className="md:flex items-start justify-between group">
                {/* Date Side (Left) */}
                <div className="md:w-[45%] md:text-right md:pr-12 mb-4 md:mb-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151f3f] border border-slate-700 text-[#00d4ff] text-sm font-medium mb-2">
                    <Calendar size={14} />
                    December 2023 – Present
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Backend Developer
                  </h3>
                  <p className="text-[#a855f7] font-medium">
                    Mern IT Solutions, Islamabad
                  </p>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 rounded-full bg-[#0a0e27] border-4 border-[#00d4ff] -translate-x-[5px] md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(0,212,255,0.5)]" />

                {/* Content Side (Right) */}
                <div className="md:w-[45%] md:pl-12">
                  <div className="bg-[#151f3f]/30 border border-slate-800 rounded-xl p-6 hover:border-[#00d4ff]/30 transition-all duration-300 hover:bg-[#151f3f]/50">
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-[#00ffaa] mb-2">
                        Rillabox (Gaming Platform)
                      </h4>
                      <p className="text-sm text-slate-400 mb-3 font-mono">
                        Python / Django
                      </p>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-[#00ffaa] rounded-full flex-shrink-0" />
                          Developed real-time battle functionality using Django
                          REST Framework and Django Channels (WebSockets).
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-[#00ffaa] rounded-full flex-shrink-0" />
                          Implemented real-time notifications, live game
                          results, and spectator mode.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-[#00ffaa] rounded-full flex-shrink-0" />
                          Optimized backend logic improving API response time by
                          25%.
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-[#00ffaa] mb-2">
                        Scipherx (Enterprise SaaS)
                      </h4>
                      <p className="text-sm text-slate-400 mb-3 font-mono">
                        Java / Spring Boot
                      </p>
                      <ul className="space-y-2 text-slate-300 text-sm">
                        <li className="flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-[#00ffaa] rounded-full flex-shrink-0" />
                          Designed and deployed CRUD REST APIs for microservices
                          communication.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-[#00ffaa] rounded-full flex-shrink-0" />
                          Integrated Keycloak for IAM and enabled SSO via Google
                          OAuth.
                        </li>
                        <li className="flex items-start">
                          <span className="mr-2 mt-1.5 w-1 h-1 bg-[#00ffaa] rounded-full flex-shrink-0" />
                          Containerized full backend stack using Docker Compose.
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Experience Item 2 */}
          <FadeIn delay={0.2}>
            <div className="relative pl-8 md:pl-0">
              <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-800 -translate-x-1/2" />

              <div className="md:flex items-start justify-between group flex-row-reverse">
                {/* Date Side (Right for alternating layout) */}
                <div className="md:w-[45%] md:text-left md:pl-12 mb-4 md:mb-0">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#151f3f] border border-slate-700 text-[#00d4ff] text-sm font-medium mb-2">
                    <Calendar size={14} />
                    August 2022 – December 2023
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Python Developer
                  </h3>
                  <p className="text-[#a855f7] font-medium">
                    BluePrimes LTD, Mansehra
                  </p>
                </div>

                {/* Center Dot */}
                <div className="absolute left-0 md:left-[50%] top-0 w-4 h-4 rounded-full bg-[#0a0e27] border-4 border-[#a855f7] -translate-x-[5px] md:-translate-x-1/2 z-10 group-hover:scale-125 transition-transform duration-300 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />

                {/* Content Side (Left) */}
                <div className="md:w-[45%] md:pr-12">
                  <div className="bg-[#151f3f]/30 border border-slate-800 rounded-xl p-6 hover:border-[#a855f7]/30 transition-all duration-300 hover:bg-[#151f3f]/50">
                    <ul className="space-y-3 text-slate-300 text-sm">
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-[#a855f7] rounded-full flex-shrink-0" />
                        Built cross-platform desktop applications (Hospital
                        Management, POS) using PyQt5.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-[#a855f7] rounded-full flex-shrink-0" />
                        Developed Django-based web applications with role-based
                        authentication and PDF reporting.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-[#a855f7] rounded-full flex-shrink-0" />
                        Engineered secure license generation and validation
                        systems.
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2 mt-1.5 w-1 h-1 bg-[#a855f7] rounded-full flex-shrink-0" />
                        Implemented user authentication and data persistence.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>;
}