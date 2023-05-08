import { Link } from 'react-router-dom'
import Context from '../context/Context'
import { useContext } from 'react'

export default function Header () {
  const { state } = useContext(Context)
  const { cart } = state
  return (
    <div>
      Header
      <Link to='/checkout'>
        Checkout
      </Link>
      {cart.length > 0 && <p>{cart.length}</p>}
    </div>
  )
}
