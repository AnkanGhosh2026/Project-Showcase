const SKILLS = [
  {
    category: "AI & LLMs",
    emoji: "🧠",
    color: "#818cf8",
    items: ["OpenAI GPT-4", "LangChain", "LlamaIndex", "Prompt Engineering", "RAG Pipelines", "Fine-tuning"],
  },
  {
    category: "Computer Vision",
    emoji: "👁️",
    color: "#22c55e",
    items: ["PyTorch", "TensorFlow", "OpenCV", "YOLO", "Image Classification", "Object Detection"],
  },
  {
    category: "Backend",
    emoji: "⚙️",
    color: "#f59e0b",
    items: ["FastAPI", "Python", "REST APIs", "WebSockets", "PostgreSQL", "Redis"],
  },
  {
    category: "Frontend",
    emoji: "🎨",
    color: "#0ea5e9",
    items: ["React", "Vite", "JavaScript (ES6+)", "HTML5 / CSS3", "Responsive Design", "Animations"],
  },
  {
    category: "DevOps & Cloud",
    emoji: "☁️",
    color: "#a855f7",
    items: ["Render", "Vercel", "Docker", "GitHub Actions", "Linux / CLI", "Environment Management"],
  },
  {
    category: "Automation",
    emoji: "🔄",
    color: "#ec4899",
    items: ["n8n", "Web Scraping", "Selenium", "API Integrations", "Workflow Agents", "Scheduled Jobs"],
  },
];

const SkillsSection = () => {
  const hexToRgba = (hex, alpha) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  };

  return (
    <section className="skills-section" id="skills">
      <div className="container">
        <div className="section-header">
          <p className="section-label">Tech Stack</p>
          <h2 className="section-title">Tools &amp; <span className="gradient-text">Technologies</span></h2>
          <p className="section-subtitle">
            A curated set of technologies I use to go from idea to production.
          </p>
        </div>

        <div className="skills-grid">
          {SKILLS.map((skill) => (
            <div
              key={skill.category}
              className="skill-card"
              style={{
                '--skill-color': skill.color,
                '--skill-bg': hexToRgba(skill.color, 0.08),
                '--skill-border': hexToRgba(skill.color, 0.2),
              }}
            >
              <div className="skill-card-header">
                <span className="skill-emoji">{skill.emoji}</span>
                <h3 className="skill-category">{skill.category}</h3>
              </div>
              <div className="skill-tags">
                {skill.items.map((item) => (
                  <span key={item} className="skill-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
