import React from 'react'
import './AmazonCard.css'

export default function AmazonCard({data}) {
  return (
    <div className='AmazonCard'>
      <h3>{data.title}</h3>
      {
        data.features.map(item => <p>{item}</p>)
      }
      <h4><del>{data.oldPrice}</del> {data.newPrice}</h4>
    </div>
  )
}