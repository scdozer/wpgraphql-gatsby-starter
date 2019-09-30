const path = require(`path`)
const slash = require(`slash`)
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  // query content for WordPress posts
  const result = await graphql(`
    query {
        wordPress {
            pages {
                nodes {
                    uri
                    title
                    link
                    id
                }
                edges {
                    node {
                        id
                        slug
                    }
                }
            }
        }
    }
  `)
  const pageTemplate = path.resolve(`./src/templates/pages.js`)
  result.data.wordPress.pages.edges.forEach(edge => {
    createPage({
      // will be the url for the page
      path: edge.node.slug,
      // specify the component template of your choice
      component: slash(pageTemplate),
      // In the ^template's GraphQL query, 'id' will be available
      // as a GraphQL variable to query for this posts's data.
      context: {
        id: edge.node.id,
      },
    })
  })



  
}