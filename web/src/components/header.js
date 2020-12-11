import {Link} from 'gatsby'
import React from 'react'
import Icon from './icon'
import {cn} from '../lib/helpers'

import styles from './header.module.css'
import Navbar from './Navbar'

const Header = ({onHideNav, onShowNav, showNav, siteTitle}) => (
  <>
    <div className={styles.root}>
      <div className={styles.wrapper}>
        <div className={styles.branding}>
          <Link to='/'>{siteTitle}</Link>
          <button className={styles.toggleNavButton} onClick={showNav ? onHideNav : onShowNav}>
            <div>
              <Icon symbol='hamburger' />
            </div>
          </button>
          <Navbar />
        </div>
        <nav className={cn(styles.nav, showNav && styles.showNav)}>
          <ul>
            <li>
              {/* <Link to='/archive/'>Archive</Link> */}
              <Link to='/portfolio/'>Portfolio</Link>
              <Link to='/contact/'>Contact</Link>
              <Link to='/archive/'>Archive</Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  </>
)

export default Header
