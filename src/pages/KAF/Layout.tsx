
import React from 'react'
import Header from '../../components/Layout/Header/Header'
import Footer from '../../components/Layout/Footer/Footer'
import './layout.css'

export const Layout: React.FC<{ children: React.ReactNode; pageTitle?: string }> = ({ children, pageTitle }) => (
  <div className="kaf-root">
    <Header pageTitle={pageTitle} />
    <main className="kaf-main">
      <div className="kaf-content">{children}</div>
    </main>
    <Footer />
  </div>
)

export default Layout
