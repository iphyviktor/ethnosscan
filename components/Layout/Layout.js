import Link from 'next/link'
import TopNavbar from "./TopNavbar"

const Layout = ({ children }) => {
    return(
        <>
            <TopNavbar />
            <div>{children}</div>
            {/* Tesing footer */}
        </>
    )
}

export default Layout

