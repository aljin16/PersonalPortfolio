import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import './TextType.css';

export default function TextType({ text, typingSpeed = 75, pauseDuration = 1500, deletingSpeed = 30, showCursor = true, cursorCharacter = '|' }) {
  const texts = useMemo(() => Array.isArray(text) ? text : [text], [text]);
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    if (reduced) return;
    let timer, index = 0, length = 0, deleting = false;
    const tick = () => {
      const current = texts[index];
      length += deleting ? -1 : 1;
      setDisplayed(current.slice(0, length));
      let wait = deleting ? deletingSpeed : typingSpeed;
      if (!deleting && length === current.length) { deleting = true; wait = pauseDuration; }
      else if (deleting && length === 0) { deleting = false; index = (index + 1) % texts.length; }
      timer = setTimeout(tick, wait);
    };
    timer = setTimeout(tick, typingSpeed);
    return () => clearTimeout(timer);
  }, [texts, reduced, typingSpeed, pauseDuration, deletingSpeed]);
  return <span className="text-type">
    <span className="sr-only">{texts.join('. ')}</span>
    <span aria-hidden="true">{reduced ? texts[0] : displayed}{showCursor && !reduced && <span className="text-type__cursor">{cursorCharacter}</span>}</span>
  </span>;
}
