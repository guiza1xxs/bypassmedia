import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './i18n';
import { Target, GitBranch, Cpu, ArrowRight, Mail, Phone, Menu, X, Globe } from 'lucide-react';

export default function App() {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({ email: '', whatsapp: '' });

  const toggleLanguage = () => {
    const newLang = i18n.language.includes('pt') ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  const [status, setStatus] = useState(''); // Para gerir o feedback do envio

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const FORMSPREE_ENDPOINT = "https://formspree.io/f/mojnkoqd";

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ email: '', whatsapp: '' });
        setTimeout(() => setStatus(''), 5000); // Limpa a mensagem após 5 segundos
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const navLinks = [
    { name: t('nav_why'), href: '#why-us' },
    { name: t('nav_services'), href: '#services' },
    { name: t('nav_contact'), href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans antialiased">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-40 bg-zinc-950/80 backdrop-blur-xl border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <nav className="flex items-center justify-between h-20">
            <a href="#" className="font-serif text-2xl tracking-wide text-white hover:text-amber-200 transition-colors duration-500" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              BypassMedia
            </a>

            <div className="hidden md:flex items-center gap-12">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="text-sm tracking-[0.2em] uppercase text-zinc-400 hover:text-amber-200 transition-colors duration-300">
                  {link.name}
                </a>
              ))}
              <button onClick={toggleLanguage} className="flex items-center gap-2 text-xs tracking-widest text-amber-500 hover:text-amber-300 transition-colors uppercase">
                <Globe size={14} /> {i18n.language.split('-')[0]}
              </button>
            </div>

            <button className="md:hidden text-zinc-400 hover:text-white transition-colors" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </nav>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-zinc-900/95 backdrop-blur-xl border-t border-zinc-800/50">
            <div className="px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <a key={link.name} href={link.href} className="block text-sm tracking-[0.2em] uppercase text-zinc-400 hover:text-amber-200" onClick={() => setMobileMenuOpen(false)}>
                  {link.name}
                </a>
              ))}
              <button onClick={toggleLanguage} className="text-sm text-amber-500 uppercase">{t('Language')}: {i18n.language.toUpperCase()}</button>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950" />
          <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-amber-500/[0.03] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="w-16 h-px bg-gradient-to-r from-amber-400 to-amber-600 mb-8" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif leading-[1.1] mb-6 tracking-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              <span className="text-white">{t('hero_t1')}</span><br />
              <span className="bg-gradient-to-r from-amber-200 via-amber-300 to-amber-400 bg-clip-text text-transparent">{t('hero_t2')}</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-12 max-w-xl leading-relaxed">{t('hero_sub')}</p>
            <a href="#contact" className="group inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 font-medium tracking-wide rounded-none hover:from-amber-400 hover:to-amber-500 transition-all duration-500 shadow-lg shadow-amber-500/20">
              <span className="text-sm uppercase tracking-[0.15em]">{t('hero_cta')}</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
            </a>

            <div className="mt-16 pt-8 border-t border-zinc-800/50">
              <p className="text-xs tracking-[0.3em] uppercase text-zinc-600 mb-4">{t('hero_trusted')}</p>
              <div className="flex flex-wrap items-center gap-8 text-zinc-600">
                <span className="text-sm font-light">{t('hero_exp')}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span className="text-sm font-light">{t('hero_gen')}</span>
                <span className="w-1 h-1 bg-zinc-700 rounded-full" />
                <span className="text-sm font-light">{t('hero_conf')}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES SECTION */}
      <section id="services" className="relative py-32 lg:py-40">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-zinc-800 to-transparent" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-20">
            <p className="text-xs tracking-[0.4em] uppercase text-amber-400/80 mb-4">{t('pillars_subtitle')}</p>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{t('pillars_title')}</h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-zinc-700 to-transparent mx-auto" />
          </div>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {[
              { icon: Target, title: t('p1_title'), desc: t('p1_desc') },
              { icon: GitBranch, title: t('p2_title'), desc: t('p2_desc') },
              { icon: Cpu, title: t('p3_title'), desc: t('p3_desc') }
            ].map((p, i) => (
              <div key={i} className="group relative p-8 lg:p-10 bg-zinc-900/30 border border-zinc-800/50 hover:border-amber-500/30 transition-all duration-700">
                <div className="absolute top-0 left-0 w-8 h-px bg-amber-500/50 transition-all duration-500 group-hover:w-16" />
                <div className="absolute top-0 left-0 w-px h-8 bg-amber-500/50 transition-all duration-500 group-hover:h-16" />
                <div className="mb-6">
                  <div className="w-14 h-14 flex items-center justify-center border border-zinc-700 group-hover:border-amber-500/50 transition-colors duration-500">
                    <p.icon size={24} className="text-amber-400" strokeWidth={1.5} />
                  </div>
                </div>
                <h3 className="text-xl font-serif text-white mb-4" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{p.title}</h3>
                <p className="text-zinc-500 leading-relaxed text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY US SECTION */}
      <section id="why-us" className="relative py-32 lg:py-40 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative order-2 lg:order-1 grid grid-cols-2 gap-6">
              {[
                { val: "97%", label: t('why_stat_ret') },
                { val: "2+", label: t('why_stat_exp') },
                { val: "€100k+", label: t('why_stat_rev') },
                { val: "100%", label: t('why_stat_conf') }
              ].map((s, i) => (
                <div key={i} className="p-8 bg-zinc-900/50 border border-zinc-800/50 text-center">
                  <p className="text-4xl font-serif text-amber-400 mb-2" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{s.val}</p>
                  <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-500">{s.label}</p>
                </div>
              ))}
            </div>
            <div className="order-1 lg:order-2">
              <p className="text-xs tracking-[0.4em] uppercase text-amber-400/80 mb-6">{t('why_subtitle')}</p>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8 leading-tight" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {t('why_title_1')}<br /><span className="text-zinc-500">{t('why_title_2')}</span>
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-8">{t('why_desc_1')}</p>
              <div className="space-y-4">
                {[t('why_prop_1'), t('why_prop_2'), t('why_prop_3')].map((prop, i) => (
                  <div key={i} className="flex items-center gap-4">
                    <div className="w-2 h-2 bg-amber-500/80" />
                    <span className="text-sm text-zinc-300">{prop}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* QUOTE SECTION */}
      <section className="relative py-32 lg:py-40 bg-zinc-900/20">
        <div className="relative z-10 flex items-center justify-center text-center px-6">
          <div>
            <p className="text-3xl md:text-4xl lg:text-5xl font-serif text-white/90 max-w-4xl leading-relaxed" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
              "{t('quote')}"
            </p>
            <div className="mt-8 w-12 h-px bg-amber-500/50 mx-auto" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════════
          CONTACT SECTION
      ════════════════════════════════════════════════════════════════════ */}
      <section id="contact" className="relative py-32 lg:py-40">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-xs tracking-[0.4em] uppercase text-amber-400/80 mb-6">{t('contact_subtitle')}</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-6" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{t('contact_title')}</h2>
            <p className="text-zinc-400 mb-12">{t('contact_desc')}</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Email Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <Mail size={18} className="text-zinc-600 group-focus-within:text-amber-400 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full pl-14 pr-5 py-4 bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 transition-colors duration-300"
                    required
                  />
                </div>

                {/* WhatsApp Input */}
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-5 pointer-events-none">
                    <Phone size={18} className="text-zinc-600 group-focus-within:text-amber-400 transition-colors" />
                  </div>
                  <input
                    type="tel"
                    name="whatsapp"
                    placeholder="WhatsApp"
                    value={formData.whatsapp}
                    onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                    className="w-full pl-14 pr-5 py-4 bg-zinc-900/50 border border-zinc-800 text-white placeholder-zinc-600 focus:outline-none focus:border-amber-500/50 transition-colors duration-300"
                    required
                  />
                </div>
              </div>

              {/* Submit Button com Feedback de Status */}
              <button
                type="submit"
                disabled={status === 'sending'}
                className={`group w-full sm:w-auto inline-flex items-center justify-center gap-4 px-12 py-4 font-medium tracking-wide transition-all duration-500 shadow-lg uppercase tracking-[0.15em] ${
                  status === 'success' 
                  ? 'bg-green-600 text-white cursor-default' 
                  : 'bg-gradient-to-r from-amber-500 to-amber-600 text-zinc-950 hover:from-amber-400 hover:to-amber-500 shadow-amber-500/20'
                }`}
              >
                <span>
                  {status === 'sending' ? (i18n.language.includes('pt') ? 'Enviando...' : 'Sending...') : 
                   status === 'success' ? (i18n.language.includes('pt') ? 'Enviado!' : 'Sent!') : 
                   t('contact_btn')}
                </span>
                {status !== 'success' && <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />}
              </button>

              {/* Mensagem de Erro */}
              {status === 'error' && (
                <p className="text-red-500 text-sm mt-4">
                  {i18n.language.includes('pt') ? 'Ocorreu um erro. Tente novamente.' : 'An error occurred. Please try again.'}
                </p>
              )}
            </form>

            <p className="text-xs text-zinc-600 mt-8">{t('contact_privacy')}</p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="relative py-12 border-t border-zinc-900 bg-zinc-950">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <a href="#" className="font-serif text-xl tracking-wide text-zinc-500 hover:text-white transition-colors" style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>BypassMedia</a>
          <p className="text-xs text-zinc-700 tracking-wide">{t('footer_rights')}</p>
          <a href="#" className="text-xs tracking-[0.2em] uppercase text-zinc-600 hover:text-amber-400 transition-colors">{t('footer_top')}</a>
        </div>
      </footer>
    </div>
  );
}