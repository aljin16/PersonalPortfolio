import { MapPin, Calendar, Mail, Users } from 'lucide-react';
import { Reveal } from './Motion';
import verifiedIcon from '../assets/verified.png';
import ProfilePhoto from './ProfilePhoto';
import TextType from './TextType';

const roles = ['Web Designer & Developer', 'SEO, AEO & GEO', 'AI Tools & Automation', 'Websites that build trust', 'Workflows that save time'];
export default function Hero() {
  return <section id="home" className="profile-header">
    <div className="max-w-6xl mx-auto flex flex-col md:flex-row profile-layout">
      <Reveal className="profile-photo"><ProfilePhoto /></Reveal>
      <div className="profile-info min-w-0 flex-1">
        <Reveal delay={0.04}>
          <div className="profile-name-row"><h1>Aljean Sinohin</h1><img src={verifiedIcon} alt="Verified" width="22" height="22" /></div>
          <p className="role-line"><TextType text={roles} typingSpeed={75} pauseDuration={3000} showCursor cursorCharacter="|" /></p>
          <p className="profile-location"><MapPin size={15} aria-hidden="true" />Nueva Ecija, Philippines</p>
        </Reveal>
        <Reveal delay={0.08} className="profile-actions">
          <Reveal as="a" className="profile-action primary-action" href="tel:09915120853"><Calendar size={16} aria-hidden="true" />Phone Call</Reveal>
          <Reveal as="a" className="profile-action" href="mailto:aljeansinohin16@gmail.com"><Mail size={16} aria-hidden="true" /><span>aljeansinohin16@gmail.com</span></Reveal>
          <Reveal as="a" className="profile-action" href="#projects"><Users size={16} aria-hidden="true" />View my projects</Reveal>
        </Reveal>
      </div>
    </div>
  </section>;
}
