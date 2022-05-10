import React from 'react'

function ScanActivity() {
  return (
    <div className={`bg-white rounded overflow-hidden shadow-xl hover:drop-shadow-xl`}>
      {/* flex */}
      <div className={`flex pt-6`}>
        <div className={`pl-12`}>
          <img src="../images/icons/activity.png" alt="activity icon"/>
        </div>
        <div>
          <h3 className={`ml-4 font-bold`}>Scan activity</h3>
        </div>
        {/* end flex */}
      </div>
      {/* start data */}
      <div className={`flex p-12 justify-evenly`}>

        <div className={`w-40 h-40 rounded-full border-2 border-indigo-300 relative justify-center items-center text-center mr-6`}>
          <span className={`relative top-12`}>
            <h2 className={`text-5xl`}>0</h2>
            <p className={`relative top-3`}>Active</p>
          </span>  
        </div>

        <div className={`w-40 h-40 rounded-full border-2 border-indigo-300 relative justify-center items-center text-center mr-6`}>
        <span className={`relative top-12`}>
            <h2 className={`text-5xl`}>0</h2>
            <p className={`relative top-3`}>Waiting</p>
          </span> 
        </div>

        <div className={`w-40 h-40 rounded-full border-2 border-indigo-300 relative justify-center items-center text-center`}>
        <span className={`relative top-12`}>
            <h2 className={`text-5xl`}>823</h2>
            <p className={`relative top-3`}>Finished</p>
          </span> 
        </div>
        
      </div>
      {/* end data */}
    </div>
  )
}

export default ScanActivity