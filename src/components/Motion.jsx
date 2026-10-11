import { useEffect, useRef, useSyncExternalStore } from 'react';
import { animate, motion, useReducedMotion } from 'framer-motion';

const motionTiming = { duration: 0.4, ease: [0.22, 0.61, 0.36, 1] };

const hoverQuery = '(hover: hover) and (pointer: fine)';
const subscribeHover = callback => { const media = matchMedia(hoverQuery); media.addEventListener('change', callback); return () => media.removeEventListener('change', callback); };
const getHover = () => matchMedia(hoverQuery).matches;

export function Reveal({ as = 'div', children, className, style, delay = 0, lift = false, ...props }) {
  const ref = useRef(null);
  const reduced = useReducedMotion();
  const hover = useSyncExternalStore(subscribeHover, getHover, () => false);
  useEffect(() => {
    if (reduced || !ref.current || !('IntersectionObserver' in window)) return;
    let control;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      observer.disconnect();
      control = animate(ref.current, { opacity: [0, 1], y: [10, 0] }, { ...motionTiming, delay: Math.min(delay, 0.12) });
    }, { threshold: 0.03 });
    observer.observe(ref.current);
    return () => { observer.disconnect(); control?.complete(); };
  }, [reduced, delay]);
  const Tag = as === 'a' ? motion.a : as === 'button' ? motion.button : motion.div;
  return <Tag ref={ref} initial={false} className={className} style={style}
    whileHover={lift && hover && !reduced ? { y: -3 } : undefined}
    whileTap={(as === 'button' || as === 'a') && !reduced ? { scale: 0.98 } : undefined}
    transition={motionTiming} {...props}>{children}</Tag>;
}
