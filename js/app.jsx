/* MindWorx homepage. Reuses chrome from shared.jsx (NavShared, FooterShared, DividerShared, ArrowRightShared, LogoShared, useRevealShared, useHoverGlowShared). */

const { useState, useEffect } = React;

const IconSearch = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="6" />
    <path d="M20 20l-3.5-3.5" />
    <path d="M11 8.5v5M8.5 11h5" opacity="0.5" />
  </svg>
);
const IconClock = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="12" cy="12" r="8" />
    <path d="M12 8v4l3 2" />
  </svg>
);
const IconChart = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 19h16" />
    <path d="M7 16V11M12 16V7M17 16v-6" />
    <path d="M5 8l4-3 4 3 5-4" opacity="0.6" />
  </svg>
);

const HeroOrbit = () => (
  <div className="hero__orbit" aria-hidden="true">
    <svg viewBox="-600 -600 1200 1200">
      <defs>
        <radialGradient id="orbglow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#189cff" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#189cff" stopOpacity="0" />
        </radialGradient>
      </defs>
      <circle r="540" stroke="url(#orbglow)" />
      {[120, 200, 280, 360, 440, 520].map((r, i) => (
        <circle key={r} r={r} style={{ opacity: 0.08 + i * 0.025 }} />
      ))}
      <g style={{ transformOrigin: 'center', animation: 'spin 120s linear infinite' }}>
        <circle r="320" stroke="#189cff" strokeOpacity="0.18" strokeDasharray="1 14" fill="none" />
        <circle r="420" stroke="#257bc2" strokeOpacity="0.22" strokeDasharray="1 22" fill="none" />
      </g>
      <g style={{ transformOrigin: 'center', animation: 'spin 200s linear infinite reverse' }}>
        <circle r="240" stroke="#189cff" strokeOpacity="0.14" strokeDasharray="2 10" fill="none" />
      </g>
      <g style={{ transformOrigin: 'center', animation: 'spin 28s linear infinite' }}>
        <circle cx="320" cy="0" r="3" fill="#189cff" />
        <circle cx="320" cy="0" r="8" fill="#189cff" opacity="0.18" />
      </g>
      <g style={{ transformOrigin: 'center', animation: 'spin 44s linear infinite reverse' }}>
        <circle cx="-420" cy="60" r="2" fill="#19a0a8" />
        <circle cx="-420" cy="60" r="6" fill="#19a0a8" opacity="0.22" />
      </g>
    </svg>
    <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
  </div>
);

const HeroPanel = () => {
  const [rows, setRows] = useState([]);
  const seed = [
    { ts: '08:42:11', tag: 'INTAKE',   val: 'New lead → Sarah K. (HVAC repair)', ok: true },
    { ts: '08:42:14', tag: 'CALENDAR', val: 'Slot found: Thu 2:30 PM',           ok: true },
    { ts: '08:42:17', tag: 'SMS',      val: 'Confirm sent to (404) ••• 0918',    ok: true },
    { ts: '08:43:02', tag: 'INTAKE',   val: 'Voicemail → transcript routed',     ok: true },
    { ts: '08:43:05', tag: 'CRM',      val: 'Deal stage advanced: Quoted',       ok: true },
    { ts: '08:44:31', tag: 'INTAKE',   val: 'Form submission → triage',          ok: true },
    { ts: '08:44:33', tag: 'EMAIL',    val: 'Personalized reply queued',         ok: true },
    { ts: '08:45:09', tag: 'CALENDAR', val: 'Reschedule request handled',        ok: true },
  ];
  useEffect(() => {
    let i = 0;
    setRows([]);
    const tick = () => {
      setRows((r) => {
        if (r.length >= seed.length) {
          i = 0;
          return [];
        }
        const next = [...r, seed[i]];
        i = i + 1;
        return next;
      });
    };
    tick();
    const id = setInterval(tick, 1100);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="hero__panel" aria-hidden="true">
      <span className="hero__panel-corner hero__panel-corner--tl" />
      <span className="hero__panel-corner hero__panel-corner--tr" />
      <span className="hero__panel-corner hero__panel-corner--bl" />
      <span className="hero__panel-corner hero__panel-corner--br" />
      <div className="hero__panel-label">workflow.live</div>
      <div className="hero__panel-status">running</div>
      <div className="hero__terminal">
        {rows.map((r, idx) => (
          <div className="row" key={`${r.ts}-${idx}`}>
            <span className="ts">{r.ts}</span>
            <span className="tag">{r.tag}</span>
            <span className="val">{r.val}</span>
            {r.ok && <span className="ok">✓</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

const Hero = () => (
  <header className="hero">
    <div className="hero__bg">
      <div className="hero__grid" />
      <HeroOrbit />
    </div>
    <div className="container hero__content">
      <div className="hero__left">
        <div className="hero__eyebrow eyebrow">AI Automation Consulting</div>
        <h1 className="hero__title">
          AI Automation.<br />
          Built for <em>reality</em><span style={{whiteSpace:'nowrap'}}>.<span className="cursor" /></span>
        </h1>
        <p className="hero__sub">
          Practical AI automation for small businesses. We design and build the workflows that quietly take busywork off your plate, so you and your team can get back to the work that matters.
        </p>
        <div className="hero__ctas">
          <a className="btn btn--primary" href="contact.html">
            Get in Touch <ArrowRightShared className="btn__arrow" />
          </a>
          <a className="btn" href="#process">See How We Work</a>
        </div>
        <Stats />
      </div>
      <div className="hero__right">
        <HeroPanel />
      </div>
    </div>
  </header>
);

const Stats = () => (
  <section className="stats">
    <div className="stats__grid">
      <div className="stats__cell"><div className="stats__num">20h+</div><div className="stats__label">Weekly savings</div></div>
      <div className="stats__cell"><div className="stats__num">100%</div><div className="stats__label">Lead capture</div></div>
      <div className="stats__cell"><div className="stats__num">24/7</div><div className="stats__label">Instant response</div></div>
      <div className="stats__cell"><div className="stats__num">21×</div><div className="stats__label">More Conversions</div></div>
    </div>
  </section>
);

const Logos = () => {
  const L = (file) => `assets/logos/${file}`;
  const items = [
    { name: 'OpenAI / ChatGPT', src: L('openai.svg'),     mono: true },
    { name: 'Claude',           src: L('claude.svg'),     mono: true },
    { name: 'Perplexity',       src: L('perplexity.svg'), mono: true },
    { name: 'Grok',             src: L('grok.svg'),       mono: true },
    { name: 'n8n',              src: L('n8n.svg') },
    { name: 'Zapier',           src: L('zapier.svg') },
    { name: 'Hostinger',        src: L('hostinger.svg') },
    { name: 'GitHub',           src: L('github.svg'),     mono: true },
    { name: 'Vercel',           src: L('vercel.svg'),     mono: true },
    { name: 'Microsoft',        src: L('microsoft.svg') },
    { name: 'Google',           src: L('google.svg') },
  ];
  const repeated = [...items, ...items, ...items];
  return (
    <section className="logos">
      <div className="container">
        <div className="logos__title">Trusted by &amp; featured in</div>
        <div className="logos__mask">
          <div className="logos__track">
            {repeated.map((it, i) => (
              <img
                key={i}
                className={`logos__item${it.mono ? ' logos__item--mono' : ''}`}
                src={it.src}
                alt={it.name}
                title={it.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const phasesData = [
  {
    n: '01',
    Icon: IconSearch,
    title: 'Find Friction',
    lede: 'Uncover bottlenecks, wasted effort, and missed opportunities.',
    bullets: [
      'We sit with you and your team to learn how the work really flows: the calls, the handoffs, the leads that go cold, the tasks that fall through.',
      'We map your workflows end to end, from first touch to final follow-up, and pinpoint where time, money, and opportunities are leaking out.',
      'We give you a straight answer on what should and shouldn’t be automated. Not every problem needs AI, and we’ll say so.',
    ],
  },
  {
    n: '02',
    Icon: IconClock,
    title: 'Free Time',
    lede: 'Automate the repetitive work and reduce manual follow-up.',
    bullets: [
      'We start with the high-volume, repetitive work that eats your team’s day: the data entry, the chasing, the copy-pasting between systems that nobody should be doing by hand.',
      'We prototype on real conversations and real data, not slideware, so you can see exactly which hours get handed back before we ship anything.',
      'We explain every decision in plain language. No black boxes. No buzzwords. No “trust us, it’s AI.”',
    ],
  },
  {
    n: '03',
    Icon: IconChart,
    title: 'Fuel Growth',
    lede: 'Turn efficiency into capacity, revenue, and ROI.',
    bullets: [
      'We launch into production with clear success metrics tied to outcomes that matter: faster response times, more deals closed, more customers served per head.',
      'We watch how the system performs, gather feedback from your team and customers, and fix issues fast so capacity keeps climbing.',
      'We keep tuning prompts, logic, and models as your business grows, so your automation keeps compounding into real ROI as you scale.',
    ],
  },
];

const Phases = () => (
  <section className="section" id="process">
    <div className="container">
      <div className="section__head section__head--centered reveal">
        <div className="eyebrow">How We Work</div>
        <div>
          <h2 className="section__title">Three phases.<br />Each one <em>fuels</em> the next.</h2>
          <p className="section__sub" style={{ marginTop: 22 }}>
            Every engagement runs through the same three phases. We start with what's actually slowing you down, not with which tool to buy.
          </p>
        </div>
      </div>
      <div className="phases">
        {phasesData.map((p) => (
          <article className="phase reveal hover-glow" key={p.n}>
            <div className="phase__num">
              <span className="phase__icon"><p.Icon /></span>
              <span>{p.n}</span>
              <span className="phase__num__divider" />
            </div>
            <h3 className="phase__title">{p.title}</h3>
            <p className="phase__lede">{p.lede}</p>
            <ul className="phase__list">
              {p.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </article>
        ))}
      </div>
      <div className="phases-cta reveal">
        <div className="phases-cta__text">Curious where AI could help your business?</div>
        <a className="btn btn--primary" href="contact.html">Get in Touch <ArrowRightShared className="btn__arrow" /></a>
      </div>
    </div>
  </section>
);

const ProductVisualA = () => (
  <svg className="product__visual" viewBox="-100 -100 200 200" aria-hidden="true">
    <g fill="none" stroke="#189cff" strokeWidth="0.6">
      <circle r="70" />
      <circle r="50" />
      <circle r="30" />
    </g>
    {[
      [0, -70], [60, -36], [60, 36], [0, 70], [-60, 36], [-60, -36],
      [40, 0], [-40, 0], [0, -40], [0, 40], [25, -25], [-25, 25],
    ].map(([x, y], i) => (
      <circle key={i} cx={x} cy={y} r="2.4" fill="#189cff" />
    ))}
    <g stroke="#189cff" strokeWidth="0.4" opacity="0.5">
      <line x1="0" y1="-70" x2="60" y2="-36" />
      <line x1="60" y1="-36" x2="60" y2="36" />
      <line x1="60" y1="36" x2="0" y2="70" />
      <line x1="0" y1="70" x2="-60" y2="36" />
      <line x1="-60" y1="36" x2="-60" y2="-36" />
      <line x1="-60" y1="-36" x2="0" y2="-70" />
    </g>
  </svg>
);

const ProductVisualB = () => (
  <img className="product__visual product__visual--photo" src="assets/readysetgo-agent.png" alt="" aria-hidden="true" />
);

const Products = () => (
  <section className="section" id="products" style={{ paddingTop: 60 }}>
    <div className="container">
      <div className="section__head section__head--centered reveal">
        <div className="eyebrow">What We Build</div>
        <div>
          <h2 className="section__title">Products that put our<br /><em>process</em> to work.</h2>
          <p className="section__sub" style={{ marginTop: 22 }}>
            Some of our consulting work has matured into productized solutions you can adopt directly.
          </p>
        </div>
      </div>
      <div className="products">
        <article className="product reveal hover-glow">
          <ProductVisualA />
          <div className="product__tag">— Constellation</div>
          <h3 className="product__name">Connected clarity for fragmented projects.</h3>
          <p className="product__lede">From scattered to structured.</p>
          <p className="product__body">
            Constellation gathers the scattered knowledge of your project — specs, Slack threads, tickets, repos, meeting notes — and reveals the shape they form together. Turn fragmented knowledge into connected clarity.
          </p>
          <div className="product__foot">
            <a href="constellation.html">Learn more <ArrowRightShared style={{ width: 14, height: 14 }} /></a>
            <span className="product__foot__meta">For product &amp; eng teams</span>
          </div>
        </article>
        <article className="product reveal hover-glow">
          <ProductVisualB />
          <div className="product__tag">— ReadySetGo</div>
          <h3 className="product__name">AI booking assistant for service businesses.</h3>
          <p className="product__lede">Less phone tag, more booked appointments.</p>
          <p className="product__body">
            ReadySetGo follows up with leads, answers booking calls, checks your live calendar, schedules appointments, and sends personalized confirmations — automatically.
          </p>
          <div className="product__foot">
            <a href="readysetgo.html">Learn more <ArrowRightShared style={{ width: 14, height: 14 }} /></a>
            <span className="product__foot__meta">For service businesses</span>
          </div>
        </article>
      </div>
    </div>
  </section>
);

const FinalCTA = () => (
  <section className="final" id="contact">
    <div className="container">
      <div className="final__inner reveal">
        <div className="eyebrow" style={{ position: 'relative' }}>Let's Talk</div>
        <h2 className="final__title">Tell us where it <em>hurts</em>.</h2>
        <p className="final__sub">
          Every engagement starts with a real conversation about your business, not a pitch deck. Tell us what's slowing you down, and we'll show you where AI can actually help.
        </p>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a className="btn btn--primary" href="contact.html">Get in Touch <ArrowRightShared className="btn__arrow" /></a>
          <a className="btn" href="contact.html">Book a 15-min Call</a>
        </div>
        <div className="final__phone">Or call us at <strong>(678) 866-0977</strong></div>
      </div>
    </div>
  </section>
);

const App = () => {
  useRevealShared();
  useHoverGlowShared();
  return (
    <>
      <NavShared current="home" />
      <Hero />
      <Logos />
      <DividerShared />
      <Phases />
      <DividerShared />
      <Products />
      <DividerShared />
      <FinalCTA />
      <FooterShared />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
