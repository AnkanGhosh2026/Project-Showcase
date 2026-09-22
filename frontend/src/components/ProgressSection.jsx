import { Code2, Target, Calendar, Sparkles, BrainCircuit, Activity, Ticket, Leaf, BookOpen } from 'lucide-react';

const timelineData = [
  {
    period: "MAR",
    color: "#c084fc",
    glow: "rgba(192, 132, 252, 0.4)",
    items: [
      { title: "LLM Engineering Course", desc: "Deep-dive study", icon: <BrainCircuit size={20} /> }
    ]
  },
  {
    period: "APR – MAY",
    color: "#fcd34d",
    glow: "rgba(252, 211, 77, 0.4)",
    items: [
      { title: "VE Lead Generator", desc: "B2B lead generation dashboard", icon: <Target size={20} /> }
    ]
  },
  {
    period: "JUN",
    color: "#34d399",
    glow: "rgba(52, 211, 153, 0.4)",
    items: [
      { title: "VE Lead Generator", desc: "B2B lead generation dashboard", icon: <Target size={20} /> },
      { title: "Travel Content Agent", desc: "RSS → AI content → social posting", icon: <Activity size={20} /> }
    ]
  },
  {
    period: "JUL",
    color: "#22d3ee",
    glow: "rgba(34, 211, 238, 0.4)",
    items: [
      { title: "KosherStay", desc: "Full-stack hotel booking platform", icon: <Calendar size={20} /> },
      { title: "Stubline", desc: "Event ticketing and management platform", icon: <Ticket size={20} /> },
      { title: "AI Crop Disease Detection", desc: "Computer vision for agricultural health", icon: <Leaf size={20} /> },
      { title: "EduBridge Overseas — Website", desc: "Modern website helping Indian students apply to US colleges.", icon: <BookOpen size={20} /> },
      { title: "Presales AI Agent", desc: "In-house client & developer matching", icon: <Sparkles size={20} /> }
    ]
  },
  {
    period: "AUG →",
    color: "#f43f5e",
    glow: "rgba(244, 63, 94, 0.4)",
    items: [
      { title: "Presales AI Agent", desc: "In-house client & developer matching", icon: <Sparkles size={20} /> }
    ]
  }
];

const ProgressSection = () => {
  return (
    <section className="progress-section" id="progress">
      <div className="container">
        <div className="section-header" style={{ marginBottom: '60px' }}>
          <p className="section-label">Monthly Progress</p>
          <h2 className="section-title">The <span className="gradient-text">Journey</span></h2>
          <p className="section-subtitle">A timeline of constant shipping and learning.</p>
        </div>

        <div className="timeline-wrapper">
          <div className="timeline-animated-line"></div>
          
          <div className="timeline-year-badge">2026</div>

          <div className="timeline-layout">
            {timelineData.map((block, i) => (
              <div className="timeline-row" key={i}>
                
                {/* Left: The glowing month node */}
                <div className="timeline-node-container">
                  <div 
                    className="timeline-node"
                    style={{ 
                      '--node-color': block.color,
                      '--node-glow': block.glow 
                    }}
                  >
                    <span>{block.period}</span>
                  </div>
                </div>

                {/* Right: The Cards */}
                <div className="timeline-cards-container">
                  {block.items.map((item, j) => (
                    <div 
                      className="timeline-glass-card" 
                      key={j}
                      style={{ '--card-accent': block.color }}
                    >
                      <div className="card-icon-wrapper" style={{ color: block.color }}>
                        {item.icon}
                      </div>
                      <div className="card-content-wrapper">
                        <h3 className="card-title">{item.title}</h3>
                        <p className="card-desc">{item.desc}</p>
                      </div>
                      <div className="card-glow-bg" style={{ background: block.color }}></div>
                    </div>
                  ))}
                </div>

              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgressSection;
