
/**
 * @file Header.js
 * @description This file defines the `Header` component, which serves as the main header section of the application. 
 * It includes a profile image, site logo, social media links, and a navigation menu with support for dropdowns.
 * The component is designed to be responsive and adaptable to different screen sizes.
 */
import React, { useState } from 'react';
import ProfileImage from './ProfileImage'; // Ensure this path is correct
import Logo from './Logo';
import SocialLinks from './SocialLinks';
import NavMenu from './NavMenu';
import profileImg from '../../assets/img/my-profile-img.jpg' 

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to manage menu visibility

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
  ]

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  };

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        isMenuOpen ? 'header-show' : ''
      }`}
    >
      {/* Toggle Button */}
      <i
        className={`header-toggle bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
        onClick={toggleMenu} // Add click handler
      ></i>

      {/* Profile Image */}
      <ProfileImage src={profileImg} alt="Profile" />

      {/* Logo */}
      <Logo siteName="Antonio Martinez" />

      {/* Social Links */}
      <SocialLinks links={socialLinks} />

      {/* Navigation Menu */}
      <NavMenu menuItems={menuItems} isMenuOpen={isMenuOpen} />
    </header>
  )
};

export default Header;
