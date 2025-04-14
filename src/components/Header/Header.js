
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
import profileImg from '../../assets/img/portfolio/WeddingShoot/mall-2.jpg' 
import backgroundMusic from '../../assets/audio/_Blame It On The Boogie (with The Jacksons).mp3'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false) // State to manage menu visibility
  const [isPlaying, setIsPlaying] = useState(false) // State to track if music is playing

  const socialLinks = [
    // { href: '#', className: 'twitter', icon: 'bi bi-twitter-x' },
    // { href: '#', className: 'facebook', icon: 'bi bi-facebook' },
    {
      href: 'https://www.instagram.com/don___anthony/',
      className: 'instagram',
      icon: 'bi bi-instagram',
    },
    // { href: '#', className: 'google-plus', icon: 'bi bi-skype' },
    // { href: '#', className: 'linkedin', icon: 'bi bi-linkedin' },
  ]

  const menuItems = [
    { href: '#hero', icon: 'bi bi-house navicon', label: 'Home' },
    { href: '#about', icon: 'bi bi-person navicon', label: 'About' },
    { href: '#portfolio', icon: 'bi bi-images navicon', label: 'Photos' },
    { href: '#services', icon: 'bi bi-hdd-stack navicon', label: 'Explore' },
    // {
    //   href: '#',
    //   icon: 'bi bi-menu-button navicon',
    //   label: 'Dropdown',
    //   dropdown: [
    //     { href: '#', label: 'Dropdown 1' },
    //     {
    //       href: '#',
    //       label: 'Deep Dropdown',
    //       dropdown: [
    //         { href: '#', label: 'Deep Dropdown 1' },
    //         { href: '#', label: 'Deep Dropdown 2' },
    //         { href: '#', label: 'Deep Dropdown 3' },
    //       ],
    //     },
    //     { href: '#', label: 'Dropdown 2' },
    //   ],
    // },
    { href: '#contact', icon: 'bi bi-envelope navicon', label: 'RSVP' },
    {
      href: '#resume',
      icon: 'bi bi-file-earmark-text navicon',
      label: 'Q & A',
    },
  ]

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  // Play or Stop Audio
  const toggleAudio = () => {
    const audio = document.getElementById('background-audio')
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play()
      setIsPlaying(true)
    }
  }

  return (
    <header
      id="header"
      className={`header dark-background d-flex flex-column ${
        isMenuOpen ? 'header-show' : ''
      }`}
    >
      <audio id="background-audio" loop>
        <source src={backgroundMusic} type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
      <button className="play-music-button" onClick={toggleAudio}>
        {isPlaying ? '⏸ Stop Music' : '🎵 Play Music'}
      </button>
      {/* Toggle Button */}
      <i
        className={`header-toggle bi ${isMenuOpen ? 'bi-x' : 'bi-list'}`}
        onClick={toggleMenu} // Add click handler
      ></i>

      {/* Profile Image */}
      <ProfileImage src={profileImg} alt="Profile" />

      {/* Logo */}
      <Logo siteName="Carla & Tony" />

      {/* Social Links */}
      <SocialLinks links={socialLinks} />

      {/* Navigation Menu */}
      <NavMenu
        menuItems={menuItems}
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
      />
    </header>
  )
};

export default Header;
