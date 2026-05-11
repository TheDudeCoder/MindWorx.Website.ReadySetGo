/* MindWorx Solutions page. Reuses chrome from shared.jsx. */

const SolBeacon = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="2.5" />
    <path d="M8.5 8.5a5 5 0 0 0 0 7" />
    <path d="M15.5 15.5a5 5 0 0 0 0-7" />
    <path d="M5.5 5.5a9 9 0 0 0 0 13" />
    <path d="M18.5 18.5a9 9 0 0 0 0-13" />
  </svg>
);
const SolMap = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M9 3 3 5v16l6-2 6 2 6-2V3l-6 2-6-2z" />
    <path d="M9 3v16" />
    <path d="M15 5v16" />
  </svg>
);
const SolShield = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3 4 6v6c0 4.5 3.4 8.4 8 9 4.6-.6 8-4.5 8-9V6l-8-3z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);
const SolGear = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1.1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1.1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8V9a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </svg>
);
const SolSpark = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.5 5.5l2.8 2.8M15.7 15.7l2.8 2.8M5.5 18.5l2.8-2.8M15.7 8.3l2.8-2.8" />
    <circle cx="12" cy="12" r="2.6" />
  </svg>
);
const SolTrend = (p) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M3 17l6-6 4 4 8-8" />
    <path d="M15 7h6v6" />
  </svg>
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

/* "What We Build" — moved verbatim from the home page. Do not edit copy. */
const Products = () => (
  <section className="section" id="products">
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

const servicesData = [
  {
    pillar: 'Find Friction',
    Icon: SolBeacon,
    title: 'GEO / SEO / AEO Analysis',
    body: 'A clear read on how your business shows up across Google, generative AI answers (ChatGPT, Perplexity, Claude), and traditional search. We audit visibility, surface what is holding you back, and ship the fixes.',
  },
  {
    pillar: 'Find Friction',
    Icon: SolMap,
    title: 'Workflow Audit',
    body: 'A guided walkthrough of how your work actually flows: the handoffs, the follow-ups, the places leads go cold. You leave with a prioritized punch list of what is worth automating and what is not.',
  },
  {
    pillar: 'Free Time',
    Icon: SolShield,
    title: 'Legal Document Review',
    body: 'AI-assisted review of contracts, NDAs, and service agreements. Plain-English summaries, risk flags, and counter-proposal language ready to paste into the next round.',
  },
  {
    pillar: 'Free Time',
    Icon: SolGear,
    title: 'Custom Workflow Build',
    body: 'We design and ship the automations that quietly handle your repetitive work: intake, scheduling, follow-up, reporting, anything that runs the same way every time.',
  },
  {
    pillar: 'Fuel Growth',
    Icon: SolSpark,
    title: 'AI Agent Development',
    body: 'Bespoke agents that handle real work: answering booking calls, qualifying inbound leads, drafting first-draft replies, searching across your documents and SOPs.',
  },
  {
    pillar: 'Fuel Growth',
    Icon: SolTrend,
    title: 'Ongoing Optimization',
    body: 'Once your systems are live, we tune the prompts, the logic, and the models as your business grows so the work keeps compounding instead of stalling out.',
  },
];

const Services = () => (
  <section className="section" id="services">
    <div className="container">
      <div className="section__head section__head--centered reveal">
        <div className="eyebrow">Services We Offer</div>
        <div>
          <h2 className="section__title">Engagements built around<br /><em>three</em> outcomes.</h2>
          <p className="section__sub" style={{ marginTop: 22 }}>
            Every service maps back to the same three goals: find friction, free time, and fuel growth. The work is concrete, the scope is honest, and the outcome is something you can point to.
          </p>
        </div>
      </div>
      <div className="feat-grid feat-grid--3 reveal">
        {servicesData.map((s, i) => (
          <article key={i} className="feat-card hover-glow">
            <div className="feat-card__icon"><s.Icon /></div>
            <div className="feat-card__num">{s.pillar}</div>
            <h3 className="feat-card__title">{s.title}</h3>
            <p className="feat-card__body">{s.body}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

const SolutionsCTA = () => (
  <section className="final" id="contact">
    <div className="container">
      <div className="final__inner reveal">
        <div className="eyebrow" style={{ position: 'relative' }}>Let's Talk</div>
        <h2 className="final__title">Not sure which one <em>fits</em>?</h2>
        <p className="final__sub">
          Tell us what is slowing you down. We will tell you straight whether a product, a service, or a quick conversation is the right next step.
        </p>
        <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', gap: 14, flexWrap: 'wrap' }}>
          <a className="btn btn--primary" href="contact.html" style={{ minWidth: 240, justifyContent: 'center' }}>Get in Touch <ArrowRightShared className="btn__arrow" /></a>
        </div>
        <div className="final__phone">Or call us at <strong>(678) 866-0977</strong></div>
      </div>
    </div>
  </section>
);

const SolutionsPage = () => {
  useRevealShared();
  useHoverGlowShared();
  return (
    <>
      <NavShared current="solutions" />
      <Products />
      <DividerShared />
      <Services />
      <DividerShared />
      <SolutionsCTA />
      <FooterShared />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<SolutionsPage />);
