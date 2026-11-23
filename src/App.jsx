import { contactConfig } from "./config/contact"

import { useState } from "react";

import { motion } from "motion/react";

import {

  ArrowRight,

  ArrowUpRight,

  Menu,

  X,

  Rocket,

  Code2,

  BarChart3,

  Database,

  Workflow,

  Globe2,

  Smartphone,

  FileText,

  CheckCircle2,

  Layers3,

  Sparkles,

  Target,

ShieldCheck,

TrendingUp,

Zap,

Filter,

ExternalLink,

Search,

PenTool,

ClipboardCheck,

Send,

Phone,

MapPin,

MessageSquare,

AlertCircle,

} from "lucide-react";

import "./App.css";

const logo = `${import.meta.env.BASE_URL}assets/logo/jp-monogram-transparent-1024.png`;

const navigation = [

  { label: "Home", href: "#home" },

  { label: "About", href: "#about" },

  { label: "Services", href: "#services" },

  { label: "Portfolio", href: "#portfolio" },

  { label: "Process", href: "#process" },

  { label: "Our Vision", href: "#founder" },

  { label: "Contact", href: "#contact" },

];

const capabilities = [

  { Icon: BarChart3, label: "Analytics" },

  { Icon: Code2, label: "Development" },

  { Icon: Database, label: "Data Solutions" },

  { Icon: Workflow, label: "Automation" },

];

const services = [

  {

    number: "01",

    title: "Data Analytics & Reporting",

    description:

      "Transform complex data into meaningful insights with interactive dashboards, business intelligence, and advanced reporting solutions.",

    Icon: BarChart3,

    tags: ["Power BI", "Oracle Analytics", "SQL"],

  },

  {

    number: "02",

    title: "Website Development",

    description:

      "Build responsive, high-performing websites that strengthen your digital presence and help your business connect with customers.",

    Icon: Globe2,

    tags: ["Business Websites", "React", "E-commerce"],

  },

  {

    number: "03",

    title: "Application Development",

    description:

      "Create modern web applications and custom business solutions designed around your workflows and operational needs.",

    Icon: Smartphone,

    tags: ["Web Apps", "Custom Solutions", "UI/UX"],

  },

  {

    number: "04",

    title: "Automation & Integration",

    description:

      "Streamline repetitive processes, integrate systems, and improve operational efficiency through practical automation solutions.",

    Icon: Workflow,

    tags: ["Python", "ETL", "API Integration"],

  },

  {

    number: "05",

    title: "Documentation & Writing",

    description:

      "Develop clear, structured technical documentation, user guides, standard operating procedures, and professional content.",

    Icon: FileText,

    tags: ["User Manuals", "SOPs", "Technical Writing"],

  },

];

const projects = [

  {

    id: 1,

    title: "Finance Analytics Dashboard",

    category: "Analytics",

    type: "Demo Concept",

    description:

      "An interactive financial intelligence dashboard concept featuring revenue trends, expense analysis, and executive KPIs.",

    technologies: ["Oracle Analytics", "Power BI", "SQL"],

    Icon: BarChart3,

    visual: "analytics",

  },

  {

    id: 2,

    title: "Modern Business Website",

    category: "Web",

    type: "Demo Concept",

    description:

      "A responsive corporate website concept featuring modern design, service pages, and customer enquiry functionality.",

    technologies: ["React", "CSS", "Responsive Design"],

    Icon: Globe2,

    visual: "web",

  },

  {

    id: 3,

    title: "Business Utility Application",

    category: "App",

    type: "Demo Concept",

    description:

      "A custom application concept designed to organize business activities, track tasks, and simplify everyday operations.",

    technologies: ["React", "JavaScript", "UI/UX"],

    Icon: Smartphone,

    visual: "app",

  },

  {

    id: 4,

    title: "Automated Data Processing",

    category: "Automation",

    type: "Demo Concept",

    description:

      "A data automation concept for validating, transforming, and organizing information across business systems.",

    technologies: ["Python", "ETL", "SQL"],

    Icon: Workflow,

    visual: "automation",

  },

];

const projectCategories = [

  "All",

  "Analytics",

  "Web",

  "App",

  "Automation",

];

const benefits = [

  {

    title: "Business Focused",

    description:

      "Technology solutions planned around your business goals and practical requirements.",

    Icon: Target,

  },

  {

    title: "End-to-End Support",

    description:

      "A structured approach from understanding your idea through implementation and delivery.",

    Icon: Zap,

  },

  {

    title: "Quality & Reliability",

    description:

      "Attention to usability, maintainability, testing, and clear project communication.",

    Icon: ShieldCheck,

  },

  {

    title: "Continuous Growth",

    description:

      "Flexible solutions designed to support evolving business needs and future improvements.",

    Icon: TrendingUp,

  },

];

const processSteps = [

  {

    number: "01",

    title: "Discover",

    subtitle: "Understand Your Vision",

    description:

      "We begin by understanding your business, objectives, challenges, and project expectations to identify the right direction.",

    Icon: Search,

  },

  {

    number: "02",

    title: "Plan & Design",

    subtitle: "Shape the Solution",

    description:

      "We define the project scope, plan the technical approach, and design an experience aligned with your requirements.",

    Icon: PenTool,

  },

  {

    number: "03",

    title: "Build & Test",

    subtitle: "Bring Ideas to Life",

    description:

      "We develop the solution, validate its functionality, and refine the experience through structured testing.",

    Icon: Code2,

  },

  {

    number: "04",

    title: "Launch & Support",

    subtitle: "Deliver with Confidence",

    description:

      "We prepare the solution for launch, support the handover, and discuss improvements as your needs evolve.",

    Icon: Rocket,

  },

];

function buildEnquiryMessage(form) {

  return [

    "New Project Enquiry - Jp Nexus",

    "",

    `Name: ${form.name}`,

    `Email: ${form.email}`,

    `Phone: ${form.phone || "Not provided"}`,

    `Service: ${form.service}`,

    `Budget: ${form.budget || "Not specified"}`,

    "",

    "Project Details:",

    form.message,

  ].join("\n");

}

function openEnquiryChannel(form, channel) {

  const message = buildEnquiryMessage(form);

  if (channel === "email") {

    const subject = encodeURIComponent(

      contactConfig.emailSubject

    );

    const body = encodeURIComponent(message);

    window.location.href =

      `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;

    return;

  }

  if (channel === "whatsapp") {

    const phone = contactConfig.whatsappNumber.replace(

      /\D/g,

      ""

    );

    const url =

      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;

    window.open(url, "_blank", "noopener,noreferrer");

  }

}

function App() {

  const [menuOpen, setMenuOpen] = useState(false);

  const [activeCategory, setActiveCategory] = useState("All");

const filteredProjects =

  activeCategory === "All"

    ? projects

    : projects.filter(

        (project) => project.category === activeCategory

      );

const [contactForm, setContactForm] = useState({

  name: "",

  email: "",

  phone: "",

  service: "",

  budget: "",

  message: "",

});

const [formErrors, setFormErrors] = useState({});

const [formStatus, setFormStatus] = useState("idle");

const handleContactChange = (event) => {

  const { name, value } = event.target;

  setContactForm((previous) => ({

    ...previous,

    [name]: value,

  }));

  setFormErrors((previous) => ({

    ...previous,

    [name]: "",

  }));

};

const handleContactSubmit = (event, channel = null) => {

  event?.preventDefault();

  const errors = {};

  if (!contactForm.name.trim()) {

    errors.name = "Please enter your name.";

  }

  if (!contactForm.email.trim()) {

    errors.email = "Please enter your email address.";

  } else if (

    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contactForm.email.trim())

  ) {

    errors.email = "Please enter a valid email address.";

  }

  if (!contactForm.service) {

    errors.service = "Please select a service.";

  }

  if (!contactForm.message.trim()) {

    errors.message = "Please describe your project.";

  } else if (contactForm.message.trim().length < 20) {

    errors.message = "Please provide at least 20 characters.";

  }

  setFormErrors(errors);

  if (Object.keys(errors).length > 0) {

    setFormStatus("invalid");

    return;

  }

  // Validation successful

  setFormStatus("ready");

  // Open the selected communication channel

  if (channel === "email" || channel === "whatsapp") {

    openEnquiryChannel(contactForm, channel);

  }

};

  const closeMenu = () => setMenuOpen(false);

  return (

    <div className="website">

      {/* NAVIGATION */}

      <header className="site-header">

        <div className="nav-container">

          <a

            href="#home"

            className="brand"

            onClick={closeMenu}

            aria-label="Jp Nexus home"

          >

            <img src={logo} alt="Jp Nexus logo" />

            <span>

              <strong>Jp</strong> Nexus

            </span>

          </a>

          <nav

            className={`nav-links ${menuOpen ? "nav-open" : ""}`}

            aria-label="Main navigation"

          >

            {navigation.map((item) => (

              <a

                key={item.label}

                href={item.href}

                onClick={closeMenu}

              >

                {item.label}

              </a>

            ))}

            <a

              href="#contact"

              className="mobile-quote"

              onClick={closeMenu}

            >

              Get a Quote

            </a>

          </nav>

          <a href="#contact" className="quote-button">

            Get a Quote <ArrowUpRight size={17} />

          </a>

          <button

            className="menu-toggle"

            onClick={() => setMenuOpen(!menuOpen)}

            aria-label={menuOpen ? "Close menu" : "Open menu"}

            aria-expanded={menuOpen}

          >

            {menuOpen ? <X size={25} /> : <Menu size={25} />}

          </button>

        </div>

      </header>

      {/* HERO SECTION */}

      <main>

        <section className="hero" id="home">

          <div className="hero-glow" aria-hidden="true" />

          <div className="hero-container">

            <motion.div

              className="hero-content"

              initial={{ opacity: 0, y: 30 }}

              animate={{ opacity: 1, y: 0 }}

              transition={{ duration: 0.7 }}

            >

              <div className="eyebrow">

                <span className="eyebrow-line" />

                DIGITAL SOLUTIONS & TECHNOLOGY STUDIO

              </div>

              <h1>

                One Nexus.

                <br />

                <span>Infinite Possibilities.</span>

              </h1>

              <p className="hero-description">

                We transform ideas into powerful digital experiences

                through data analytics, software development,

                automation, and end-to-end technology solutions.

              </p>

              <div className="hero-actions">

                <a href="#contact" className="primary-button">

                  <Rocket size={18} />

                  Start a Project

                  <ArrowRight size={18} />

                </a>

                <a href="#portfolio" className="secondary-button">

                  Explore Our Work

                  <ArrowUpRight size={18} />

                </a>

              </div>

              <div className="hero-highlights">

                <div>

                  <span className="highlight-number">01</span>

                  <span>Business-focused solutions</span>

                </div>

                <div>

                  <span className="highlight-number">02</span>

                  <span>Modern technologies</span>

                </div>

                <div>

                  <span className="highlight-number">03</span>

                  <span>Collaborative delivery</span>

                </div>

              </div>

            </motion.div>

            <motion.div

              className="hero-visual"

              initial={{ opacity: 0, scale: 0.9 }}

              animate={{ opacity: 1, scale: 1 }}

              transition={{ duration: 0.9, delay: 0.2 }}

            >

              <div className="visual-orbit orbit-one" />

              <div className="visual-orbit orbit-two" />

              <div className="visual-card">

                <div className="visual-topbar">

                  <span />

                  <span />

                  <span />

                  <p>JP NEXUS / DIGITAL INTELLIGENCE</p>

                </div>

                <div className="visual-content">

                  <div className="visual-heading">

                    <div>

                      <small>ANALYTICS OVERVIEW</small>

                      <h3>Digital Intelligence</h3>

                    </div>

                    <BarChart3 size={26} />

                  </div>

                  <div className="chart-bars">

                    {[35, 54, 43, 72, 58, 85, 68, 95].map(

                      (height, index) => (

                        <div

                          key={index}

                          className="chart-column"

                          style={{ height: `${height}%` }}

                        />

                      )

                    )}

                  </div>

                  <div className="visual-footer">

                    <span>DATA</span>

                    <span>DESIGN</span>

                    <span>DEVELOPMENT</span>

                  </div>

                </div>

              </div>

              <div className="floating-icon floating-code">

                <Code2 size={26} />

              </div>

              <div className="floating-icon floating-data">

                <Database size={26} />

              </div>

              <div className="floating-icon floating-chart">

                <BarChart3 size={26} />

              </div>

            </motion.div>

          </div>

          <div className="capability-strip">

            <div className="capability-container">

              {capabilities.map(({ Icon, label }) => (

                <div className="capability-item" key={label}>

                  <Icon size={21} />

                  <span>{label}</span>

                </div>

              ))}

            </div>

          </div>

        </section>

        {/* TEMPORARY DESTINATION SECTIONS */}

{/* ABOUT SECTION */}

<section className="about-section" id="about">

  <div className="section-container about-grid">

    <motion.div

      className="about-content"

      initial={{ opacity: 0, y: 30 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.6 }}

    >

      <div className="section-eyebrow">

        <span />

        WHO WE ARE

      </div>

      <h2 className="section-title">

        Technology That Connects

        <br />

        <span>Ideas to Impact.</span>

      </h2>

      <p className="section-description">

        Jp Nexus is an independent digital solutions and technology

        studio focused on helping businesses turn their ideas

        into practical, reliable, and scalable digital solutions.

      </p>

      <p className="section-description">

        From data analytics and software development to automation

        and technical documentation, we bring together technology,

        creativity, and structured execution to solve real

        business challenges.

      </p>

      <div className="about-points">

        <div>

          <CheckCircle2 size={19} />

          <span>Business-focused approach</span>

        </div>

        <div>

          <CheckCircle2 size={19} />

          <span>Modern technology solutions</span>

        </div>

        <div>

          <CheckCircle2 size={19} />

          <span>Collaborative project delivery</span>

        </div>

        <div>

          <CheckCircle2 size={19} />

          <span>Clear and transparent communication</span>

        </div>

      </div>

      <a href="#contact" className="about-link">

        Let's Work Together

        <ArrowUpRight size={18} />

      </a>

    </motion.div>

    <motion.div

      className="about-visual"

      initial={{ opacity: 0, x: 30 }}

      whileInView={{ opacity: 1, x: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.7 }}

    >

      <div className="about-visual-inner">

        <div className="about-visual-glow" />

        <div className="about-logo-box">

          <img

            src={logo}

            alt="Jp Nexus technology studio"

            loading="lazy"

          />

        </div>

        <div className="about-floating-card about-card-one">

          <Layers3 size={21} />

          <span>Digital Solutions</span>

        </div>

        <div className="about-floating-card about-card-two">

          <Sparkles size={21} />

          <span>Innovation Driven</span>

        </div>

        <div className="about-visual-caption">

          THINK. CONNECT. CREATE. DELIVER.

        </div>

      </div>

    </motion.div>

  </div>

</section>

{/* SERVICES SECTION */}

<section className="services-section" id="services">

  <div className="section-container">

    <div className="services-heading">

      <div>

        <div className="section-eyebrow">

          <span />

          WHAT WE DO

        </div>

        <h2 className="section-title">

          Our <span>Expertise.</span>

        </h2>

      </div>

      <p className="section-description">

        A focused range of technology services to help

        businesses build, analyze, automate, and grow.

      </p>

    </div>

    <div className="services-grid">

      {services.map((service, index) => {

        const Icon = service.Icon;

        return (

          <motion.article

            className="service-card"

            key={service.number}

            initial={{ opacity: 0, y: 35 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{

              duration: 0.5,

              delay: index * 0.08,

            }}

          >

            <div className="service-card-top">

              <div className="service-icon">

                <Icon size={27} strokeWidth={1.8} />

              </div>

              <span className="service-number">

                {service.number}

              </span>

            </div>

            <h3>{service.title}</h3>

            <p>{service.description}</p>

            <div className="service-tags">

              {service.tags.map((tag) => (

                <span key={tag}>{tag}</span>

              ))}

            </div>

            <a

              href="#contact"

              className="service-arrow"

              aria-label={`Enquire about ${service.title}`}

            >

              <ArrowUpRight size={20} />

            </a>

          </motion.article>

        );

      })}

    </div>

    <div className="services-bottom">

      <p>

        Have a unique requirement? Let's explore

        the right solution together.

      </p>

      <a href="#contact">

        Discuss Your Project

        <ArrowRight size={18} />

      </a>

    </div>

  </div>

</section>

{/* FEATURED PROJECTS */}

<section className="projects-section" id="portfolio">

  <div className="section-container">

    <motion.div

      className="projects-header"

      initial={{ opacity: 0, y: 25 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.6 }}

    >

      <div>

        <div className="section-eyebrow">

          <span />

          OUR WORK

        </div>

        <h2 className="section-title">

          Featured <span>Projects.</span>

        </h2>

        <p className="section-description">

          Explore demonstration concepts showcasing the types

          of digital solutions we can design and develop.

        </p>

      </div>

      <a href="#contact" className="projects-contact-link">

        Discuss a Similar Project

        <ArrowUpRight size={18} />

      </a>

    </motion.div>

    {/* CATEGORY FILTERS */}

    <div className="project-filters" aria-label="Project filters">

      <Filter size={18} className="filter-icon" />

      {projectCategories.map((category) => (

        <button

          key={category}

          type="button"

          className={`filter-button ${

            activeCategory === category ? "active" : ""

          }`}

          onClick={() => setActiveCategory(category)}

          aria-pressed={activeCategory === category}

        >

          {category}

        </button>

      ))}

    </div>

    {/* PROJECT CARDS */}

    <motion.div layout className="projects-grid">

      {filteredProjects.map((project) => {

        const Icon = project.Icon;

        return (

          <motion.article

            layout

            key={project.id}

            className="project-card"

            initial={{ opacity: 0, y: 20 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0 }}

            transition={{ duration: 0.35 }}

          >

            <div

              className={`project-visual project-visual-${project.visual}`}

            >

              <div className="project-visual-grid" />

              <div className="project-visual-icon">

                <Icon size={55} strokeWidth={1.4} />

              </div>

              <span className="project-visual-label">

                JP NEXUS / CONCEPT LAB

              </span>

            </div>

            <div className="project-card-content">

              <div className="project-card-meta">

                <span className="project-category">

                  {project.category}

                </span>

                <span className="project-type">

                  {project.type}

                </span>

              </div>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">

                {project.technologies.map((technology) => (

                  <span key={technology}>

                    {technology}

                  </span>

                ))}

              </div>

              <a

                href="#contact"

                className="project-view-link"

                aria-label={`Enquire about ${project.title}`}

              >

                Enquire About This Solution

                <ExternalLink size={16} />

              </a>

            </div>

          </motion.article>

        );

      })}

    </motion.div>

    <div className="projects-note">

      <Sparkles size={18} />

      <p>

        These are sample projects created to showcase our capabilities and the solutions we can deliver.

      </p>

    </div>

  </div>

</section>

{/* WHY CHOOSE JP NEXUS */}

<section className="benefits-section" id="why-choose-us">

  <div className="section-container">

    <motion.div

      className="benefits-heading"

      initial={{ opacity: 0, y: 25 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.6 }}

    >

      <div className="section-eyebrow">

        <span />

        WHY CHOOSE US

      </div>

      <h2 className="section-title">

        Why Choose <span>Jp Nexus?</span>

      </h2>

      <p className="section-description">

        We combine practical technology expertise with a

        thoughtful, business-oriented approach.

      </p>

    </motion.div>

    <div className="benefits-grid">

      {benefits.map((benefit, index) => {

        const Icon = benefit.Icon;

        return (

          <motion.div

            className="benefit-card"

            key={benefit.title}

            initial={{ opacity: 0, y: 25 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{

              duration: 0.5,

              delay: index * 0.08,

            }}

          >

            <div className="benefit-icon">

              <Icon size={27} strokeWidth={1.8} />

            </div>

            <h3>{benefit.title}</h3>

            <p>{benefit.description}</p>

          </motion.div>

        );

      })}

    </div>

    <div className="benefits-cta">

      <div>

        <h3>Have a Project in Mind?</h3>

        <p>

          Let's explore how the right technology solution

          can bring your idea to life.

        </p>

      </div>

      <a href="#contact" className="primary-button">

        Start a Conversation

        <ArrowRight size={18} />

      </a>

    </div>

  </div>

</section>

{/* OUR PROCESS SECTION */}

<section className="process-section" id="process">

  <div className="section-container">

    <motion.div

      className="process-heading"

      initial={{ opacity: 0, y: 25 }}

      whileInView={{ opacity: 1, y: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.6 }}

    >

      <div className="section-eyebrow">

        <span />

        HOW WE WORK

      </div>

      <h2 className="section-title">

        From Idea to <span>Execution.</span>

      </h2>

      <p className="section-description">

        A structured and collaborative approach to transforming

        your ideas into practical, reliable digital solutions.

      </p>

    </motion.div>

    <div className="process-timeline">

      {processSteps.map((step, index) => {

        const Icon = step.Icon;

        return (

          <motion.article

            className="process-card"

            key={step.number}

            initial={{ opacity: 0, y: 30 }}

            whileInView={{ opacity: 1, y: 0 }}

            viewport={{ once: true }}

            transition={{

              duration: 0.5,

              delay: index * 0.1,

            }}

          >

            <div className="process-card-top">

              <div className="process-icon">

                <Icon size={25} strokeWidth={1.8} />

              </div>

              <span className="process-number">

                {step.number}

              </span>

            </div>

            <div className="process-step-label">

              STEP {step.number}

            </div>

            <h3>{step.title}</h3>

            <h4>{step.subtitle}</h4>

            <p>{step.description}</p>

            {index < processSteps.length - 1 && (

              <div

                className="process-connector"

                aria-hidden="true"

              >

                <ArrowRight size={17} />

              </div>

            )}

          </motion.article>

        );

      })}

    </div>

    <div className="process-bottom">

      <ClipboardCheck size={21} />

      <p>

        Every project is different. Our process adapts to your

        scope, priorities, and delivery requirements.

      </p>

    </div>

  </div>

</section>

{/* OUR VISION SECTION */}

<section className="founder-section" id="founder">

  <div className="section-container founder-grid">

    <motion.div

      className="founder-visual"

      initial={{ opacity: 0, x: -30 }}

      whileInView={{ opacity: 1, x: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.7 }}

    >

      <div className="founder-visual-inner">

        <div className="founder-grid-pattern" />

        <div className="founder-avatar">

          <Code2 size={105} strokeWidth={1} />

        </div>

        <div className="founder-visual-label">

          <span>JP NEXUS</span>

          <strong>DIGITAL SOLUTIONS STUDIO</strong>

        </div>

        <div className="founder-visual-accent" />

      </div>

    </motion.div>

    <motion.div

      className="founder-content"

      initial={{ opacity: 0, x: 30 }}

      whileInView={{ opacity: 1, x: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.7 }}

    >

      <div className="section-eyebrow">

        <span />

        THE VISION BEHIND JP NEXUS

      </div>

      <h2 className="section-title">

        Built with Purpose. <span>Driven by Ideas.</span>

      </h2>

      <div className="founder-role">

        INDEPENDENT DIGITAL SOLUTIONS STUDIO

      </div>

      <p className="section-description">

        Jp Nexus is an independent digital services brand

        focused on transforming ideas into practical,

        reliable, and meaningful technology solutions.

      </p>

      <p className="section-description">

        From modern websites and applications to data

        analytics, automation, and technical documentation,

        our approach combines thoughtful design, clear

        communication, and purposeful execution to help

        businesses move forward.

      </p>

      <div className="founder-values">

        <div>

          <span>01</span>

          <strong>Practical Innovation</strong>

        </div>

        <div>

          <span>02</span>

          <strong>Clear Communication</strong>

        </div>

        <div>

          <span>03</span>

          <strong>Quality Execution</strong>

        </div>

      </div>

      <div className="founder-actions">

        <a href="#contact" className="primary-button">

          Let's Connect

          <ArrowUpRight size={18} />

        </a>

        <a

          href="#portfolio"

          className="founder-secondary-link"

        >

          Explore Our Work

          <ArrowRight size={18} />

        </a>

      </div>

    </motion.div>

  </div>

</section>

{/* CONTACT SECTION */}

<section className="contact-section" id="contact">

  <div className="section-container contact-grid">

    <motion.div

      className="contact-information"

      initial={{ opacity: 0, x: -30 }}

      whileInView={{ opacity: 1, x: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.6 }}

    >

      <div className="section-eyebrow">

        <span />

        LET'S COLLABORATE

      </div>

      <h2 className="section-title">

        Have a Project <span>in Mind?</span>

      </h2>

      <p className="section-description">

        Whether you're looking to build a website,

        develop an application, automate a workflow,

        or turn your data into meaningful insights,

        we'd love to hear about your idea.

      </p>

      <div className="contact-benefits">

        <div>

          <CheckCircle2 size={20} />

          <span>Discuss your project requirements</span>

        </div>

        <div>

          <CheckCircle2 size={20} />

          <span>Explore suitable technology solutions</span>

        </div>

        <div>

          <CheckCircle2 size={20} />

          <span>Plan the next steps together</span>

        </div>

      </div>

      <div className="contact-info-card">

        <div className="contact-info-icon">

          <MessageSquare size={24} />

        </div>

        <div>

          <h3>Let's Start a Conversation</h3>

          <p>

            Share your requirements through the enquiry

            form, and we'll review the details.

          </p>

        </div>

      </div>

      <div className="contact-decoration">

        <span>YOUR IDEA.</span>

        <span>OUR TECHNOLOGY.</span>

        <strong>ONE NEXUS.</strong>

      </div>

    </motion.div>

    <motion.div

      className="contact-form-wrapper"

      initial={{ opacity: 0, x: 30 }}

      whileInView={{ opacity: 1, x: 0 }}

      viewport={{ once: true }}

      transition={{ duration: 0.7 }}

    >

      <div className="contact-form-header">

        <div>

          <span>PROJECT ENQUIRY</span>

          <h3>Tell Us About Your Project</h3>

          <p>

            Fill in the details below to get started.

          </p>

        </div>

        <div className="contact-header-icon">

          <Send size={24} />

        </div>

      </div>

      <form

  onSubmit={(event) => {

    event.preventDefault();

    handleContactSubmit(event, "email");

  }}

>

        <div className="contact-form-row">

          <div className="form-field">

            <label htmlFor="contact-name">

              Full Name <span>*</span>

            </label>

            <input

              id="contact-name"

              type="text"

              name="name"

              value={contactForm.name}

              onChange={handleContactChange}

              placeholder="Your full name"

              autoComplete="name"

              aria-invalid={Boolean(formErrors.name)}

              aria-describedby={

                formErrors.name ? "contact-name-error" : undefined

              }

              required

            />

            {formErrors.name && (

              <small id="contact-name-error" className="form-error">

                {formErrors.name}

              </small>

            )}

          </div>

          <div className="form-field">

            <label htmlFor="contact-email">

              Email Address <span>*</span>

            </label>

            <input

              id="contact-email"

              type="email"

              name="email"

              value={contactForm.email}

              onChange={handleContactChange}

              placeholder="you@example.com"

              autoComplete="email"

              aria-invalid={Boolean(formErrors.email)}

              aria-describedby={

                formErrors.email ? "contact-email-error" : undefined

              }

              required

            />

            {formErrors.email && (

              <small id="contact-email-error" className="form-error">

                {formErrors.email}

              </small>

            )}

          </div>

        </div>

        <div className="contact-form-row">

          <div className="form-field">

            <label htmlFor="contact-phone">

              Phone Number

            </label>

            <input

              id="contact-phone"

              type="tel"

              name="phone"

              value={contactForm.phone}

              onChange={handleContactChange}

              placeholder="+91 98765 43210"

              autoComplete="tel"

            />

          </div>

          <div className="form-field">

            <label htmlFor="contact-service">

              Service Required <span>*</span>

            </label>

            <select

              id="contact-service"

              name="service"

              value={contactForm.service}

              onChange={handleContactChange}

              aria-invalid={Boolean(formErrors.service)}

              aria-describedby={

                formErrors.service ? "contact-service-error" : undefined

              }

              required

            >

              <option value="">Select a service</option>

              <option value="Data Analytics & Reporting">

                Data Analytics & Reporting

              </option>

              <option value="Website Development">

                Website Development

              </option>

              <option value="Application Development">

                Application Development

              </option>

              <option value="Automation & Integration">

                Automation & Integration

              </option>

              <option value="Documentation & Writing">

                Documentation & Writing

              </option>

              <option value="Other">

                Other

              </option>

            </select>

            {formErrors.service && (

              <small id="contact-service-error" className="form-error">

                {formErrors.service}

              </small>

            )}

          </div>

        </div>

        <div className="form-field">

          <label htmlFor="contact-budget">

            Estimated Budget

          </label>

          <select

            id="contact-budget"

            name="budget"

            value={contactForm.budget}

            onChange={handleContactChange}

          >

            <option value="">Select budget (optional)</option>

            <option value="Below ₹10,000">Below ₹10,000</option>

            <option value="₹10,000 – ₹25,000">

              ₹10,000 – ₹25,000

            </option>

            <option value="₹25,000 – ₹50,000">

              ₹25,000 – ₹50,000

            </option>

            <option value="₹50,000 – ₹1,00,000">

              ₹50,000 – ₹1,00,000

            </option>

            <option value="Above ₹1,00,000">

              Above ₹1,00,000

            </option>

            <option value="Not Sure Yet">

              Not Sure Yet

            </option>

          </select>

        </div>

        <div className="form-field">

          <label htmlFor="contact-message">

            Project Details <span>*</span>

          </label>

          <textarea

            id="contact-message"

            name="message"

            value={contactForm.message}

            onChange={handleContactChange}

            placeholder="Tell us about your project, goals, and requirements..."

            rows={6}

            aria-invalid={Boolean(formErrors.message)}

            aria-describedby={

              formErrors.message ? "contact-message-error" : undefined

            }

            required

          />

          {formErrors.message && (

            <small id="contact-message-error" className="form-error">

              {formErrors.message}

            </small>

          )}

        </div>

        {formStatus === "invalid" && (

          <div className="form-feedback form-feedback-error" role="alert">

            <AlertCircle size={18} />

            Please check the highlighted fields and complete the required information before continuing.

          </div>

        )}

        {formStatus === "ready" && (

          <div className="form-feedback form-feedback-ready" role="status">

            <CheckCircle2 size={18} />

            Your enquiry is ready! Please complete sending your

            message in your email application or WhatsApp.

            Your enquiry has not been sent automatically.

          </div>

        )}

{/* Email and WhatsApp enquiry options */}

<div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">

  <button

    type="button"

    onClick={(event) => handleContactSubmit(event, "email")}

    className="flex items-center justify-center gap-2 rounded-xl border border-[#f5c928] bg-[#f5c928] px-5 py-3 font-semibold text-[#090a0d] transition hover:bg-[#e6b91d]"

  >

    Send via Email

  </button>

  <button

    type="button"

    onClick={(event) => handleContactSubmit(event, "whatsapp")}

    className="flex items-center justify-center gap-2 rounded-xl border border-green-500 bg-green-500 px-5 py-3 font-semibold text-white transition hover:bg-green-600"

  >

    Send via WhatsApp

  </button>

</div>

<p className="mt-3 text-center text-xs text-gray-400">

  Choose your preferred contact method.

  Your email application or WhatsApp will open

  with your project details ready to send.

</p>

      </form>

    </motion.div>

  </div>

</section>

      </main>

    </div>

  );

}

export default App;
