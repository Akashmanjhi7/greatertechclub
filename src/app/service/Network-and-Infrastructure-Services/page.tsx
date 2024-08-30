import React from 'react'
import { SparklesCore } from '@/components/ui/sparkle'
import { FloatingDock } from '@/components/ui/floating-doc'
import { FloatingDockDemo } from '@/components/ui/FooterComponent'
import Button from '@/components/ui/button'
import Banner from '@/components/ui/banner'
import HeroSection from '@/components/ui/hero'

function NetworkAndInfrastructutre() {
  return (
    <div>
      {/* hero-section */}
      <HeroSection
     title="Tax Insurance"
      imgurl="https://img.freepik.com/premium-photo/smart-city-network_1179475-10573.jpg?w=996"
      text="
Emphasize how your software solutions are designed to seamlessly integrate with tax and insurance processes, making it easier for businesses to manage their financial and compliance needs." /> 
        
        {/* service we provide section */}
        <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">App Development</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Unified Monitoring and Management:</h1>
                <p className="leading-relaxed mb-3">The software provides a centralized platform for monitoring all aspects of network and infrastructure performance, including servers, routers, switches, and cloud services. This unified approach allows businesses to detect and address issues proactively, ensuring minimal downtime and maintaining a stable, reliable infrastructure.

</p>
              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">app dev</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Automated Updates and Patching:</h1>
                <p className="leading-relaxed mb-3">By integrating automated update and patch management features, your software ensures that all network devices and infrastructure components are kept up-to-date with the latest security patches and firmware updates. This helps to protect against vulnerabilities and security threats, reducing the risk of breaches and maintaining a secure operational environment.</p>


              </div>
            </div>
            <div className="p-4 lg:w-1/3">
              <div className="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                {/* <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">CATEGORY</h2> */}
                <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">Scalable Architecture and Resource Optimization:</h1>
                <p className="leading-relaxed mb-3">
                The software is designed to scale with the growing needs of a business, enabling seamless integration of additional network resources and infrastructure components as required. It optimizes the allocation and utilization of resources, ensuring efficient performance and cost-effectiveness while allowing businesses to expand their network and infrastructure without disruption.</p>


              </div>
            </div>
          </div>
        </div>
      </section>


        {/* banner section */}
       <Banner title="Crafting Your Digital Dreams with Precision and Passion"
       text1="Boost your online presence with our custom,"
       text2=" "
       imgurl="https://img.freepik.com/free-photo/income-tax-return-deduction-refund-concept_53876-134000.jpg?t=st=1725013365~exp=1725016965~hmac=fcfac579e96c05c764a770b9e601c9622e6c04ecc15140e91473827ea9833eaa&w=826"/>


      
    </div>
  )
}

export default NetworkAndInfrastructutre
