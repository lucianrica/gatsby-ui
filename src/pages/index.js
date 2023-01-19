import * as React from "react"
import DocsFooter from "../components/LAYOUTS/docs/footer/DocsFooter"
import '../styles/global.css'

// import { graphql} from 'gatsby'

const IndexPage = () => {
    return (
        <main>
            <h1>Welcome to gatsby</h1>
            <DocsFooter></DocsFooter>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>