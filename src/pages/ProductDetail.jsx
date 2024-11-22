import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetail() {
 let {productId} = useParams() //parametreleri obje olarak verme 
    return (
    <div>
     Ürün : {productId}
    </div>
  )
}
