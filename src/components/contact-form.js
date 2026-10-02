"use client";
import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form className="contact-editorial-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="form-name">NAME</label>
        <input
          id="form-name"
          name="name"
          type="text"
          placeholder="Your name"
          autoComplete="name"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="form-email">EMAIL</label>
        <input
          id="form-email"
          name="email"
          type="email"
          placeholder="your@email.com"
          autoComplete="email"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="form-topic">WHAT ARE YOU WORKING ON?</label>
        <select id="form-topic" name="topic" required defaultValue="">
          <option value="" disabled>
            Select an option
          </option>
          <option value="Project">Project</option>
          <option value="Job / Opportunity">Job / Opportunity</option>
          <option value="Collaboration">Collaboration</option>
          <option value="Event / Brand Experience">Event / Brand Experience</option>
          <option value="Something else">Something else</option>
        </select>
      </div>

      <div className="form-field">
        <label htmlFor="form-message">MESSAGE</label>
        <textarea
          id="form-message"
          name="message"
          rows={4}
          placeholder="Tell me a little about what you're working on..."
          required
        />
      </div>

      {submitted ? (
        <div className="form-ack-notice" role="status">
          <p>
            <strong>INTERACTION ACKNOWLEDGED</strong>
          </p>
          <p>
            This form is prepared for future backend email integration. Messages are not currently transmitted automatically. Please contact directly via email at{" "}
            <a href="mailto:okekevale18@gmail.com">okekevale18@gmail.com</a>.
          </p>
        </div>
      ) : (
        <p className="form-note">
          Form is structured for future backend integration. No false submission claims are generated.
        </p>
      )}

      <button type="submit" className="form-submit-btn">
        START THE CONVERSATION ↗
      </button>
    </form>
  );
}
