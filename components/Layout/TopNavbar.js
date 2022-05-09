import React from 'react'

function TopNavbar() {
  return (
      <>
        <div className='flex justify-between bg-slate-200'>
            <div>
                <img src='../../images/logo.png' alt='logo'/>
            </div>
            <div>
                <img src='../../images/icons/profile-placeholder.png' alt='profile image' />
            </div>    
        </div>  
      </>
    
  )
}

export default TopNavbar