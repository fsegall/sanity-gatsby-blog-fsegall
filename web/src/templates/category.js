import React from 'react'

export default function CategorySinglePage (props) {

  const {id, title, slug, description} = props.pageContext
  return (
    <>
      <h2>{title}</h2>
      <div>{description}</div>
    </>
  )
}
