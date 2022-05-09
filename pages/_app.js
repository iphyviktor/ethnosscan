import App from 'next/app'
import '../styles/globals.css'
import Layout from '../components/Layout/Layout'

// const layouts = {
//   L1: Layout
// };


// function MyApp({ Component, pageProps, router }) {
//   // const Layout = layouts[Component.layout] || ((children) => <>{children}</>);
 
//   return (
    
//     <Layout>
//       <Component {...pageProps} />
//     </Layout>
//   )
// }
class MyApp extends App{
  render(){
    const { Component, pageProps, router} = this.props;

    if(router.pathname.startsWith('/account')){
      return(
        <Component {...pageProps} />
      )
    }

    // if(router.pathname.startsWith('/errors')){
    //   return(
    //     <Component {...pageProps} />
    //   )
    // }
    

    return(
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }

}

export default MyApp
