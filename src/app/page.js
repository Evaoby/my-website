import { TopFabricBanner } from "@/components/top-fabric-banner";
import { Navigation } from "@/components/navigation";
import { SectionHeading } from "@/components/section-heading";
import { ContactForm } from "@/components/contact-form";
import { EditorialPortrait } from "@/components/editorial-portrait";
import { CapabilitiesSystem } from "@/components/capabilities-system";
import { ExperienceEditorial } from "@/components/experience-editorial";
import { HowIWork } from "@/components/how-i-work";
import { StackField } from "@/components/stack-field";
import { CurrentlyExploring } from "@/components/currently-exploring";
import Image from "next/image";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <div className="top-banner-wrapper">
        <TopFabricBanner />
        <Navigation />
        <div className="top-banner-spacer" />
      </div>
      <main>
        {/* HERO SECTION */}
        <section className="hero" id="top">
          <div className="hero-copy">
            <div className="hero-kicker">
              <span className="kicker-dot" />
              <span>PORTFOLIO & OPERATING SYSTEM</span>
            </div>
            <h1 className="hero-heading">
              BE SEEN.<br />
              THEN BE CHOSEN.
            </h1>
            <p className="hero-lead">
              I work across the journey from getting people to notice a brand to helping move the work behind it - across digital marketing, sales, brand experiences and execution.
            </p>
            <div className="identity">
              <strong>Evangeline Okeke</strong>
              <span>Digital Marketing · Brand Experiences · Coordination · AI</span>
            </div>
            <div className="journey-ribbon" aria-label="Core operational thread">
              <span>ATTENTION</span>
              <span className="arrow">→</span>
              <span>COMMUNICATION</span>
              <span className="arrow">→</span>
              <span>COORDINATION</span>
              <span className="arrow">→</span>
              <span>EXECUTION</span>
              <span className="arrow">→</span>
              <span>SMARTER SYSTEMS</span>
            </div>
          </div>

          <div className="hero-visual-panel">
            <div className="hero-art-container" style={{ position: "relative" }}>
              <Image
                src="/images/hero-conceptual.png"
                alt="Art-directed conceptual visual"
                fill
                sizes="(max-width: 800px) 100vw, 45vw"
                className="hero-art-img"
                priority
              />
              <div className="hero-art-overlay">
                <span className="hero-watermark">EO</span>
                <div className="art-tag">
                  <span>CONCEPTUAL ART DIRECTION</span>
                  <small>BRAND & OPERATIONAL SYSTEMS</small>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section className="about chapter" id="about">
          <div className="about-grid">
            <EditorialPortrait />
            <div className="about-content">
              <SectionHeading title="I KNOW HOW TO MOVE THE WORK." />
              <div className="about-lead-callout">
                <p>
                  Connecting brand communication with the people, processes and commercial outcomes behind it.
                </p>
              </div>
              <div className="prose">
                <p>
                  My work has taken me through digital marketing, sales, events, operations, production and administration. Different roles, but a similar job underneath: understanding what needs to happen, figuring out what needs to move, and helping get it there.
                </p>
                <p>
                  Today, I work across digital marketing, brand experiences and execution - helping connect communication with the people, processes and outcomes behind it.
                </p>
              </div>
              <div className="about-disciplines">
                <span>DIGITAL MARKETING</span>
                <span>BRAND EXPERIENCES</span>
                <span>COORDINATION</span>
                <span>AI & AUTOMATION</span>
              </div>
            </div>
          </div>
        </section>

        {/* CAPABILITIES SECTION */}
        <section className="capabilities chapter" id="capabilities">
          <SectionHeading title="WHAT I CAN HELP WITH" />
          <CapabilitiesSystem />
        </section>

        {/* EXPERIENCE SECTION */}
        <section className="experience chapter" id="experience">
          <SectionHeading title="EXPERIENCE" />
          <ExperienceEditorial />
        </section>

        {/* HOW I WORK SECTION */}
        <section className="how chapter" id="how">
          <SectionHeading title="HOW I WORK" />
          <HowIWork />
        </section>

        {/* STACK SECTION */}
        <section className="stack chapter" id="stack">
          <SectionHeading title="THE STACK" />
          <p className="stack-subtitle">The quiet infrastructure behind the work.</p>
          <StackField />
        </section>

        {/* CURRENTLY EXPLORING SECTION */}
        <section className="exploring" id="exploring">
          <div className="chapter">
            <CurrentlyExploring />
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section className="contact chapter" id="contact">
          <SectionHeading title="LET'S WORK TOGETHER." />
          <div className="contact-grid">
            <div className="contact-info">
              <p className="contact-lead-statement">
                Have a project, opportunity, collaboration or idea worth talking through?
              </p>
              <p className="contact-sub-statement">
                Let&apos;s start a conversation.
              </p>

              <div className="contact-direct-details">
                <div className="contact-detail-row">
                  <span className="contact-label">EMAIL</span>
                  <a href="mailto:okekevale18@gmail.com" className="contact-link">
                    okekevale18@gmail.com
                  </a>
                </div>

                <div className="contact-detail-row">
                  <span className="contact-label">PHONE</span>
                  <a href="tel:08158123011" className="contact-link">
                    08158123011
                  </a>
                </div>
              </div>
            </div>

            <ContactForm />
          </div>
        </section>
      </main>

      {/* FOOTER SECTION */}
      <footer className="site-footer">
        <div className="footer-col brand">
          <strong>Evangeline Okeke</strong>
        </div>
        <div className="footer-col disciplines">
          <span>Digital Marketing · Brand Experiences · Coordination · AI</span>
        </div>
        <div className="footer-col contact">
          <a href="mailto:okekevale18@gmail.com">okekevale18@gmail.com</a>
        </div>
        <div className="footer-col copy">
          <span>© {currentYear} Evangeline Okeke</span>
        </div>
      </footer>
    </>
  );
}
