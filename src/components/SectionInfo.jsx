import React from "react";
import sectionLeft from "../../src/assets/images/carousel/sectionLeft.jpg";
import sectionRight from "../../src/assets/images/carousel/sectionRight.jpg";
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
          <div className="flex justify-between gap-5">
            <div>
              <h4 className="text-black font-bold text-xl mb-2">
                ស​ន្សំ/បញ្ញើ
              </h4>
              <p className="text-black/40">
                ពិនិត្យមើលទឹកប្រាក់របស់អ្នកកើនជាមួយយើងខ្ញុំ
              </p>
            </div>
            <div>
              <h4>ស​ន្សំ/បញ្ញើ</h4>
              <p>ពិនិត្យមើលទឹកប្រាក់របស់អ្នកកើនជាមួយយើងខ្ញុំ</p>
            </div>
            <div>
              <h4>ស​ន្សំ/បញ្ញើ</h4>
              <p>ពិនិត្យមើលទឹកប្រាក់របស់អ្នកកើនជាមួយយើងខ្ញុំ</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionInfo;
