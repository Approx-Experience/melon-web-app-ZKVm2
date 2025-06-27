import MelonNavbar from './components/Navbar.jsx'
import MobileNavigationBar from './components/MobileNavigationBar'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <MelonNavbar />
      <MobileNavigationBar />
      <Outlet />
    </>
  )
}

export default Root
