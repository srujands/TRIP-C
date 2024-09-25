import React from 'react'
// import './CompanyStats.css'
import { aboutuscarvideo, airplanevideo, govpsutravelvideo } from '../src/assets'

const CompanyStats = () => {
    return (
        <div className="relative w-full min-h-screen">
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={govpsutravelvideo}
          type="video/mp4"
          autoPlay
          loop
          muted
        >
          Your browser does not support the video tag.
        </video>
            <div className="stats-wrapper absolute top-[15%] left-[12%]">
                
                <div className="company-stat flex items-center mb-[30px] gap-[40px]">
                    <img src="https://www.carzonrent.com/webcor/images/icons/happycustomers.svg" alt="" />
                    <div className="stat-detail text-gray-300">
                        <div className="stat-detail-header text-[34px] font-bold">10 Million+</div>
                        <div className="stat-detail-sub-header text-[22px] font-semibold">Happy Customers</div>
                    </div>
                </div>
                
                <div className="company-stat flex items-center mb-[30px] gap-[40px]">
                    <img src="https://www.carzonrent.com/webcor/images/icons/corporateserved.svg" alt="" />
                    <div className="stat-detail text-gray-300">
                        <div className="stat-detail-header text-[34px] font-bold">600+</div>
                        <div className="stat-detail-sub-header text-[22px] font-semibold">Corporates Served</div>
                    </div>
                </div>
                
                <div className="company-stat flex items-center mb-[30px] gap-[40px]">
                    <img src="https://www.carzonrent.com/webcor/images/icons/23yrsservice%20excellence.svg" alt="" />
                    <div className="stat-detail text-gray-300">
                        <div className="stat-detail-header text-[34px] font-bold">24 Years</div>
                        <div className="stat-detail-sub-header text-[22px] font-semibold">Of Service Excellence</div>
                    </div>
                </div>
                
                <div className="company-stat flex items-center mb-[30px] gap-[40px]">
                    <img src="https://www.carzonrent.com/webcor/images/icons/servicingcities.svg" alt="" />
                    <div className="stat-detail text-gray-300">
                        <div className="stat-detail-header text-[34px] font-bold">79+</div>
                        <div className="stat-detail-sub-header text-[22px] font-semibold">Servicing Cities</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CompanyStats
