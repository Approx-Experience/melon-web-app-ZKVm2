import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider
} from 'react-router-dom'
import Root from './Root.jsx'
import './App.css'
import HomePage from './pages/HomePage.jsx'
import AllProducts from './pages/AllProducts.jsx'
import ProductPage from './pages/ProductPage.jsx'
import SignUp from './pages/SignUp.jsx'
import CartPage from './pages/CartPage.jsx'
import Checkout from './pages/Checkout.jsx'
import AddProduct from './pages/AddProduct.jsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path='browse' element={<AllProducts />} />
      <Route path='browse/:id' element={<ProductPage />} />
      <Route path='sign-up' element={<SignUp />} />
      <Route path='cart' element={<CartPage />} />
      <Route path='checkout' element={<Checkout />} />
      <Route path='admin/add-product' element={<AddProduct />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
