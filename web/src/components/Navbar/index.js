import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby';
import styles from './index.module.css'

export default function Navbar () {
  const {categories} = useStaticQuery(graphql`
  query {
    categories: allSanityCategory {
      edges {
        node {
        id,
        title,
        description,
        slug {
          current
        }
      }}
    }
  }
`)

  return (
    <nav className={styles.navBar}>
      <ul>
        {categories && categories.edges.map(category => <li key={category.node.id}><Link to={`/blog/category/${category.node.slug.current}`}>{category.node.title}</Link></li>)}
      </ul>
    </nav>
  )
}
