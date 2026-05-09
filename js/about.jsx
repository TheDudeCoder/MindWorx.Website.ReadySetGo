const Phone = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>);
const Cal = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>);
const Bell = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M6 16V11a6 6 0 1 1 12 0v5l2 2H4l2-2zM10 20a2 2 0 0 0 4 0"/></svg>);
const Repeat = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 12a9 9 0 0 1 15-6.7L21 8M21 12a9 9 0 0 1-15 6.7L3 16M21 3v5h-5M3 21v-5h5"/></svg>);
const Headset = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 14v-2a9 9 0 0 1 18 0v2M3 14a2 2 0 0 0 2 2h1v-6H5a2 2 0 0 0-2 2v2zM21 14a2 2 0 0 1-2 2h-1v-6h1a2 2 0 0 1 2 2v2zM18 16v1a4 4 0 0 1-4 4h-2"/></svg>);
const Trend = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 17l6-6 4 4 8-8M15 7h6v6"/></svg>);
const Sun = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="4"/><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2"/></svg>);
const Compass = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="9"/><path d="M16 8l-2 6-6 2 2-6 6-2z"/></svg>);

const AboutHero = () => (
  <section className="page-header" style={{paddingBottom:60}}>
    <div className="hero__bg" aria-hidden="true"><div className="hero__grid" /></div>
    <div className="container" style={{position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'minmax(0,1.3fr) minmax(0,1fr)', gap:'clamp(40px, 5vw, 72px)', alignItems:'center'}}>
      <div>
        <div className="eyebrow" style={{marginBottom:28}}>About MindWorx</div>
        <h1 className="page-header__title">It's not about us.<br/>It's about <em>you</em>.</h1>
        <p className="page-header__lede">You didn't start your business to answer calls regardless of the time, or chase down appointments, or spend your evenings confirming schedules. You started it to do the work. To serve customers. To build something that was yours.</p>
      </div>
      <div className="stat-stack hover-glow">
        <div className="stat-stack__row"><div className="stat-stack__num">62%</div><div className="stat-stack__label">of small business calls go unanswered</div></div>
        <div className="stat-stack__row"><div className="stat-stack__num">15+</div><div className="stat-stack__label">hours per week spent on admin tasks</div></div>
        <div className="stat-stack__row"><div className="stat-stack__num">&lt; 1 min</div><div className="stat-stack__label">average response time with automation</div></div>
        <div className="stat-stack__row"><div className="stat-stack__num">$62K+</div><div className="stat-stack__label">average revenue lost per year to missed calls</div></div>
      </div>
    </div>
  </section>
);

const AboutReality = () => (
  <section className="section reveal">
    <div className="container">
      <SectionHead eyebrow="The Reality" title="Most small business owners are not looking for technology." />
      <div className="reality">
        <div className="list-card hover-glow">
          <h3>They are looking for…</h3>
          <ul>
            <li>Fewer interruptions</li>
            <li>Fewer missed opportunities</li>
            <li>Fewer late-night callbacks</li>
            <li>Less administrative chaos</li>
            <li>More time to actually run the business</li>
          </ul>
        </div>
        <div className="list-card hover-glow">
          <h3>What you do <em style={{color:'var(--blue)',fontStyle:'normal'}}>not</em> need</h3>
          <p>You do not need another complicated tool.</p>
          <p>You do not need a full-time hire just to answer phones.</p>
          <p>You do not need a complete overhaul of how you operate.</p>
          <p style={{marginTop:18}}><strong>You need practical systems that quietly remove friction.</strong></p>
        </div>
      </div>
    </div>
  </section>
);

const AboutBetterWay = () => (
  <section className="section reveal">
    <div className="container">
      <div className="two-col">
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>A Better Way</div>
          <h2 className="section__title" style={{marginBottom:24}}>Automation that works <em>quietly</em>.</h2>
          <p>Most owners do not wake up thinking about AI. They wake up thinking about doing the job. <strong>That is the problem we are choosing to work on.</strong></p>
          <p>There is a better way to handle calls, scheduling, and follow-up without turning your business upside down.</p>
          <p>Automation, when done right, is not flashy. It is not disruptive. It does not replace your team.</p>
          <p><strong>It simply handles the repetitive work so you can focus on what actually moves your business forward.</strong></p>
        </div>
        <div className="panel hover-glow about-howcard" style={{textAlign:'left', marginTop:80}}>
          <div className="eyebrow" style={{marginBottom:18}}>How it works</div>
          <h3 style={{textAlign:'left', marginBottom:8}}>Four steps. Done.</h3>
          <p style={{color:'var(--ink-2)', fontSize:14.5, fontWeight:300, marginBottom:28}}>The repetitive work that used to fill your day, handled.</p>
          <ul className="about-steps">
            {[
              ['01','Answer the call', <Phone width="20" height="20"/>],
              ['02','Book the appointment', <Cal width="20" height="20"/>],
              ['03','Send the reminder', <Bell width="20" height="20"/>],
              ['04','Follow up when needed', <Repeat width="20" height="20"/>],
            ].map(([n,t,ico],i)=>(
              <li key={i} className="about-steps__row">
                <span className="about-steps__num">{n}</span>
                <span className="about-steps__icon">{ico}</span>
                <span className="about-steps__title">{t}</span>
              </li>
            ))}
          </ul>
          <div className="panel__tag" style={{marginTop:32, marginBottom:0}}>Quietly. Reliably.</div>
        </div>
      </div>
    </div>
  </section>
);

const AboutImpact = () => {
  const items = [
    { icon: <Headset width="20" height="20"/>, title: 'No More Backup Receptionist', body: 'You stop being the one who has to answer every ring.' },
    { icon: <Trend width="20" height="20"/>, title: 'No More Missed Revenue', body: 'Missed calls stop turning into missed revenue.' },
    { icon: <Sun width="20" height="20"/>, title: 'Your Evenings Back', body: 'Your evenings are not filled with "just one more callback."' },
    { icon: <Compass width="20" height="20"/>, title: "Run It, Don't Chase It", body: 'You can run your business instead of chasing it.' },
  ];
  return (
    <section className="section reveal">
      <div className="container">
        <SectionHead eyebrow="What This Means For You" title={<>Real impact. Real <em>change</em>.</>} />
        <div className="feat-grid feat-grid--4">
          {items.map((it, i) => (
            <div key={i} className="feat-card hover-glow" style={{ animationDelay: `${i * 0.4}s` }}>
              <div className="feat-card__icon">{it.icon}</div>
              <h3 className="feat-card__title">{it.title}</h3>
              <p className="feat-card__body">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const AboutWho = () => (
  <section className="section reveal">
    <div className="container">
      <div className="two-col">
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>Who We Are</div>
          <h2 className="section__title" style={{marginBottom:24}}>Concierge-style automation for <em>real</em> businesses.</h2>
          <p>MindWorx is a concierge-style automation provider that works alongside businesses to reduce missed calls, simplify scheduling, and take busywork off their plate so they can run their business instead of chasing it.</p>
          <h3 style={{fontFamily:'var(--display)',fontWeight:500,fontSize:18,color:'var(--ink-0)',marginTop:32,marginBottom:14}}>We Are:</h3>
          <ul style={{margin:0,padding:'0 0 0 18px',color:'var(--ink-2)',lineHeight:1.9,fontWeight:300}}>
            <li><strong style={{color:'var(--ink-0)',fontWeight:500}}>Practical</strong> — solutions, not buzzwords.</li>
            <li><strong style={{color:'var(--ink-0)',fontWeight:500}}>Honest</strong> — clear communication and realistic expectations.</li>
            <li><strong style={{color:'var(--ink-0)',fontWeight:500}}>Grounded</strong> — focused on what actually works for your business.</li>
          </ul>
        </div>
        <div className="panel hover-glow">
          <h3>Ready to talk?</h3>
          <p>If you are curious where this goes, we would love to connect.</p>
          <div className="panel__tag">Practical. Honest. Grounded.</div>
          <a href="contact.html" className="btn btn--primary">Let's Connect <ArrowRightShared className="btn__arrow"/></a>
          <div className="panel__phone">Or call us at <strong>(678) 866-0977</strong></div>
        </div>
      </div>
    </div>
  </section>
);

const AboutPage = () => {
  useRevealShared();
  useHoverGlowShared();
  return (
    <>
      <NavShared current="about" />
      <AboutHero />
      <DividerShared />
      <AboutReality />
      <DividerShared />
      <AboutBetterWay />
      <DividerShared />
      <AboutImpact />
      <DividerShared />
      <AboutWho />
      <FooterShared />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<AboutPage />);
