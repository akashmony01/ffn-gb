const {GraphQLClient, gql} = require("graphql-request");
const websiteUUID = "58054d54-6297-4a45-bbbf-f39aab26fd89"

module.exports = function (api) {
  api.loadSource(async store => {
    const client = new GraphQLClient('https://tinyrocketswebsites.eu.pythonanywhere.com/api');
    const query = gql`{
  allWebsites(uuid: "${websiteUUID}") {
    edges {
      node {
        gtmCode
        formActionUrl
        websiteseo {
          title
          description
          image
          siteName
          keywords
          author
        }
      }
    }
  }
}`
  const websiteData = await client.request(query);
    console.log(websiteData.allWebsites.edges[0].node.websiteseo.image)
  store.addMetadata('title', websiteData.allWebsites.edges[0].node.websiteseo.title)
  store.addMetadata('description', websiteData.allWebsites.edges[0].node.websiteseo.description)
  store.addMetadata('image', websiteData.allWebsites.edges[0].node.websiteseo.image)
  store.addMetadata('siteName', websiteData.allWebsites.edges[0].node.websiteseo.siteName)
  store.addMetadata('keywords', websiteData.allWebsites.edges[0].node.websiteseo.keywords)
  store.addMetadata('author', websiteData.allWebsites.edges[0].node.websiteseo.author)
    store.addMetadata('gtmCode', websiteData.allWebsites.edges[0].node.gtmCode)
    store.addMetadata('formActionURL', websiteData.allWebsites.edges[0].node.formActionUrl)
  })


  api.loadSource(async actions => {
    const client = new GraphQLClient('https://tinyrocketswebsites.eu.pythonanywhere.com/api');
    const query = gql`{
  allWebsites(uuid: "${websiteUUID}") {
    edges {
      node {
        logo
        websiteName
        menuitemSet {
          edges {
            node {
              link
              text
              order
              isButton
            }
          }
        }
        websiteSections {
          edges {
            node {
              sectionName
              websiterepeaterblockSet {
                edges {
                  node {
                    websitetextfieldSet {
                      edges {
                        node {
                          text
                          fieldSlug
                        }
                      }
                    }
                  }
                }
              }
              clickablefieldSet {
                edges {
                  node {
                    text
                    link
                    fieldSlug
                  }
                }
              }
              websitetextfieldSet {
                edges {
                  node {
                    text
                    fieldSlug
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}

`
    // Add website sections to collections
    const websiteData = await client.request(query);
    const pageSections = actions.addCollection({
      typeName: 'pageSections'
    })
    for (const node of websiteData.allWebsites.edges[0].node.websiteSections.edges) {
        pageSections.addNode({
          sectionName: node.node.sectionName,
          textFields: node.node.websitetextfieldSet,
          repeaterBlock: node.node.websiterepeaterblockSet,
            clickableFields: node.node.clickablefieldSet,
        })
    }
    // Add siteInfo to collections
    const siteInfo = actions.addCollection({
      typeName: 'siteInfo'
    })
    console.log(websiteData.allWebsites.edges[0].node)
    siteInfo.addNode({
          siteName: websiteData.allWebsites.edges[0].node.websiteName,
          siteImage: websiteData.allWebsites.edges[0].node.logo,
        })
      // Add menu items to collections
          const menu = actions.addCollection({
      typeName: 'menu'
    })
    console.log(websiteData.allWebsites.edges[0].node.menuitemSet.edges)
  for (const node of websiteData.allWebsites.edges[0].node.menuitemSet.edges) {
      menu.addNode({
          link: node.node.link,
          text: node.node.text,
          order: node.node.order,
          isButton: node.node.isButton,
      })

  }

  })
}