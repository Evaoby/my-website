"use client";
import { useState } from "react";
import Image from "next/image";

export function PortraitPlaceholder() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="portrait-slot" aria-label="Editorial portrait placeholder slot">
      {!imageError ? (
        <Image
          src="/images/evangeline.jpg"
          alt="Evangeline Okeke"
          fill
          sizes="(max-width: 760px) 100vw, 42vw"
          onError={() => setImageError(true)}
          priority
        />
      ) : null}
      <div className="portrait-placeholder-overlay">
        <div className="portrait-placeholder-content">
          <span className="portrait-tag">EDITORIAL PORTRAIT</span>
          <p className="portrait-note">Reserved for authentic photography</p>
        </div>
      </div>
    </div>
  );
}
