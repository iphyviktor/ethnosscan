import '../../styles/Dashboard.module.css'

function TopNavbar() {
  return (
      <>
        <div className='flex justify-between items-center bg-slate-100 h-16'>
            <div className='ml-6'>
                <img src='../../images/ethnosLogo.png' alt='logo'/>
            </div>
            <div className='mr-6'>
                <img src='../../images/icons/profile-placeholder.png' alt='profile image' />
            </div>    
        </div>  
      </>
    
  )
}

export default TopNavbar