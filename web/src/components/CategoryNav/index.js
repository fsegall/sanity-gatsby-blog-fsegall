import React from 'react'
import {Link} from 'gatsby'
import styles from './index.module.css'

export default function CategoryNav ({categories}) {
  console.log(categories)
  return (
    <nav role='secondaryNav' className={styles.secondaryNav}>
      <ul>
        <h3>Filter by: </h3>
        {categories && categories.edges.map(category => <li key={category.node.id}><Link to={`blog/category/${category.node.slug.current}`}>{category.node.title}</Link></li>)}
      </ul>
    </nav>
  );
}
