import React from 'react'
import Header from './Header'
import '../styles/layout.module.css'

export default function Layout({ children }) {
  return (
    <div className='layout'>
        <Header></Header>
        <div className="content">
            { children }
        </div>
        <footer>
            <p>@Copyrights</p>
        </footer>
    </div>
  )
}