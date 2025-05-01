import React from 'react'
import sectinLeft from '../../src/assets/images/carousel/sectionLeft.jpg';
const SectionInfo = () => {
  return (
   <section className=''>
        <div className=" container mx-auto px-4  sm:px-6  lg:px-15">
            <h2 className='text-black text-5xl text-center my-18'>
            ធនាគារដែលផ្តល់សេវាហិរញ្ញវត្ថុផ្ទាល់ខ្លួន និងអាជីវកម្មជិត <br /> លោកអ្នកបំផុត
            </h2>
            <div className='flex justify-between   gap-7 '>
              <div className='bg-yellow-700 pt-11  pb-96 px-9 rounded-4xl overflow-hidden relative'>
                <h3 className='text-4xl text-black font-bold mb-5'>
                សេវាបុគ្គល
                </h3>
                <p className='text-xl text-black'>យើង គឺជាកន្លែងដែលនៅជិតលោកអ្នកបំផុតក្នុងការសន្សំ និងជួយឱ្យប្រាក់របស់អ្នករីកលូតលាស់ជាមួយនឹងសេវាធនាគាររហ័ស ងាយស្រួលប្រកបដោយទំនុកចិត្ត។</p>

              <div className='absolute -bottom-9  left-0  overflow-hidden  rounded-se-full w-96 h-96'  style={{
                backgroundImage: `url(${sectinLeft})`,
                backgroundSize: "cover",
                backgroundPosition: "left",
              }}>
                {/* <img src={sectinLeft} alt="" className='w-full h-full object-cover image' style={{ transform: "scaleX(-1) ", objectPosition: "10re right" }} /> */}
              
              </div>
              </div>

              <div className='bg-yellow-700 py-11 px-9 rounded-4xl'>
                <h3 className='text-4xl text-black font-bold mb-5'>
                សេវាបុគ្គល
                </h3>
                <p className='text-xl text-black'>យើង គឺជាកន្លែងដែលនៅជិតលោកអ្នកបំផុតក្នុងការសន្សំ និងជួយឱ្យប្រាក់របស់អ្នករីកលូតលាស់ជាមួយនឹងសេវាធនាគាររហ័ស ងាយស្រួលប្រកបដោយទំនុកចិត្ត។</p>

              </div>
            
            </div>
        </div>
   </section>
  )
}

export default SectionInfo