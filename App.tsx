import { useState, useEffect } from 'react';
import { Calendar, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'O NÁS', href: '#o-nas' },
  { label: 'CENNÍK', href: '#cennik' },
  { label: 'REZERVÁCIA', href: '#rezervacia' },
  { label: 'GALÉRIA', href: '#galeria' },
  { label: 'KONTAKT', href: '#kontakt' },
];

const PRICE_CATEGORIES = [
  {
    title: 'Starostlivosť o pleť',
    items: [
      { name: 'Ošetrenie Gisele Delorme REPAIR', price: '65 €' },
      { name: 'Ošetrenie Gisele Delorme DETOX', price: '65 €' },
      { name: 'Ošetrenie Gisele Delorme TONIC', price: '65 €' },
      { name: 'Ošetrenie Gisele Delorme ZÁKLAD', price: '65 €' },
      { name: 'Ošetrenie Gisele Delorme MIX', price: '65 €' },
      { name: 'Ošetrenie Anesi HYDRO', price: '65 €' },
      { name: 'Ošetrenie Anesi VITAMIN C', price: '65 €' },
      { name: 'Ošetrenie Anesi EPIGNESSE', price: '65 €' },
      { name: 'Ošetrenie Anesi HARMONY', price: '65 €' },
      { name: 'Ošetrenie Decaar KYSLÍK', price: '65 €' },
      { name: 'Ošetrenie tváre EMS', price: '65 €' },
    ],
  },
  {
    title: 'Riasy & Obočie',
    items: [
      { name: 'Lash lifting', price: '45 €' },
      { name: 'Obočie úprava', price: '5 €' },
      { name: 'Obočie farbenie', price: '5 €' },
    ],
  },
  {
    title: 'Make-up',
    items: [
      { name: 'Makeup', price: '45 €' },
    ],
  },
];

const DEPILATION_CATEGORY = {
  title: 'Depilácia',
  items: [
    { name: 'Depilácia brady', price: '5 €' },
    { name: 'Depilácia vrchnej pery', price: '5 €' },
  ],
};

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f5f0e8', fontFamily: "'Montserrat', sans-serif" }}>

      {/* NAV */}
      <header
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          backgroundColor: scrolled ? 'rgba(245,240,232,0.97)' : '#f5f0e8',
          borderBottom: '1px solid rgba(184,149,106,0.2)',
          backdropFilter: 'blur(8px)',
        }}
      >
        <div className="max-w-screen-xl mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
          <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
            <img
              src="/images/ChatGPT_Image_Jun_27,_2026,_07_04_41_PM.png"
              alt="Adika Beauty"
              style={{ height: '48px', width: '48px', objectFit: 'contain' }}
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                style={{
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.72rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  color: '#4a4a4a',
                  textDecoration: 'none',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => (e.currentTarget.style.color = '#1a3a2a')}
                onMouseLeave={e => (e.currentTarget.style.color = '#4a4a4a')}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-4">
            <a
              href="#rezervacia"
              className="hidden lg:block"
              style={{
                backgroundColor: '#1a3a2a',
                color: '#fff',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                padding: '0.65rem 1.4rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d5a3d')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a3a2a')}
            >
              REZERVOVAŤ TERMÍN
            </a>
            <button
              className="lg:hidden"
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#1a3a2a' }}
            >
              {mobileOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {mobileOpen && (
          <div style={{ backgroundColor: '#f5f0e8', borderTop: '1px solid rgba(184,149,106,0.2)', padding: '1rem 1.5rem 1.5rem' }}>
            {NAV_LINKS.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                style={{
                  display: 'block',
                  fontFamily: "'Montserrat', sans-serif",
                  fontSize: '0.8rem',
                  fontWeight: 500,
                  letterSpacing: '0.12em',
                  color: '#4a4a4a',
                  textDecoration: 'none',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(184,149,106,0.15)',
                }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#rezervacia"
              onClick={() => setMobileOpen(false)}
              style={{
                display: 'inline-block',
                marginTop: '1rem',
                backgroundColor: '#1a3a2a',
                color: '#fff',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                padding: '0.65rem 1.4rem',
                textDecoration: 'none',
              }}
            >
              REZERVOVAŤ TERMÍN
            </a>
          </div>
        )}
      </header>

      {/* HERO */}
      <section
        id="home"
        style={{ minHeight: '100vh', display: 'grid', gridTemplateColumns: '1fr 1fr', paddingTop: '64px' }}
        className="hero-section"
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '4rem 3rem 4rem 5rem',
            backgroundColor: '#f5f0e8',
          }}
        >
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: '#7a7a7a', marginBottom: '1.5rem' }}>
            KOZMETICKÝ SALÓN &nbsp;/&nbsp; ADIKA BEAUTY
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(3rem, 6vw, 5.5rem)', fontWeight: 400, lineHeight: 1.1, color: '#1c1c1c', marginBottom: '0.5rem' }}>
            Krása{' '}
            <em style={{ color: '#2d5a3d', fontStyle: 'italic' }}>pre</em>
            <br />
            každého
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.5rem', fontWeight: 400, fontStyle: 'italic', color: '#b8956a', marginBottom: '2rem' }}>
            Elegancia, o ktorú sa môžete oprieť
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 300, lineHeight: 1.8, color: '#4a4a4a', maxWidth: '340px', marginBottom: '2.5rem' }}>
            Vitajte v Adika Beauty — priestore, kde sa profesionalita stretáva s vrelosťou. Naším poslaním je starať sa o vašu krásu s pozornosťou a rešpektom, aký si každý zaslúži.
          </p>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <a
              href="#rezervacia"
              style={{
                backgroundColor: '#1a3a2a',
                color: '#fff',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                padding: '0.9rem 1.8rem',
                textDecoration: 'none',
                transition: 'background-color 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = '#2d5a3d')}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = '#1a3a2a')}
            >
              REZERVOVAŤ TERMÍN
            </a>
            <a
              href="#cennik"
              style={{
                backgroundColor: 'transparent',
                color: '#1a3a2a',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                padding: '0.9rem 1.8rem',
                textDecoration: 'none',
                border: '1px solid #1a3a2a',
                transition: 'all 0.2s',
                display: 'inline-block',
              }}
              onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#1a3a2a'; e.currentTarget.style.color = '#fff'; }}
              onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = '#1a3a2a'; }}
            >
              POZRIEŤ CENNÍK
            </a>
          </div>
        </div>

        <div style={{ position: 'relative', overflow: 'hidden', backgroundColor: '#2d5a3d' }}>
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            textAlign: 'center',
            padding: '2rem',
          }}>
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(1.8rem, 3vw, 2.8rem)', fontWeight: 400, fontStyle: 'italic', color: '#f5f0e8', lineHeight: 1.4 }}>
              „Krása bez kompromisov,<br />vždy na termín.“
            </p>
          </div>
        </div>
      </section>

      {/* O NÁS */}
      <section id="o-nas" style={{ backgroundColor: '#f5f0e8', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: '#7a7a7a', marginBottom: '1.2rem' }}>
            O MNE
          </p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', fontWeight: 400, lineHeight: 1.15, color: '#1c1c1c', marginBottom: '0.3rem' }}>
            Miesto, kde sa
          </h2>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', fontWeight: 400, lineHeight: 1.15, fontStyle: 'italic', color: '#2d5a3d', marginBottom: '0.3rem' }}>
            každý cíti
          </h2>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4.5vw, 4.2rem)', fontWeight: 400, lineHeight: 1.15, color: '#1c1c1c', marginBottom: '1.5rem' }}>
            vítaný
          </h2>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', marginBottom: '2.5rem' }}>
            <div style={{ width: '2rem', height: '1px', backgroundColor: '#b8956a' }} />
            <div style={{ width: '5px', height: '5px', backgroundColor: '#b8956a', transform: 'rotate(45deg)' }} />
            <div style={{ width: '2rem', height: '1px', backgroundColor: '#b8956a' }} />
          </div>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 300, lineHeight: 1.9, color: '#4a4a4a', marginBottom: '1.2rem' }}>
            Adika Beauty som ja — kozmetička, ktorá tento salón vytvorila z lásky ku kráse a úprimnej túžby pomáhať ľuďom cítiť sa dobre vo svojej koži. Verím, že starostlivosť o seba nie je luxus, ale potreba.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 300, lineHeight: 1.9, color: '#4a4a4a', marginBottom: '1.2rem' }}>
            Vítam u seba každého bez ohľadu na vek, pohlavie či typ pokožky. Ku každému klientovi pristupujem individuálne, s maximálnou diskrétnosťou a profesionalitou.
          </p>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 300, lineHeight: 1.9, color: '#4a4a4a', marginBottom: '2.5rem' }}>
            Používam výhradne overené, kvalitné produkty a neustále sa vzdelávam, aby som ti mohla ponúknuť to najlepšie, čo kozmetická starostlivosť ponúka.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', maxWidth: '480px', margin: '0 auto' }}>
            {[
              { title: 'Individuálny prístup', desc: 'Každý klient je pre mňa jedinečný. Starostlivosť šijem na mieru tvojim potrebám.' },
              { title: 'Diskrétnosť', desc: 'Tvoj komfort a súkromie sú pre mňa na prvom mieste. Vždy.' },
            ].map(card => (
              <div
                key={card.title}
                style={{
                  border: '1px solid rgba(184,149,106,0.3)',
                  padding: '1.2rem',
                  backgroundColor: 'rgba(255,255,255,0.4)',
                }}
              >
                <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 600, color: '#1a3a2a', marginBottom: '0.5rem' }}>{card.title}</h4>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.72rem', fontWeight: 300, lineHeight: 1.7, color: '#7a7a7a' }}>{card.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CENNÍK */}
      <section id="cennik" style={{ backgroundColor: '#1a3a2a', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.8rem, 5vw, 4.5rem)', fontWeight: 400, color: '#f5f0e8', marginBottom: '0.75rem' }}>
              <em style={{ fontStyle: 'italic', color: '#b8956a' }}>Cenník</em>{' '}
              <span>služieb</span>
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 300, letterSpacing: '0.08em', color: 'rgba(245,240,232,0.6)' }}>
              Ceny sú informatívne &nbsp;·&nbsp; Presná cena po konzultácii
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '1.5rem' }}>
            {PRICE_CATEGORIES.map(cat => (
              <PriceCard key={cat.title} category={cat} />
            ))}
          </div>

          <div style={{ maxWidth: '420px' }}>
            <PriceCard category={DEPILATION_CATEGORY} />
          </div>
        </div>
      </section>

      {/* REZERVÁCIA */}
      <section id="rezervacia" style={{ backgroundColor: '#f5f0e8', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }} className="reservation-grid">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div
              style={{
                width: '320px',
                height: '320px',
                borderRadius: '50%',
                border: '1px solid rgba(184,149,106,0.4)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '1rem',
              }}
            >
              <Calendar size={40} strokeWidth={1} style={{ color: '#2d5a3d' }} />
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', fontStyle: 'italic', color: '#4a4a4a', textAlign: 'center', lineHeight: 1.4 }}>
                Výhradne na<br />objednávku
              </p>
            </div>
          </div>

          <div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: '#7a7a7a', marginBottom: '1.2rem' }}>
              OBJEDNÁVANIE
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.2rem, 4vw, 3.8rem)', fontWeight: 400, color: '#1c1c1c', lineHeight: 1.2, marginBottom: '1.5rem' }}>
              Pracujeme{' '}
              <em style={{ fontStyle: 'italic', color: '#2d5a3d' }}>výhradne</em>
              <br />
              na objednávku
            </h2>

            <div style={{ display: 'inline-block', marginBottom: '1.5rem' }}>
              <span style={{
                backgroundColor: '#1a3a2a',
                color: '#fff',
                fontFamily: "'Montserrat', sans-serif",
                fontSize: '0.68rem',
                fontWeight: 600,
                letterSpacing: '0.14em',
                padding: '0.65rem 1.4rem',
                display: 'inline-block',
              }}>
                TERMÍN VOPRED
              </span>
            </div>

            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 300, lineHeight: 1.9, color: '#4a4a4a', marginBottom: '2rem' }}>
              Adika Beauty nemá pevné otváracie hodiny — každý termín je rezervovaný vopred, aby sme sa vám mohli venovať naplno, bez zhonu a s maximálnou starostlivosťou.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '2.5rem' }}>
              {[
                { num: '01', title: 'Kontaktujte ma', desc: 'Napíšte mi správu cez WhatsApp alebo Instagram — odpoviem čo najskôr.' },
                { num: '02', title: 'Dohodneme termín', desc: 'Spoločne nájdeme čas, ktorý ti vyhovuje — som flexibilná a prispôsobím sa tvojím potrebám.' },
                { num: '03', title: 'Teším sa na teba', desc: 'Príď v dohodnutý čas a nechaj sa rozmaznávať.' },
              ].map(step => (
                <div key={step.num} style={{ display: 'flex', gap: '1.2rem' }}>
                  <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', fontStyle: 'italic', color: '#b8956a', minWidth: '2rem' }}>{step.num}</span>
                  <div>
                    <h4 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 600, color: '#1c1c1c', marginBottom: '0.25rem' }}>{step.title}</h4>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 300, lineHeight: 1.7, color: '#7a7a7a' }}>{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* GALÉRIA */}
      <section id="galeria" style={{ backgroundColor: '#f5f0e8', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: '#7a7a7a', marginBottom: '0.8rem' }}>GALÉRIA</p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', fontWeight: 400, color: '#1c1c1c' }}>
              Moja <em style={{ fontStyle: 'italic', color: '#2d5a3d' }}>práca</em>
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}>
            {[
              { src: '/images/IMG_6710.png', pos: 'center 25%' },
              { src: '/images/IMG_6711.png', pos: 'center 20%' },
              { src: '/images/IMG_6712.png', pos: 'center 25%' },
              { src: '/images/IMG_6714.png', pos: 'center 20%' },
            ].map((img, i) => (
              <div key={i} style={{ overflow: 'hidden', aspectRatio: '1 / 1' }}>
                <img
                  src={img.src}
                  alt={`Galéria ${i + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: img.pos, transition: 'transform 0.6s ease' }}
                  onMouseEnter={e => (e.currentTarget.style.transform = 'scale(1.05)')}
                  onMouseLeave={e => (e.currentTarget.style.transform = 'scale(1)')}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* KONTAKT */}
      <section id="kontakt" style={{ backgroundColor: '#1a3a2a', padding: '6rem 2rem' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.2em', color: 'rgba(245,240,232,0.5)', marginBottom: '0.8rem' }}>KONTAKT</p>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 'clamp(2.5rem, 4.5vw, 4rem)', fontWeight: 400, color: '#f5f0e8', marginBottom: '1rem' }}>
            Nájdite ma
          </h2>
          <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.8rem', fontWeight: 300, lineHeight: 1.9, color: 'rgba(245,240,232,0.7)', marginBottom: '3rem', maxWidth: '540px', margin: '0 auto 3rem' }}>
            Rada odpoviem na všetky tvoje otázky a pomôžem ti vybrať správnu starostlivosť.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', marginBottom: '3.5rem' }}>
            {[
              { label: 'Instagram', value: '@adikabeauty', href: 'https://www.instagram.com/adikabeauty/' },
              { label: 'WhatsApp', value: '+421 919 023 991', href: 'https://wa.me/' },
              { label: 'Facebook', value: 'ADIKA Beauty', href: 'https://www.facebook.com/adikabeauty/?locale=sk_SK' },
              { label: 'Adresa', value: 'Sväteho Cyrila a Metoda 11, 038 61 Vrútky', href: 'https://maps.google.com/?q=Sväteho+Cyrila+a+Metoda+11+038+61+Vrútky' },
            ].map(c => (
              <div key={c.label} style={{ borderTop: '1px solid rgba(184,149,106,0.3)', paddingTop: '1.5rem' }}>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.15em', color: '#b8956a', marginBottom: '0.5rem' }}>{c.label}</p>
                <a href={c.href} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.05rem', fontWeight: 400, color: '#f5f0e8', textDecoration: 'none', lineHeight: 1.4, display: 'inline-block' }}>{c.value}</a>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ backgroundColor: '#122b1e', padding: '2rem', textAlign: 'center' }}>
        <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.68rem', fontWeight: 300, color: 'rgba(245,240,232,0.4)', letterSpacing: '0.05em' }}>
          © 2024 Adika Beauty. Všetky práva vyhradené.
        </p>
      </footer>

      <style>{`
        @media (max-width: 900px) {
          .hero-section { grid-template-columns: 1fr !important; }
          .about-grid { grid-template-columns: 1fr !important; }
          .reservation-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 768px) {
          section { padding-left: 1.5rem !important; padding-right: 1.5rem !important; }
        }
      `}</style>
    </div>
  );
}

function PriceCard({ category }: { category: { title: string; items: { name: string; price: string }[] } }) {
  return (
    <div
      style={{
        border: '1px solid rgba(184,149,106,0.2)',
        padding: '2rem',
        backgroundColor: 'rgba(255,255,255,0.04)',
      }}
    >
      <h3
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.5rem',
          fontWeight: 400,
          color: '#b8956a',
          marginBottom: '1.2rem',
          paddingBottom: '1.2rem',
          borderBottom: '1px solid rgba(184,149,106,0.25)',
        }}
      >
        {category.title}
      </h3>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
        {category.items.map((item, i) => (
          <div
            key={i}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '0.75rem 0',
              borderBottom: i < category.items.length - 1 ? '1px solid rgba(184,149,106,0.1)' : 'none',
            }}
          >
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: '0.75rem', fontWeight: 300, color: 'rgba(245,240,232,0.85)', paddingRight: '1rem' }}>
              {item.name}
            </span>
            <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1rem', fontWeight: 400, color: '#b8956a', whiteSpace: 'nowrap' }}>
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
