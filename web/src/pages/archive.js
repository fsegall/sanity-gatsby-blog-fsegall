import React from 'react'
import {graphql} from 'gatsby'
import {mapEdgesToNodes} from '../lib/helpers'
import BlogPostPreviewGrid from '../components/blog-post-preview-grid'
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import SEO from '../components/seo'

import {responsiveTitle1} from '../components/typography.module.css'

export const query = graphql`
  query CategoryPageQuery ($slug: String) {
    posts: allSanityPost(
      sort: { fields: [publishedAt], order: DESC }
      filter: { slug: { current: { ne: null } }, publishedAt: { ne: null }, categories: {elemMatch: {slug: {current: {eq: $slug}}} }}
      ) {
      totalCount
      edges {
        node {
          id
          publishedAt
          mainImage {
            ...SanityImage
            alt
          }
          title
          _rawExcerpt
          slug {
            current
          }
        }
      }
    }
  }
`

const ArchivePage = props => {
  console.log('props', props)
  const {data, errors, pageContext} = props

  if (errors) {
    return (
      <>
        <GraphQLErrorList errors={errors} />
      </>
    )
  }

  const postNodes = data && data.posts && mapEdgesToNodes(data.posts)

  return (
    <>
      <SEO title={pageContext.title || 'Archive'} />
      <Container>
        {Object.values(pageContext?.projectNodes || {}).length ? <h1 className={responsiveTitle1}>My Projects</h1> : <h1 className={responsiveTitle1}>{pageContext.title || 'Archive'}</h1>}
        <h3>{pageContext.description}</h3>{/* <span>{data.posts.totalCount}</span> */}
        {postNodes && postNodes.length > 0 && <BlogPostPreviewGrid nodes={postNodes} projects={pageContext.projectNodes} />}
      </Container>
    </>
  )
}

export default ArchivePage
