import React from 'react'
import styles from './product.module.css'
import { ProductProps } from './types'

const Producto = (props: ProductProps) => {
  const {title, description} = props //deestructurando las props  
  return (
    <div className={styles.productContainer}>
        <h1>{title}</h1>
        <p>{description}</p>
        <button>Comprar</button>
    </div>
  )
}

export default Producto