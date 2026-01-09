import { Outlet } from "react-router"
import Footer from "../components/footer"
import Navigationbar from "../components/Navbar"


function MainLayouts(){
    return(
        <>
          <Navigationbar />
          <Outlet/>
          <Footer/>
        </>
    )
}
export default MainLayouts;