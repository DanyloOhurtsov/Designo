import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './headerComp.module.scss'
import { allLogos } from '../../content/logos/allLogos'


export const HeaderComp = () => {
  return (
    <div className={styles.headerComp}>
      <div className="desktopHeaderContent">
        <NavLink to={'/'}>
          <img src="" alt="" />
        </NavLink>
      </div>
    </div>
  )
}
