import React from 'react'
import './hero.scss'

export default function hero_simple(props) {
  const { title } = props
  return (
    <div className="hero">
      <div className="hero__wrap">
        <h2>{title}</h2>
      </div>
    </div>
  )
}
