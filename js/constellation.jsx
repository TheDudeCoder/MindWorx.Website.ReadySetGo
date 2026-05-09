const Doc = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M14 3H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9zM14 3v6h6M8 13h8M8 17h6"/></svg>);
const Chat = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>);
const Mail2 = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/></svg>);
const Branch = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><circle cx="6" cy="6" r="2"/><circle cx="6" cy="18" r="2"/><circle cx="18" cy="9" r="2"/><path d="M6 8v8M8 9h6a4 4 0 0 1 4 4v-2"/></svg>);
const Clip = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><rect x="6" y="4" width="12" height="18" rx="2"/><path d="M9 4v-1a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1M9 11h6M9 15h4"/></svg>);
const Ticket = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M3 9a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v2a2 2 0 0 0 0 4v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-2a2 2 0 0 0 0-4V9z"/><path d="M12 7v10"/></svg>);
const ArrowR = (p) => (<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" {...p}><path d="M5 12h14M13 5l7 7-7 7"/></svg>);

const ConstellationVisual = () => {
  const stars = [
    { x: 50, y: 80, r: 3 }, { x: 130, y: 50, r: 4 }, { x: 220, y: 90, r: 3 },
    { x: 180, y: 170, r: 5 }, { x: 90, y: 200, r: 3 }, { x: 280, y: 180, r: 3 },
    { x: 320, y: 60, r: 2.5 }, { x: 250, y: 250, r: 3 },
  ];
  const lines = [[0,1],[1,2],[2,3],[3,4],[4,0],[3,5],[2,6],[5,7],[3,7]];
  return (
    <svg viewBox="0 0 380 320" style={{width:'100%',height:'100%',display:'block'}}>
      <defs>
        <radialGradient id="cstar" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#189cff" stopOpacity="1"/>
          <stop offset="100%" stopColor="#189cff" stopOpacity="0"/>
        </radialGradient>
      </defs>
      {lines.map(([a,b],i)=>(
        <line key={i} x1={stars[a].x} y1={stars[a].y} x2={stars[b].x} y2={stars[b].y} stroke="rgba(24,156,255,0.4)" strokeWidth="1"/>
      ))}
      {stars.map((s,i)=>(
        <g key={i}>
          <circle cx={s.x} cy={s.y} r={s.r*4} fill="url(#cstar)" opacity="0.5"/>
          <circle cx={s.x} cy={s.y} r={s.r} fill="#189cff">
            <animate attributeName="opacity" values="1;0.4;1" dur={`${2+i*0.3}s`} repeatCount="indefinite"/>
          </circle>
        </g>
      ))}
    </svg>
  );
};

const CHero = () => (
  <section className="page-header" style={{paddingBottom: 60}}>
    <div className="hero__bg" aria-hidden="true"><div className="hero__grid" /></div>
    <div className="container" style={{position:'relative', zIndex:2, display:'grid', gridTemplateColumns:'minmax(0,1fr) minmax(0,1fr)', gap:'clamp(40px, 5vw, 60px)', alignItems:'center'}}>
      <div>
        <div className="eyebrow" style={{marginBottom:28}}>Introducing Constellation</div>
        <h1 className="page-header__title">Every project<br/>has a <em>universe</em>.</h1>
        <p className="page-header__lede">A requirement lives in a spec. A decision hides in Slack. A concern shows up in email. A naming convention slips into a GitHub repo. A dependency is buried in meeting notes. A stakeholder assumption sits in a Jira comment.</p>
        <p className="page-header__lede" style={{marginTop:-8}}>On their own, none of these pieces seem big enough to matter. <strong style={{color:'var(--ink-0)',fontWeight:400}}>But together, they form the reality of the project.</strong></p>
      </div>
      <div style={{aspectRatio:'1/1', maxWidth:480, margin:'0 auto', width:'100%'}}>
        <ConstellationVisual/>
      </div>
    </div>
  </section>
);

const CStars = () => {
  const items = [
    { icon: <Doc width="20" height="20"/>, title: 'Specs & Requirements', body: 'Requirements that define what needs to be built — often scattered across documents and versions.' },
    { icon: <Chat width="20" height="20"/>, title: 'Slack Conversations', body: 'Decisions that happen in real-time but get buried under the velocity of daily communication.' },
    { icon: <Mail2 width="20" height="20"/>, title: 'Email Threads', body: 'Concerns, approvals, and context that live in long threads only a few people ever read.' },
    { icon: <Branch width="20" height="20"/>, title: 'GitHub & Repos', body: 'Naming conventions, patterns, and technical decisions embedded inside files and commit history.' },
    { icon: <Clip width="20" height="20"/>, title: 'Meeting Notes', body: 'Dependencies, blockers, and context shared verbally — then roughly captured in notes nobody revisits.' },
    { icon: <Ticket width="20" height="20"/>, title: 'Jira & Tickets', body: 'Stakeholder assumptions and requirements hiding in comment threads inside issue trackers.' },
  ];
  return (
    <section className="section reveal">
      <div className="container">
        <SectionHead eyebrow="The Stars" title={<>Those pieces are the <em>stars</em>.</>} sub="Every project scatters knowledge across tools, conversations, and people. Each fragment is a star — small on its own, powerful when connected." />
        <div className="feat-grid feat-grid--3">
          {items.map((it,i)=>(
            <div key={i} className="feat-card hover-glow" style={{animationDelay:`${i*0.35}s`}}>
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

const CPattern = () => {
  const pairs = [
    ['What looked disconnected', 'becomes connected.'],
    ['What felt vague', 'becomes traceable.'],
    ['What was buried', 'becomes visible.'],
    ['What was assumed', 'becomes clarified.'],
  ];
  return (
    <section className="section reveal">
      <div className="container">
        <div className="two-col">
          <div>
            <div className="eyebrow" style={{marginBottom:24}}>The Pattern</div>
            <h2 className="section__title" style={{marginBottom:24}}>That pattern is<br/>the <em>Constellation</em>.</h2>
            <p>Constellation gathers the stars of your project universe and reveals the shape they make together. Not by replacing the way teams work, but by grounding their work in what already exists.</p>
          </div>
          <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:18}}>
            {pairs.map(([a,b],i)=>(
              <div key={i} className="feat-card hover-glow" style={{padding:'22px 22px',animationDelay:`${i*0.4}s`}}>
                <div style={{display:'flex',gap:10,alignItems:'flex-start'}}>
                  <ArrowR width="18" height="18" style={{color:'var(--blue)',flexShrink:0,marginTop:2}}/>
                  <div>
                    <div style={{color:'var(--ink-2)',fontSize:13,fontWeight:300,marginBottom:4}}>{a}</div>
                    <div style={{color:'var(--ink-0)',fontSize:15,fontWeight:500}}>{b}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const CHidden = () => (
  <section className="section reveal">
    <div className="container">
      <div className="two-col">
        <div>
          <div className="eyebrow" style={{marginBottom:24}}>The Hidden Tax</div>
          <h2 className="section__title" style={{marginBottom:24}}>The cost of confusion is rarely <em>dramatic</em> at first.</h2>
          <p>It shows up in small delays, repeated conversations, conflicting implementation, architectural drift, and the quiet frustration of <em>"I thought we already decided that."</em></p>
          <p>Constellation exists to remove that hidden tax — by creating clarity from the material teams already have.</p>
        </div>
        <blockquote>
          Most teams are not failing because they lack intelligence.<br/><br/>
          <em>They are struggling because their knowledge is fragmented.</em>
        </blockquote>
      </div>
    </div>
  </section>
);

const CStory = () => (
  <section className="final final--compact reveal">
    <div className="container">
      <div style={{textAlign:'center',maxWidth:760,margin:'0 auto'}}>
        <div className="eyebrow" style={{justifyContent:'center',marginBottom:24}}>A Better Story</div>
        <h2 className="section__title" style={{marginBottom:28}}>Constellation tells<br/>a <em>better story</em>.</h2>
        <p style={{color:'var(--ink-0)',fontFamily:'var(--display)',fontSize:18,fontWeight:500,marginBottom:8}}>Your project is not chaos.</p>
        <p style={{color:'var(--ink-2)',fontWeight:300,fontSize:16,marginBottom:24}}>It only looks like chaos because the stars haven't been connected yet.</p>
        <p style={{color:'var(--ink-2)',fontWeight:300,fontSize:16,marginBottom:36}}>Constellation helps teams see the real shape of a project — and reveals the structure hiding inside its universe.</p>
        <div className="panel__tag" style={{marginBottom:30}}>Practical. Honest. Grounded.</div>
        <a href="contact.html" className="btn btn--primary">Let's Connect <ArrowRightShared className="btn__arrow"/></a>
        <div className="panel__phone">Or call us at <strong>(678) 866-0977</strong></div>
      </div>
    </div>
  </section>
);

const ConstellationPage = () => {
  useRevealShared();
  useHoverGlowShared();
  return (
    <>
      <NavShared current="constellation" />
      <CHero />
      <DividerShared />
      <CStars />
      <DividerShared />
      <CPattern />
      <DividerShared />
      <CHidden />
      <DividerShared />
      <CStory />
      <FooterShared />
    </>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<ConstellationPage />);
