import React from 'react'
import {Helmet} from 'react-helmet'

function Head({name, title, content}) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name={name} content={content} />
    </Helmet>
  )
}

export default Head