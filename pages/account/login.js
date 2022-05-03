import Link from 'next/link'
import Login from '../../components/Login'

function login() {
  return (
      <>
        <div className='flex justify-center items-center'>
            {/* background image */}
            <div className='bg-login-background bg-cover bg-no-repeat w-1/2 h-screen text-white flex flex-col justify-center items-center'>
                <div>
                    <h1 className='text-4xl font-extrabold'>Ethnos Vulnerability Scanner</h1>
                    <p className='text-lg font-bold'>Using up-to-date CVEs, gain insight into the security <br/> posture of your information assets</p>
                </div>
                
            </div>
            {/* login form */}
            <div className='w-1/2 pl-14 pr-14'>
                <div>
                    <img src='../images/logo.png' alt='logo' className='mb-20'/>
                    <h1 className='text-lg font-bold mb-6'>Login to your account</h1>
                </div>
                <div className='justify-center items-center'>
                    <Login />
                </div>
                <div className='flex flex-col mt-10'>
                    <h3 className='font-Roboto place-self-center text-slate-400'>Need an account?</h3>
                    <Link href="register">
                        <a className='text-lg place-self-center text-red-400 hover:text-red-700 mt-4'>Signup Here</a>
                    </Link>
                </div>   
            </div>
        </div>
      </>
    
  )
}

export default login