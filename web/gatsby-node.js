const {isFuture} = require('date-fns')
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const {format} = require('date-fns')

async function createPortfolioPage (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityProject {
        nodes {
          _id
          publishedAt
          authors {
            author {
              name
              id
              slug {
                current
              }
              image {
                asset {
                  fluid(maxWidth: 300) {
                    base64
                    aspectRatio
                    src
                    srcSet
                    srcWebp
                    srcSetWebp
                    sizes
                  }
                }
              }
            }
          }
          body {
            sanityChildren {
              text
            }
          }
          projectUrl
          repoUrl
          title
          description
          slug {
            current
          }
          mainImage {
            asset {
              _id
              fluid(maxWidth: 300) {
                base64
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                aspectRatio
              }
              id
            }
            alt
          }
        }
        totalCount
      }
    }`)

  if (result.errors) throw result.errors

  const projectNodes = (result.data.allSanityProject || {}).nodes || []

  const path = `/portfolio/`

  createPage({
    path,
    component: require.resolve('./src/pages/archive.js'),
    context: {
      projectNodes
    }
  })
}

async function createBlogPostPages (graphql, actions) {
  const {createPage} = actions
  const result = await graphql(`
    {
      allSanityPost(
        filter: { slug: { current: { ne: null } }, publishedAt: { ne: null } }
      ) {
        totalCount
        edges {
          node {
            id
            publishedAt
            slug {
              current
            }
          }
        }
      }
      allSanityCategory {
        edges {
          node {
            id
            title
            slug {
              current
            }
            description
          }
        }
      }
    }
  `)

  if (result.errors) throw result.errors

  const postEdges = (result.data.allSanityPost || {}).edges || []
  const categoryEdges = (result.data.allSanityCategory || {}).edges || []

  postEdges
    .filter(edge => !isFuture(edge.node.publishedAt))
    .forEach((edge, index) => {
      const {id, slug = {}, publishedAt} = edge.node
      const dateSegment = format(publishedAt, 'YYYY/MM')
      const path = `/blog/${dateSegment}/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/templates/blog-post.js'),
        context: {id}
      })
    })

  categoryEdges
    .forEach((edge, index) => {
      const {id, title, slug = {}, description} = edge.node
      const path = `/blog/category/${slug.current}/`

      createPage({
        path,
        component: require.resolve('./src/pages/archive.js'),
        context: {
          id,
          title,
          slug: slug.current,
          description
        }
      })
    })
}

exports.createPages = async ({graphql, actions}) => {
  await createBlogPostPages(graphql, actions)
  await createPortfolioPage(graphql, actions)
}
