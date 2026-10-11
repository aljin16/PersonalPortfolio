import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy } from "lucide-react";
import { email } from "../data";
export default function Contact() {
  const [status, setStatus] = useState("");
  const timer = useRef(null);
  useEffect(() => () => clearTimeout(timer.current), []);
  const copyEmail = async () => {
    clearTimeout(timer.current);
    try {
      await navigator.clipboard.writeText(email);
      setStatus("Email copied to clipboard.");
    } catch {
      setStatus(
        `Copy unavailable. You can select the email address below: ${email}`,
      );
    }
    timer.current = setTimeout(() => setStatus(""), 6000);
  };
  const copied = status === "Email copied to clipboard.";
  return (
    <section
      id="contact"
      className="contact-section"
      tabIndex={-1}
      aria-labelledby="contact-title"
    >
      <div className="container contact-inner" data-reveal>
        <div className="contact-top">
          <p className="eyebrow">Get in touch</p>
        </div>
        <div className="contact-main">
          <div>
            <h2 id="contact-title">Let’s work together.</h2>
            <p className="contact-description">
              Have a project in mind or a website that needs improvement?
              I’d love to hear what you’re working on.
            </p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${email}`}>
              Let’s Discuss Your Project{" "}
              <ArrowUpRight size={20} aria-hidden="true" />
            </a>
            <button
              type="button"
              className="button copy-button"
              onClick={copyEmail}
            >
              {copied ? (
                <Check size={17} aria-hidden="true" />
              ) : (
                <Copy size={17} aria-hidden="true" />
              )}
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>
        </div>
        <p
          className="copy-status"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          {status}
        </p>
        <div className="contact-bottom">
          <a href={`mailto:${email}`}>{email}</a>
          <a href="tel:09915120853">
            Prefer a call? <span>0991 512 0853</span>
            <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
