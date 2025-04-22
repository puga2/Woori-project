import React from "react";
import { Link } from "react-router";
import logo from "../../src/assets/images/logo/logo.png";
import about from "../../src/assets/images/logo/about-us-icon.png";
import search from "../../src/assets/images/logo/search-icon.png";
import call from "../../src/assets/images/logo/call-icon.png";
import location from "../../src/assets/images/logo/location-icon.png";
import khmer from "../../src/assets/images/logo/km.png";
import { RxHamburgerMenu } from "react-icons/rx";
import saving from "../../src/assets/images/menu-icon/saving-1.png";
import loan from "../../src/assets/images/menu-icon/loan-1.png";
import transfer from "../../src/assets/images/menu-icon/transfer-1.png";
import { RiArrowDownSFill } from "react-icons/ri";

const menuItems = {
  personal: {
    title: "ស្វែងយល់បន្ថែមពី សេវាបុគ្គល",
    section: [
      {
        icon: saving,
        name: "សន្សំ/បញ្ញើ",
        items: [
          { name: "គណនីរហ័ស" },
          { name: "គណនីសង្ឃឹម" },
          { name: "គណនីសប្បុរស" },
          { name: "គណនីចម្រើនទ្រព្យ" },
          { name: "គណនីចម្រើនទ្រព្យ ផ្លឹស" },
          { name: "គណនីសន្សំតាមផែនការ" },
          { name: "គណនីសន្សំតាមផែនការ ផ្លឹស" },
          { name: "គណនីកូនល្អ" },
          { name: "គណនីសន្សំផ្លឹស" },
          { name: "គណនីបឋមវ័យ" },
          { name: "គណនីហាយហ្វាយ" },
        ],
      },
      {
        icon: loan,
        name: "ប្រាក់កម្ចី",
        items: [
          { name: "កម្ចីអាជីវកម្ម" },
          { name: "កម្ចីលំនៅដ្ឋាន" },
          { name: "កម្ចីការសិក្សា" },
          { name: "កម្ចីកសិកម្ម" },
          { name: "កម្ចីបុគ្គល" },
          { name: "កម្ចីគេហដ្ឋាន" },
          { name: "កម្ចីគ្រាអាសន្ន" },
          { name: "កម្ចីសម្រាប់និយោជិតធ្វើការក្រៅប្រទេស" },
          { name: "ឥណទានសម្រាប់និយោជិត និងមន្ត្រីរាជការ" },
        ],
      },
      {
        icon: transfer,
        name: "សេវាផ្ទេរប្រាក់",
        items: [
          { name: "សេវាផ្ទេរប្រាក់អន្តរសាខា" },
          { name: "សេវាផ្ទេរប្រាក់អន្តរធនាគារ" },
          { name: "សេវាផ្ទេរប្រាក់អន្តរជាតិ" },
          { name: "សេវាទូទាត់បាគង" },
          { name: "សេវាផ្ទេរមូលនិធិភ្លាមៗ" },
          { name: "សេវាបញ្ជាអចិន្ត្រៃយ៍" },
        ],
      },
    ],
  },
};

const Navigation = () => {
  return (
    <nav className="">
      <div className="flex flex-col">
        {/* top  */}
        <div className="bg-[#ffffff]">
          <div className="container mx-auto px-4  sm:px-6  lg:px-15">
            <div className="flex justify-between items-center">
              {/* menu right  */}

              <div className="navbar h-17 px-0">
                <div className="flex-1">
                  {/* logo left  */}
                  <Link to="/">
                    <img src={logo} alt="" className="w-95 h object-cover" />
                  </Link>{" "}
                </div>
                <div className="flex-none hidden lg:block">
                  <ul className="menu menu-horizontal px-1 text-black items-center">
                    <li className="">
                      <details>
                        <summary className="  text-[16px] border-r rounded-none  border-black/20 px-7">
                          <img src={about} alt="" className="size-7" /> អំពីយើង
                        </summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                          <li>
                            <a>Link 1</a>
                          </li>
                          <li>
                            <a>Link 2</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                    <li className="ml-5">
                      <Link to="/search">
                        <img src={search} alt="" className="size-7" />
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/call">
                        <img src={call} alt="" className="size-7" />
                      </Link>
                    </li>
                    <li className="">
                      <Link to="/location">
                        <img src={location} alt="" className="size-7" />
                      </Link>
                    </li>
                    <li className="">
                      <details>
                        <summary className="  text-[16px]  px-5">
                          <img src={khmer} alt="" className="size-7" />{" "}
                          ភាសាខ្មែរ
                        </summary>
                        <ul className="bg-base-100 rounded-t-none p-2">
                          <li>
                            <a>Link 1</a>
                          </li>
                          <li>
                            <a>Link 2</a>
                          </li>
                        </ul>
                      </details>
                    </li>
                  </ul>
                </div>
              </div>
              {/* mobile burger  */}
              <button className="flex lg:hidden cursor-pointer ">
                <RxHamburgerMenu className="text-[#0B67AC]  size-8 " />
              </button>
            </div>
          </div>
        </div>
        {/* down  */}
        <div className="bg-[#0B67AC]">
          <div className="container mx-auto px-4  sm:px-6  lg:px-15">
            <ul className="flex items-center justify-between mr-30 py-4">
              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  ទំព័រដើម
                </Link>
              </li>
              <li className="group relative">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide  group  "
                >
                  សេវាបុគ្គល <RiArrowDownSFill className="inline-flex" />
                </Link>
                <div className="absolute w-30 h-10 -left-5 bg-transparent"></div>
                <div className="absolute bg-white w-[60rem] -left-24   top-10  text-black hidden group-hover:block px-10 py-5 rounded-xl">
                  {Object.keys(menuItems).map((value, index) => (
                    <div className="">
                      <div className="text-black text-2xl border-b border-black/20 pb-5">
                        {menuItems[value].title}
                      </div>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                        {
                          menuItems[value].section.map((item,index)=>(
                            <div>
                               <h3>
                              {item.name}
                            </h3>
                            <div className="">
                              {
                                item.items.map((list,index)=>(
                                  <Link className="block">{list.name}</Link>
                                ))
                              }
                            </div>
                            </div>
                          ))
                        }
                      </div>
                    </div>
                    // list menu  drop down /
                  ))}
                </div>
              </li>

              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  សេវាអាជីវកម្ម
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  សេវាធនាគារ ឌីជីថល
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  ប្រូម៉ូសិន
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  ព័ត៌មាន
                </Link>
              </li>

              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  ឱកាសការងារ
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  ការងារសង្គម
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  Merchant Discounts
                </Link>
              </li>
              <li className="group">
                <Link
                  to="/"
                  className="text-md text-white/90 hover:text-white bg-amber-600 py-4 tracking-wide "
                >
                  Internet Banking
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
