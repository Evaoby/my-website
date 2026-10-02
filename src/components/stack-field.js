"use client";

// 28 Tools mapped onto a shallow 3D spherical coordinate field (x, y, z)
// Coordinates (x, y, z) are optimized for clean spatial separation across 5 latitudinal bands
const sphereTools = [
  // Band 1: Top Arc (5 tools, Y ≈ -185)
  { id: "g-workspace", name: "Google Workspace", x: -380, y: -175, z: 70, type: "workspace" },
  { id: "chatgpt", name: "ChatGPT", x: -190, y: -185, z: 140, type: "chatgpt" },
  { id: "youtube", name: "YouTube", x: 0, y: -195, z: 180, type: "youtube" },
  { id: "n8n", name: "n8n", x: 190, y: -185, z: 140, type: "n8n" },
  { id: "linkedin", name: "LinkedIn", x: 380, y: -175, z: 70, type: "linkedin" },

  // Band 2: Upper Middle Arc (6 tools, Y ≈ -95)
  { id: "meta", name: "Meta", x: -440, y: -90, z: 60, type: "meta" },
  { id: "hubspot", name: "HubSpot", x: -265, y: -95, z: 170, type: "hubspot" },
  { id: "antigravity", name: "Antigravity", x: -88, y: -100, z: 220, type: "antigravity" },
  { id: "claude-code", name: "Claude Code", x: 88, y: -100, z: 220, type: "claude-code" },
  { id: "tiktok", name: "TikTok", x: 265, y: -95, z: 170, type: "tiktok" },
  { id: "g-docs", name: "Google Docs", x: 440, y: -90, z: 60, type: "gdocs" },

  // Band 3: Equator / Center Arc (6 tools, Y = 0)
  { id: "canva", name: "Canva", x: -460, y: 0, z: 50, type: "canva" },
  { id: "meta-suite", name: "Meta Business Suite", x: -275, y: 0, z: 190, type: "meta-suite" },
  { id: "codex", name: "OpenAI Codex", x: -90, y: 0, z: 240, type: "codex" },
  { id: "slack", name: "Slack", x: 90, y: 0, z: 240, type: "slack" },
  { id: "meta-ads", name: "Meta Ads Manager", x: 275, y: 0, z: 190, type: "meta-ads" },
  { id: "g-sheets", name: "Google Sheets", x: 460, y: 0, z: 50, type: "gsheets" },

  // Band 4: Lower Middle Arc (6 tools, Y ≈ 95)
  { id: "capcut", name: "CapCut", x: -440, y: 90, z: 70, type: "capcut" },
  { id: "elevenlabs", name: "ElevenLabs", x: -265, y: 95, z: 170, type: "elevenlabs" },
  { id: "sprout-social", name: "Sprout Social", x: -88, y: 100, z: 210, type: "sprout-social" },
  { id: "adobe", name: "Adobe", x: 88, y: 100, z: 210, type: "adobe" },
  { id: "ln-sales", name: "LinkedIn Sales Navigator", x: 265, y: 95, z: 170, type: "ln-sales" },
  { id: "tiktok-ads", name: "TikTok Ads", x: 440, y: 90, z: 70, type: "tiktok-ads" },

  // Band 5: Bottom Arc (5 tools, Y ≈ 185)
  { id: "g-drive", name: "Google Drive", x: -380, y: 175, z: 80, type: "gdrive" },
  { id: "asana", name: "Asana", x: -190, y: 185, z: 150, type: "asana" },
  { id: "meta-lib", name: "Meta Ads Library", x: 0, y: 195, z: 180, type: "meta-lib" },
  { id: "ln-campaign", name: "LinkedIn Campaign Manager", x: 190, y: 185, z: 150, type: "ln-campaign" },
  { id: "g-forms", name: "Google Forms", x: 380, y: 175, z: 80, type: "gforms" },
];

function ToolLogoMark({ type }) {
  switch (type) {
    case "meta":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg meta" aria-hidden="true">
          <path fill="currentColor" d="M16.7 5c-1.9 0-3.4.9-4.7 2.6C10.7 5.9 9.2 5 7.3 5 4.1 5 2 7.6 2 11c0 3.8 2.5 7 5.7 7 2.1 0 3.7-1 4.9-2.8 1.2 1.8 2.8 2.8 4.9 2.8 3.2 0 5.7-3.2 5.7-7 0-3.4-2.1-6-5.4-6zm-9.4 11c-2.1 0-3.6-2.1-3.6-5s1.5-5 3.6-5c1.6 0 2.8.8 3.8 2.4-1.2 2.3-2.6 4.9-3.8 7.6zm9.4 0c-1.2-2.7-2.6-5.3-3.8-7.6 1-1.6 2.2-2.4 3.8-2.4 2.1 0 3.6 2.1 3.6 5s-1.5 5-3.6 5z" />
        </svg>
      );
    case "meta-suite":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg meta-suite" aria-hidden="true">
          <path fill="currentColor" d="M16.7 4c-1.9 0-3.4.9-4.7 2.6C10.7 4.9 9.2 4 7.3 4 4.1 4 2 6.6 2 10c0 3.8 2.5 7 5.7 7 2.1 0 3.7-1 4.9-2.8 1.2 1.8 2.8 2.8 4.9 2.8 3.2 0 5.7-3.2 5.7-7 0-3.4-2.1-6-5.4-6z" />
          <path fill="currentColor" opacity="0.75" d="M19 18h-4v2h4v-2zm-6 0H9v2h4v-2z" />
        </svg>
      );
    case "meta-ads":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg meta-ads" aria-hidden="true">
          <path fill="currentColor" d="M16.7 4c-1.9 0-3.4.9-4.7 2.6C10.7 4.9 9.2 4 7.3 4 4.1 4 2 6.6 2 10c0 3.8 2.5 7 5.7 7 2.1 0 3.7-1 4.9-2.8 1.2 1.8 2.8 2.8 4.9 2.8 3.2 0 5.7-3.2 5.7-7 0-3.4-2.1-6-5.4-6z" />
          <circle cx="18" cy="17" r="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
        </svg>
      );
    case "meta-lib":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg meta-lib" aria-hidden="true">
          <path fill="currentColor" d="M4 6h16v2H4zm2 4h12v2H6zm-2 4h16v2H4zm2 4h12v2H6z" />
        </svg>
      );
    case "tiktok":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg tiktok" aria-hidden="true">
          <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74 2.89 2.89 0 0 1 2.31-1.18v-3.5a6.37 6.37 0 0 0-3.46 1 6.34 6.34 0 0 0-2.89 5.2 6.35 6.35 0 0 0 6.35 6.35 6.34 6.34 0 0 0 6.35-6.35V9.4a8.28 8.28 0 0 0 4.76 1.49V7.44a4.8 4.8 0 0 1-1.05-.75z" />
        </svg>
      );
    case "tiktok-ads":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg tiktok-ads" aria-hidden="true">
          <path fill="currentColor" d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-5.2-1.74v-3.5a6.35 6.35 0 1 0 8.65 6.35V9.4a8.28 8.28 0 0 0 4.76 1.49V7.44z" />
          <path fill="currentColor" opacity="0.6" d="M3 3h4v2H3zm0 4h3v2H3z" />
        </svg>
      );
    case "linkedin":
    case "ln-campaign":
    case "ln-sales":
      return (
        <svg viewBox="0 0 24 24" className={`logo-svg ${type}`} aria-hidden="true">
          <path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
        </svg>
      );
    case "hubspot":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg hubspot" aria-hidden="true">
          <path fill="currentColor" d="M18.4 8.5a2.7 2.7 0 0 0-1.9.8l-3.3-2.5v-2a2 2 0 1 0-1.5 0v2L8.4 9.3a2.7 2.7 0 1 0 .9 1.2l3.3-2.5v4.5a3.5 3.5 0 1 0 1.5 0V8a2.7 2.7 0 0 0 4.3.5z" />
        </svg>
      );
    case "capcut":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg capcut" aria-hidden="true">
          <path fill="currentColor" d="M4 6l8 6-8 6V6zm16 0l-8 6 8 6V6z" />
        </svg>
      );
    case "canva":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg canva" aria-hidden="true">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" />
        </svg>
      );
    case "chatgpt":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg chatgpt" aria-hidden="true">
          <path fill="currentColor" d="M22.28 9.82a5.98 5.98 0 0 0-.52-4.91 6 6 0 0 0-6.57-2.9 6 6 0 0 0-4.7-2.15 6 6 0 0 0-5.74 4.14 6 6 0 0 0-4.14 2.86 6 6 0 0 0 .64 6.94 5.98 5.98 0 0 0 .52 4.91 6 6 0 0 0 6.57 2.9 6 6 0 0 0 4.7 2.15 6 6 0 0 0 5.74-4.14 6 6 0 0 0 4.14-2.86 6 6 0 0 0-.66-6.94zM12 18a6 6 0 1 1 0-12 6 6 0 0 1 0 12z" />
        </svg>
      );
    case "n8n":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg n8n" aria-hidden="true">
          <circle cx="6" cy="12" r="3" fill="currentColor" />
          <circle cx="18" cy="6" r="3" fill="currentColor" />
          <circle cx="18" cy="18" r="3" fill="currentColor" />
          <path stroke="currentColor" strokeWidth="2" d="M6 12h6l6-6M12 12l6 6" />
        </svg>
      );
    case "elevenlabs":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg elevenlabs" aria-hidden="true">
          <rect x="7" y="4" width="3.5" height="16" rx="1.75" fill="currentColor" />
          <rect x="13.5" y="4" width="3.5" height="16" rx="1.75" fill="currentColor" />
        </svg>
      );
    case "codex":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg codex" aria-hidden="true">
          <path fill="currentColor" d="M8.5 5H4v14h4.5v-2H6V7h2.5V5zm7 0H20v14h-4.5v-2H18V7h-2.5V5zM10 9.5l2 2.5-2 2.5h2l2-2.5-2-2.5h-2z" />
        </svg>
      );
    case "antigravity":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg antigravity" aria-hidden="true">
          <circle cx="12" cy="12" r="4" fill="currentColor" />
          <ellipse cx="12" cy="12" rx="9" ry="3.5" fill="none" stroke="currentColor" strokeWidth="1.5" transform="rotate(-25 12 12)" />
        </svg>
      );
    case "workspace":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg workspace" aria-hidden="true">
          <path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z" />
        </svg>
      );
    case "gdocs":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg gdocs" aria-hidden="true">
          <path fill="currentColor" d="M14 2H6c-1.1 0-1.99.9-1.99 2L4 20c0 1.1.89 2 1.99 2H18c1.1 0 2-.9 2-2V8l-6-6zm2 16H8v-2h8v2zm0-4H8v-2h8v2zm-3-5V3.5L18.5 9H13z" />
        </svg>
      );
    case "gsheets":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg gsheets" aria-hidden="true">
          <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10h-4v4h-2v-4H7v-2h4V7h2v4h4v2z" />
        </svg>
      );
    case "gdrive":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg gdrive" aria-hidden="true">
          <path fill="currentColor" d="M7.71 3.5L1.15 15l3.43 6 6.55-11.5zM9.73 15L6.3 21h13.12l3.43-6zm5.12-11.5l-6.55 11.5h6.86l6.56-11.5z" />
        </svg>
      );
    case "gforms":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg gforms" aria-hidden="true">
          <path fill="currentColor" d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-4 12H9v-2h6v2zm2-4H7V9h10v2z" />
        </svg>
      );
    case "youtube":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg youtube" aria-hidden="true">
          <path fill="currentColor" d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      );
    case "sprout-social":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg sprout-social" aria-hidden="true">
          <path fill="currentColor" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14.5h-2v-4H9v-2h2V8.5c0-1.38 1.12-2.5 2.5-2.5H15v2h-1.5c-.28 0-.5.22-.5.5v2h2l-.5 2H13v4z" />
        </svg>
      );
    case "adobe":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg adobe" aria-hidden="true">
          <path fill="currentColor" d="M13.966 22h7.984V2L13.966 22zM.05 2v20h7.983L.05 2zm9.444 8.784L13.722 22h-3.41l-1.428-3.793H5.748l3.746-9.423z" />
        </svg>
      );
    case "slack":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg slack" aria-hidden="true">
          <path fill="currentColor" d="M6 15a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5zm0 1.5A2.5 2.5 0 1 1 3.5 14H6v2.5zm3.5-7.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0zm-1.5 0A2.5 2.5 0 1 1 10 3.5V6H8zm7.5 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm0-1.5a2.5 2.5 0 1 1 2.5 2.5H16V8zm-3.5 7.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0zm1.5 0a2.5 2.5 0 1 1-2.5 2.5V16h2.5z" />
        </svg>
      );
    case "asana":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg asana" aria-hidden="true">
          <circle cx="12" cy="7" r="3.5" fill="currentColor" />
          <circle cx="6" cy="16.5" r="3.5" fill="currentColor" />
          <circle cx="18" cy="16.5" r="3.5" fill="currentColor" />
        </svg>
      );
    case "claude-code":
      return (
        <svg viewBox="0 0 24 24" className="logo-svg claude-code" aria-hidden="true">
          <path fill="currentColor" d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 24 24" className="logo-svg" aria-hidden="true">
          <circle cx="12" cy="12" r="8" fill="currentColor" />
        </svg>
      );
  }
}

export function StackField() {
  return (
    <div className="spherical-stack-section">
      {/* Spherical Orbital 3D Logo Field */}
      <div className="spherical-field-stage">
        <div className="spherical-orbit-container">
          {sphereTools.map((tool) => {
            // Compute 3D perspective scale & opacity based on z-depth
            // z range: 40px (sides/back) to 240px (center front)
            const zNorm = (tool.z - 40) / 200; // 0.0 to 1.0
            const depthScale = 0.72 + zNorm * 0.45; // 0.72 to 1.17
            const depthOpacity = 0.55 + zNorm * 0.42; // 0.55 to 0.97

            return (
              <div
                key={tool.id}
                className="spherical-logo-node"
                style={{
                  transform: `translate3d(${tool.x}px, ${tool.y}px, ${tool.z}px) scale(${depthScale})`,
                  opacity: depthOpacity,
                }}
                tabIndex={0}
                aria-label={tool.name}
              >
                <div className="node-logo-wrapper">
                  <ToolLogoMark type={tool.type} />
                </div>
                <span className="node-tool-label">{tool.name}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
