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
