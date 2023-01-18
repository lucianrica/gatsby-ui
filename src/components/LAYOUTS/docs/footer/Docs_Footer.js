import React from 'react'
import * as styles from './Docs_footer.module.css'

export default function Docs_Footer() {

    const smallLinkClasses = `${styles.link} ${styles.small}`

    return (
        <footer className={styles.footer}>
            <div>
                <h3>Did this doc help you?</h3>
                <p>Promote good content by pressing like</p>
                <a className={styles.btn}>Like</a>
                <a href="#" className={`${styles.link} ${styles.small}`}>Privacy policy</a>
            </div>
            <div>
                <h3>Help us make these docs great!</h3>
                <p>All docs are inner source<sup style={{fontSize:'9px', fontWeight: '900' }} className={styles.sup}>T&C's</sup>. See something that's wrong or unclear?
                    Submit a pull request</p>
                <a className={styles.btn}> Make a contribution</a>
                <a href="#" className={`${styles.link} ${styles.small}`}>Or, learn how to contribute</a>
            </div>
            <div>
                <h3>Still need help?</h3>
                <p>Contact x team on chat for support</p>
                <h3>Urgent help?</h3>
                <p>For any urgent queries, please raise incedent to {'dynamic-team'}</p>
            </div>
        </footer>
    )
}
