import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowUpRight, Github, Linkedin, Mail, MapPin, Download,
  Code2, Database, Server, BrainCircuit, Menu, X,
  GraduationCap, Award, ChevronDown
} from "./icons";
import "./styles.css";

const resumeFile = "/Saee_Gadhekar_Resume.pdf";
const linkedinUrl = "https://www.linkedin.com/in/saee-gadhekar-104297249";
const githubUrl = "https://github.com/SaeeGadhekar11";
const email = "saeegadhekar@gmail.com";

const skills = [
  { category: "Programming", icon: Code2, items: ["Java", "C", "C++", "C#", "Python (Basic)"] },
  { category: "Frontend", icon: Code2, items: ["HTML", "CSS", "JavaScript", "React"] },
  { category: "Backend", icon: Server, items: ["Java", "Spring Boot", "REST APIs", "JDBC"] },
  { category: "Database", icon: Database, items: ["MySQL", "SQL"] },
  { category: "Core Concepts", icon: BrainCircuit, items: ["OOP", "Data Structures", "Algorithms", "Exception Handling", "Problem Solving"] }
];

const projects = [
  {
    number: "01",
    title: "AI-Based Point of Sale (POS) System",
    period: "Jun 2026 — Aug 2026",
    label: "CDAC PROJECT",
    description: "Developed an AI-based Point of Sale (POS) system to simplify and manage product management, billing, inventory, and sales operations. The system was developed using a full-stack approach, with React used to build the frontend, Java and Spring Boot used for backend development, MySQL used to store and manage application data, and Python used for AI-related functionality. The frontend communicates with the backend through REST APIs, allowing data to be created, retrieved, updated, and managed efficiently.",
    stack: ["Java", "Spring Boot", "React", "MySQL", "Python", "REST APIs"],
    github: "https://github.com/SaeeGadhekar11/my-project.git"
  },
  {
    number: "02",
    title: "Real-Time Traffic Management System Using ESP32",
    period: "Aug 2024 — Jun 2025",
    label: "ACADEMIC PROJECT",
    description: "Developed a real-time traffic management system using ESP32 and Arduino to monitor and control traffic based on vehicle density. The system uses IR sensors to detect vehicles on different lanes and processes the sensor data to control traffic signals accordingly. Integrated traffic light modules, servo motors, and relay modules for automated traffic management, along with an emergency vehicle priority feature to provide faster passage when required. Worked on sensor interfacing, microcontroller programming, hardware integration, and system testing.",
    stack: ["ESP32", "Arduino", "C/C++", "IR Sensors", "Servo Motors"]
  }
];

const certifications = [
  ["Full Stack Development Course", "Aug 2025 — Feb 2026", "MERN stack development training."],
  ["Data Structures & Algorithms Module", "CDAC Module", "Certified in core DSA and problem-solving."],
  ["C++ Module", "CDAC Module", "Certified in C++ programming and OOP concepts."],
  ["Generative AI & Intelligent Application Development", "3-day workshop", "Completed a workshop focused on Generative AI and intelligent application development."]
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [copied, setCopied] = useState(false);
  const [formStatus, setFormStatus] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  };

  useEffect(() => {
    const sections = [...document.querySelectorAll("section[id]")];
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach(s => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const go = id => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="app">
      <div className="noise" />
      <header className="nav-wrap">
        <nav className="nav container">
          <button className="brand" onClick={() => go("home")} aria-label="Go home">
            <span className="brand-mark">SG</span><span>Saee<span className="dot">.</span></span>
          </button>
          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            {["home", "about", "skills", "projects", "education", "contact"].map(id => (
              <button key={id} className={active === id ? "active" : ""} onClick={() => go(id)}>
                {id[0].toUpperCase() + id.slice(1)}
              </button>
            ))}
          </div>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <main>
        <section id="home" className="hero section home-landing">
          <div className="home-grid-lines" aria-hidden="true" />
          <div className="container home-panel">
            <div className="home-left">
              <div className="home-availability"><span /> OPEN TO SOFTWARE DEVELOPER OPPORTUNITIES</div>
              <div className="home-kicker">HELLO, I’M</div>
              <h1 className="home-name">Saee Satish<br/><span>Gadhekar<span className="home-name-dot">.</span></span></h1>
              <h2 className="home-role">Software Developer · Java &amp; Full Stack</h2>
              <p className="home-description">Building reliable software and meaningful digital experiences with Java, Spring Boot, React, MySQL, and an engineering mindset. I’m looking for new opportunities to work, learn, and grow.</p>
              <div className="home-actions">
                <button className="primary-btn" onClick={() => go("projects")}>View my projects <ArrowUpRight size={18}/></button>
                <a className="secondary-btn" href={`mailto:${email}`}>Contact me</a>
                <a className="home-resume-btn" href={resumeFile} download="Saee_Satish_Gadhekar_Resume.pdf"><Download size={17}/> Download Resume</a>
              </div>
              <div className="home-social-row">
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" aria-label="GitHub"><Github size={18}/></a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={18}/></a>
                <span className="home-social-line" />
                <span className="home-social-label">FOLLOW THE JOURNEY</span>
              </div>
            </div>

            <div className="home-right" aria-label="Saee Satish Gadhekar profile photo">
              <div className="home-binary">01110011 01100001</div>
              <div className="profile-card profile-photo-card">
                <div className="profile-card-frame">
                  <div className="profile-photo-wrap">
                    <img src="/Saee-Gadhekar-Profile.png" alt="Saee Satish Gadhekar" className="profile-photo" />
                    <div className="profile-photo-overlay"><span>SOFTWARE DEVELOPER</span><b>JAVA // FULL STACK</b></div>
                  </div>
                  <div className="profile-card-footer"><span>PORTFOLIO 2026</span><b>•••</b></div>
                </div>
              </div>
              <div className="home-stack-tag">JAVA&nbsp; // &nbsp;FULL STACK</div>
            </div>
          </div>
          <button className="scroll-cue" onClick={() => go("about")}><ChevronDown size={20}/></button>
        </section>

        <section id="about" className="section about-section">
          <div className="container">
            <div className="about-top">
              <div className="section-heading about-heading"><span>01 / ABOUT</span><h2>From electronics to<br/><em>software development.</em></h2></div>
              <div className="about-index">01<br/><span>WHO I AM</span></div>
            </div>
            <div className="about-grid">
              <div className="about-lead about-lead-card">
                <div className="about-card-line" aria-hidden="true" />
                <p className="large">I’m a CDAC graduate focused on software development, with an engineering background in Electronics & Telecommunication.</p>
                <p>My software journey has given me hands-on exposure to Java, Spring Boot, React, MySQL, REST APIs and Python. I enjoy understanding how applications work from frontend to backend and solving problems step by step.</p>
                <p>I’m looking for an entry-level opportunity where I can contribute, learn from experienced teams and grow into a skilled software professional.</p>
              </div>
              <div className="fact-stack">
                <div className="fact"><div className="fact-icon"><MapPin size={19}/></div><div><small>Based in</small><strong>Nashik, Maharashtra</strong></div><span className="fact-arrow">↗</span></div>
                <div className="fact"><div className="fact-icon"><GraduationCap size={19}/></div><div><small>Latest education</small><strong>PGCP-AC / CDAC Graduate</strong></div><span className="fact-arrow">↗</span></div>
                <div className="fact"><div className="fact-icon"><Award size={19}/></div><div><small>Career interest</small><strong>Software & Full-Stack Development</strong></div><span className="fact-arrow">↗</span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="skills" className="section tinted">
          <div className="container">
            <div className="section-heading"><span>02 / SKILLS</span><h2>Technical skills,<br/><em>built for development.</em></h2></div>
            <div className="skills-grid">
              {skills.map(({ category, icon: Icon, items }) => (
                <div className="skill-card" key={category}>
                  <div className="skill-card-head"><div className="skill-icon"><Icon/></div><span className="skill-count">{String(items.length).padStart(2, "0")}</span></div>
                  <h3>{category}</h3>
                  <div className="chips">{items.map(x => <span key={x}>{x}</span>)}</div>
                </div>
              ))}
            </div>
            <div className="skill-note"><span>CORE STACK</span><strong>Java + Spring Boot + React + MySQL</strong><p>A practical full-stack foundation backed by DSA, OOP and problem-solving concepts.</p></div>
          </div>
        </section>

        <section id="projects" className="section project-section">
          <div className="container">
            <div className="section-heading row-heading"><div><span>03 / PROJECTS</span><h2>Things I’ve <em>built.</em></h2></div><p>Hands-on work across full-stack software and embedded systems.</p></div>
            <div className="projects">
              {projects.map(p => (
                <article className={`project ${p.number === "01" ? "featured" : ""}`} key={p.number}>
                  <div className="project-top"><span className="project-number">{p.number}</span><span>{p.period}</span></div>
                  <div className="project-content">
                    <div><span className="project-label">{p.label}</span><h3>{p.title}</h3><p>{p.description}</p></div>

                  </div>
                  <div className="project-bottom"><div className="project-stack">{p.stack.map(s => <span key={s}>{s}</span>)}</div>{p.github && <a className="project-github-btn" href={p.github} target="_blank" rel="noopener noreferrer"><Github size={15}/> View on GitHub <ArrowUpRight size={14}/></a>}</div>
                </article>
              ))}
            </div>
            <div className="project-cta"><div><span>WANT TO SEE MORE?</span><strong>Explore my coding profile</strong></div><a className="secondary-btn" href={githubUrl} target="_blank" rel="noopener noreferrer">GitHub profile <ArrowUpRight size={16}/></a></div>
          </div>
        </section>

        <section id="education" className="section tinted">
          <div className="container">
            <div className="section-heading"><span>04 / EDUCATION & CERTIFICATIONS</span><h2>Learning that shaped<br/><em>my foundation.</em></h2></div>
            <div className="education-summary">
              <div><span>CDAC</span><strong>62%</strong><small>PGCP-AC</small></div>
              <div><span>ENGINEERING</span><strong>7.9</strong><small>CGPA</small></div>
              <div><span>HSC</span><strong>81.3%</strong><small>Higher Secondary</small></div>
              <div><span>SSC</span><strong>80.80%</strong><small>Secondary</small></div>
            </div>
            <div className="timeline">
              <div className="timeline-item"><div className="timeline-dot"/><div className="timeline-year">Feb 2026 — Aug 2026</div><div><h3>PGCP-AC / CDAC</h3><p>MET Institute of Information Technology, Nashik — C-DAC</p><strong>Percentage: 62%</strong></div></div>
              <div className="timeline-item"><div className="timeline-dot"/><div className="timeline-year">2021 — 2025</div><div><h3>B.E. — Electronics & Telecommunication Engineering</h3><p>Gokhale Education Society's R. H. Sapat College of Engineering, Nashik</p><strong>CGPA: 7.9</strong></div></div>
              <div className="timeline-item"><div className="timeline-dot"/><div className="timeline-year">2019 — 2021</div><div><h3>HSC</h3><p>Karmaveer Shantarambapu Kondaji Wavare Arts, Science & Commerce College, Nashik</p><strong>Percentage: 81.3%</strong></div></div>
              <div className="timeline-item"><div className="timeline-dot"/><div className="timeline-year">2019</div><div><h3>SSC</h3><p>Rachana Vidyalaya, Nashik</p><strong>Percentage: 80.80%</strong></div></div>
            </div>
            <div className="cert-heading"><span>CERTIFICATIONS</span><p>Additional learning completed alongside the academic foundation.</p></div>
            <div className="cert-grid">
              {certifications.map(([name, period, desc], i) => <div className={`cert ${i === 0 ? "cert-featured" : ""}`} key={name}><div className="cert-number">0{i + 1}</div><Award size={20}/><div><h3>{name}</h3><small>{period}</small><p>{desc}</p></div></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="contact section">
          <div className="container contact-inner">
            <div className="contact-copy">
              <div className="contact-kicker"><span>06</span> CONTACT</div>
              <h2>Let’s build<br/>something <em>meaningful.</em></h2>
              <p>I’m open to entry-level software development opportunities, relocation and immediate joining. If you’re looking for a motivated developer who enjoys learning and building practical applications, I would love to connect.</p>

              <div className="contact-links">
                <a href={`mailto:${email}`} className="contact-link">
                  <span className="contact-link-icon"><Mail size={18}/></span>
                  <span><small>EMAIL</small><strong>{email}</strong></span>
                  <ArrowUpRight size={17}/>
                </a>
                <a href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="contact-link-icon"><Linkedin size={18}/></span>
                  <span><small>LINKEDIN</small><strong>LinkedIn Profile</strong></span>
                  <ArrowUpRight size={17}/>
                </a>
                <a href={githubUrl} target="_blank" rel="noopener noreferrer" className="contact-link">
                  <span className="contact-link-icon"><Github size={18}/></span>
                  <span><small>GITHUB</small><strong>GitHub Profile</strong></span>
                  <ArrowUpRight size={17}/>
                </a>
              </div>
            </div>

            <div className="contact-form-card">
              <div className="contact-form-head">
                <span>START A CONVERSATION</span>
                <b>06 / 06</b>
              </div>
              <form onSubmit={e => {
                e.preventDefault();
                const data = new FormData(e.currentTarget);
                const name = String(data.get("name") || "").trim();
                const sender = String(data.get("email") || "").trim();
                const message = String(data.get("message") || "").trim();
                if (!name || !sender || !message) { setFormStatus("Please fill in all fields."); return; }
                const subject = encodeURIComponent(`Portfolio enquiry from ${name}`);
                const body = encodeURIComponent(`Name: ${name}\nEmail: ${sender}\n\nMessage:\n${message}`);
                setFormStatus("Opening your email app…");
                window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
              }}>
                <div className="form-row">
                  <label><span>Name</span><input name="name" type="text" placeholder="Your name" autoComplete="name" /></label>
                  <label><span>Email</span><input name="email" type="email" placeholder="you@company.com" autoComplete="email" /></label>
                </div>
                <label><span>Message</span><textarea name="message" rows="7" placeholder="Tell me about the opportunity..."></textarea></label>
                <div className="form-submit-row">
                  <button className="contact-submit" type="submit">Send message <ArrowUpRight size={19}/></button>
                  <span>{formStatus || "Opens your email app"}</span>
                </div>
              </form>
            </div>
          </div>
        </section>
      </main>

      <footer><div className="container footer-inner"><span>© {new Date().getFullYear()} Saee Satish Gadhekar</span><span>React • Java • Spring Boot</span></div></footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
