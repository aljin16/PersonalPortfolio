import { ArrowUp, ArrowUpRight } from "lucide-react";
import { socials } from "../data";
export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-main">
          <a href="#home" className="footer-name">
            Aljean Sinohin<span>Web Designer &amp; Developer</span>
          </a>
          <nav aria-label="Social links">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name}
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            ))}
          </nav>
          <a className="back-top" href="#home">
            Back to top <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Aljean Sinohin</span>
          <span>Designed with intention. Built with care.</span>
        </div>
      </div>
    </footer>
  );
}
