const Mail = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>);
const PhoneSm = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>);

const RSG_SLUG = 'mindworx-e370da';
const RSG_WIDGET_SRC = `https://api.readysetgo.mindworx.ai/embed/widget.js?slug=${RSG_SLUG}`;

const ContactForm = () => {
  React.useEffect(() => {
    if (document.querySelector(`script[src="${RSG_WIDGET_SRC}"]`)) return;
    const s = document.createElement('script');
    s.src = RSG_WIDGET_SRC;
    s.async = true;
    document.body.appendChild(s);
  }, []);

  // Retuned for the dark blue theme. Variables that the embed widget reads
  // (matches what the legacy site passed in, just with new theme values).
  const widgetVars = {
    '--rsg-primary': '#189cff',
    '--rsg-bg': 'transparent',
    '--rsg-text': '#e6edf5',
    '--rsg-input-bg': 'rgba(7, 18, 29, 0.7)',
    '--rsg-border': 'rgba(37, 123, 194, 0.25)',
    '--rsg-radius': '10px',
    '--rsg-button-bg': '#189cff',
    '--rsg-button-bg-hover': '#2eaaff',
    '--rsg-button-text': '#04070f',
    '--rsg-option-bg': '#07121d',
    '--rsg-option-text': '#e6edf5',
    '--rsg-font-family': "'Montserrat', system-ui, -apple-system, sans-serif",
  };

  return (
    <div className="contact-form hover-glow">
      <h3>Let's Fix Your Friction</h3>
      <p>Tell us what's slowing you down.</p>
      <div data-readysetgo-slug={RSG_SLUG} style={widgetVars} />
    </div>
  );
};

const ContactHero = () => (
  <section className="page-header" style={{paddingBottom: 100}}>
    <div className="hero__bg" aria-hidden="true"><div className="hero__grid" /></div>
    <div className="container" style={{position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)', gap:'clamp(40px, 5vw, 72px)', alignItems:'start'}}>
      <div>
        <div className="eyebrow" style={{marginBottom:28}}>Get In Touch</div>
        <h1 className="page-header__title">
          Find Friction.<br/>
          <span style={{color:'var(--blue)',fontWeight:500}}>Free Time.</span><br/>
          <span style={{color:'var(--blue)',fontWeight:500}}>Fuel Growth.</span>
        </h1>
        <p className="page-header__lede">Your business processes shouldn't hold you back. Let's turn your friction points into sleek, automated workflows.</p>
        <p className="page-header__lede">Whether you need to eliminate manual data entry, handle after-hours calls, or streamline your operations, we have the tools and the team to make it happen.</p>
        <div className="contact-meta">
          <a href="mailto:mindworxai@gmail.com"><Mail width="16" height="16"/> mindworxai@gmail.com</a>
          <a href="tel:6788660977"><PhoneSm width="16" height="16"/> (678) 866-0977</a>
        </div>
      </div>
      <ContactForm />
    </div>
  </section>
);

const ContactPage = () => {
  useRevealShared();
  useHoverGlowShared();
  return (
    <>
      <NavShared current="contact" />
      <ContactHero />
      <DividerShared />
      <FooterShared />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<ContactPage />);
