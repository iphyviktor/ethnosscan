import React from 'react'

function Resetpassword() {
  return (
    <>
        <div>
            <form action="">
                
                <div className="mt-4">
                    <input type='password' placeholder='Old Password' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>

                <div className="mt-4">
                    <input type='password' placeholder='New Password' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>

                <div className="mt-4">
                    <input type='password' placeholder='Retype Password' className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-bluee-600" />
                </div>

                <div className="flex items-center justify-between mt-4">
                    <button type="submit" className='px-6 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 transition ease-out duration-500'>Reset Password</button>
                </div>
                
            </form>
        </div>
    </>
  )
}

export default Resetpassword