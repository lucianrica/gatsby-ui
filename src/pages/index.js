import * as React from "react"
import Layout from "../components/Layout"
import '../styles/global.css'


const IndexPage = () => {
    return (
        <Layout>
            <main>
                <h2>Nice website</h2>
            </main>
        </Layout>
    )
}


export default IndexPage


export const Head = () => <title>Fmr Documentation</title>