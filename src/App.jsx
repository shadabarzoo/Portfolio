import { useState, useEffect, useRef } from "react";
import "./App.css";

// ── Data ──────────────────────────────────────────────────
const data = {
  stats: [
    { val: "8.17", lbl: "CGPA — B.Tech CSE" },
    { val: "3+",   lbl: "Roles & Internships" },
    { val: "10+",  lbl: "Technologies" },
    { val: "7+",   lbl: "Projects Shipped" },
  ],
  skills: [
    { icon: "⚡", title: "Languages",     tags: ["Python", "C#", "JavaScript", "Java", "Dart"] },
    { icon: "🎨", title: "Frontend",      tags: ["ReactJs", "SvelteJs", "HTML5", "CSS3", "Bootstrap", "Flutter"] },
    { icon: "🔧", title: "Backend & API", tags: ["ASP.NET", "Web API", "Node.js", "REST APIs", "Firebase"] },
    { icon: "🗄️", title: "Databases",     tags: ["PostgreSQL", "SQL Server", "MongoDB", "MySQL"] },
    { icon: "📊", title: "Data & Tools",  tags: ["Power BI", "Excel", "Canva", "Git", "MS Office"] },
    { icon: "☁️", title: "Cloud & Infra", tags: ["Cloud Infrastructure", "Security", "Firebase Cloud"] },
  ],
  experience: [
    {
      role: "Software Developer",
      company: "Adaptive Engineering Pvt Ltd",
      period: "Aug 2025 — Present",
      points: [
        "Designed and developed robust web applications using ASP.NET, Web API, C#, and Svelte.js.",
        "Contributed to database design using PostgreSQL and SQL Server ensuring data integrity.",
      ],
    },
    {
      role: "Cloud Infra & Security Intern",
      company: "Celebal Technology",
      period: "May 2024 — Aug 2024",
      points: [
        "Deployed scalable software applications in collaboration with senior engineers.",
        "Created comprehensive technical documentation and user guides.",
        "Integrated and optimized software solutions across diverse environments.",
      ],
    },
    {
      role: "Mobile App Developer Intern",
      company: "Learn and Build",
      period: "May 2023 — Jul 2023",
      points: [
        "Built cross-platform mobile apps using Flutter with hands-on Firebase integration.",
        "Developed an e-commerce app for Dairy Milk products with real-time database management.",
      ],
    },
  ],
  projects: [
    {
      num: "01",
      name: "Tracker",
      image: "/Portfolio/tracker.jpeg",
      desc: "An e-commerce web application with product listing, cart functionality, and automated price calculation — built for seamless order management.",
      tech: ["SvelteJs", "Firebase", "Realtime DB", "Cloud Storage"],
    },
    {
      num: "02",
      name: "The Bridal Bloom",
      image: "/Portfolio/bridalbloom.png",
      desc: "A responsive e-commerce website for selling bridal clothing designs, featuring an intuitive user interface to enhance the shopping experience across all devices.",
      tech: ["React", "MongoDB"],
    },
    {
      num: "03",
      name: "GymFluencer",
      image: "/Portfolio/gymfluencer.png",
      desc: "Frontend for a gym management system incorporating features such as membership plans, class schedules, and an intuitive user interface for a seamless experience.",
      tech: ["React"],
    },
    {
      num: "04",
      name: "Spotify Clone",
      image: "/Portfolio/spotify.png",
      desc: "A replica of Spotify's UI integrating functionalities for playlists, trending songs, and an immersive music browsing experience.",
      tech: ["HTML", "CSS", "JavaScript"],
    },
    {
      num: "05",
      name: "Weather App",
      image: "/Portfolio/weather.png",
      desc: "A React-based weather application that delivers real-time weather updates through API integration, ensuring accurate and user-friendly forecasts.",
      tech: ["Flutter", "API Integration"],
    },
    {
      num: "06",
      name: "Dairy Milk App",
      image: "/Portfolio/dairymilk.jpeg",
      desc: "An Android e-commerce application that allows users to browse, select, and purchase Dairy Milk chocolate products conveniently.",
      tech: ["Flutter", "Firebase", "APIs"],
    },
  ],
  contactLinks: [
    { type: "email",  label: "shadabarzoo6@gmail.com", href: "mailto:shadabarzoo6@gmail.com" },
    { type: "phone",  label: "+91 8271965614",          href: "tel:+918271965614" },
    { type: "insta",  label: "theshadabarzoo",          href: "https://www.instagram.com/theshadabarzoo?igsh=OGJ0eWRvMzRqYnFr" },
    { type: "github", label: "GitHub Profile",          href: "https://github.com/shadabarzoo" },
  ],
  marqueeItems: ["React", "C#", "Svelte", "ASP.NET", "Python", "Flutter", "Firebase", "PostgreSQL", "Power BI", "Node.js"],
};

// ── SVG Icons ─────────────────────────────────────────────
const icons = {
  email:    (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>),
  phone:    (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>),
  insta:    (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>),
  github:   (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>),
  download: (<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M19 9h-4V3H9v6H5l7 7 7-7zM5 18v2h14v-2H5z"/></svg>),
  menu:     (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/></svg>),
  close:    (<svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>),
  sun:      (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zM2 13h2c.55 0 1-.45 1-1s-.45-1-1-1H2c-.55 0-1 .45-1 1s.45 1 1 1zm18 0h2c.55 0 1-.45 1-1s-.45-1-1-1h-2c-.55 0-1 .45-1 1s.45 1 1 1zM11 2v2c0 .55.45 1 1 1s1-.45 1-1V2c0-.55-.45-1-1-1s-1 .45-1 1zm0 18v2c0 .55.45 1 1 1s1-.45 1-1v-2c0-.55-.45-1-1-1s-1 .45-1 1zM5.99 4.58c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0s.39-1.03 0-1.41L5.99 4.58zm12.37 12.37c-.39-.39-1.03-.39-1.41 0-.39.39-.39 1.03 0 1.41l1.06 1.06c.39.39 1.03.39 1.41 0 .39-.39.39-1.03 0-1.41l-1.06-1.06zm1.06-12.37l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0zM7.05 18.36l-1.06 1.06c-.39.39-.39 1.03 0 1.41s1.03.39 1.41 0l1.06-1.06c.39-.39.39-1.03 0-1.41s-1.03-.39-1.41 0z"/></svg>),
  moon:     (<svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"/></svg>),
};

// ── Helpers ───────────────────────────────────────────────
function scrollTo(ref, closeMobile) {
  ref?.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  if (closeMobile) closeMobile();
}

// ── Reveal hook ───────────────────────────────────────────
function useReveal() {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, visible];
}

function Reveal({ children, delay = 0 }) {
  const [ref, visible] = useReveal();
  return (
    <div ref={ref} className={`reveal ${visible ? "reveal--visible" : "reveal--hidden"}`} style={{ transitionDelay: `${delay}s` }}>
      {children}
    </div>
  );
}

// ── NAV ───────────────────────────────────────────────────
function Nav({ active, refs, dark, toggleDark }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["About", "Skills", "Experience", "Projects", "Contact"];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth > 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <button className="nav__logo" onClick={() => scrollTo(refs.hero, closeMenu)}>
          SA<span>.</span>
        </button>
        <div className="nav__links nav__links--desktop">
          {links.map((l) => (
            <button
              key={l}
              className={`nav__link ${active === l.toLowerCase() ? "nav__link--active" : ""}`}
              onClick={() => scrollTo(refs[l.toLowerCase()])}
            >
              {l}
            </button>
          ))}
          {/* Dark mode toggle */}
          <button className="theme-toggle" onClick={toggleDark} title={dark ? "Switch to Light" : "Switch to Dark"}>
            {dark ? icons.sun : icons.moon}
          </button>
        </div>
        <div className="nav__mobile-right">
          <button className="theme-toggle" onClick={toggleDark}>
            {dark ? icons.sun : icons.moon}
          </button>
          <button className="nav__hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? icons.close : icons.menu}
          </button>
        </div>
      </nav>

      <div className={`mobile-menu ${menuOpen ? "mobile-menu--open" : ""}`}>
        {links.map((l) => (
          <button
            key={l}
            className={`mobile-menu__link ${active === l.toLowerCase() ? "mobile-menu__link--active" : ""}`}
            onClick={() => scrollTo(refs[l.toLowerCase()], closeMenu)}
          >
            {l}
          </button>
        ))}
      </div>
    </>
  );
}

// ── MARQUEE ───────────────────────────────────────────────
function Marquee() {
  const items = [...data.marqueeItems, ...data.marqueeItems];
  return (
    <div className="marquee-strip">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item"><span>✦</span> {item}</span>
        ))}
      </div>
    </div>
  );
}

// ── HERO ──────────────────────────────────────────────────
function Hero({ refs }) {
  const [typed, setTyped] = useState("");
  const full = "SOFTWARE DEVELOPER";

  useEffect(() => {
    let i = 0;
    const iv = setInterval(() => {
      if (i <= full.length) { setTyped(full.slice(0, i)); i++; }
      else clearInterval(iv);
    }, 75);
    return () => clearInterval(iv);
  }, []);

  return (
    <>
      <section ref={refs.hero} className="hero">
        <div className="hero__left">
          <div className="hero__badge">
            <span className="hero__badge-dot" />
            AVAILABLE FOR WORK
          </div>
          <h1 className="hero__name">
            SHADAB
            <span className="hero__name--line2">ARZOO</span>
          </h1>
          <p className="hero__role">
            {typed}<span className="hero__role-cursor">_</span>
          </p>
          <p className="hero__desc">
            Building scalable, high-performance web applications with modern stacks.
            Based in India 🇮🇳, open to exciting opportunities.
          </p>
          <div className="hero__cta">
            <div className="hero__cta-row">
              <button className="btn--primary" onClick={() => scrollTo(refs.projects)}>View Projects ↓</button>
              <button className="btn--ghost"   onClick={() => scrollTo(refs.contact)}>Get In Touch</button>
            </div>
            <a href="/Shadab_Arzoo_Resume.pdf" download="Shadab_Arzoo_Resume.pdf" className="btn--resume btn--resume-full">
              {icons.download} Download Resume
            </a>
          </div>
        </div>

        <div className="hero__card-wrap">
          <div className="hero__card">
            <div className="hero__card-label">// QUICK INFO</div>
            {[
              { label: "Location",     val: "India 🇮🇳" },
              { label: "Current Role", val: "Software Dev" },
              { label: "Degree",       val: "B.Tech CSE" },
              { label: "CGPA",         val: "8.17 / 10" },
              { label: "Stack",        val: "C# · Svelte · React" },
            ].map(({ label, val }) => (
              <div key={label} className="hero__card-row">
                <span className="hero__card-key">{label}</span>
                <span className="hero__card-val">{val}</span>
              </div>
            ))}
            <div className="hero__card-tags">
              {["React", "C#", "Svelte", "Python"].map((t) => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Marquee />
    </>
  );
}

// ── SECTION HEADER ────────────────────────────────────────
function SectionHeader({ num, title }) {
  return (
    <Reveal>
      <div className="section-header">
        <div className="section-header__top">
          <span className="section-header__num">{num} //</span>
          <div className="section-header__line" />
        </div>
        <h2 className="section-header__title">{title}</h2>
      </div>
    </Reveal>
  );
}

// ── ABOUT ─────────────────────────────────────────────────
function About({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section">
      <SectionHeader num="01" title="About Me" />
      <div className="about__grid">
        <Reveal>
          <p className="about__para">I'm a <strong>Software Developer</strong> at Adaptive Engineering Pvt Ltd, building robust and scalable web applications using <strong>ASP.NET, C#, and Svelte.js</strong> backed by cloud databases.</p>
          <p className="about__para">Completed <strong>B.Tech in Computer Science & Engineering</strong> from JIET Jodhpur with a CGPA of <strong>8.17</strong>, backed by hands-on internships in cloud infrastructure and mobile development.</p>
          <p className="about__para">I thrive at the intersection of <strong>performance and design</strong> — writing clean, maintainable code while delivering exceptional user experiences.</p>
        </Reveal>
        <div className="about__stats">
          {data.stats.map(({ val, lbl }, i) => (
            <Reveal key={lbl} delay={i * 0.1}>
              <div className="stat-card">
                <div className="stat-card__bar" />
                <div className="stat-card__val">{val}</div>
                <div className="stat-card__lbl">{lbl}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

// ── SKILLS ────────────────────────────────────────────────
function Skills({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section">
      <SectionHeader num="02" title="Skills" />
      <div className="skills__grid">
        {data.skills.map(({ icon, title, tags }, i) => (
          <Reveal key={title} delay={i * 0.07}>
            <div className="skill-card">
              <div className="skill-card__icon">{icon}</div>
              <div className="skill-card__title">{title}</div>
              <div className="skill-card__tags">
                {tags.map((tag) => <span key={tag} className="skill-tag">{tag}</span>)}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── EXPERIENCE ────────────────────────────────────────────
function Experience({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section">
      <SectionHeader num="03" title="Experience" />
      <div className="timeline">
        <div className="timeline__line" />
        {data.experience.map(({ role, company, period, points }, i) => (
          <Reveal key={company} delay={i * 0.1}>
            <div className="timeline__item">
              <div className="timeline__dot" />
              <div className="exp-card">
                <div className="exp-card__header">
                  <h3 className="exp-card__role">{role}</h3>
                  <span className="exp-card__period">{period}</span>
                </div>
                <div className="exp-card__company">{company}</div>
                <ul className="exp-card__points">
                  {points.map((p, j) => (
                    <li key={j} className="exp-card__point">
                      <span className="exp-card__bullet">◆</span>{p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── PROJECTS ──────────────────────────────────────────────
function Projects({ sectionRef }) {
  return (
    <section ref={sectionRef} className="section">
      <SectionHeader num="04" title="Projects" />
      <div className="projects__grid">
        {data.projects.map(({ num, name, image, desc, tech }, i) => (
          <Reveal key={name} delay={i * 0.1}>
            <div className="project-card">
              <div className="project-card__bar" />
              {image && (
                <div className="project-card__img-wrap">
                  <img src={image} alt={name} className="project-card__img" />
                </div>
              )}
              <div className="project-card__body">
                <div className="project-card__num">{num}</div>
                <h3 className="project-card__name">{name}</h3>
                <p className="project-card__desc">{desc}</p>
                <div className="project-card__tech">
                  {tech.map((t) => <span key={t} className="proj-tag">{t}</span>)}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

// ── CONTACT ───────────────────────────────────────────────
function Contact({ sectionRef }) {
  const [name, setName]       = useState("");
  const [email, setEmail]     = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent]       = useState(false);

  const handleSend = () => {
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields before sending!");
      return;
    }
    const subject = encodeURIComponent(`Portfolio Contact from ${name}`);
    const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`);
    window.open(`mailto:shadabarzoo6@gmail.com?subject=${subject}&body=${body}`);
    setSent(true);
    setName(""); setEmail(""); setMessage("");
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section ref={sectionRef} className="section">
      <SectionHeader num="05" title="Contact" />
      <div className="contact__grid">
        <Reveal>
          <h3 className="contact__heading">Let's Build<br /><span>Something</span><br />Great.</h3>
          <p className="contact__sub">Open to exciting roles, collaborations, and interesting projects. Don't hesitate to reach out!</p>
          <div className="contact__links">
            {data.contactLinks.map(({ type, label, href }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" className="contact__link">
                {icons[type]}{label}
              </a>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="form">
            <div className="form__group">
              <label className="form__label">// NAME</label>
              <input type="text" placeholder="Your name" className="form__input" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form__group">
              <label className="form__label">// EMAIL</label>
              <input type="email" placeholder="your@email.com" className="form__input" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="form__group">
              <label className="form__label">// MESSAGE</label>
              <textarea placeholder="Tell me about your project..." className="form__textarea" value={message} onChange={(e) => setMessage(e.target.value)} />
            </div>
            <button className="btn--send" onClick={handleSend}>
              {sent ? "✓ OPENING GMAIL..." : "SEND MESSAGE →"}
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ── FOOTER ────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="footer">
      DESIGNED & BUILT BY <span className="footer__name">SHADAB ARZOO</span>
      <span> // 2025</span>
    </footer>
  );
}

// ── APP ───────────────────────────────────────────────────
export default function App() {
  const refs = {
    hero:       useRef(null),
    about:      useRef(null),
    skills:     useRef(null),
    experience: useRef(null),
    projects:   useRef(null),
    contact:    useRef(null),
  };
  const [active, setActive] = useState("hero");
  const [dark, setDark] = useState(false);

  const toggleDark = () => setDark(d => !d);

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.dataset.section); }),
      { threshold: 0.3 }
    );
    Object.entries(refs).forEach(([key, ref]) => {
      if (ref.current) { ref.current.dataset.section = key; obs.observe(ref.current); }
    });
    return () => obs.disconnect();
  }, []);

  return (
    <div className={`app ${dark ? "dark" : ""}`}>
      <Nav active={active} refs={refs} dark={dark} toggleDark={toggleDark} />
      <Hero refs={refs} />
      <About      sectionRef={refs.about} />
      <Skills     sectionRef={refs.skills} />
      <Experience sectionRef={refs.experience} />
      <Projects   sectionRef={refs.projects} />
      <Contact    sectionRef={refs.contact} />
      <Footer />
    </div>
  );
}
