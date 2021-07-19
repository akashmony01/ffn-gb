// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // api.loadSource(({ addCollection }) => {
  //   // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  // })

  api.createPages(async ({ graphql, createPage }) => {
    const query = `{
  posts {
    edges {
      node {
        title
        slug
        date
        content
        featuredImage {
          node {
            sourceUrl
          }
        }
        tags {
          nodes {
            link
            slug
          }
        }
      }
    }
  }
}`

    const queryResults = await graphql(query)

    let posts = queryResults.data.posts.edges.map(edge => edge.node)

    posts.forEach(post => {
      createPage({
        path: `/blog/${post.slug}`,
        component: "./src/templates/Post.vue",
        context: {
          title: post.title,
          date: post.date,
          content: post.content,
          tags: post.tags,
          featuredImage: post.featuredImage

        }
      })
    })



  })
}
