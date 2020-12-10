import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'
import Navbar from './Navbar'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <div className={styles.root}>
    <div className={styles.wrapper}>
      <div className={styles.branding}>
        <Link to='/'>{siteTitle}</Link>
        <Navbar />
      </div>

      <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
        <Icon symbol='hamburger' />
      </button>

      <nav className={cn(styles.nav, showNav && styles.showNav)}>
        <ul>
          <li>
            {/* <Link to='/archive/'>Archive</Link> */}
            <Link to='/portfolio/'>Portfolio</Link>
            <Link to='/contact/'>Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
)

export default Header
