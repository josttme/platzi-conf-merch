import { useContext } from 'react'
import PropTypes from 'prop-types'
import Product from './Product'
import Context from '../context/Context'

export default function Products () {
  const { state, addToCart } = useContext(Context)
  const { products } = state
  const handleAddToCart = product => {
    addToCart(product)
  }
  return (
    <div className='grid p-4 grid-cols-1 place-items-center sm:grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto'>
      {products.map(product => (
        <Product
          key={product.id}
          product={product}
          handleAddToCart={handleAddToCart}
        />
      ))}

    </div>
  )
}

Products.propTypes = {
  products: PropTypes.array.isRequired
}
