import React from 'react'
import VulnerabilitySummary from './VulnerabilitySummary'

function LatestScanTable() {
  return (
    <div>
        <table className={`w-full table-auto`}>
            <thead className={`bg-gray-200`}>
                <tr>
                    <th>Target</th>
                    <th>Platform</th>
                    <th>Start Date</th>
                    <th>Status</th>
                    <th>Summary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    {/* android */}
                    <td>example android limited</td>
                    <td>
                        {/* platform images */}
                        <img src="../../images/icons/android-icon.png" alt="android" />
                    </td>
                    <td>
                        21-03-2022
                    </td>
                    <td>finished</td>
                    <td>
                        {/* summary component */}
                        <VulnerabilitySummary />
                    </td>
                </tr>
                {/* web */}
                <tr>
                    <td>ethnos.com.ng</td>
                    <td>
                        {/* platform images */}
                        <img src="../../images/icons/chrome 4.png" alt="web" />
                    </td>
                    <td>
                        21-03-2022
                    </td>
                    <td>finished</td>
                    <td>
                        {/* summary component */}
                        <VulnerabilitySummary />
                    </td>
                </tr>
                {/* ios */}
                <tr>
                    <td>Apple pj limited</td>
                    <td>
                        {/* platform images */}
                        <img src="../../images/icons/ios-icon.png" alt="ios device" />
                    </td>
                    <td>
                        22-01-2022
                    </td>
                    <td>finished</td>
                    <td>
                        {/* summary component */}
                        <VulnerabilitySummary />
                    </td>
                </tr>
                <tr>
                    <td>example technology limited</td>
                    <td>
                        {/* platform images */}
                        <img src="../../images/icons/chrome 4.png" alt="android" />
                    </td>
                    <td>
                        21-03-2022
                    </td>
                    <td>finished</td>
                    <td>
                        {/* summary component */}
                        <VulnerabilitySummary />
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default LatestScanTable