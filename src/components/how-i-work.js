"use client";

const principles = [
  {
    step: "01",
    title: "UNDERSTAND THE BRIEF.",
    copy: "Get clear on what needs to happen and why.",
    keyword: "ALIGNMENT",
  },
  {
    step: "02",
    title: "FIND THE MOVING PARTS.",
    copy: "People, communication, content, timelines, resources, systems.",
    keyword: "ASSEMBLY",
  },
  {
    step: "03",
    title: "MAKE THE WORK MOVE.",
    copy: "Coordinate the pieces and keep execution connected to the outcome.",
    keyword: "EXECUTION",
  },
  {
    step: "04",
    title: "LOOK FOR THE SMARTER WAY.",
    copy: "Use tools, automation and AI where they genuinely improve the process.",
    keyword: "SYSTEMS",
  },
];

export function HowIWork() {
  return (
    <div className="how-i-work-progression">
      <div className="process-track">
        {principles.map((item, idx) => (
          <article className="process-stage-card" key={item.step}>
            <div className="stage-top">
              <span className="stage-num">{item.step}</span>
              <span className="stage-keyword">{item.keyword}</span>
            </div>
            <h3 className="stage-title">{item.title}</h3>
            <p className="stage-copy">{item.copy}</p>
            {idx < principles.length - 1 && (
              <div className="stage-connector" aria-hidden="true">
                <span className="connector-line" />
                <span className="connector-arrow">→</span>
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
