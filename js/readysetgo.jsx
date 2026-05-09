const RSG_APP_URL = 'https://readysetgo.mindworx.ai';

const PhoneR = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z"/></svg>);
const Layout = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 9v12"/></svg>);
const CalR = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/></svg>);
const ClockR = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg>);
const Shuffle = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M16 4l4 4-4 4M2 8h6l8 8h4M2 16h6l3-3M16 20l4-4"/></svg>);
const MailR = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>);
const Link = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M10 14a4 4 0 0 1 0-6l3-3a4 4 0 0 1 6 6l-2 2M14 10a4 4 0 0 1 0 6l-3 3a4 4 0 0 1-6-6l2-2"/></svg>);
const Grid = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/></svg>);
const FormIco = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="4" y="3" width="16" height="18" rx="2"/><path d="M8 8h8M8 12h8M8 16h5"/></svg>);

const RSGMockup = () => (
  <div className="mockup hover-glow">
    <div className="mockup__chrome">
      <div style={{display:'inline-flex',alignItems:'center',gap:8,color:'var(--ink-0)'}}>
        <div style={{width:22,height:22,borderRadius:6,background:'rgba(24,156,255,0.15)',display:'grid',placeItems:'center',color:'var(--blue)'}}><PhoneR width="14" height="14"/></div>
        ReadySetGo
      </div>
      <div className="mockup__live">Live</div>
    </div>
    <div className="mockup__title">Turn missed calls into<br/><em>booked appointments</em>.</div>
    <div className="mockup__kpis">
      <div className="mockup__kpi"><div className="mockup__kpi__label">Calls</div><div className="mockup__kpi__num">48</div></div>
      <div className="mockup__kpi"><div className="mockup__kpi__label">Contacts</div><div className="mockup__kpi__num">44</div></div>
      <div className="mockup__kpi"><div className="mockup__kpi__label">Booked</div><div className="mockup__kpi__num"><em>41</em></div></div>
      <div className="mockup__kpi"><div className="mockup__kpi__label">Show rate</div><div className="mockup__kpi__num">64%</div></div>
    </div>
    <div className="mockup__chart">
      <svg viewBox="0 0 320 90" style={{width:'100%',height:'100%'}}>
        <defs>
          <linearGradient id="rsgArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#189cff" stopOpacity="0.4"/>
            <stop offset="100%" stopColor="#189cff" stopOpacity="0"/>
          </linearGradient>
        </defs>
        <path d="M0,75 L40,68 L80,55 L120,58 L160,42 L200,35 L240,28 L280,18 L320,12 L320,90 L0,90 Z" fill="url(#rsgArea)"/>
        <path d="M0,75 L40,68 L80,55 L120,58 L160,42 L200,35 L240,28 L280,18 L320,12" stroke="#189cff" strokeWidth="2" fill="none"/>
        {[40,80,120,160,200,240,280].map((x,i)=>(<line key={i} x1={x} y1="0" x2={x} y2="90" stroke="rgba(255,255,255,0.04)"/>))}
      </svg>
    </div>
    <div style={{display:'flex',gap:8,marginTop:14,fontSize:11,color:'var(--ink-3)',letterSpacing:'0.12em',textTransform:'uppercase'}}>
      <span style={{color:'var(--blue)'}}>● Built for service businesses</span>
    </div>
  </div>
);

const RSGHero = () => {
  React.useEffect(() => {
    const img = document.querySelector('.rsg-hero-agent');
    if (!img) return;
    let raf = 0;
    let tx = 0, ty = 0, trx = 0, try_ = 0;
    let cx = 0, cy = 0, crx = 0, cry = 0;
    const onMove = (e) => {
      const rect = img.getBoundingClientRect();
      const ax = rect.left + rect.width / 2;
      const ay = rect.top + rect.height / 2;
      const dx = (e.clientX - ax) / window.innerWidth;
      const dy = (e.clientY - ay) / window.innerHeight;
      tx = Math.max(-1, Math.min(1, dx)) * 14;
      ty = Math.max(-1, Math.min(1, dy)) * 8;
      trx = Math.max(-1, Math.min(1, -dy)) * 6;
      try_ = Math.max(-1, Math.min(1, dx)) * 9;
      if (!raf) raf = requestAnimationFrame(tick);
    };
    const tick = () => {
      cx += (tx - cx) * 0.08;
      cy += (ty - cy) * 0.08;
      crx += (trx - crx) * 0.08;
      cry += (try_ - cry) * 0.08;
      img.style.transform = `translate3d(${cx.toFixed(2)}px, ${cy.toFixed(2)}px, 0) rotateX(${crx.toFixed(2)}deg) rotateY(${cry.toFixed(2)}deg)`;
      if (Math.abs(tx - cx) > 0.05 || Math.abs(ty - cy) > 0.05 || Math.abs(trx - crx) > 0.05 || Math.abs(try_ - cry) > 0.05) {
        raf = requestAnimationFrame(tick);
      } else {
        raf = 0;
      }
    };
    window.addEventListener('mousemove', onMove);
    return () => { window.removeEventListener('mousemove', onMove); if (raf) cancelAnimationFrame(raf); };
  }, []);
  return (
  <section className="page-header" style={{paddingBottom:60}}>
    <div className="hero__bg" aria-hidden="true"><div className="hero__grid" /></div>
    <div className="container" style={{position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)', gap:'clamp(40px, 5vw, 60px)', alignItems:'center'}}>
      <div>
        <div className="eyebrow" style={{marginBottom:28}}>Introducing ReadySetGo</div>
        <h1 className="page-header__title">Book more <em>appointments</em>.</h1>
        <p className="page-header__lede">ReadySetGo is an AI booking assistant for service businesses. It follows up with new leads, answers booking calls, checks your live Google or Outlook calendar, schedules appointments, and sends personalized confirmations automatically.</p>
        <p className="page-header__lede" style={{marginTop:-8}}>No more chasing callbacks. No more endless scheduling back-and-forth. <strong style={{color:'var(--ink-0)',fontWeight:400}}>Just faster follow-up, cleaner booking, and more visibility into what happened.</strong></p>
        <div style={{display:'flex',gap:14,marginTop:8,alignItems:'center',flexWrap:'wrap'}}>
          <a href={RSG_APP_URL} className="btn btn--primary">Get Started <ArrowRightShared className="btn__arrow"/></a>
          <span className="panel__tag" style={{margin:0}}>Free. No card. No catch.</span>
        </div>
      </div>
      <img src="assets/readysetgo-agent-hero.jpg" alt="ReadySetGo AI agent" className="rsg-hero-agent" width="1000" height="1022" loading="eager" decoding="async" fetchpriority="high" />
    </div>
  </section>
  );
};

const RSGProblem = () => (
  <section className="section reveal">
    <div className="container">
      <div className="two-col">
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>The Problem</div>
          <h2 className="section__title" style={{marginBottom:24}}>Missed calls cost <em>money</em>.</h2>
          <p>Most service businesses don't lose leads because they're bad at what they do. They lose leads because they're <strong>busy</strong>.</p>
          <p>A customer fills out a form after hours. The phone rings while your team is on a job. A lead asks for a time that's already booked. A simple appointment turns into four rounds of back-and-forth.</p>
          <p>ReadySetGo handles the first response, the scheduling conversation, the booking, and the confirmation, automatically.</p>
          <p style={{marginTop:24, fontStyle:'italic', color:'var(--ink-1)', borderLeft:'2px solid var(--blue)', paddingLeft:16}}>
            When a customer is ready to talk, timing matters.
            <br/> ReadySetGo answers. <span style={{color:'var(--blue)',fontWeight:600}}>Literally.</span>
          </p>
        </div>
        <div style={{marginTop:80}}><RSGMockup/></div>
      </div>
    </div>
  </section>
);

const RSGSteps = () => {
  const steps = [
    { icon: <FormIco width="20" height="20"/>, title: 'Capture the request', body: 'Add a simple form to your website so customers can request service and share their details.' },
    { icon: <PhoneR width="20" height="20"/>, title: 'Follow up quickly', body: 'ReadySetGo can place an AI voice call within minutes, while the lead is still interested.' },
    { icon: <CalR width="20" height="20"/>, title: 'Check real availability', body: 'The assistant reads your live Google or Outlook calendar, respects your hours, and avoids conflicts.' },
    { icon: <CalR width="20" height="20"/>, title: 'Book the appointment', body: 'If the requested time is open, it books. If not, it offers nearby alternatives instead of losing the lead.' },
    { icon: <MailR width="20" height="20"/>, title: 'Confirm and inform', body: 'Customers get a personalized confirmation email with secure links to cancel or reschedule.' },
  ];
  return (
    <section className="section reveal">
      <div className="container">
        <SectionHead eyebrow="How it works" title={<>Five steps. Mostly <em>hands-off</em>.</>} sub="From the moment a lead reaches out to the moment they're booked and confirmed, ReadySetGo runs the whole conversation for you." />
        <div className="feat-grid feat-grid--5">
          {steps.map((s,i)=>(
            <div key={i} className="feat-card hover-glow" style={{animationDelay:`${i*0.32}s`}}>
              <div className="feat-card__num">Step {String(i+1).padStart(2,'0')}</div>
              <div className="feat-card__icon">{s.icon}</div>
              <h3 className="feat-card__title">{s.title}</h3>
              <p className="feat-card__body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const RSGFeatures = () => {
  const items = [
    { icon: <PhoneR width="20" height="20"/>, title: 'AI Voice Booking Assistant', body: 'Handles outbound follow-up and inbound booking calls so customers can book, cancel, or reschedule by voice.' },
    { icon: <Layout width="20" height="20"/>, title: 'Website Lead Capture', body: 'Collect new requests from your existing site with an embedded form, iframe, or hosted booking page.' },
    { icon: <CalR width="20" height="20"/>, title: 'Google & Outlook Calendar', body: 'Books directly against the calendar your team already uses. One source of truth, no double-bookings.' },
    { icon: <ClockR width="20" height="20"/>, title: 'Real-Time Availability', body: 'Offers slots based on your actual schedule, hours, appointment length, and configured buffers.' },
    { icon: <Shuffle width="20" height="20"/>, title: 'Alternative Time Suggestions', body: 'If the requested slot is taken, ReadySetGo offers nearby times to keep the conversation moving.' },
    { icon: <MailR width="20" height="20"/>, title: 'Personalized Confirmation Emails', body: 'Confirmation, cancellation, and reschedule emails that match your business tone and include the actual details.' },
    { icon: <Link width="20" height="20"/>, title: 'Secure Cancel & Reschedule Links', body: 'Customers manage changes from secure links in their confirmation, no account or callback required.' },
    { icon: <Grid width="20" height="20"/>, title: 'Dashboard Visibility', body: 'Review contacts, appointments, calls, summaries, emails, and plan usage from one screen.' },
  ];
  return (
    <section className="section reveal">
      <div className="container">
        <SectionHead eyebrow="What's included" title={<>Everything you need to book more and chase <em>less</em>.</>} />
        <div className="feat-grid feat-grid--4">
          {items.map((it,i)=>(
            <div key={i} className="feat-card hover-glow" style={{animationDelay:`${i*0.3}s`}}>
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

const RSGFor = () => (
  <section className="section reveal">
    <div className="container">
      <div className="two-col">
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>Who it's for</div>
          <h2 className="section__title" style={{marginBottom:24}}>Built for service businesses that run on <em>appointments</em>.</h2>
          <p>ReadySetGo is a strong fit for any business where most of the revenue depends on consultations, estimates, service visits, or scheduled work.</p>
        </div>
        <ul className="rsg-fitlist">
          {[
            ['Home services','HVAC, plumbing, electrical, cleaning, landscaping'],
            ['Contractors & trades','Remodeling, roofing, flooring, handyman work'],
            ['Professional services','Legal, financial, real estate, consulting'],
            ['Local service companies','Auto, pet care, moving, repair shops'],
            ['Appointment-based businesses','Salons, studios, wellness, clinics'],
            ['Small teams with no front desk','Owner-operators and field-first crews'],
          ].map(([title,sub],i)=>(
            <li key={i} className="rsg-fitlist__row">
              <span className="rsg-fitlist__num">{String(i+1).padStart(2,'0')}</span>
              <span className="rsg-fitlist__body">
                <span className="rsg-fitlist__title">{title}</span>
                <span className="rsg-fitlist__sub">{sub}</span>
              </span>
              <span className="rsg-fitlist__chev" aria-hidden="true">→</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

const RSGCTA = () => (
  <section className="final final--compact reveal">
    <div className="container">
      <div style={{textAlign:'center',maxWidth:760,margin:'0 auto'}}>
        <div className="eyebrow" style={{justifyContent:'center',marginBottom:24}}>Ready to book more?</div>
        <h2 className="section__title" style={{marginBottom:24}}>Simple. <em>Fast.</em> Booked.</h2>
        <p style={{color:'var(--ink-0)',fontFamily:'var(--display)',fontSize:18,fontWeight:500,marginBottom:8}}>More time to run your business instead of chasing it.</p>
        <p style={{color:'var(--ink-2)',fontWeight:300,marginBottom:32}}>Let ReadySetGo respond faster, answer more booking calls, and turn more inquiries into scheduled appointments.</p>
        <div className="panel__tag" style={{marginBottom:30}}>Practical. Honest. Grounded.</div>
        <a href={RSG_APP_URL} className="btn btn--primary">Get Started <ArrowRightShared className="btn__arrow"/></a>
      </div>
    </div>
  </section>
);

const RSGPage = () => {
  useRevealShared();
  useHoverGlowShared();
  return (
    <>
      <NavShared current="readysetgo" />
      <RSGHero />
      <DividerShared />
      <RSGProblem />
      <DividerShared />
      <RSGSteps />
      <DividerShared />
      <RSGFeatures />
      <DividerShared />
      <RSGFor />
      <DividerShared />
      <RSGCTA />
      <FooterShared />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<RSGPage />);
