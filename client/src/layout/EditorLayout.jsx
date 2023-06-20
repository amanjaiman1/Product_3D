import React from "react"
import Header from "../containers/Header/Navbar"
import Footer from "../containers/Footer/index.jsx"
import styles from "../style"
import customizer from "../assets/svg/customizer.svg"

function EditorLayout({ children }) {
  return (
    <div className="bg-gradient-to-t from-slate-50 to-blue-100">
      <main>{children}</main>
    </div>
  )
}

export default EditorLayout
