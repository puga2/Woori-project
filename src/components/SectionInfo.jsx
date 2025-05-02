import React from "react";
import sectionLeft from "../../src/assets/images/carousel/sectionLeft.jpg";
import sectionRight from "../../src/assets/images/carousel/sectionRight.jpg";
import saving from "../../src/assets/images/section/saving.png";
import loan from "../../src/assets/images/section/loan.png";
import group from "../../src/assets/images/section/group.png";
import deposit from "../../src/assets/images/section/deposit.png";
import transfer from "../../src/assets/images/section/transfer.png";
import group2 from "../../src/assets/images/section/group2.png"; 
import wooriLogo from "../../src/assets/images/section/wooriLogo.png";
import MBcircle from "../../src/assets/images/section/MBcircle.png";
import icon1 from "../../src/assets/images/section/Icon-1.png";
import icon2 from "../../src/assets/images/section/Icon-2.png";
import icon3 from "../../src/assets/images/section/Icon-3.png";  

import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router";
const SectionInfo = () => {
  return (
    <section className="">
      <div className=" container mx-auto px-4  sm:px-6  lg:px-15 gap-7">
        <h2 className="text-black text-5xl text-center my-18">
          ធនាគារដែលផ្តល់សេវាហិរញ្ញវត្ថុផ្ទាល់ខ្លួន និងអាជីវកម្មជិត <br />{" "}
          លោកអ្នកបំផុត
        </h2>
        <div className="flex justify-between   gap-7 ">
          <div
            className="bg-white pt-11 relative  pb-[28rem] px-9 rounded-4xl overflow-hidden "
            style={{
              backgroundImage: `url(${sectionLeft})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          >
            <h3 className="text-4xl text-black font-bold mb-5">សេវាបុគ្គល</h3>
            <p className="text-xl text-black">
              យើង គឺជាកន្លែងដែលនៅជិតលោកអ្នកបំផុតក្នុងការសន្សំ
              និងជួយឱ្យប្រាក់របស់អ្នករីកលូតលាស់ជាមួយនឹងសេវាធនាគាររហ័ស
              ងាយស្រួលប្រកបដោយទំនុកចិត្ត។
            </p>

            <Link className="absolute bottom-3 right-6 p-4 rounded-full bg-[#0B67AC]">
              {" "}
              <BsArrowRight className="size-7" />
            </Link>
          </div>
          <div
            className="bg-white pt-11 relative pb-[28rem] px-9 rounded-4xl overflow-hidden "
            style={{
              backgroundImage: `url(${sectionRight})`,
              backgroundSize: "cover",
              backgroundPosition: "center bottom",
            }}
          >
            <h3 className="text-4xl text-black font-bold mb-5">សេវាអាជីវកម្ម</h3>
            <p className="text-xl text-black">
              យើង គឺជាកន្លែងដែលនៅជិតលោកអ្នកបំផុតក្នុងការសន្សំ
              និងជួយឱ្យប្រាក់របស់អ្នករីកលូតលាស់ជាមួយនឹងសេវាធនាគាររហ័ស
              ងាយស្រួលប្រកបដោយទំនុកចិត្ត។
            </p>
            <Link className="absolute bottom-3 right-6 p-4 rounded-full bg-[#0B67AC]">
              <BsArrowRight className="size-7" />
            </Link>
          </div>
        </div>

        {/* category items  */}
        <div className="service bg-white mt-7 rounded-4xl p-10">
          <h3 className="text-[#0B67AC] font-bold text-xl tracking-wide ">
            សេវាបុគ្គល
          </h3>
          <div className="flex items-end justify-end my-4">
            <Link className="ms-auto bg-[#E9F6FA] px-5 py-4 rounded-xl text-[#62CEF6]">
              ស្វែងយល់ពីសេវាកម្ម
            </Link>
          </div>
          <div className="flex justify-start gap-25">
            <div>
              <img src={saving} alt="" className="w-20 mb-4 " />
              <h4 className="text-black font-bold text-xl mb-2">
                ស​ន្សំ/បញ្ញើ
              </h4>
              <p className="text-black/50">
                ពិនិត្យមើលទឹកប្រាក់របស់អ្នកកើនជាមួយយើងខ្ញុំ
              </p>
            </div>
            <div>
              <img src={loan} alt="" className="w-20 mb-4 " />
              <h4 className="text-black font-bold text-xl mb-2">
              ប្រាក់កម្ចី

              </h4>
              <p className="text-black/50">
              ចាប់ផ្តើមអាជីវកម្មក្នុងក្តីស្រមៃរបស់អ្នក បង្កើតភាពកក់ក្តៅក្នុងគ្រួសារ <br />និងលើកកម្ពស់ជីវភាពរស់នៅរបស់អ្នក
              </p>
            </div>
            <div>
              <img src={group} alt="" className="w-20 mb-4 " />
              <h4 className="text-black font-bold text-xl mb-2">
              សេវាផ្ទេរប្រាក់
              </h4>
              <p className="text-black/50">
              ផ្ទេរប្រាក់ និងទទួលប្រាក់ពីមិត្តភក្តិ ឬ ក្រុមគ្រួសារុំ
              </p>
            </div>
        
          </div>
        </div>
        <div className="service bg-white mt-7 rounded-4xl p-10">
          <h3 className="text-[#0B67AC] font-bold text-xl tracking-wide ">
          សេវាអាជីវកម្ម
          </h3>
          <div className="flex items-end justify-end my-4">
            <Link className="ms-auto bg-[#E9F6FA] px-5 py-4 rounded-xl text-[#62CEF6]">
              ស្វែងយល់ពីសេវាកម្ម
            </Link>
          </div>
          <div className="flex justify-start gap-25">
            <div>
              <img src={deposit} alt="" className="w-20 mb-4 " />
              <h4 className="text-black font-bold text-xl mb-2">
              ស​ន្សំ/បញ្ញើ
              </h4>
              <p className="text-black/50">
              ពិនិត្យមើលទឹកប្រាក់របស់អ្នកកើនជាមួយយើងខ្ញុំ
              </p>
            </div>
            <div>
              <img src={group2} alt="" className="w-20 mb-4 " />
              <h4 className="text-black font-bold text-xl mb-2">
              ប្រាក់កម្ចី

              </h4>
              <p className="text-black/50">
              ចាប់ផ្តើមអាជីវកម្មក្នុងក្តីស្រមៃរបស់អ្នក បង្កើតភាពកក់ក្តៅក្នុងគ្រួសារ <br /> និងលើកកម្ពស់ជីវភាពរស់នៅរបស់អ្នក
              </p>
            </div>
            <div>
              <img src={transfer} alt="" className="w-20 mb-4 " />
              <h4 className="text-black font-bold text-xl mb-2">
              សេវាផ្ទេរប្រាក់
              </h4>
              <p className="text-black/50">
              ផ្ទេរ និងទទួលប្រាក់ពីដៃគូអាជីវកម្មក្នុងស្រុក និងក្រៅស្រុក
              </p>
            </div>
        
          </div>
        </div>
            {/* section 2 */}
        <div className=" mt-14">
         <div className="text-center">
         <img src={wooriLogo} alt="" className="w-49 mx-auto " />
            <h2 className="text-4xl text-black font-extrabold mt-3">
            Woori Bank Mobile App, មិត្តជិតស្និទ្ធរបស់អ្នក
            </h2>
         </div>
          <div className="flex justify-between mt-15">
            {/* left side  */}
            <div className="mt-28 ">
              <h4 className="font-bold text-3xl text-black ">
              ធនាគារឆ្លាតវៃនៅក្នុងដៃរបស់អ្នក

              </h4>
              <p className="text-black/50 mt-5 text-xl mb-5">
              ធ្វើប្រតិបត្តិការហិរញ្ញវត្ថុដែលអ្នកត្រូវការដោយគ្រាន់តែចុចពីរបី <br />ចំណុច
              </p>
              <div className="mt-16  ">
                <div className="flex items-center mb-3">
                  <img src={icon1} alt="" className="w-10" />
                  <p className="text-black ms-3 text-md">ចុះឈ្មោះប្រើប្រាស់ដោយខ្លួនឯង</p>
                </div>
                <div className="flex items-center mb-3">
                  <img src={icon2} alt="" className="w-10" />
                  <p className="text-black ms-3 text-md">ចុះឈ្មោះប្រើប្រាស់ដោយខ្លួនឯង</p>
                </div>
                <div className="flex items-center mb-10">
                  <img src={icon3} alt="" className="w-10" />
                  <p className="text-black ms-3 text-md">ចុះឈ្មោះប្រើប្រាស់ដោយខ្លួនឯង</p>
                </div>
                <Link className="bg-[#ddf7ff] px-5 py-4 rounded-xl text-[#62CEF6]">
            ទាញយកកម្មវិធី
            </Link>
              </div>
           

            </div>
            {/* right side image  */}
            <div>
              <img src={MBcircle} alt=""className="w-[540px]" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;
