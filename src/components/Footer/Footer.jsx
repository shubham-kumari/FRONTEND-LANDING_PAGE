import React from "react";
import logo from "../../assets/logo.png";
import logo3 from "../../assets/logo3.png";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FiInstagram } from "react-icons/fi";
import { FaTiktok } from "react-icons/fa";


const Footer = () => {
  return (
    <div>
      <footer className="relative bg-black pt-8 pb-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap text-left lg:text-left">
            <div className="w-full lg:w-6/12 px-4">
              <img src={logo3} alt="" className="w-40" />

              <h5 className="text-md text-gray-400 mt-6 mb-2 font-Montserrat">
                We are passionate about revolutionizing the world of digital
                advertising through cutting-edge audio fingerprinting and ad
                triggering technology. With a team of industry experts and
                innovators, we have developed a powerful platform that empowers
                advertisers to deliver targeted and engaging ads like never
                before.{" "}
              </h5>
            </div>
            <div className="w-full lg:w-6/12 px-4">
              <div className="flex flex-wrap  mb-6">
                <div className="w-full lg:w-4/12 px-4 ml-auto">
                  <span className="block  text-white  text-sm font-Montserrat mb-2">
                    Home{" "}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="font-Montserrat text-white    block pb-2 text-sm"
                        href="https://www.creative-tim.com/presentation?ref=njs-profile"
                      >
                        Overview{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-Montserrat  text-white   block pb-2 text-sm"
                        href="https://blog.creative-tim.com?ref=njs-profile"
                      >
                        Downloads{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="font-Montserrat text-white  block pb-2 text-sm"
                        href="https://www.github.com/creativetimofficial?ref=njs-profile"
                      >
                        FAQ{" "}
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="w-full lg:w-4/12 px-4">
                  <span className="block  text-white font-Montserrat text-sm  mb-2">
                    About{" "}
                  </span>
                  <ul className="list-unstyled">
                    <li>
                      <a
                        className="text-white  font-Montserrat block pb-2 text-sm"
                        href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                      >
                        Contacts{" "}
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-white  font-Montserrat block pb-2 text-sm"
                        href="https://creative-tim.com/terms?ref=njs-profile"
                      >
                        Terms
                      </a>
                    </li>
                    <li>
                      <a
                        className="text-blueGray-600 text-white  font-Montserrat block pb-2 text-sm"
                        href="https://creative-tim.com/privacy?ref=njs-profile"
                      >
                        Privacy
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              {/* © 2023{" "}
              <a href="https://flowbite.com/" className="hover:underline">
                Flowbite™
              </a> */}
              Copyright 2023 Chaching. all rights reserved
            </span>
            <div className="flex mt-4 sm:justify-center sm:mt-0">
              <a
                href="#"
                className=" bg-emerald-600 p-1.5 bg-opacity-45 rounded-sm text-white hover:text-gray-900 dark:hover:text-white"
              >
                <FaFacebookSquare />
                
              </a>
              <a
                href="#"
                className="bg-emerald-600 p-1.5 bg-opacity-45 rounded-sm text-white hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaTwitterSquare />
              </a>
              <a
                href="#"
                className="bg-emerald-600 p-1.5 bg-opacity-45 rounded-sm text-white hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FiInstagram />
              </a>
              <a
                href="#"
                className="bg-emerald-600 p-1.5 bg-opacity-45 rounded-sm text-white hover:text-gray-900 dark:hover:text-white ms-5"
              >
                <FaTiktok />

              </a>
              
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
