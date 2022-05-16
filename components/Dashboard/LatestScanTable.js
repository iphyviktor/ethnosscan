import React from 'react'
import VulnerabilitySummary from './VulnerabilitySummary'
import Link from 'next/link'

function LatestScanTable() {
  return (
    <div>
        <div className={`flex pt-6`}>
            <div className={`mb-4`}>
                <img src="../images/icons/latest-scan.png" alt="latest scan icon"/>
            </div>
            <div>
                <h3 className={`ml-4 font-bold`}>Latest Scans</h3>
            </div>
            {/* end flex */}
        </div>
        <table className={`w-full table-auto`}>
            <thead className={`bg-red-600`}>
                <tr className={`text-white font-bold`}>
                    <th className={`p-2 text-left`}>Target</th>
                    <th className={`p-2 text-left`}>Platform</th>
                    <th className={`p-2 text-left`}>Start Date</th>
                    <th className={`p-2 text-left`}>Status</th>
                    <th className={`p-2 text-left`}>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr className={`odd:bg-gray-200`}>
                    {/* android */}
                    <td className={`p-2`}>example android limited</td>
                    <td className={`p-2`}>
                        {/* platform images */}
                        <img src="../../images/icons/android-icon.png" alt="android" />
                    </td>
                    <td className={`p-2`}>
                        21-03-2022
                    </td>
                    <td className={`p-2`}>finished</td>
                    <td className={`p-2`}>
                        {/* summary component */}
                        <VulnerabilitySummary />
                    </td>
                </tr>
                {/* web */}
                <tr className={`odd:bg-gray-200`}>
                    <td className={`p-2`}>ethnos.com.ng</td>
                    <td className={`p-2`}>
                        {/* platform images */}
                        <img src="../../images/icons/chrome 4.png" alt="web" />
                    </td>
                    <td className={`p-2`}>
                        21-03-2022
                    </td>
                    <td className={`p-2`}>finished</td>
                    <td className={`p-2`}>
                        {/* summary component */}
                        <VulnerabilitySummary />
                    </td>
                </tr>
                {/* ios */}
                <tr className={`odd:bg-gray-200`}>
                    <td className={`p-2`}>Apple pj limited</td>
                    <td className={`p-2`}>
                        {/* platform images */}
                        <img src="../../images/icons/ios-icon.png" alt="ios device" />
                    </td>
                    <td className={`p-2`}>
                        22-01-2022
                    </td>
                    <td className={`p-2`}>finished</td>
                    <td className={`p-2`}>
                        {/* summary component */}
                        <VulnerabilitySummary />
                    </td>
                </tr>
                <tr className={`odd:bg-gray-200`}>
                    <td className={`p-2`}>example technology limited</td>
                    <td className={`p-2`}>
                        {/* platform images */}
                        <img src="../../images/icons/chrome 4.png" alt="android" />
                    </td>
                    <td className={`p-2`}>
                        21-03-2022
                    </td>
                    <td className={`p-2`}>finished</td>
                    <td className={`p-2`}>
                        {/* summary component */}
                        <VulnerabilitySummary />
                    </td>
                </tr>
            </tbody>
        </table>
        <div className={`text-right cursor-pointer text-red-600`}>
            <Link href={`/scans`}>
                <p className={`text-sm`}>See all scans <span className={`text-lg`}>&rarr;</span> </p>
            </Link>
            
        </div>
    </div>
  )
}

export default LatestScanTable