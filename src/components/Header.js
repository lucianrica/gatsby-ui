import * as styles from '../styles/Header.module.css'

import React from 'react'
import { Link } from "gatsby"


export default function Header() {



    return (
        <header className={styles.header}>
            
            {/* <button onClick={() => { func() }}>Page button</button> */}
            
            <Link className={styles.btn} to='/'>Home</Link>
            <Link className={styles.btn} to='/docs/1'>docs 1</Link>
            <Link className={styles.btn} to='/docs/2'>docs 2</Link>


        </header>
    )
}

