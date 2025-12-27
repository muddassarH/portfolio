import React from 'react';
import { FadeIn } from './ui/FadeIn';
import { Mail, Linkedin, Github, Phone, Laptop } from 'lucide-react';
const contactLinks = [{
  name: 'Email',
  value: 'muddassarhussain90@gmail.com',
  href: 'mailto:muddassarhussain90@gmail.com',
  icon: <Mail className="w-6 h-6" />,
  color: 'hover:text-red-400 hover:border-red-400/50'
}, {
  name: 'LinkedIn',
  value: 'Connect on LinkedIn',
  href: 'https://www.linkedin.com/in/muddassar-hussain-a4404413a/',
  icon: <Linkedin className="w-6 h-6" />,
  color: 'hover:text-blue-400 hover:border-blue-400/50'
}, {
  name: 'GitHub',
  value: 'Follow on GitHub',
  href: 'https://github.com/muddassarH/',
  icon: <Github className="w-6 h-6" />,
  color: 'hover:text-white hover:border-white/50'
}, {
  name: 'Upwork',
  value: 'Hire me on Upwork',
  href: 'https://www.upwork.com/freelancers/~019ff3ebfd79421b14',
  icon: <Laptop className="w-6 h-6" />,
  color: 'hover:text-green-400 hover:border-green-400/50'
}, {
  name: 'Phone',
  value: '+92 311 5920298',
  href: 'tel:+923115920298',
  icon: <Phone className="w-6 h-6" />,
  color: 'hover:text-purple-400 hover:border-purple-400/50'
}];
export function Contact() {
  return <section id="contact" className="py-24 bg-[#0a0e27] relative">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <FadeIn>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="text-gradient">Let's Connect</span>
          </h2>
          <p className="text-slate-400 text-lg mb-12 max-w-2xl mx-auto">
            I'm always interested in hearing about new projects and
            opportunities. Feel free to reach out through any of these channels.
          </p>
        </FadeIn>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {contactLinks.map((link, index) => <FadeIn key={index} delay={index * 0.1}>
              <a href={link.href} target={link.name !== 'Email' && link.name !== 'Phone' ? '_blank' : undefined} rel="noopener noreferrer" className={`flex flex-col items-center gap-4 p-6 rounded-xl bg-[#151f3f]/30 border border-slate-800 transition-all duration-300 hover:-translate-y-2 group ${link.color}`}>
                <div className="w-14 h-14 rounded-full bg-[#0a0e27] border border-slate-700 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  {link.icon}
                </div>
                <span className="font-medium text-slate-300 group-hover:text-inherit transition-colors">
                  {link.name}
                </span>
              </a>
            </FadeIn>)}
        </div>

        <FadeIn delay={0.6}>
          <div className="pt-8 border-t border-slate-800">
            <p className="text-slate-500 text-sm">
              Based in Abbottabad, Pakistan • Available for remote work &
              freelance projects
            </p>
          </div>
        </FadeIn>
      </div>
    </section>;
}