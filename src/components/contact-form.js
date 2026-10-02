"use client";
import { useState } from "react";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxZojEFzsDUNKzjgtbaH3aI7vFWVwLwTKOEdSI5Nb_fpfGvfIAhb6J8SDUgwYco_OxOHg/exec";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    topic: "",
    message: "",
  });
  const [status, setStatus] = useState("idle"); // 'idle' | 'submitting' | 'success' | 'error'

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (status === "submitting") return;

    setStatus("submitting");

    const payload = {
      name: formData.name,
      email: formData.email,
      project: formData.topic,
      message: formData.message,
    };

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
        body: JSON.stringify(payload),
      });

      setStatus("success");
      setFormData({ name: "", email: "", topic: "", message: "" });
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
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
          value={formData.name}
          onChange={handleChange}
          disabled={status === "submitting"}
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
          value={formData.email}
          onChange={handleChange}
          disabled={status === "submitting"}
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="form-topic">WHAT ARE YOU WORKING ON?</label>
        <select
          id="form-topic"
          name="topic"
          value={formData.topic}
          onChange={handleChange}
          disabled={status === "submitting"}
          required
        >
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
          value={formData.message}
          onChange={handleChange}
          disabled={status === "submitting"}
          required
        />
      </div>

      {status === "success" && (
        <div className="form-ack-notice" role="status">
          <p>
            <strong>YOU’RE IN.</strong>
          </p>
          <p>
            Thanks for reaching out. I’ve got your message and will be in touch soon.
          </p>
        </div>
      )}

      {status === "error" && (
        <div className="form-error-notice" role="alert">
          <p>
            <strong>SUBMISSION ERROR</strong>
          </p>
          <p>
            We couldn&apos;t send your message right now. Please check your connection and try again, or email directly at{" "}
            <a href="mailto:okekevale18@gmail.com">okekevale18@gmail.com</a>.
          </p>
        </div>
      )}

      <button
        type="submit"
        className="form-submit-btn"
        disabled={status === "submitting"}
      >
        {status === "submitting" ? "SENDING MESSAGE..." : "START THE CONVERSATION ↗"}
      </button>
    </form>
  );
}
