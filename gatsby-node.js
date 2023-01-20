const path = require(`path`)

// Create markdown-html pages dynamically
exports.createPages = async ({ actions }) => {

    let repoOwner = "lucianrica"
    let repoName = "docs-1"
    let branchAndFile = "main:README.md"
    console.log("=========================")




    actions.createPage({
        path: `/docs/1`,
        component: path.resolve(`./src/templates/Document.js`),
        context: {
            name: repoName,
            owner: repoOwner,
            expression: branchAndFile
        }
    })

    actions.createPage({
        path: `/docs/2`,
        component: path.resolve(`./src/templates/Document.js`),
        context: {
            name: "docs-2",
            owner: "lucianrica",
            expression: "main:README.md"
        }
    })

}