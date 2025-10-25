import React, { useState, useEffect } from "react";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    setIsLoaded(true);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const skills = [
    { 
      category: "Cloud Platforms", 
      items: ["AWS (EC2, S3, VPC, Route 53, IAM)"],
      icon: "☁️",
      color: "#00b4d8"
    },
    { 
      category: "CI/CD & Automation", 
      items: ["GitHub Actions", "Jenkins", "Argo CD"],
      icon: "⚙️",
      color: "#06ffa5"
    },
    { 
      category: "Containers & Orchestration", 
      items: ["Docker", "Docker Swarm", "Kubernetes (k0s, k3s, Minikube)"],
      icon: "🐳",
      color: "#0077b6"
    },
    { 
      category: "Infrastructure as Code", 
      items: ["Terraform"],
      icon: "🏗️",
      color: "#7c3aed"
    },
    { 
      category: "Configuration & Monitoring", 
      items: ["Ansible", "Nginx Proxy Manager", "Slack API"],
      icon: "📊",
      color: "#f59e0b"
    },
    { 
      category: "Version Control & Scripting", 
      items: ["Git", "GitHub", "Linux", "Shell"],
      icon: "🛠️",
      color: "#10b981"
    }
  ];

  const certifications = [
    { name: "AWS Cloud Certification", institution: "Besant Technologies, Chennai", icon: "☁️", year: "2023" },
    { name: "DevOps Certification", institution: "Besant Technologies, Chennai", icon: "🔧", year: "2023" },
    { name: "Linux Certification", institution: "Besant Technologies, Chennai", icon: "🐧", year: "2022" },
    { name: "DevOps Internship", institution: "PlatrTech Studio, Madurai", icon: "💼", year: "2024" }
  ];

  const projects = [
    { 
      title: "Zero-Downtime Deployment", 
      tech: "Docker Swarm", 
      description: "Automated React app deployment with rollback strategy",
      icon: "🚀",
      features: ["Automated Deployment", "Rollback Strategy", "Zero Downtime"],
      status: "Completed"
    },
    { 
      title: "GitHub Actions + Slack Integration", 
      tech: "CI/CD Automation", 
      description: "Automated PR notifications and file transfer",
      icon: "⚡",
      features: ["PR Notifications", "File Transfer", "Automation"],
      status: "Completed"
    },
    { 
      title: "Kubernetes CRM Deployment", 
      tech: "Argo CD + Vault", 
      description: "Deployed EspoCRM with GitOps and secret management",
      icon: "☸️",
      features: ["GitOps", "Secret Management", "CRM Deployment"],
      status: "Completed"
    }
  ];

  const education = [
    { 
      degree: "MBA (Human Resources)", 
      institution: "Annai Vailankanni Arts & Science College, Thanjavur", 
      period: "2021–2023", 
      grade: "CGPA: 7.05",
      icon: "🎓"
    },
    { 
      degree: "B.Sc.", 
      institution: "Government Arts & Science College for Men, Kumbakonam", 
      period: "2017–2020", 
      grade: "65%",
      icon: "📚"
    }
  ];

  const strengths = [
    { text: "Strong team collaboration & leadership", icon: "🤝" },
    { text: "Problem-solving & adaptability in fast-paced DevOps environments", icon: "🧠" },
    { text: "Quick learner focused on automation & cloud scalability", icon: "⚡" }
  ];

  const stats = [
    { label: "Projects Completed", value: "3", icon: "🚀" },
    { label: "Certifications", value: "4", icon: "🏆" },
    { label: "Technologies", value: "15+", icon: "💻" },
    { label: "Status", value: "Fresher", icon: "🌟" }
  ];

  const Card = ({ children, className = "", hover = true }) => (
    <div style={{
      background: "rgba(255, 255, 255, 0.05)",
      backdropFilter: "blur(15px)",
      borderRadius: "20px",
      padding: "28px",
      marginBottom: "28px",
      border: "1px solid rgba(255, 255, 255, 0.1)",
      boxShadow: "0 12px 40px rgba(0, 0, 0, 0.4)",
      transition: hover ? "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)" : "none",
      transform: hover ? "translateY(0)" : "none",
      opacity: isLoaded ? 1 : 0,
      animation: isLoaded ? "fadeInUp 0.6s ease-out" : "none"
    }} 
    className={className}
    onMouseEnter={(e) => {
      if (hover) {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0 20px 60px rgba(0, 212, 255, 0.2)";
        e.currentTarget.style.borderColor = "rgba(0, 212, 255, 0.3)";
      }
    }}
    onMouseLeave={(e) => {
      if (hover) {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.4)";
        e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
      }
    }}>
      {children}
    </div>
  );

  const SectionTitle = ({ children, icon, id }) => (
    <h2 
      id={id}
      style={{
        color: "#00b4d8",
        fontSize: "1.8rem",
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        gap: "12px",
        fontWeight: "700",
        textShadow: "0 0 20px rgba(0, 180, 216, 0.3)",
        position: "relative"
      }}
    >
      <span style={{ fontSize: "1.5rem" }}>{icon}</span>
      {children}
      <div style={{
        position: "absolute",
        bottom: "-8px",
        left: "0",
        width: "60px",
        height: "3px",
        background: "linear-gradient(90deg, #00b4d8, #06ffa5)",
        borderRadius: "2px"
      }} />
    </h2>
  );

  const SkillBadge = ({ skill, color }) => (
    <span style={{
      background: `linear-gradient(135deg, ${color}20, ${color}10)`,
      color: color,
      padding: "8px 16px",
      borderRadius: "25px",
      fontSize: "0.9rem",
      fontWeight: "500",
      border: `1px solid ${color}30`,
      display: "inline-block",
      margin: "4px 8px 4px 0",
      transition: "all 0.3s ease",
      cursor: "default"
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.transform = "scale(1.05)";
      e.currentTarget.style.boxShadow = `0 4px 15px ${color}40`;
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.transform = "scale(1)";
      e.currentTarget.style.boxShadow = "none";
    }}>
      {skill}
    </span>
  );

  return (
    <>
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(30px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
          }
          
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.7; }
          }
          
          @keyframes shimmer {
            0% { background-position: -200px 0; }
            100% { background-position: calc(200px + 100%) 0; }
          }
          
          .floating {
            animation: float 3s ease-in-out infinite;
          }
          
          .pulse {
            animation: pulse 2s ease-in-out infinite;
          }
          
          .shimmer {
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent);
            background-size: 200px 100%;
            animation: shimmer 2s infinite;
          }
          
          @media (max-width: 768px) {
            .mobile-optimized {
              padding: 15px !important;
              font-size: 0.9rem !important;
            }
          }
          
          .accessibility-high {
            color: #ffffff !important;
            background: rgba(0, 0, 0, 0.8) !important;
          }
        `}
      </style>
      
      <div 
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #0f172a 0%, #1e293b 25%, #334155 50%, #475569 75%, #64748b 100%)",
          color: "#ffffff",
          fontFamily: "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
          padding: "20px",
          lineHeight: "1.6",
          position: "relative",
          overflow: "hidden"
        }}
        role="main"
        aria-label="Vinoth Kumar S - DevOps Engineer Portfolio"
      >
        {/* Animated Background Elements */}
        <div style={{
          position: "absolute",
          top: "10%",
          left: "10%",
          width: "100px",
          height: "100px",
          background: "radial-gradient(circle, rgba(0, 180, 216, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 6s ease-in-out infinite"
        }} />
        <div style={{
          position: "absolute",
          top: "60%",
          right: "15%",
          width: "150px",
          height: "150px",
          background: "radial-gradient(circle, rgba(6, 255, 165, 0.12) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 8s ease-in-out infinite reverse"
        }} />
        <div style={{
          position: "absolute",
          bottom: "20%",
          left: "20%",
          width: "80px",
          height: "80px",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 70%)",
          borderRadius: "50%",
          animation: "float 5s ease-in-out infinite"
        }} />

        <div style={{ maxWidth: "1400px", margin: "0 auto", position: "relative", zIndex: 1 }}>

      {/* Header */}
          <Card style={{ textAlign: "center", marginBottom: "50px" }}>
            <header>
              <h1 style={{
                background: "linear-gradient(135deg, #00b4d8, #06ffa5, #7c3aed)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                fontSize: "4rem",
                fontWeight: "800",
                marginBottom: "20px",
                textShadow: "0 0 40px rgba(0, 180, 216, 0.3)",
                letterSpacing: "-0.02em",
                margin: "0 0 20px 0"
              }}>
                Vinoth Kumar S
              </h1>
            </header>
            <p style={{
              fontSize: "1.3rem",
              color: "#b0b0b0",
              marginBottom: "30px",
              fontWeight: "300"
            }}>
              DevOps Engineer | Cloud Solutions Architect | Infrastructure Automation Specialist
            </p>
            <address style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              flexWrap: "wrap",
              fontSize: "1rem",
              marginBottom: "20px",
              fontStyle: "normal"
            }}>
              <span style={{ color: "#00b4d8", display: "flex", alignItems: "center", gap: "8px" }}>
                📍 Kumbakonam, Tamil Nadu
              </span>
              <a href="tel:+919751515626" style={{ color: "#00b4d8", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                📞 +91 97515 15626
              </a>
              <a href="mailto:vinothvkvk384@gmail.com" style={{ color: "#00b4d8", display: "flex", alignItems: "center", gap: "8px", textDecoration: "none" }}>
                ✉️ vinothvkvk384@gmail.com
              </a>
            </address>
            <a href="https://www.linkedin.com/in/vinoth-kumar-s-86a28918a/" target="_blank" rel="noopener noreferrer" style={{
              color: "#00b4d8",
              textDecoration: "none",
              border: "2px solid #00b4d8",
              padding: "12px 24px",
              borderRadius: "30px",
              fontSize: "1rem",
              fontWeight: "600",
              transition: "all 0.3s ease",
              display: "inline-block",
              marginTop: "10px"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#00b4d8";
              e.currentTarget.style.color = "#0f172a";
              e.currentTarget.style.transform = "translateY(-2px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = "#00b4d8";
              e.currentTarget.style.transform = "translateY(0)";
            }}>
              🔗 Connect on LinkedIn
            </a>
          </Card>

          {/* Stats Section */}
          <Card>
            <SectionTitle icon="📊" id="stats">Professional Stats</SectionTitle>
            <section aria-label="Professional Statistics">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "20px" }}>
                {stats.map((stat, i) => (
                  <article key={i} style={{
                    background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05))",
                    borderRadius: "16px",
                    padding: "24px",
                    textAlign: "center",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "scale(1.05)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 212, 255, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "scale(1)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                    <div style={{ fontSize: "2.5rem", marginBottom: "12px" }} aria-hidden="true">{stat.icon}</div>
                    <div style={{ fontSize: "2rem", fontWeight: "700", color: "#00d4ff", marginBottom: "8px" }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: "0.9rem", color: "#b0b0b0" }}>{stat.label}</div>
                  </article>
                ))}
              </div>
            </section>
          </Card>

      {/* Professional Summary */}
          <Card>
            <SectionTitle icon="💼" id="summary">Professional Summary</SectionTitle>
            <section aria-label="Professional Summary">
              <p style={{ 
                fontSize: "1.2rem", 
                color: "#e0e0e0", 
                textAlign: "justify",
                lineHeight: "1.8",
                background: "rgba(0, 212, 255, 0.05)",
                padding: "24px",
                borderRadius: "12px",
                border: "1px solid rgba(0, 212, 255, 0.1)",
                margin: 0
              }}>
                Certified DevOps Engineer with hands-on experience in AWS, CI/CD automation, and container orchestration. 
                Skilled in designing scalable cloud solutions, automating deployments, and managing infrastructure as code. 
                Completed MBA (HR), bringing strong leadership, collaboration, and problem-solving skills to technology-driven environments. 
                Immediate joiner with expertise in cloud, automation, and DevOps best practices.
              </p>
            </section>
          </Card>

          {/* Skills Grid */}
          <Card>
            <SectionTitle icon="🛠️" id="skills">Core Skills</SectionTitle>
            <section aria-label="Technical Skills">
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px" }}>
                {skills.map((skillGroup, i) => (
                  <article key={i} style={{
                    background: `linear-gradient(135deg, ${skillGroup.color}15, ${skillGroup.color}05)`,
                    borderRadius: "16px",
                    padding: "24px",
                    border: `1px solid ${skillGroup.color}30`,
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-5px)";
                    e.currentTarget.style.boxShadow = `0 10px 30px ${skillGroup.color}20`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                      <span style={{ fontSize: "1.5rem" }} aria-hidden="true">{skillGroup.icon}</span>
                      <h3 style={{ color: skillGroup.color, fontSize: "1.2rem", fontWeight: "600", margin: 0 }}>
                        {skillGroup.category}
                      </h3>
                    </div>
                    <div>
                      {skillGroup.items.map((skill, j) => (
                        <SkillBadge key={j} skill={skill} color={skillGroup.color} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            </section>
          </Card>

          {/* Experience & Projects Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))", gap: "28px", marginBottom: "28px" }}>

      {/* Professional Experience */}
            <Card>
              <SectionTitle icon="💼" id="experience">Professional Experience</SectionTitle>
              <section aria-label="Work Experience">
                <article style={{
                  background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05))",
                  borderRadius: "16px",
                  padding: "24px",
                  border: "1px solid rgba(0, 212, 255, 0.2)"
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                    <span style={{ fontSize: "1.5rem" }} aria-hidden="true">💼</span>
                    <div>
                      <h3 style={{ color: "#00d4ff", margin: "0 0 4px 0", fontSize: "1.2rem" }}>
                        DevOps Intern
                      </h3>
                      <p style={{ color: "#b0b0b0", margin: 0, fontSize: "1rem" }}>
                        Plattr Tech Studio, Madurai | Present
                      </p>
                    </div>
                  </div>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                    {[
                      "Build and maintained CI/CD pipelines to automate builds, testing, and deployments",
                      "Managed AWS cloud infrastructure ensuring uptime and scalability",
                      "Assisted in containerized deployments using Docker and Kubernetes",
                      "Applied infrastructure security best practices to cloud resources"
                    ].map((item, i) => (
                      <li key={i} style={{ 
                        marginBottom: "12px", 
                        color: "#e0e0e0", 
                        fontSize: "1rem",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: "8px"
                      }}>
                        <span style={{ color: "#00d4ff", marginTop: "4px" }} aria-hidden="true">▶</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              </section>
            </Card>

      {/* Projects */}
            <Card>
              <SectionTitle icon="🚀" id="projects">Featured Projects</SectionTitle>
              <section aria-label="Project Portfolio">
                <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  {projects.map((project, i) => (
                    <article key={i} style={{
                      background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05))",
                      borderRadius: "16px",
                      padding: "20px",
                      border: "1px solid rgba(0, 212, 255, 0.2)",
                      transition: "all 0.3s ease"
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "translateX(5px)";
                      e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 212, 255, 0.15)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "translateX(0)";
                      e.currentTarget.style.boxShadow = "none";
                    }}>
                      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                        <span style={{ fontSize: "1.5rem" }} aria-hidden="true">{project.icon}</span>
                        <div style={{ flex: 1 }}>
                          <h3 style={{ color: "#00d4ff", margin: "0 0 4px 0", fontSize: "1.1rem" }}>
                            {project.title}
                          </h3>
                          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                            <span style={{ 
                              color: "#b0b0b0", 
                              fontSize: "0.9rem",
                              background: "rgba(0, 212, 255, 0.1)",
                              padding: "4px 8px",
                              borderRadius: "12px"
                            }}>
                              {project.tech}
                            </span>
                            <span style={{ 
                              color: "#4ecdc4", 
                              fontSize: "0.8rem",
                              background: "rgba(78, 205, 196, 0.1)",
                              padding: "4px 8px",
                              borderRadius: "12px"
                            }}>
                              {project.status}
                            </span>
                          </div>
                        </div>
                      </div>
                      <p style={{ color: "#e0e0e0", fontSize: "0.95rem", margin: "0 0 12px 0", lineHeight: "1.6" }}>
                        {project.description}
                      </p>
                      <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                        {project.features.map((feature, j) => (
                          <span key={j} style={{
                            background: "rgba(0, 212, 255, 0.1)",
                            color: "#00d4ff",
                            padding: "4px 8px",
                            borderRadius: "8px",
                            fontSize: "0.8rem",
                            border: "1px solid rgba(0, 212, 255, 0.2)"
                          }}>
                            {feature}
                          </span>
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            </Card>
      </div>

          {/* Certifications & Education Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(600px, 1fr))", gap: "28px", marginBottom: "28px" }}>
            
            {/* Certifications */}
            <Card>
              <SectionTitle icon="📜" id="certifications">Certifications</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {certifications.map((cert, i) => (
                  <div key={i} style={{
                    background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05))",
                    borderRadius: "16px",
                    padding: "20px",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 212, 255, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                    <span style={{ fontSize: "2rem" }}>{cert.icon}</span>
                    <div style={{ flex: 1 }}>
                      <h3 style={{ color: "#00d4ff", margin: "0 0 4px 0", fontSize: "1.1rem" }}>
                        {cert.name}
                      </h3>
                      <p style={{ color: "#b0b0b0", margin: "0 0 4px 0", fontSize: "0.9rem" }}>
                        {cert.institution}
                      </p>
                      <span style={{ 
                        color: "#4ecdc4", 
                        fontSize: "0.8rem",
                        background: "rgba(78, 205, 196, 0.1)",
                        padding: "2px 8px",
                        borderRadius: "8px"
                      }}>
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

      {/* Education */}
            <Card>
              <SectionTitle icon="🎓" id="education">Education</SectionTitle>
              <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                {education.map((edu, i) => (
                  <div key={i} style={{
                    background: "linear-gradient(135deg, rgba(0, 212, 255, 0.1), rgba(0, 153, 204, 0.05))",
                    borderRadius: "16px",
                    padding: "20px",
                    border: "1px solid rgba(0, 212, 255, 0.2)",
                    transition: "all 0.3s ease"
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateX(5px)";
                    e.currentTarget.style.boxShadow = "0 8px 25px rgba(0, 212, 255, 0.15)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateX(0)";
                    e.currentTarget.style.boxShadow = "none";
                  }}>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "12px" }}>
                      <span style={{ fontSize: "1.5rem" }}>{edu.icon}</span>
                      <h3 style={{ color: "#00d4ff", margin: 0, fontSize: "1.1rem" }}>
                        {edu.degree}
                      </h3>
                    </div>
                    <p style={{ color: "#e0e0e0", margin: "0 0 8px 0", fontSize: "0.95rem" }}>
                      {edu.institution}
                    </p>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                      <span style={{ color: "#b0b0b0", fontSize: "0.9rem" }}>{edu.period}</span>
                      <span style={{ 
                        color: "#00d4ff", 
                        fontWeight: "600", 
                        fontSize: "0.9rem",
                        background: "rgba(0, 212, 255, 0.1)",
                        padding: "4px 12px",
                        borderRadius: "12px"
                      }}>
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
      </div>

      {/* Strengths & Availability */}
          <Card>
            <SectionTitle icon="💪" id="strengths">Strengths & Availability</SectionTitle>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "24px" }}>
              <div>
                <h3 style={{ color: "#00d4ff", marginBottom: "16px", fontSize: "1.2rem" }}>Key Strengths</h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {strengths.map((strength, i) => (
                    <div key={i} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "12px",
                      padding: "12px",
                      background: "rgba(0, 212, 255, 0.05)",
                      borderRadius: "12px",
                      border: "1px solid rgba(0, 212, 255, 0.1)"
                    }}>
                      <span style={{ fontSize: "1.2rem" }}>{strength.icon}</span>
                      <span style={{ color: "#e0e0e0", fontSize: "1rem" }}>{strength.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{
                background: "linear-gradient(135deg, rgba(0, 212, 255, 0.2), rgba(0, 153, 204, 0.1))",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid rgba(0, 212, 255, 0.3)",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center"
              }}>
                <div style={{ fontSize: "3rem", marginBottom: "16px" }}>🚀</div>
                <h3 style={{ color: "#00d4ff", marginBottom: "12px", fontSize: "1.3rem" }}>Availability</h3>
                <p style={{ color: "#e0e0e0", fontSize: "1.2rem", fontWeight: "600", margin: 0 }}>
                  Immediate Joiner
                </p>
                <p style={{ color: "#b0b0b0", fontSize: "0.9rem", margin: "8px 0 0 0" }}>
                  Ready to contribute from day one
                </p>
              </div>
      </div>
          </Card>

      {/* Footer */}
          <footer style={{
            textAlign: "center",
            marginTop: "50px",
            padding: "30px",
            color: "#b0b0b0",
            fontSize: "1rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.1)",
            background: "rgba(0, 0, 0, 0.2)",
            borderRadius: "16px"
          }}>
            <div style={{ marginBottom: "12px" }}>
              © {new Date().getFullYear()} Vinoth Kumar S | Built with 💙 React & Modern UI
            </div>
            <div style={{ fontSize: "0.9rem", color: "#888" }}>
              Optimized for performance • Responsive Design • Professional Portfolio
            </div>
      </footer>
    </div>
      </div>
    </>
  );
}

export default App;
