import Link from 'next/link'

function Login() {
  return (
    <>
        <div>
            <form action="">
                <div className="mt-4">
                    <input type='email' placeholder='Email address' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>
                <div className="mt-4">
                    <input type='password' placeholder='Password' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>
                <div className="flex items-center justify-between mt-4">
                    <button type="submit" className='px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition ease-out duration-500'>Login</button>
                    <Link href='/account/resetpassword'>
                        <a className='text-sm hover:underline text-red-400'>Forget Password?</a>
                    </Link>
                </div>
                
            </form>
        </div>
    </>
  )
}

export default Login