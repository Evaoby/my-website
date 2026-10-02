"use client";

const explorationAreas = [
  "n8n workflow automation",
  "AI-assisted workflows",
  "Voice tools",
  "Agent building",
  "Process automation",
  "Connecting business systems",
  "Exploring ways to reduce repetitive operational work",
];

const nodes = [
  { step: "01", label: "TRIGGER", detail: "Inbound Events & Webhooks" },
  { step: "02", label: "N8N WORKFLOW", detail: "Data Mapping & Process Routing" },
  { step: "03", label: "VOICE / AGENTS", detail: "LLM Reasoning & Agent Logic" },
  { step: "04", label: "OUTPUT", detail: "Automated Notifications & CRM Updates" },
];

export function CurrentlyExploring() {
  return (
    <div className="exploring-editorial-container">
      <div className="exploring-header">
        <span className="exploring-kicker">ACTIVE EXPERIMENTATION</span>
        <h2 className="exploring-title">HOW CAN THE WORK GET SMARTER?</h2>
        <p className="exploring-lead">
          I&apos;m exploring how AI and automation can reduce repetitive work, connect business processes and make execution more intelligent.
        </p>
      </div>

      <div className="exploring-areas-tags">
        {explorationAreas.map((area) => (
          <span key={area} className="exploring-tag">
            {area}
          </span>
        ))}
      </div>

      <div className="exploring-schematic">
        <div className="schematic-meta">
          <span>CONCEPTUAL SYSTEM ARCHITECTURE</span>
          <span>LEARNING & TESTING</span>
        </div>

        <div className="schematic-nodes-grid">
          {nodes.map((node, i) => (
            <div key={node.label} className="schematic-node-card">
              <span className="node-step">{node.step}</span>
              <h3 className="node-title">{node.label}</h3>
              <p className="node-detail">{node.detail}</p>
              {i < nodes.length - 1 && (
                <span className="node-connector-arrow" aria-hidden="true">
                  →
                </span>
              )}
            </div>
          ))}
        </div>

        <div className="schematic-pathway-bar" aria-hidden="true">
          <span className="pathway-line" />
          <span className="pathway-glow" />
        </div>
      </div>
    </div>
  );
}
