
/**
 * NavMenu Component
 * 
 * This component renders a navigation menu with support for nested dropdowns.
 * It accepts a list of menu items as a prop and dynamically generates the menu
 * structure based on the provided data. Each menu item can optionally have a
 * dropdown containing sub-items, and this nesting can go multiple levels deep.
 * 
 * Props:
 * @param {Object[]} menuItems - Array of menu item objects to render.
 * @param {string} menuItems[].label - The display text for the menu item.
 * @param {string} menuItems[].href - The URL the menu item links to.
 * @param {string} [menuItems[].icon] - Optional CSS class for an icon to display with the menu item.
 * @param {Object[]} [menuItems[].dropdown] - Optional array of sub-menu items for dropdowns.
 * 
 * Example usage:
 * <NavMenu
 *   menuItems={[
 *     { label: 'Home', href: '/', icon: 'bi bi-house' },
 *     { 
 *       label: 'Services', 
 *       href: '/services', 
 *       dropdown: [
 *         { label: 'Web Development', href: '/services/web' },
 *         { label: 'SEO', href: '/services/seo' }
 *       ]
 *     }
 *   ]}                   NOTE! DROPDOWNS ARE NOT WORKING YET need links
 * />
 */
import React, { useState } from 'react'

const NavMenu = ({ menuItems, isMenuOpen, closeMenu }) => {
  const [openDropdowns, setOpenDropdowns] = useState({});

  const handleScroll = (event, href) => {
    event.preventDefault()

    // Ignore invalid or placeholder hrefs like "#"
    if (href === '#') {
      console.log('Placeholder link clicked, href === # no action taken.')
      return
    };

    const target = document.querySelector(href)
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' })
      closeMenu() // Close the menu after scrolling
    } else {
      console.warn(`No element found for selector: ${href}`)
    }
  };

  const toggleDropdown = (index) => {
    setOpenDropdowns((prev) => ({
      ...prev,
      [index]: !prev[index],
    }))
  };

  const renderMenuItems = (items, parentIndex = '') => {
    return items.map((item, index) => {
      const currentIndex = `${parentIndex}${index}`
      const isOpen = openDropdowns[currentIndex]

      return (
        <li key={currentIndex} className={item.dropdown ? 'dropdown' : ''}>
          <a
            href={item.href}
            onClick={(e) => {
              if (item.dropdown) {
                e.preventDefault()
                toggleDropdown(currentIndex)
              } else {
                handleScroll(e, item.href)
              }
            }}
          >
            <i className={item.icon}></i> {item.label}
            {item.dropdown && (
              <i
                className={`bi ${
                  isOpen ? 'bi-chevron-up' : 'bi-chevron-down'
                } toggle-dropdown`}
              ></i>
            )}
          </a>
          {item.dropdown && isOpen && (
            <ul>{renderMenuItems(item.dropdown, `${currentIndex}-`)}</ul>
          )}
        </li>
      )
    })
  };

  return (
    <nav id="navmenu" className={`navmenu ${isMenuOpen ? 'menu-open' : ''}`}>
      <ul>{renderMenuItems(menuItems)}</ul>
    </nav>
  )
};

export default NavMenu