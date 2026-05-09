/* Shared chrome: Nav + Footer + Logo + ArrowRight + reveal/hover hooks. Used by sub-pages. */

const ArrowRightShared = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="square" strokeLinejoin="miter" {...props}>
    <path d="M5 12h14" />
    <path d="M13 5l7 7-7 7" />
  </svg>
);

const LogoShared = ({ size = 26 }) => (
  <svg width={size} height={size} viewBox="0 0 40 40" fill="none">
    <path d="M5 32 L13 8 L20 24 L27 8 L35 32" stroke="#189cff" strokeWidth="3.4" strokeLinejoin="miter" strokeLinecap="square" fill="none" />
    <path d="M9 30 L15 14" stroke="#189cff" strokeWidth="2.2" opacity="0.5" strokeLinecap="square" />
  </svg>
);

const NAV_LINKS = [
  ['home',          'Home',          'index.html'],
  ['readysetgo',    'ReadySetGo',    'readysetgo.html'],
  ['constellation', 'Constellation', 'constellation.html'],
  ['about',         'About',         'about.html'],
  ['contact',       'Contact',       'contact.html'],
];

const NavShared = ({ current }) => {
  const [open, setOpen] = React.useState(false);
  React.useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);
  return (
    <>
      <nav className="nav">
        <a className="nav__brand" href="index.html">
          <span className="nav__logo"><LogoShared size={22} /></span>
          MindWorx
        </a>
        <div className="nav__links">
          {NAV_LINKS.map(([id,label,href])=>(
            <a key={id} className={`nav__link ${current === id ? 'is-active' : ''}`} href={href}>{label}</a>
          ))}
        </div>
        <a className="nav__cta" href="contact.html">Get in Touch</a>
        <button
          type="button"
          className={`nav__burger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={()=>setOpen(o=>!o)}
        >
          <span></span><span></span><span></span>
        </button>
      </nav>
      <div className={`nav__drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="nav__drawer-inner">
          {NAV_LINKS.map(([id,label,href])=>(
            <a key={id} className={`nav__drawer-link ${current === id ? 'is-active' : ''}`} href={href} onClick={()=>setOpen(false)}>{label}</a>
          ))}
          <a className="nav__drawer-cta" href="contact.html" onClick={()=>setOpen(false)}>Get in Touch</a>
        </div>
      </div>
      <div className={`nav__scrim ${open ? 'is-open' : ''}`} onClick={()=>setOpen(false)} aria-hidden="true"></div>
    </>
  );
};

const FooterShared = () => (
  <footer className="footer">
    <div className="container footer__row">
      <div className="footer__brand"><LogoShared size={22} /> MindWorx</div>
      <div className="footer__links">
        <a href="constellation.html">Constellation</a>
        <a href="readysetgo.html">ReadySetGo</a>
        <a href="about.html">About</a>
        <a href="contact.html">Contact</a>
      </div>
      <div className="footer__copy">© 2026 MindWorx. Practical. Honest. Grounded.</div>
    </div>
  </footer>
);

const PageHeader = ({ eyebrow, title, lede, kicker }) => (
  <header className="page-header">
    <div className="hero__bg" aria-hidden="true">
      <div className="hero__grid" />
    </div>
    <div className="container page-header__inner">
      <div className="eyebrow page-header__eyebrow">{eyebrow}</div>
      <h1 className="page-header__title">{title}</h1>
      {lede && <p className="page-header__lede">{lede}</p>}
      {kicker && <div className="page-header__kicker">{kicker}</div>}
    </div>
  </header>
);

const DividerShared = () => (
  <div className="divider" aria-hidden="true">
    <div className="divider__line"></div>
  </div>
);

const SectionHead = ({ eyebrow, title, sub, align = 'center' }) => (
  <div className={`section__head section__head--${align} reveal`}>
    {align === 'center' ? (
      <div style={{ textAlign: 'center' }}>
        <div className="eyebrow" style={{ justifyContent: 'center' }}>{eyebrow}</div>
        <h2 className="section__title" style={{ marginTop: 18 }}>{title}</h2>
        {sub && <p className="section__sub" style={{ marginTop: 22, marginLeft: 'auto', marginRight: 'auto' }}>{sub}</p>}
      </div>
    ) : (
      <>
        <div className="eyebrow">{eyebrow}</div>
        <div>
          <h2 className="section__title">{title}</h2>
          {sub && <p className="section__sub" style={{ marginTop: 22 }}>{sub}</p>}
        </div>
      </>
    )}
  </div>
);

const useRevealShared = () => {
  React.useEffect(() => {
    const els = document.querySelectorAll('.reveal');
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); obs.unobserve(e.target); } }),
      { threshold: 0.12 }
    );
    els.forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);
};

const useHoverGlowShared = () => {
  React.useEffect(() => {
    const handler = (e) => {
      const card = e.currentTarget;
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    };
    const cards = document.querySelectorAll('.hover-glow');
    cards.forEach((c) => c.addEventListener('mousemove', handler));
    return () => cards.forEach((c) => c.removeEventListener('mousemove', handler));
  }, []);
};

Object.assign(window, { ArrowRightShared, LogoShared, NavShared, FooterShared, PageHeader, SectionHead, DividerShared, useRevealShared, useHoverGlowShared });
