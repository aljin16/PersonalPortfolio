import { useEffect, useMemo, useState } from 'react';
import { useReducedMotion } from 'framer-motion';
import './TextType.css';

export default function TextType({ text, typingSpeed = 75, pauseDuration = 1500, deletingSpeed = 30, showCursor = true, cursorCharacter = '|' }) {
  const texts = useMemo(() => Array.isArray(text) ? text : [text], [text]);
  const reduced = useReducedMotion();
  const [displayed, setDisplayed] = useState(texts[0]);
  useEffect(() => {
    if (reduced) return;
    let timer, index = 0, length = texts[0].length, deleting = true;
    const tick = () => {
      const current = texts[index];
      length += deleting ? -1 : 1;
      setDisplayed(current.slice(0, length));
      let wait = deleting ? deletingSpeed : typingSpeed;
      if (!deleting && length === current.length) { deleting = true; wait = pauseDuration; }
      else if (deleting && length === 0) { deleting = false; index = (index + 1) % texts.length; }
      timer = setTimeout(tick, wait);
    };
    timer = setTimeout(tick, pauseDuration);
    return () => clearTimeout(timer);
  }, [texts, reduced, typingSpeed, pauseDuration, deletingSpeed]);
  const visibleText = reduced ? texts[0] : displayed;
  const lastSpace = visibleText.lastIndexOf(' ');
  return <span className="text-type">
    <span className="sr-only">{texts.join('. ')}</span>
    {texts.map(phrase => <span key={phrase} className="text-type__sizer" aria-hidden="true">{phrase}<span className="text-type__cursor-space">{cursorCharacter}</span></span>)}
    <span className="text-type__visual" aria-hidden="true">{visibleText.slice(0, lastSpace + 1)}<span className="text-type__ending">{visibleText.slice(lastSpace + 1)}{showCursor && !reduced && <span className="text-type__cursor">{cursorCharacter}</span>}</span></span>
  </span>;
}
