"use client";

const experienceData = [
  {
    organization: "AMORE GARDENS",
    role: "Digital Marketing · Sales · Event Coordination",
    date: "August 2025 – Present",
    isCurrent: true,
    context: "Working across the digital and physical sides of an event destination — attracting attention online, generating leads, supporting sales conversations and helping coordinate the experience on-ground.",
  },
  {
    organization: "DREAMS MEDIA / L-O-M-T",
    role: "Digital Marketing Intern",
    date: "April 2025 – December 2025",
    isCurrent: false,
    context: "Campaign and creative planning, content, execution and resource coordination for a business-focused educational platform.",
  },
  {
    organization: "ONDO STATE COLLEGE OF HEALTH TECHNOLOGY",
    role: "Teaching & Administrative Support",
    date: "April 2024 – March 2025",
    isCurrent: false,
    context: "Teaching alongside student onboarding/registration, examination information, communication and administrative coordination.",
  },
  {
    organization: "KITU WHITE FASHION HOUSE",
    role: "Operations & Production Coordination",
    date: "September 2020 – February 2022",
    isCurrent: false,
    context: "Coordinated approximately seven workers while managing production, materials, vendor/client coordination and delivery timelines.",
  },
];

export function ExperienceEditorial() {
  return (
    <div className="experience-editorial-container">
      <div className="experience-stream">
        {experienceData.map((item) => (
          <article
            className={`exp-editorial-card ${item.isCurrent ? "is-current-role" : ""}`}
            key={item.organization}
          >
            <div className="exp-time-col">
              <time className="exp-date">{item.date}</time>
              {item.isCurrent && <span className="current-badge">ONGOING</span>}
            </div>

            <div className="exp-main-col">
              <h3 className="exp-org-heading">{item.organization}</h3>
              <p className="exp-role-title">{item.role}</p>
              <p className="exp-context-copy">{item.context}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
