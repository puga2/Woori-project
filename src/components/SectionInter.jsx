import React from 'react'

const SectionInter = () => {
  return (
    <section className='w-full bg-[#0B67AC] mt-18 pt-20 pb-55 relative   overflow-hidden     mb-30'>
    {/* overlay  */}
    <div className='w-90 h-50 bg-gradient-to-r absolute -bottom-30 left-3 from-[#136FB3] to-[#2384C8] shadow-sm  p-10 rotate-26'>
        
    </div>



        <div className='container mx-auto px-4 sm:px-6 lg:px-15'>
            {/* rate star  */}
            <div className='flex justify-around'>
                <div>
                    <p className='text-white text-xl mb-4 '>
                    ទទួលបានការវាយតម្លៃ
                    </p>
                    <h4 className='text-5xl text-white font-extrabold'>
                    4.4 star
                    </h4>
                </div>
                <div>
                    <p className='text-white text-xl mb-4 '>
                    ទាញយក
                    </p>
                    <h4 className='text-5xl text-white font-extrabold'>
                    65,000+
                    </h4>
                </div>
            </div>
            {/* banner white  */}
            <div>

            </div>
        </div>
    </section>
  )
}

export default SectionInter