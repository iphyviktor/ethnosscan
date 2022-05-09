import Link from 'next/link'
import SidebarMenu from './SidebarMenu'
import TopNavbar from "./TopNavbar"

const Layout = ({ children }) => {
    return(
        <>
            
            <TopNavbar />
            {/* <SidebarMenu /> */}
            <div>{children}</div>
            {/* Tesing footer */}
        </>
    )
}

export default Layout

