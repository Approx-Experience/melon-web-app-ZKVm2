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

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Root />}>
      <Route index element={<HomePage />} />
      <Route path='browse' element={<AllProducts />} />
      <Route path='product/:id' element={<ProductPage />} />
    </Route>
  )
)

function App() {
  return <RouterProvider router={router} />
}

export default App
