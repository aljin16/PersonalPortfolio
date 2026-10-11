import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

export default function CertificateDialog({ title, onClose, children }) {
  const ref = useRef(null);
  useEffect(() => {
    const dialog = ref.current;
    const trigger = document.activeElement;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => {
      dialog.close();
      document.body.style.overflow = previous;
      trigger?.focus({ preventScroll: true });
    };
  }, []);
  return <dialog ref={ref} className="certificate-dialog" aria-label={title}
    onKeyDown={event => {
      if (event.key !== 'Tab') return;
      const controls = [...ref.current.querySelectorAll('button, a[href]')];
      const first = controls[0], last = controls[controls.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
    }}
    onCancel={event => { event.preventDefault(); onClose(); }}
    onClick={event => { if (event.target === ref.current) onClose(); }}>
    <div className="dialog-heading"><div><h2>{title}</h2><p>Certificate details</p></div>
      <button className="dialog-close" onClick={onClose} autoFocus aria-label="Close certificate"><X size={20} /></button>
    </div>
    <div className="dialog-content">{children}</div>
  </dialog>;
}
