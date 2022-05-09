import Link from 'next/link'
import SidebarMenu from './SidebarMenu'
import TopNavbar from "./TopNavbar"

const Layout = ({children}) => {
    return(
        <>
            <TopNavbar />
            <div className={`flex`}>
                <div>
                    <SidebarMenu />
                </div>
                <div>
                <div>{children}</div>
                </div>
            </div>
            
        </>
    )
}

export default Layout

