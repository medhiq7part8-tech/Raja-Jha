
import React, { useState, useEffect } from 'react';
import { 
  Menu, X, Phone, Mail, MapPin, 
  MessageSquare, Download, ArrowRight,
  ChevronRight, ExternalLink, Linkedin,
  Facebook, Instagram, CheckCircle2,
  GraduationCap, BarChart3, Briefcase, Award, Share2,
  User, Users, Send, Code, Target, Search, Globe, Cpu
} from 'lucide-react';
import { 
  SERVICES, 
  EXPERIENCE, 
  SKILLS, 
  ACHIEVEMENTS, 
  CONTACT_INFO 
} from './constants';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: Linkedin, url: CONTACT_INFO.linkedin },
    { name: 'Instagram', icon: Instagram, url: CONTACT_INFO.instagram },
    { name: 'Facebook', icon: Facebook, url: CONTACT_INFO.facebook },
  ];

  const handleDownloadResume = () => {
    const resumeHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <title>Resume - Raja Jha</title>
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700;800&family=Inter:wght@400;500;600&display=swap');
          body { font-family: 'Inter', sans-serif; color: #1e293b; line-height: 1.6; margin: 0; padding: 50px; background: #f8fafc; }
          .resume-container { background: #fff; max-width: 850px; margin: 0 auto; padding: 60px; border-radius: 4px; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
          header { display: flex; justify-content: space-between; align-items: flex-start; border-bottom: 2px solid #0f172a; padding-bottom: 30px; margin-bottom: 30px; }
          .name h1 { margin: 0; font-family: 'Plus Jakarta Sans', sans-serif; font-size: 32px; font-weight: 800; color: #0f172a; text-transform: uppercase; letter-spacing: -0.02em; }
          .name p { margin: 5px 0 0; font-size: 16px; color: #3b82f6; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; }
          .contact { text-align: right; font-size: 14px; color: #64748b; }
          .contact div { margin-bottom: 4px; }
          .section { margin-bottom: 30px; }
          .section-title { font-family: 'Plus Jakarta Sans', sans-serif; background: #0f172a; color: #fff; padding: 6px 15px; font-weight: 700; text-transform: uppercase; font-size: 14px; margin-bottom: 15px; letter-spacing: 0.1em; display: inline-block; }
          .item { margin-bottom: 15px; }
          .item-header { display: flex; justify-content: space-between; font-weight: 700; font-size: 15px; color: #0f172a; }
          .item-period { color: #3b82f6; font-weight: 600; font-size: 13px; }
          .item-content { font-size: 14px; margin: 8px 0 0; padding-left: 20px; color: #475569; }
          .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px; font-size: 14px; color: #475569; }
          @media print {
            body { padding: 0; background: #fff; }
            .resume-container { box-shadow: none; border: none; width: 100%; max-width: none; padding: 0; }
            .no-print { display: none; }
          }
          .no-print { position: fixed; top: 30px; right: 30px; background: #0f172a; color: white; padding: 14px 24px; border-radius: 8px; cursor: pointer; border: none; font-weight: 700; z-index: 1000; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1); }
        </style>
      </head>
      <body>
        <button class="no-print" onclick="window.print()">Print as PDF</button>
        <div class="resume-container">
          <header>
            <div class="name">
              <h1>Raja Jha</h1>
              <p>Digital Marketing Trainer & Consultant</p>
            </div>
            <div class="contact">
              <div>📍 ${CONTACT_INFO.location}</div>
              <div>📞 ${CONTACT_INFO.phone}</div>
              <div>✉️ ${CONTACT_INFO.email}</div>
            </div>
          </header>
          
          <div class="section">
            <div class="section-title">About Me</div>
            <p style="font-size: 14px; color: #475569;">Digital Marketing Trainer & Growth Consultant based in Siliguri, West Bengal. With over 3 years of hands-on industry exposure, I specialize in skill-based, job-focused training and helping businesses grow using SEO, Ads & AI-driven marketing.</p>
          </div>

          <div class="section">
            <div class="section-title">Professional Experience</div>
            ${EXPERIENCE.map(exp => `
              <div class="item">
                <div class="item-header">
                  <span>${exp.company} — ${exp.role}</span>
                  <span class="item-period">${exp.period}</span>
                </div>
                <ul class="item-content">
                  ${exp.description.map(d => `<li>${d}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>

          <div class="section">
            <div class="section-title">Skills</div>
            <div class="skills-grid">
              ${SKILLS.map(s => `<div>• ${s.name}</div>`).join('')}
            </div>
          </div>

          <div class="section">
            <div class="section-title">Awards & Certifications</div>
            <div class="item-content">
              ${ACHIEVEMENTS.map(a => `<div>• <strong>${a.title}</strong> — ${a.issuer} (${a.year})</div>`).join('')}
            </div>
          </div>
        </div>
      </body>
      </html>
    `;
    const blob = new Blob([resumeHtml], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
  };

  return (
    <div className="relative min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#020617]/90 backdrop-blur-md py-4 shadow-xl border-b border-white/5' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold font-heading tracking-tighter flex items-center cursor-pointer" onClick={(e) => window.scrollTo({top: 0, behavior: 'smooth'})}>
            <span className="text-accent">RAJA</span>
            <span className="text-white">JHA.</span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {['About', 'Experience', 'Services', 'Skills', 'Contact'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                onClick={(e) => scrollToSection(e, item.toLowerCase())}
                className="text-sm font-medium text-slate-400 hover:text-accent transition-colors"
              >
                {item}
              </a>
            ))}
            <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="px-5 py-2.5 bg-accent hover:bg-blue-600 text-white text-sm font-semibold rounded-full transition-all">
              Hire Me
            </a>
          </div>

          <button onClick={toggleMenu} className="md:hidden text-slate-200">
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div className={`fixed inset-0 z-40 bg-[#020617] transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-2xl font-semibold">
          {['About', 'Experience', 'Services', 'Skills', 'Contact'].map((item) => (
            <a 
              key={item} 
              href={`#${item.toLowerCase()}`} 
              onClick={(e) => scrollToSection(e, item.toLowerCase())}
              className="text-slate-200 hover:text-accent"
            >
              {item}
            </a>
          ))}
          <a href={CONTACT_INFO.whatsapp} target="_blank" onClick={toggleMenu} className="px-8 py-3 bg-accent text-white rounded-full">
            Hire Me
          </a>
        </div>
      </div>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-3/5 text-center md:text-left mb-16 md:mb-0">
              <div className="inline-block px-4 py-1.5 bg-accent/10 border border-accent/20 rounded-full text-accent text-xs font-bold tracking-widest uppercase mb-6">
                Available for Training & Consulting
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold font-heading text-white leading-tight mb-6 tracking-tight">
                Digital Marketing Trainer & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Growth Consultant</span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed">
                Helping students build careers & businesses grow using <span className="text-slate-200 font-semibold">SEO, Ads & AI-driven marketing</span>. Transforming complex data into actionable growth.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto px-10 py-4 bg-accent hover:bg-blue-600 text-white font-bold rounded-xl transition-all flex items-center justify-center shadow-lg shadow-blue-500/20 group">
                  Hire Me <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <button onClick={handleDownloadResume} className="w-full sm:w-auto px-10 py-4 bg-white/5 hover:bg-white/10 text-white font-bold border border-white/10 rounded-xl transition-all flex items-center justify-center">
                  <Download className="mr-2 w-5 h-5" /> Download CV
                </button>
                <button 
                  onClick={(e) => scrollToSection(e, 'contact')} 
                  className="w-full sm:w-auto px-10 py-4 bg-transparent hover:bg-white/10 text-white font-bold border border-white/20 rounded-xl flex items-center justify-center transition-all"
                >
                  Contact Me
                </button>
              </div>
            </div>
            
            <div className="md:w-2/5 relative flex justify-center">
              <div className="relative w-72 h-72 md:w-[400px] md:h-[400px] group animate-float">
                {/* Visual accents */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-accent to-indigo-600 rounded-[2.5rem] blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>
                <div className="absolute inset-0 bg-accent/20 rounded-[2rem] rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
                <div className="absolute inset-0 bg-white/5 border border-white/10 rounded-[2rem] -rotate-3 group-hover:rotate-0 transition-transform duration-700"></div>
                
                {/* Image Container */}
                <div className="absolute inset-0 overflow-hidden rounded-[2rem] shadow-2xl bg-slate-800 border border-white/10 flex items-center justify-center">
                  {!imgError ? (
                    <img 
                      src={CONTACT_INFO.profileImage} 
                      alt="Raja Jha" 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                      onError={() => {
                        // STRICT FIX: Never log the error object itself as it may contain circular references
                        setImgError(true);
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900 text-slate-400">
                      <div className="w-24 h-24 rounded-full bg-accent/20 flex items-center justify-center mb-4 border border-accent/30 shadow-[0_0_30px_-10px_rgba(59,130,246,0.5)]">
                        <span className="text-5xl font-black text-accent tracking-tighter">RJ</span>
                      </div>
                      <span className="text-[10px] uppercase tracking-[0.4em] font-black text-white/40">Raja Jha</span>
                    </div>
                  )}
                </div>

                {/* Achievement Badge */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-2xl hidden md:flex items-center space-x-3 border border-slate-100 animate-pulse">
                   <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                     <CheckCircle2 className="text-emerald-600" size={20} />
                   </div>
                   <div>
                     <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider leading-none">Status</p>
                     <p className="text-sm text-slate-900 font-bold leading-none mt-1">Certified Expert</p>
                   </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT ME SECTION */}
      <section id="about" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
            <div className="md:w-1/2">
               <h2 className="text-accent font-semibold tracking-wider uppercase text-sm mb-4">About Me</h2>
               <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">Confident. Practical. Mentor.</h3>
               <p className="text-slate-400 text-lg leading-relaxed mb-6">
                 Hello, I'm <span className="text-white font-bold underline decoration-accent underline-offset-4">Raja Jha</span>, based in <span className="text-white font-bold">Siliguri, West Bengal</span>. With over <strong>3+ years of experience</strong> as both a trainer and industry practitioner, I bring a result-oriented approach to scaling digital footprints.
               </p>
               <p className="text-slate-400 leading-relaxed mb-8">
                 My passion lies in <span className="text-accent font-bold italic">skill-based, job-focused training.</span> I don't just teach theory; I provide hands-on industry exposure that helps students bridge the gap to high-paying careers and helps businesses dominate their niche.
               </p>
               <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 text-white/70 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Siliguri Based</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>3+ Years Experience</span>
                  </div>
                  <div className="flex items-center space-x-2 text-white/70 text-sm">
                    <CheckCircle2 size={16} className="text-emerald-500" />
                    <span>Mentor Style Approach</span>
                  </div>
               </div>
            </div>
            <div className="md:w-1/2 grid grid-cols-2 gap-6">
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center transform hover:-translate-y-2 transition-transform duration-300">
                <Briefcase className="w-12 h-12 text-accent mx-auto mb-4" />
                <h4 className="text-white font-extrabold text-3xl mb-1">3+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Years Industry</p>
              </div>
              <div className="p-8 bg-white/5 border border-white/10 rounded-3xl text-center mt-12 transform hover:-translate-y-2 transition-transform duration-300">
                <Users className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <h4 className="text-white font-extrabold text-3xl mb-1">400+</h4>
                <p className="text-xs text-slate-500 uppercase tracking-widest font-bold">Students Mentored</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="py-24">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Professional Timeline</h2>
            <p className="text-slate-400">A journey of scaling brands and empowering careers.</p>
          </div>
          <div className="space-y-12 relative">
            <div className="absolute left-0 md:left-[21px] top-2 bottom-2 w-0.5 bg-slate-800 hidden md:block"></div>
            {EXPERIENCE.map((exp, idx) => (
              <div key={idx} className="relative md:pl-16">
                <div className="absolute left-0 top-0 w-11 h-11 rounded-full bg-slate-900 border-2 border-slate-800 flex items-center justify-center z-10 hidden md:flex">
                  <Briefcase size={20} className="text-accent" />
                </div>
                <div className="bg-white/5 p-8 rounded-[2rem] border border-white/10 hover:border-accent/50 transition-all group">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 gap-2">
                    <div>
                      <h4 className="text-2xl font-bold text-white group-hover:text-accent transition-colors">{exp.company}</h4>
                      <p className="text-slate-500 font-medium">{exp.role}</p>
                    </div>
                    <span className="text-sm font-bold text-accent px-5 py-1.5 bg-accent/10 rounded-full border border-accent/20 w-fit">{exp.period}</span>
                  </div>
                  <ul className="space-y-3">
                    {exp.description.map((d, i) => (
                      <li key={i} className="text-slate-400 flex items-start text-sm md:text-base">
                        <CheckCircle2 size={18} className="mr-3 mt-1 text-accent shrink-0" /> {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="py-24 bg-slate-900/30">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Core Expertise</h2>
             <p className="text-slate-400">Strategic skills for the modern digital economy.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SKILLS.map((skill, idx) => (
              <div key={idx} className="bg-white/5 p-8 rounded-[2rem] border border-white/5 group hover:border-accent/50 transition-all hover:bg-white/[0.07]">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-white font-bold tracking-tight">{skill.name}</span>
                  <span className="text-accent text-sm font-bold">{skill.level}%</span>
                </div>
                <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-accent to-blue-400 transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-24">
            <h3 className="text-2xl font-bold text-white text-center mb-12 tracking-[0.2em] uppercase text-sm opacity-50">Achievements & Certifications</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {ACHIEVEMENTS.map((ach, idx) => (
                <div key={idx} className="p-10 bg-white/5 border border-white/10 rounded-[2.5rem] text-center group hover:bg-accent transition-all duration-500 hover:scale-105">
                  <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-white/20 transition-colors">
                    <Award className="w-8 h-8 text-accent group-hover:text-white" />
                  </div>
                  <h4 className="text-white font-bold mb-2 text-xl">{ach.title}</h4>
                  <p className="text-slate-500 group-hover:text-white/80 text-sm font-medium">{ach.issuer} — {ach.year}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">High-Impact Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Focused on conversion, ROI, and measurable business growth through digital excellence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div key={service.id} className="p-10 bg-white/5 border border-white/10 rounded-[3rem] hover:border-accent transition-all flex flex-col hover:bg-white/[0.03]">
                <div className="mb-8 bg-slate-900 w-20 h-20 rounded-3xl flex items-center justify-center shadow-2xl border border-white/5">
                  {service.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4 leading-tight">{service.title}</h4>
                <p className="text-slate-400 text-base mb-12 leading-relaxed flex-grow">{service.description}</p>
                <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-accent hover:bg-blue-600 text-white font-bold rounded-2xl transition-all text-center flex items-center justify-center group shadow-xl shadow-accent/10">
                  Enquire Now <MessageSquare className="ml-2 w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACT SECTION */}
      <section className="py-24 bg-gradient-to-r from-accent to-blue-700 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
           <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-[100px]"></div>
           <div className="absolute bottom-10 right-10 w-96 h-96 bg-white rounded-full blur-[120px]"></div>
        </div>
        <div className="container mx-auto px-6 relative z-10">
           <div className="grid md:grid-cols-3 gap-12 text-center items-center">
             <div className="space-y-2">
               <h4 className="text-7xl font-black text-white tracking-tighter">400+</h4>
               <p className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">Students Trained</p>
             </div>
             <div className="p-12 bg-white/10 backdrop-blur-xl rounded-[4rem] border border-white/20 shadow-2xl scale-110 md:scale-125 z-20">
               <p className="text-2xl text-white font-bold mb-4 italic leading-relaxed">
                 "Trainer + Practitioner credibility: Bridging the gap between theory and industry excellence."
               </p>
               <div className="h-0.5 w-12 bg-white/30 mx-auto mb-4"></div>
               <p className="text-white/70 font-semibold tracking-widest text-xs uppercase">Raja Jha</p>
             </div>
             <div className="space-y-2">
               <h4 className="text-7xl font-black text-white tracking-tighter">3+</h4>
               <p className="text-white/80 font-bold uppercase tracking-[0.2em] text-xs">Years Experience</p>
             </div>
           </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="py-32">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl md:text-6xl font-extrabold text-white mb-8 tracking-tight">Let's Build Something <span className="text-accent">Big.</span></h2>
              <p className="text-slate-400 text-xl mb-12 leading-relaxed">
                Ready to take your career or business to the next level? I'm available for consultations, training sessions, and agency-level projects.
              </p>
              <div className="space-y-6">
                <div className="flex items-center p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-accent/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mr-8 shrink-0">
                    <Phone className="text-accent" size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Phone</p>
                    <p className="text-xl text-white font-bold">{CONTACT_INFO.phone}</p>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-accent/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mr-8 shrink-0">
                    <Mail className="text-accent" size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Email</p>
                    <p className="text-xl text-white font-bold truncate max-w-[200px] md:max-w-none">{CONTACT_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center p-8 bg-white/5 border border-white/5 rounded-3xl group hover:border-accent/30 transition-all">
                  <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mr-8 shrink-0">
                    <MapPin className="text-accent" size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Location</p>
                    <p className="text-xl text-white font-bold">{CONTACT_INFO.location}</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
               <h3 className="text-3xl font-bold text-white mb-10">Inquiry Form</h3>
               <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                 <div className="grid md:grid-cols-2 gap-8">
                   <div className="space-y-3">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Full Name</label>
                     <input type="text" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-accent outline-none transition-colors" placeholder="John Doe" />
                   </div>
                   <div className="space-y-3">
                     <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Email</label>
                     <input type="email" className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-accent outline-none transition-colors" placeholder="john@example.com" />
                   </div>
                 </div>
                 <div className="space-y-3">
                   <label className="text-xs font-bold text-slate-500 uppercase tracking-widest">Your Message</label>
                   <textarea rows={5} className="w-full bg-slate-900/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:border-accent outline-none transition-colors" placeholder="Tell me about your project or training needs..."></textarea>
                 </div>
                 <div className="flex flex-col space-y-4">
                   <button className="w-full py-5 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all flex items-center justify-center text-lg">
                     Send Message <Send className="ml-3 w-5 h-5" />
                   </button>
                   <a href={CONTACT_INFO.whatsapp} target="_blank" rel="noopener noreferrer" className="w-full py-5 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-2xl transition-all flex items-center justify-center text-lg shadow-xl shadow-emerald-500/10">
                     Chat via WhatsApp <MessageSquare className="ml-3 w-5 h-5" />
                   </a>
                 </div>
               </form>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-24 bg-slate-950 border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center mb-16">
            <div className="text-4xl font-black font-heading tracking-tighter mb-10 md:mb-0">
              <span className="text-accent">RAJA</span>
              <span className="text-white">JHA.</span>
            </div>
            <div className="flex space-x-6">
              {socialLinks.map((s, i) => (
                <a key={i} href={s.url} target="_blank" className="w-14 h-14 rounded-full border border-white/10 flex items-center justify-center text-slate-500 hover:text-accent hover:border-accent hover:bg-accent/5 transition-all">
                  <s.icon size={24} />
                </a>
              ))}
            </div>
          </div>
          <div className="pt-16 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500 gap-8">
            <div className="max-w-md text-center md:text-left">
              <p className="text-white/80 font-bold mb-2">Digital Marketing Expert & Consultant</p>
              <p className="leading-relaxed">Building careers & scaling businesses through advanced SEO, Meta Ads & AI-integrated marketing strategies. Located in Siliguri, West Bengal.</p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <p className="font-medium">Copyright © {new Date().getFullYear()} Raja Jha</p>
              <p className="text-[10px] uppercase tracking-[0.3em] font-black text-white/20">Crafted for Growth</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 z-50">
        <a href={CONTACT_INFO.whatsapp} target="_blank" className="w-16 h-16 bg-emerald-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:rotate-6 transition-all duration-300">
          <MessageSquare size={32} />
        </a>
      </div>
    </div>
  );
};

export default App;
