import React from 'react'
import Link from 'next/link'

function Register() {
  return (
    <>
        <div>
            <form action="">
                <div className="mt-4">
                    <input type='text' placeholder='Full Name' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>
                
                <div className="mt-4">
                    <input type='email' placeholder='Email address' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>
                <div className="mt-4">
                    <input type='password' placeholder='Password' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>

                <div className="mt-4">
                    <input type='password' placeholder='Retype Password' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button type="submit" className='px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition ease-out duration-500'>Signup</button>
                </div>
                
            </form>
        </div>
    </>
  )
}

export default Register