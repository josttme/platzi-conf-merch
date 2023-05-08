import Products from '../components/Products'
import initialState from '../data/initialState.json'

export default function Home () {
  const products = initialState.products
  return (
    <Products products={products} />

  )
}
