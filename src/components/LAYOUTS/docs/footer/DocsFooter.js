// import { Link } from 'gatsby'
// import React from 'react'
// import * as styles from './DocsFooter.module.css'

// import { graphql } from 'gatsby'

// export default function DocsFooter({ data }) {
//     console.log(data)

//     let d = data.github.repository
//     let baseUrl = `${d.url}`
//     let contributeUrl = `${d.url}/edit/${d.defaultBranchRef.name}`

//     return (
//         <footer className={styles.footer}>
//             <div>
//                 <h3>Did this doc help you?</h3>
//                 <p>Promote good content by pressing like</p>
//                 <a className={styles.btn}>Like</a>
//                 <Link className={`${styles.link} ${styles.small}`} to='/privacy'>Privacy policy</Link>
//             </div>
//             <div>
//                 <h3>Help us make these docs great!</h3>
//                 <p>All docs are inner source<sup className={styles.sup}>T&C's </sup> 
//                 See something that's wrong or unclear?
//                     Submit a pull request</p>
//                 <a href={`${contributeUrl}/README.md`} className={styles.btn} target="_blank" rel="noreferrer" rel="noreferrer" rel="noreferrer">
//                     Make a contribution</a>
//                 <a href={`${baseUrl}/blob/main/CONTRIBUTING.md`} className={`${styles.link} ${styles.small}`} target="_blank" rel="noreferrer">
//                     Or, learn how to contribute</a>
//             </div>
//             <div>
//                 <h3>Still need help?</h3>
//                 <p>Contact x team on chat for support</p>
//                 <h3>Urgent help?</h3>
//                 <p>For any urgent queries, please raise incedent to {'dynamic-team'}</p>
//             </div>
//         </footer>
//     )
// }

// export const query = graphql`
//   query MyQuery($name: String = "", $owner: String = "") {
//     github {
//       repository(name: $name, owner: $owner, followRenames: true) {
//         url
//         defaultBranchRef {
//           name
//         }
//       }
      
//     }
//   }
// `

// // export const query = graphql`
// //   query gitHubQuery($name: String!, $owner: String!, $expression: String) {
// //     github {
// //       repository(name: $name, owner: $owner) {
// //         defaultBranchRef {
// //           name
// //         }
// //         url
// //         object(expression: $expression) {
// //           ... on GitHub_Blob {
// //             text
// //           }
// //           id
// //         }
// //       }
// //     }
// //   }
// // `
