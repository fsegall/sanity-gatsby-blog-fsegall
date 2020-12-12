import {format} from 'date-fns'
import {Link} from 'gatsby'
import React from 'react'
import {buildImageObj, cn, getBlogUrl} from '../lib/helpers'
import {imageUrlFor} from '../lib/image-url'
import PortableText from './portableText'

import styles from './blog-post-preview.module.css'
import {responsiveTitle3} from './typography.module.css'

function BlogPostPreview (props) {
  console.log(props)
  return (
    <>
      <Link
        className={props.isInList ? styles.inList : styles.inGrid}
        to={!props.projectUrl ? getBlogUrl(props.publishedAt, props.slug.current) : props.projectUrl}
      >
        <div className={styles.leadMediaThumb}>
          {props.mainImage && props.mainImage.asset && (
            <img
              src={imageUrlFor(buildImageObj(props.mainImage))
                .width(600)
                .height(Math.floor((9 / 16) * 600))
                .auto('format')
                .url()}
              alt={props.mainImage.alt}
            />
          )}
        </div>
        <div className={styles.text}>
          <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
          {props._rawExcerpt && (
            <div className={styles.excerpt}>
              <PortableText blocks={props._rawExcerpt} />
            </div>
          )}
        </div>
      </Link>
      {props.projectUrl && (
        <>
          <span className={styles.description}>{props.description}</span>
          <div className={styles.links}>
            <a href={props.projectUrl} target="_blank" rel="noopener_noreferrer">Project site</a>
            <a href={props.repoUrl} target="_blank" rel="noopener_noreferrer">Repository</a>
          </div>
        </>
      )}
      <div className={styles.date}>{format(props.publishedAt, 'MMMM Do, YYYY')}</div>
    </>
  )
}

export default BlogPostPreview
