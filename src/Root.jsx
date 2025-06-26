import MelonNavbar from './components/Navbar.jsx'
import { Outlet } from 'react-router-dom'

const Root = () => {
  return (
    <>
      <MelonNavbar />
      <Outlet />
    </>
  )
}

export default Root
