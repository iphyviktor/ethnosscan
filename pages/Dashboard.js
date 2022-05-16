import { useState } from 'react'
import LatestScanTable from '../components/Dashboard/LatestScanTable'
import ScanActivity from '../components/Dashboard/ScanActivity'
import VulnChart from '../components/Dashboard/VulnChart'
import { VulnData } from './Data'


function Dashboard() {

  // grab and use vulnerability data
  

  return (
    <>
      <div className={`w-full flex items-center ml-40 mt-12 h-full`}>
        
        <div className={`w-400 mr-8`}>
          <ScanActivity />
        </div>
        <div className={`w-400`}>
          <VulnChart />
        </div>
      </div>
      <div className={`border-2 mt-12 ml-40 p-12`}>
        <LatestScanTable />
      </div>   
    </>    
    
  )
}

// Dashboard.layout = Layout

export default Dashboard