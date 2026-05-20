import React from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject } from 'react-icons/ai';
import { MdWork } from 'react-icons/md';
import { FaTools, FaGithub } from 'react-icons/fa';
import { FiMail } from 'react-icons/fi';

const items = [
  { href: '#home', icon: AiOutlineHome, label: 'Home' },
  { href: '#about', icon: AiOutlineUser, label: 'About' },
  { href: '#experience', icon: MdWork, label: 'Exp' },
  { href: '#skills', icon: FaTools, label: 'Skills' },
  { href: '#projects', icon: AiOutlineProject, label: 'Projects' },
  { href: '#opensource', icon: FaGithub, label: 'OSS' },
  { href: '#contact', icon: FiMail, label: 'Contact' },
];

const MobileNav = () => {
  return (
    <nav className="mobile-nav" aria-label="Mobile navigation">
      <div className="mobile-nav-inner">
        {items.map((it) => {
          const Icon = it.icon;
          return (
            <a key={it.href} href={it.href} className="mobile-nav-item" aria-label={it.label}>
              <Icon size={18} />
              <span className="mobile-nav-label">{it.label}</span>
            </a>
          );
        })}
      </div>
    </nav>
  );
};

export default MobileNav;
