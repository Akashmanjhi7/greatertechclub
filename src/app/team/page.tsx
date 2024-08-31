import React from 'react'
import Image from 'next/image'
import { SparklesCore } from '@/components/ui/sparkle'
const teamPage = () => {
  return (



    // <div className="h-[full] relative w-full bg-green flex flex-col items-center justify-center overflow-hidden rounded-md">
    //    <div className="w-full absolute inset-0 h-screen">
    //     <SparklesCore
    //     id="tsparticlesfullpage"
    //       background="transparent"
    //       minSize={0.6}
    //       maxSize={1.4}
    //       particleDensity={100}
    //        className="w-full h-full"
    // particleColor="#FFFFFF"
    //     />
    //   </div>
      

    <div className='mt-3'>
      <div className="font-[sans-serif] my-4 mt-52 z-auto">
        <div className="max-w-5xl max-lg:max-w-2xl mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-gray-300 text-4xl font-extrabold">Meet our team</h2>
            <p className="text-gray-200 text-sm mt-4 leading-relaxed">Veniam proident aute magna anim excepteur et ex consectetur velit ullamco veniam minim aute sit. Ullamco nisi enim ipsum irure laboris ad ut. Esse cupidatat deserunt magna aute.</p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 max-md:justify-center mt-12">
            <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="https://readymadeui.com/team-1.webp" className="w-full h-60 object-contain object-top bg-gray-200" />

              <div className="p-4">
                <h4 className="text-gray-200 text-base font-bold">Dipanshu</h4>
                <p className="text-gray-300 text-xs mt-1">Director</p>

                <div className="mt-4">
                  <p className="text-gray-400 text-sm leading-relaxed">Director of the
                    company</p>
                </div>

              </div>
            </div>

            <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="https://readymadeui.com/team-2.webp" className="w-full h-60 object-contain object-top bg-gray-200" />

              <div className="p-4">
                <h4 className="text-gray-200 text-base font-bold">Aman</h4>
                <p className="text-gray-300 text-xs mt-1">Project manager</p>

                <div className="mt-4">
                  <p className="text-gray-400 text-sm leading-relaxed">Having 3+ years of experience.</p>
                </div>
              </div>
            </div>


            <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="https://readymadeui.com/team-3.webp" className="w-full h-60 object-contain object-top bg-gray-200" />

              <div className="p-4">
                <h4 className="text-gray-200 text-base font-bold">Mohit</h4>
                <p className="text-gray-300 text-xs mt-1">Web Designer</p>

                <div className="mt-4">
                  <p className="text-gray-400 text-sm leading-relaxed">1+ year experience in website designing</p>
                </div>
              </div>
            </div>

            <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="bablu.jpg" className="w-full h-60 object-contain object-top bg-gray-200" />


              <div className="p-4">
                <h4 className="text-gray-200 text-base font-bold">Bablu Kumar</h4>
                <p className="text-gray-300 text-xs mt-1">Fullstack Developer</p>

                <div className="mt-4">
                  <p className="text-gray-400 text-sm leading-relaxed">2+ years of experience in wesite development</p>
                </div>

              </div>
            </div>

            <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="https://readymadeui.com/team-5.webp" className="w-full h-60 object-contain object-top bg-gray-200" />

              <div className="p-4">
                <h4 className="text-gray-200 text-base font-bold">Chaman Kumar</h4>
                <p className="text-gray-300 text-xs mt-1">Software Engineer</p>

                <div className="mt-4">
                  <p className="text-gray-400 text-sm leading-relaxed">5+ years of experince.</p>
                </div>
              </div>
            </div>

            <div className="border rounded-md overflow-hidden max-md:max-w-[300px]">
              <img src="https://readymadeui.com/team-6.webp" className="w-full h-60 object-contain object-top bg-gray-200" />

              <div className="p-4">
                <h4 className="text-gray-200 text-base font-bold">Rohit</h4>
                <p className="text-gray-300 text-xs mt-1">Business analyst</p>

                <div className="mt-4">
                  <p className="text-gray-400 text-sm leading-relaxed">4+ years of experience.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   
  )
}

export default teamPage
