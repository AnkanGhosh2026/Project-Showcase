const PROCESS_STEPS = [
  {
    number: "01",
    title: "Understand the Problem",
    description: "Every great product starts with understanding the real pain. I dig deep into the business context, user needs, and constraints before writing a single line of code.",
    emoji: "🔍",
  },
  {
    number: "02",
    title: "Design the Architecture",
    description: "Whether it's an AI pipeline, REST API, or full-stack app — I plan the architecture for scalability, maintainability, and speed. No over-engineering, no shortcuts.",
    emoji: "📐",
  },
  {
    number: "03",
    title: "Build & Iterate Fast",
    description: "I move fast. Prototypes become real features quickly, and feedback loops are tight. Every commit brings the product closer to something people actually want to use.",
    emoji: "⚡",
  },
  {
    number: "04",
    title: "Deploy & Monitor",
    description: "Shipping is non-negotiable. I deploy early, monitor actively, and iterate on real usage data — not assumptions.",
    emoji: "🚀",
  },
];

const ProcessSection = () => {
  return (
    <section className="process-section" id="process">
      <div className="container">
        <div className="section-header">
          <p className="section-label">How I Work</p>
          <h2 className="section-title">My <span className="gradient-text">Process</span></h2>
          <p className="section-subtitle">
            A repeatable approach that takes ideas from zero to production with speed and precision.
          </p>
        </div>

        <div className="process-steps">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.number} className="process-step">
              <div className="process-step-left">
                <div className="process-number">{step.number}</div>
                {idx < PROCESS_STEPS.length - 1 && <div className="process-line" />}
              </div>
              <div className="process-step-content">
                <div className="process-emoji">{step.emoji}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-desc">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
