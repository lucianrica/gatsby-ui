import React from 'react'

import { graphql } from 'gatsby'

export default function privacy({ data }) {

    console.log(data.github.viewer.repository.object.text)

    return (
        <div className="div">
            <h1>h1 in privacy.js test</h1>
            <div>{ data.github.viewer.repository.object.text }</div>

        </div>
    )
}

export const query = graphql`
    query privacy {
        github {
            viewer {
                repository(name: "docs-1") {
                    object(expression: "main:PRIVACY.md") {
                        ... on GitHub_Blob {
                            id
                            text
                        }
                    }
                }
            }
        }
    }
`