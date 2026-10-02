"use client";
import { useEffect, useState } from "react";

const items = [
  ["About", "about"],
  ["Capabilities", "capabilities"],
  ["Experience", "experience"],
  ["How I Work", "how"],
  ["Stack", "stack"],
  ["Exploring", "exploring"],
  ["Contact", "contact"],
];

export function Navigation() {
  const [active, setActive] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (entry) => entry.isIntersecting && setActive(entry.target.id)
        ),
      { rootMargin: "-30% 0px -50%" }
    );
    items.forEach(
      ([, id]) =>
        document.getElementById(id) &&
        observer.observe(document.getElementById(id))
    );
    return () => observer.disconnect();
  }, []);

  // Keyboard listener to close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  return (
    <header className="site-header">
      <a className="wordmark" href="#top" aria-label="Evangeline Okeke home">
        EO
      </a>

      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="primary-nav"
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        <span className={`menu-burger ${isOpen ? "is-active" : ""}`} aria-hidden="true">
          <span />
          <span />
        </span>
        <span className="menu-label">{isOpen ? "CLOSE" : "MENU"}</span>
      </button>

      <nav
        id="primary-nav"
        className={`nav-menu ${isOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        {items.map(([label, id]) => (
          <a
            key={id}
            className={active === id ? "active" : ""}
            href={`#${id}`}
            onClick={handleLinkClick}
          >
            {label}
          </a>
        ))}
        <a className="talk mobile-talk" href="#contact" onClick={handleLinkClick}>
          LET&apos;S TALK ↗
        </a>
      </nav>

      <a className="talk desktop-talk" href="#contact">
        LET&apos;S TALK ↗
      </a>
    </header>
  );
}
