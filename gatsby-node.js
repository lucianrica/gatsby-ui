const path = require(`path`)

// Create markdown-html pages dynamically
exports.createPages = async ({ actions }) => {

    let repoOwner = "lucianrica"
    let repoName = "docs-1"
    let branchAndFile = "main:README.md"





    actions.createPage({
        path: `/docs/1`,
        component: path.resolve(`./src/components/LAYOUTS/docs/footer/DocsFooter.js`),
        context: {
            name: repoName,
            owner: repoOwner,
            expression: branchAndFile
        }
    })

}