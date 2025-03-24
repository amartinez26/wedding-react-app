import React from 'react';
import ProfileImage from './ProfileImage'; // Ensure this path is correct
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import NavMenu from './NavMenu';

const Header = () => {
  const socialLinks = [
    { href: '#', className: 'twitter', icon: 'bi bi-twitter-x' },
    { href: '#', className: 'facebook', icon: 'bi bi-facebook' },
    { href: '#', className: 'instagram', icon: 'bi bi-instagram' },
    { href: '#', className: 'google-plus', icon: 'bi bi-skype' },
    { href: '#', className: 'linkedin', icon: 'bi bi-linkedin' },
  ];

  const menuItems = [
    { href: '#hero', icon: 'bi bi-house navicon', label: 'Home' },
    { href: '#about', icon: 'bi bi-person navicon', label: 'About' },
    {
      href: '#resume',
      icon: 'bi bi-file-earmark-text navicon',
      label: 'Resume',
    },
    { href: '#portfolio', icon: 'bi bi-images navicon', label: 'Portfolio' },
    { href: '#services', icon: 'bi bi-hdd-stack navicon', label: 'Services' },
    {
      href: '#',
      icon: 'bi bi-menu-button navicon',
      label: 'Dropdown',
      dropdown: [
        { href: '#', label: 'Dropdown 1' },
        {
          href: '#',
          label: 'Deep Dropdown',
          dropdown: [
            { href: '#', label: 'Deep Dropdown 1' },
            { href: '#', label: 'Deep Dropdown 2' },
            { href: '#', label: 'Deep Dropdown 3' },
          ],
        },
        { href: '#', label: 'Dropdown 2' },
      ],
    },
    { href: '#contact', icon: 'bi bi-envelope navicon', label: 'Contact' },
  ];

  return (
    <header id="header" className="header dark-background d-flex flex-column">
      <i className="header-toggle d-xl-none bi bi-list"></i>
      <ProfileImage src="assets/img/my-profile-img.jpg" alt="Profile" />
      <Logo siteName="Antonio Martinez" />
      <SocialLinks links={socialLinks} />
      <NavMenu menuItems={menuItems} />
    </header>
  );
};

export default Header;
