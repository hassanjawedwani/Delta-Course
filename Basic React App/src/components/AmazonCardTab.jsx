import React from 'react'
import AmazonCard from './AmazonCard'
import './AmazonCardTab.css';

export default function AmazonCardTab() {
  const data = [
    {
      title: "Shoes",
      features: ["Fantasic", "High quality", "Comfortable"],
      oldPrice: 2030,
      newPrice: 1999
    },
    {
      title: "Mobile",
      features: ["Fantasic", "High quality", "Comfortable"],
      oldPrice: 3070,
      newPrice: 2999
    },
    {
      title: "Laptop",
      features: ["Fantasic", "High quality", "Comfortable"],
      oldPrice: 4030,
      newPrice: 1999
    },
    {
      title: "Watch",
      features: ["Fantasic", "High quality", "Comfortable"],
      oldPrice: 1030,
      newPrice: 999
    },
  ];
  
  return (
    <div className='AmazonCardTab'>
      {
        data.map(item => (<AmazonCard data={item} />))
      }
    </div>
  )
}
