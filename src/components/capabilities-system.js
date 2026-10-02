"use client";

const caps = [
  {
    num: "01",
    title: "DIGITAL MARKETING",
    details: "Social Media · Content · Brand Communication · Campaigns · Paid Ads",
    summary: "Attracting brand attention through structured content, creative communication, and targeted campaigns.",
  },
  {
    num: "02",
    title: "SALES & GROWTH",
    details: "Lead Generation · Prospecting · Customer Follow-up",
    summary: "Turning inbound interest into structured conversations and commercial follow-through.",
  },
  {
    num: "03",
    title: "BRAND EXPERIENCES",
    details: "Event Coordination · Client/Vendor Coordination · On-ground Execution",
    summary: "Ensuring the digital promise made online holds up in physical client and event interactions.",
  },
  {
    num: "04",
    title: "PROJECT & OPERATIONS",
    details: "Project Coordination · Resource Management · Team Coordination · Workflows",
    summary: "Managing moving parts, people, deadlines, and operational progress behind delivery.",
  },
  {
    num: "05",
    title: "AI & AUTOMATION",
    details: "AI-assisted Workflows · Process Automation · Voice Agents · Agent Building · n8n",
    summary: "Integrating practical automation, voice agents, and AI tools to reduce repetitive manual work.",
  },
];

export function CapabilitiesSystem() {
  return (
    <div className="capabilities-editorial-system">
      <div className="cap-system-list">
        {caps.map((item) => (
          <article className="cap-system-row" key={item.title} tabIndex={0}>
            <div className="cap-row-index">
              <span className="cap-num-tag">{item.num}</span>
            </div>
            <div className="cap-row-main">
              <h3 className="cap-row-title">{item.title}</h3>
              <p className="cap-row-details">{item.details}</p>
            </div>
            <div className="cap-row-summary">
              <p>{item.summary}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
