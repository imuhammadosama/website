import React from "react"
import { Link } from "gatsby"

import headerStyles from "./header.module.scss"

export default function Header() {
  return (
    <nav className={headerStyles.nav} id={headerStyles.nav}>
      <div className={headerStyles.logo}>
        <Link to="/">
          <img
            src={require("../images/brand/logo.svg")}
            alt="Logo"
            width="180"
            height="25"
          />
        </Link>
      </div>
      <div className={headerStyles.menu}>
        <ul>
          <li className={headerStyles.item}>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}
