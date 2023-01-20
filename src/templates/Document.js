import { Link, graphql } from 'gatsby'
import React from 'react'
import Layout from "../components/Layout"
import * as styles from '../styles/document.module.css'
// import ReactMarkdown from 'react-markdown'


export default function MarkdownToHtml() {

    let data = null
    let repoOwner = "lucianrica"
    let repoName = "docs-1"
    // let branchAndFile = "main:README.md"

    fetch('https://api.github.com/graphql', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
          Authorization: `Bearer `
        },
        body: JSON.stringify({query: `query MyQuery {
            
              repository(name: ${repoName}, owner: ${repoOwner}) {
                url
                defaultBranchRef {
                  name
                }
                object(expression: "main:") {
                  ... on GitHub_Tree {
                    entries {
                      name
                      lineCount
                      type
                      object {
                        ... on GitHub_Tree {
                          id
                          entries {
                            name
                            type
                            lineCount
                            path
                            object {
                              id
                              ... on GitHub_Blob {
                                id
                                text
                              }
                            }
                          }
                        }
                        ... on GitHub_Blob {
                          id
                          text
                        }
                      }
                    }
                  }
                }
              }
            
          }
        
        `})
      })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));

    console.log(data)
    console.log(data.github.repository.object.entries[2].object.text)

    // let xx = data.github.repository.object.entries[2].object.text

    let readme = undefined
    data.github.repository.object.entries.forEach(element => {
        if (element.name.includes('README.md')) {
            readme = element.object.text
        }
    });
    // const {html} = data.markdownRemark
    // const { title, stack, author } = data.markdownRemark.frontmatter
    // const html = "data.markdownRemark"
    const title = "data.markdownRemark.frontmatter"
    const stack = "data.markdownRemark.frontmatter"
    const author = "data.markdownRemark.frontmatter"

    let d = data.github.repository
    let baseUrl = `${d.url}`
    let contributeUrl = `${d.url}/edit/${d.defaultBranchRef.name}`

    return (
        <Layout>
            <section className={styles.details}>
                <h1>{title}</h1>
                <h3>{stack}</h3>
                <h6>Author: {author}</h6>
                <div className={styles.html} dangerouslySetInnerHTML={{ __html: readme }}></div>
                {/* <ReactMarkdown children={readme} className={styles.html}/> */}
                
            </section>

            <footer className={styles.footer}>
                <div>
                    <h3>Did this doc help you?</h3>
                    <p>Promote good content by pressing like</p>
                    <a href="#id" className={styles.btn}>Like</a>
                    <Link className={`${styles.link} ${styles.small}`} to='/privacy'>Privacy policy</Link>
                </div>
                <div>
                    <h3>Help us make these docs great!</h3>
                    <p>All docs are inner source<sup className={styles.sup}>T&C's </sup>
                        See something that's wrong or unclear?
                        Submit a pull request</p>
                    <a href={`${contributeUrl}/README.md`} className={styles.btn} target="_blank" rel="noreferrer">
                        Make a contribution</a>
                    <a href={`${baseUrl}/blob/main/CONTRIBUTING.md`} className={`${styles.link} ${styles.small}`} target="_blank" rel="noreferrer">
                        Or, learn how to contribute</a>
                </div>
                <div>
                    <h3>Still need help?</h3>
                    <p>Contact x team on chat for support</p>
                    <h3>Urgent help?</h3>
                    <p>For any urgent queries, please raise incedent to {'dynamic-team'}</p>
                </div>
            </footer>
        </Layout>
    )
}

// export const query = graphql`
//   query MyQuery($name: String = "", $owner: String = "") {
//     github {
//       repository(name: $name, owner: $owner) {
//         url
//         defaultBranchRef {
//           name
//         }
//         object(expression: "main:") {
//           ... on GitHub_Tree {
//             entries {
//               name
//               lineCount
//               type
//               object {
//                 ... on GitHub_Tree {
//                   id
//                   entries {
//                     name
//                     type
//                     lineCount
//                     path
//                     object {
//                       id
//                       ... on GitHub_Blob {
//                         id
//                         text
//                       }
//                     }
//                   }
//                 }
//                 ... on GitHub_Blob {
//                   id
//                   text
//                 }
//               }
//             }
//           }
//         }
//       }
//     }
//   }
// `

// export const query = graphql`
//     query MarkdownPage($slug: String) {
//         markdownRemark(frontmatter: {slug: {eq: $slug}}) {
//             html
//             frontmatter {
//                 title
//                 stack
//                 date
//                 author
//             }
//         }
//     }
// `