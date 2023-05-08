import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import Checkout from '../pages/Checkout'
import Information from '../pages/Information'
import Payment from '../pages/Payment'
import NotFound from '../pages/NotFound'
import Success from '../pages/Success'
import Context from '../context/Context'
import useInitialState from '../hooks/useInitialState'

export default function App () {
  const initialState = useInitialState()
  return (
    <Context.Provider value={initialState}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/checkout/information' element={<Information />} />
            <Route path='/checkout/payment' element={<Payment />} />
            <Route path='/checkout/success' element={<Success />} />
            <Route path='*' element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Context.Provider>
  )
}
