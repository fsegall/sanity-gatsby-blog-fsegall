import {Link} from 'gatsby'
import React from 'react'
import BlogPostPreview from './blog-post-preview'

import styles from './blog-post-preview-grid.module.css'

function BlogPostPreviewGrid (props) {
  if(!props?.projects) {
  return (
    <div className={styles.root}>
      {props.title && <h2 className={styles.headline}>{props.title}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <BlogPostPreview {...node} />
            </li>
          ))}
      </ul>
      {props.browseMoreHref && (
        <div className={styles.browseMoreNav}>
          <Link to={props.browseMoreHref}>Browse more</Link>
        </div>
      )}
    </div>
  )
  } else {
          return <div className={styles.root}>
          {props.title && <h2 className={styles.headline}>{props.title}</h2>}
          <ul className={styles.grid}>
            {props?.projects.map(node => {
              return (
                <li key={node._id}>
                  <BlogPostPreview {...node} />
                </li>
              )
              })}
          </ul>
          </div>
    }
}

BlogPostPreviewGrid.defaultProps = {
  title: '',
  nodes: [],
  browseMoreHref: ''
}

export default BlogPostPreviewGrid
