import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BriefcaseBusiness,
  Check,
  ChevronDown,
  HeartPulse,
  Menu,
  PiggyBank,
  Shield,
  ShieldCheck,
  Umbrella,
  Wallet,
  X,
} from "lucide-react";
import { useState } from "react";

const phoneNumber = "919922944751";
const phoneDisplay = "+91 99229 44751";

const services = [
  {
    icon: Shield,
    number: "01",
    title: "Life insurance",
    description:
      "Explore life cover options designed to help protect the people who depend on you.",
    providers: "LIC of India",
  },
  {
    icon: HeartPulse,
    number: "02",
    title: "Health insurance",
    description:
      "Understand health cover choices for individuals and families, with help at every step.",
    providers: "Star Health · Chola Health",
  },
  {
    icon: Umbrella,
    number: "03",
    title: "General insurance",
    description:
      "Get guidance on general insurance needs and the cover that may suit your situation.",
    providers: "United India Insurance",
  },
];

const supportItems = [
  "Change of nomination",
  "Address change",
  "Maturity claim assistance",
  "Death claim assistance",
];

const planningItems = [
  {
    icon: PiggyBank,
    title: "Retirement planning",
    text: "Work towards a more confident, considered retirement.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Children's future",
    text: "Plan ahead for education and other important milestones.",
  },
  {
    icon: Wallet,
    title: "Income & loan protection",
    text: "Explore ways to protect income and manage financial obligations.",
  },
];

function WhatsAppLink({ children, className = "", message = "" }) {
  const href = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {children}
    </a>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main>
      <div className="topbar">
        <div className="site-container flex items-center justify-between gap-4">
          <p>Thoughtful guidance for the things that matter most.</p>
          <a href={`tel:+${phoneNumber}`}>Call us <span>{phoneDisplay}</span></a>
        </div>
      </div>

      <header className="site-header">
        <div className="site-container header-inner">
          <a className="brand" href="#home" aria-label="Smart Wealth Management Company home" onClick={closeMenu}>
            <span className="brand-mark"><ShieldCheck size={22} strokeWidth={1.8} /></span>
            <span className="brand-copy">
              <strong>Smart Wealth <span>Management</span></strong>
              <small>COMPANY · INSURANCE & FINANCIAL SERVICES</small>
            </span>
          </a>

          <button
            className="mobile-menu-button"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

          <nav className={`main-nav${menuOpen ? " is-open" : ""}`} aria-label="Main navigation">
            <a href="#services" onClick={closeMenu}>Our services</a>
            <a href="#planning" onClick={closeMenu}>Plan for the future</a>
            <a href="#about" onClick={closeMenu}>About us</a>
            <WhatsAppLink
              className="button button-dark nav-cta"
              message="Hello, I would like to know more about your insurance services."
            >
              Talk to an advisor <ArrowUpRight size={16} />
            </WhatsAppLink>
          </nav>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="site-container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> PLAN WITH CONFIDENCE</div>
            <h1>Protect today.<br /><span>Plan for</span> tomorrow.</h1>
            <p className="hero-description">
              Life keeps moving. Get thoughtful insurance guidance to help you
              prepare for the milestones, responsibilities and people you care about.
            </p>
            <div className="hero-actions">
              <WhatsAppLink
                className="button button-dark"
                message="Hello, I would like to discuss my insurance and financial planning needs."
              >
                Let’s talk about your plans <ArrowRight size={17} />
              </WhatsAppLink>
              <a className="text-link" href="#services">Explore our services <ArrowDown size={15} /></a>
            </div>
            <div className="trust-row">
              <span className="trust-icon"><BadgeCheck size={18} /></span>
              <p>Personal guidance, from first conversation to ongoing support.</p>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="hero-photo"
              src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1400&q=85"
              alt="Parents enjoying a peaceful moment outdoors with their child"
            />
            <div className="photo-tint" />
            <div className="hero-note">
              <span className="note-icon"><ShieldCheck size={20} /></span>
              <div>
                <strong>Plan around what matters</strong>
                <span>Guidance shaped around your needs</span>
              </div>
              <ArrowUpRight size={17} className="note-arrow" />
            </div>
            <div className="hero-index"><span>01</span> / YOUR FUTURE, CONSIDERED</div>
          </div>
        </div>
        <div className="hero-orbit orbit-one" />
        <div className="hero-orbit orbit-two" />
      </section>

      <section className="partner-strip" aria-label="Insurance providers">
        <div className="site-container partner-inner">
          <p>GUIDANCE ACROSS TRUSTED PROVIDERS</p>
          <div className="partner-names">
            <span>LIC <small>OF INDIA</small></span>
            <i />
            <span className="partner-serif">United India</span>
            <i />
            <span>Star Health</span>
            <i />
            <span className="partner-serif">Chola Health</span>
          </div>
        </div>
      </section>

      <section className="section services-section" id="services">
        <div className="site-container">
          <div className="section-heading">
            <div>
              <div className="eyebrow"><span className="eyebrow-line" /> HOW WE CAN HELP</div>
              <h2>Cover for life<br />as it <span>happens.</span></h2>
            </div>
            <p>
              Finding the right cover can feel complicated. We help you understand
              your options and take the next step with clarity.
            </p>
          </div>

          <div className="service-grid">
            {services.map(({ icon: Icon, number, title, description, providers }) => (
              <article className="service-card" key={number}>
                <div className="card-topline"><span>{number}</span><Icon size={22} strokeWidth={1.7} /></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className="card-provider"><span>Available provider options</span><strong>{providers}</strong></div>
              </article>
            ))}
          </div>

          <div className="support-banner">
            <div className="support-intro">
              <span className="support-icon"><Check size={18} /></span>
              <div><strong>Already have a policy?</strong><span>We can help with common policy servicing requests.</span></div>
            </div>
            <div className="support-list">
              {supportItems.map((item) => <span key={item}><Check size={14} />{item}</span>)}
            </div>
            <a href={`tel:+${phoneNumber}`} className="support-link" aria-label="Call about policy support">
              <ArrowUpRight size={19} />
            </a>
          </div>
        </div>
      </section>

      <section className="planning-section" id="planning">
        <div className="site-container planning-grid">
          <div className="planning-copy">
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> THINK AHEAD, LIVE WELL</div>
            <h2>Big goals deserve<br />a <span>steady plan.</span></h2>
            <p>
              Whether you are building a family, protecting your income or looking
              ahead to retirement, a conversation is a good place to start.
            </p>
            <WhatsAppLink
              className="button button-light"
              message="Hello, I would like to discuss a financial planning goal."
            >
              Discuss your goals <ArrowRight size={17} />
            </WhatsAppLink>
            <div className="planning-disclaimer">
              <ShieldCheck size={17} />
              <span>Recommendations depend on your needs, eligibility and policy terms.</span>
            </div>
          </div>
          <div className="planning-list">
            {planningItems.map(({ icon: Icon, title, text }, index) => (
              <article className="planning-item" key={title}>
                <span className="planning-item-number">0{index + 1}</span>
                <span className="planning-icon"><Icon size={21} strokeWidth={1.7} /></span>
                <div><h3>{title}</h3><p>{text}</p></div>
                <ChevronDown className="planning-chevron" size={17} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="advisor-section section" id="about">
        <div className="site-container advisor-grid">
          <div className="advisor-art">
            <div className="advisor-monogram">DS<span>.</span></div>
            <div className="advisor-art-caption"><span>YOUR LOCAL ADVISOR</span><strong>Here to help you<br />make informed choices.</strong></div>
            <div className="advisor-art-ring" />
          </div>
          <div className="advisor-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> A PERSONAL APPROACH</div>
            <h2>Good advice starts<br />with <span>listening.</span></h2>
            <p>
              Dattatray Sapnar and the Smart Wealth Management Company team offer
              approachable guidance to help you explore insurance and planning options.
              No jargon, just a conversation about what matters to you.
            </p>
            <div className="advisor-details">
              <div><strong>Dattatray Sapnar</strong><span>Coordinator · Smart Wealth Management Company</span></div>
              <div className="advisor-credential">Divisional Club Member<br />C.O.T. (U.S.A.) Prospect</div>
            </div>
            <WhatsAppLink
              className="text-link advisor-link"
              message="Hello Dattatray, I would like to know more about your services."
            >
              Get in touch <ArrowRight size={16} />
            </WhatsAppLink>
          </div>
        </div>
      </section>

      <section className="contact-section">
        <div className="site-container contact-inner">
          <div>
            <div className="eyebrow eyebrow-light"><span className="eyebrow-line" /> YOUR NEXT STEP</div>
            <h2>Let’s make a plan<br />that feels <span>right for you.</span></h2>
            <p>Start with a no-pressure conversation about what you need.</p>
          </div>
          <div className="contact-actions">
            <WhatsAppLink
              className="button button-light"
              message="Hello, I would like to schedule a conversation about insurance planning."
            >
              <span className="whatsapp-dot" /> Chat on WhatsApp <ArrowUpRight size={17} />
            </WhatsAppLink>
            <a className="contact-phone" href={`tel:+${phoneNumber}`}>{phoneDisplay}</a>
          </div>
          <div className="contact-stamp"><ShieldCheck size={25} /><span>HERE FOR<br />YOUR NEXT<br />CHAPTER</span></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-container footer-main">
          <a className="brand footer-brand" href="#home">
            <span className="brand-mark"><ShieldCheck size={22} strokeWidth={1.8} /></span>
            <span className="brand-copy"><strong>Smart Wealth <span>Management</span></strong><small>COMPANY · INSURANCE & FINANCIAL SERVICES</small></span>
          </a>
          <p>Helping you make informed choices for the future.</p>
          <a href={`tel:+${phoneNumber}`}>{phoneDisplay} <ArrowUpRight size={15} /></a>
        </div>
        <div className="site-container footer-legal">
          <p>© {new Date().getFullYear()} Smart Wealth Management Company. All rights reserved.</p>
          <p>Insurance products are subject to insurer terms, conditions and eligibility. This website is for information only and does not guarantee returns or policy benefits.</p>
        </div>
      </footer>
    </main>
  );
}

export default App;
