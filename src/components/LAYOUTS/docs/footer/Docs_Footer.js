import React from 'react'
import * as styles from './Docs_footer.module.css'

export default function Docs_Footer() {

    const smallLinkClasses = `${styles.link} ${styles.small}`

    return (
        <footer className={styles.footer}>
            <div>
                <h3>Did this doc help you?</h3>
                <a className={styles.btn}>Like</a>
                <a href="#" className={`${styles.link} ${styles.small}`}>Privacy policy</a>
            </div>
            <div>
                <h3>Help us make these docs great!</h3>
                <p>All docs are enterprise wide open source. See something that's wrong or unclear?
                    Submit a pull request.</p>
                <a className={styles.btn}> Make a contribution</a>
                <a href="#" className={`${styles.link} ${styles.small}`}>Or, learn how to contribute.</a>
            </div>
            <div>
                <h3>Still need help?</h3>
                <p>Contact x team for support</p>
            </div>
        </footer>
    )
}
