import React from 'react'

const Title = ({title, spannedTitle}) => {
  return (
    <div className="section-title">
    <h2>{title} <span>{spannedTitle}</span></h2>
  </div>
  )
}

export default Title