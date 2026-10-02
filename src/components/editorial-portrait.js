"use client";
import { useState } from "react";
import Image from "next/image";

export function EditorialPortrait() {
  const [hasLoaded, setHasLoaded] = useState(false);

  return (
    <div className="editorial-portrait-wrapper">
      <div className="portrait-frame" style={{ position: "relative" }}>
        <Image
          src="/images/evangeline.jpg"
          alt="Evangeline Okeke - Digital Marketing, Brand Experiences & Execution"
          fill
          sizes="(max-width: 800px) 100vw, 45vw"
          className={`portrait-img ${hasLoaded ? "is-loaded" : ""}`}
          onLoad={() => setHasLoaded(true)}
          priority
        />
        <div className="portrait-frame-border" aria-hidden="true" />
        <div className="portrait-caption-tag">
          <span className="caption-label">EVANGELINE OKEKE</span>
          <span className="caption-sub">PORTRAIT / 2026</span>
        </div>
      </div>
    </div>
  );
}
