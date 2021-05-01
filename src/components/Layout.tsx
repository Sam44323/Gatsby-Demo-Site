import React from "react"
import Navbar from "./Navbar"
import "../styles/global.css"
import { from } from "core-js/core/array"

const Layout: React.FC = props => {
  return (
    <div className="layout">
      <Navbar />
      <div className="content">{props.children}</div>
      <footer>
        <p>Copyright 2021 Web Warrior</p>
      </footer>
    </div>
  )
}
export default Layout
