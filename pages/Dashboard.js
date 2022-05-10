import React from 'react'
import LatestScanTable from '../components/Dashboard/LatestScanTable'
import ScanActivity from '../components/Dashboard/ScanActivity'

function Dashboard() {
  return (
    <>
      <ScanActivity />
      <LatestScanTable />
    </>
  )
}

// Dashboard.layout = Layout

export default Dashboard