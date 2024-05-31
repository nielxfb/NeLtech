import Footer from "../components/footer"
import Navbar from "../components/navbar"
import { IChildren } from "../interfaces/children-interface"

function NavbarLayout({children}: IChildren) {
  return (
    <>
        <Navbar />
        {children}
        <Footer />
    </>
  )
}

export default NavbarLayout