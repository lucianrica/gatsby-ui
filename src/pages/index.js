import * as React from "react"
import Docs_Footer from "../components/LAYOUTS/docs/footer/Docs_Footer"
import '../styles/global.css'

const IndexPage = () => {
    return (
        <main>
            <h1>Welcome to gatsby</h1>
            <Docs_Footer></Docs_Footer>
        </main>
    )
}

export default IndexPage

export const Head = () => <title>Home Page</title>