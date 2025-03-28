
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
 *   ]}
 * />
 */
import React from 'react'

const NavMenu = ({ menuItems }) => {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={item.dropdown ? 'dropdown' : ''}>
            <a href={item.href}>
              <i className={item.icon}></i> {item.label}
              {item.dropdown && (
                <i className="bi bi-chevron-down toggle-dropdown"></i>
              )}
            </a>
            {item.dropdown && (
              <ul>
                {item.dropdown.map((subItem, subIndex) => (
                  <li
                    key={subIndex}
                    className={subItem.dropdown ? 'dropdown' : ''}
                  >
                    <a href={subItem.href}>{subItem.label}</a>
                    {subItem.dropdown && (
                      <ul>
                        {subItem.dropdown.map((deepItem, deepIndex) => (
                          <li key={deepIndex}>
                            <a href={deepItem.href}>{deepItem.label}</a>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </nav>
  )
}

export default NavMenu 
