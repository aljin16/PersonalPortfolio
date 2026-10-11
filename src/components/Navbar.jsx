import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
const links = [
  ["Work", "#work"],
  ["Services", "#services"],
  ["About", "#about"],
];

export default function Navbar() {
  const dialog = useRef(null);
  const trigger = useRef(null);
  const timer = useRef(null);
  const savedScroll = useRef(0);
  const priorStyle = useRef("");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const restore = () => {
    document.body.style.cssText = priorStyle.current;
    window.scrollTo({ top: savedScroll.current, behavior: "instant" });
  };
  const closeMenu = (target) => {
    if (!dialog.current?.open) return;
    clearTimeout(timer.current);
    dialog.current.classList.add("closing");
    timer.current = setTimeout(
      () => {
        dialog.current.close();
        dialog.current.classList.remove("closing");
        restore();
        setIsOpen(false);
        if (target) {
          const section = document.querySelector(target);
          window.history.pushState(null, "", target);
          section?.focus({ preventScroll: true });
          section?.scrollIntoView({
            behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
              .matches
              ? "instant"
              : "smooth",
          });
        } else trigger.current?.focus({ preventScroll: true });
      },
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 200,
    );
  };
  const openMenu = () => {
    savedScroll.current = window.scrollY;
    priorStyle.current = document.body.style.cssText;
    document.body.style.position = "fixed";
    document.body.style.top = `-${savedScroll.current}px`;
    document.body.style.width = "100%";
    dialog.current.showModal();
    setIsOpen(true);
  };
  const trapFocus = (event) => {
    if (event.key !== "Tab") return;
    const controls = [...dialog.current.querySelectorAll("a[href], button")];
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && document.activeElement === first) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };
  useEffect(() => {
    const media = window.matchMedia("(min-width: 769px)");
    const onResize = () => {
      if (media.matches && dialog.current.open) {
        clearTimeout(timer.current);
        dialog.current.close();
        dialog.current.classList.remove("closing");
        restore();
        setIsOpen(false);
      }
    };
    media.addEventListener("change", onResize);
    const menu = dialog.current;
    return () => {
      clearTimeout(timer.current);
      media.removeEventListener("change", onResize);
      if (menu.open) restore();
    };
  }, []);
  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a
          href="#home"
          className="wordmark"
          aria-label="Aljean Sinohin, back to top"
        >
          <span className="monogram" aria-hidden="true">
            as<span>.</span>
          </span>
          <span>Aljean Sinohin</span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map(([label, href]) => (
            <a key={href} className="nav-link" href={href}>
              {label}
            </a>
          ))}
          <a className="button button-small" href="#contact">
            Let’s Talk <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </nav>
        <button
          className="menu-trigger icon-button"
          ref={trigger}
          type="button"
          onPointerDown={(event) => {
            event.preventDefault();
            trigger.current.focus({ preventScroll: true });
          }}
          onClick={openMenu}
          aria-label="Open navigation menu"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
        >
          <Menu aria-hidden="true" />
        </button>
      </div>
      <dialog
        id="mobile-menu"
        ref={dialog}
        className="mobile-menu"
        aria-label="Navigation menu"
        onKeyDown={trapFocus}
        onCancel={(event) => {
          event.preventDefault();
          closeMenu();
        }}
        onClick={(event) => {
          if (event.target === dialog.current) closeMenu();
        }}
      >
        <div className="mobile-menu-panel">
          <div className="mobile-menu-heading">
            <span className="wordmark">Aljean Sinohin</span>
            <button
              type="button"
              className="icon-button"
              onClick={() => closeMenu()}
              aria-label="Close navigation menu"
              autoFocus
            >
              <X aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Mobile navigation">
            {[...links, ["Let’s Talk", "#contact"]].map(
              ([label, href], index) => (
                <a
                  key={href}
                  href={href}
                  onClick={(event) => {
                    event.preventDefault();
                    closeMenu(href);
                  }}
                >
                  <span className="menu-number">0{index + 1}</span>
                  {label}
                  <ArrowUpRight aria-hidden="true" />
                </a>
              ),
            )}
          </nav>
          <p>
            Web design &amp; development, with clarity and care.
          </p>
        </div>
      </dialog>
    </header>
  );
}
