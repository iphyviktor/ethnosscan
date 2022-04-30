import Link from 'next/link'
import Login from '../../components/Login'

function login() {
  return (
      <>
        <div className='flex justify-center items-center'>
            {/* background image */}
            <div className='bg-login-background bg-cover bg-no-repeat w-1/2 h-screen'>
                <h3 className='text-white'>Keeping your IT frastructure save</h3>
            </div>
            {/* login form */}
            <div className='w-1/2 pl-14 pr-14'>
                <div>
                    <img src='../images/logo.png' alt='logo' className='mb-20'/>
                    <h2 className='text-lg font-bold mb-6'>Login to your account</h2>
                </div>
                <div className='justify-center items-center'>
                    <Login />
                </div>
                <div className=''>
                    <h3>Need an account?</h3>
                    <Link href="/register">
                        <a>Signup</a>
                    </Link>
                </div>   
            </div>
        </div>
      </>
    
  )
}

export default login