import '../styles/globals.css'
import Layout from '../components/Layout'

// const layouts = {
//   L1: Layout
// };


function MyApp({ Component, pageProps }) {
  // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
