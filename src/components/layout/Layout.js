import React from 'react'
import { layout } from './Layout.module.scss'

const Layout = ({ children }) => {
  return <div style={{ margin: `0 auto`, maxWidth: 700 }}>{children}</div>
}

export default Layout
