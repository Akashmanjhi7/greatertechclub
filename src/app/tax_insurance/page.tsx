import React from 'react'
import { SparklesCore } from '@/components/ui/sparkle'

function tax_insurance() {
  return (
    <div>
         <div>
          <div className="h-[40rem] relative w-full bg-green flex flex-col items-center justify-center overflow-hidden rounded-md">
    <div className="w-full absolute inset-0 h-screen">
      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="w-full h-full"
        particleColor="#FFFFFF"
      />
    </div>
  

  <h1 className="md:text-7xl text-3xl lg:text-6xl font-bold text-center text-white relative z-20">
      tax and insurance
    </h1>
    </div>
    </div>
    </div>
  )
}

export default tax_insurance
