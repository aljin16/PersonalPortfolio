import { useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './ProfilePhoto.css';

const Portrait = motion.div;

export default function ProfilePhoto() {
  const reduced = useReducedMotion();
  const [ready, setReady] = useState(false);
  const [failed, setFailed] = useState(false);
  const handleFailure = () => {
    setReady(false);
    setFailed(true);
  };
  const handleLoad = async event => {
    const image = event.currentTarget;
    try {
      await image.decode();
      setReady(true);
    } catch {
      handleFailure();
    }
  };
  return <Portrait className={`profile-portrait${ready ? ' profile-portrait--ready' : ''}`}
    initial={false} whileHover={ready && !reduced ? { scale: 1.03 } : undefined}
    whileFocus={ready && !reduced ? { scale: 1.03 } : undefined}
    transition={{ duration: 0.3, ease: 'easeInOut' }}
    role="img" tabIndex={ready ? 0 : undefined}
    aria-label={ready ? 'Aljean Sinohin. Focus to preview the alternate portrait.' : 'Aljean Sinohin'}>
    <img className="profile-image--light" src="/profile.webp" alt="Aljean Sinohin" aria-hidden="true" width="128" height="128" loading="eager" decoding="async" fetchPriority="high" />
    {!failed && <img className="profile-image--dark" src="/profile-dark.webp" alt="Aljean Sinohin wearing sunglasses" aria-hidden="true" width="128" height="128" loading="eager" decoding="async" fetchPriority="high"
      onLoad={handleLoad} onError={handleFailure} />}
  </Portrait>;
}
