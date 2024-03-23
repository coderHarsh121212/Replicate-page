import React, { useState } from "react";
import { CaretDown, CloseLogo, Hamburger, LockLogo } from "../icons/icons";

const Navbar = () => {
  const [shownav, setShowNav] = useState(false);
  const [showHosting, setshowHosting] = useState(false);
  const [showHostingByService, setshowHostingByService] = useState(false);
  const [showResources, setshowResource] = useState(false);
  const [showContact, setshowContact] = useState(false);
  return (
    <div className="">
      <div className="md-navbar">
        <div className="m-4 lg:ml-24">
          <img
            src="https://nr8.erichost.com/wp-content/uploads/2023/09/Screenshot-2023-10-01-at-11.07.01-PM-e1696326298741.png"
            className="w-44 "
          ></img>
        </div>
        <div className="m-4 lg:mr-24">
          <div className="flex gap-5 lg:gap-10 lg:text-xl font-sans text-lg items-center">
            <div className="relative">
              <a
                href="#"
                onMouseEnter={() => setshowHosting(!showHosting)}
                onMouseLeave={() => setshowHosting(!showHosting)}
                onClick={() => setshowHosting(!showHosting)}
                className="navlinks"
              >
                Hosting
                <CaretDown />
              </a>
              {showHosting && (
                <div className="sub-navlinks">
                  <a href="#">Shared Hosting</a>
                  <a href="#">Cloud Hosting</a>
                  <a href="#">WordPress Hosting</a>
                  <a href="#">Reseller Hosting</a>
                  <a href="#">VPS Hosting</a>
                  <a href="#">Dedicated Hosting</a>
                  <a href="#">Unlimited Hosting</a>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                href="#"
                onMouseEnter={() =>
                  setshowHostingByService(!showHostingByService)
                }
                onMouseLeave={() =>
                  setshowHostingByService(!showHostingByService)
                }
                onClick={() => setshowHostingByService(!showHostingByService)}
                className="navlinks"
              >
                Hosting ByService
                <CaretDown />
              </a>
              {showHostingByService && (
                <div className="sub-navlinks">
                  <a href="#">Buisness Hosting</a>
                  <a href="#">eCommerce Hosting</a>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                href="#"
                onMouseEnter={() => setshowResource(!showResources)}
                onMouseLeave={() => setshowResource(!showResources)}
                onClick={() => setshowResource(!showResources)}
                className="navlinks"
              >
                Resources
                <CaretDown />
              </a>
              {showResources && (
                <div className="sub-navlinks">
                  <a href="#">Blog</a>
                </div>
              )}
            </div>
            <div className="relative">
              <a
                href="#"
                onMouseEnter={() => setshowContact(!showContact)}
                onMouseLeave={() => setshowContact(!showContact)}
                onClick={() => setshowContact(!showContact)}
                className="navlinks"
              >
                Contact
                <CaretDown />
              </a>
              {showContact && (
                <div className="sub-navlinks">
                  <a href="#">Contact Us</a>
                  <a href="#">About Us</a>
                  <a href="#">Support</a>
                </div>
              )}
            </div>
            <button className="login-btn">
              <LockLogo />
              Login
            </button>
          </div>
        </div>
      </div>
      {/* //inital */}
      <div className="init-navbar">
        <div>
          <img
            src="https://nr8.erichost.com/wp-content/uploads/2023/09/Screenshot-2023-10-01-at-11.07.01-PM-e1696326298741.png"
            className="w-36  font-bold sm:w-56 "
          ></img>
        </div>
        <div className="flex justify-between w-36 sm:w-52 md:w-64 items-center">
          <div onClick={() => setShowNav(!shownav)}>
            {shownav ? (
              <p className="p-1 bg-[#4246C9] rounded">
                <CloseLogo />
              </p>
            ) : (
              <p className="p-1 bg-[#4246C9] rounded">
                <Hamburger />
              </p>
            )}
          </div>
          <button className="login-btn">
            <LockLogo />
            Login
          </button>
        </div>
        {shownav && (
          <div className="fixed top-16 left-0  w-full bg-slate-100">
            <div className="flex flex-col gap-2 text-left">
              <a
                href="#"
                onClick={() => setshowHosting(!showHosting)}
                className={`${showHosting && "bg-blue-400 p-2 "} px-4`}
              >
                Hosting
              </a>
              {showHosting && (
                <div className="flex flex-col gap-5 text-left px-4">
                  <a href="#">Shared Hosting</a>
                  <a href="#">Cloud Hosting</a>
                  <a href="#">WordPress Hosting</a>
                  <a href="#">Reseller Hosting</a>
                  <a href="#">VPS Hosting</a>
                  <a href="#">Dedicated Hosting</a>
                  <a href="#">Unlimited Hosting</a>
                </div>
              )}
              <a
                href="#"
                onClick={() => setshowHostingByService(!showHostingByService)}
                className={`${showHostingByService && "bg-blue-400 p-2"} px-4`}
              >
                Hosting By Service
              </a>
              {showHostingByService && (
                <div className="flex flex-col gap-5 text-left px-4">
                  <a href="#">Buisness Hosting</a>
                  <a href="#">eCommerce Hosting</a>
                </div>
              )}
              <a
                href="#"
                onClick={() => setshowResource(!showResources)}
                className={`${showResources && "bg-blue-400 p-2"} px-4`}
              >
                Resources
              </a>
              {showResources && (
                <div className="flex flex-col gap-5 text-left px-4">
                  <a href="#">Blog</a>
                </div>
              )}
              <a
                href="#"
                onClick={() => setshowContact(!showContact)}
                className={`${showContact && "bg-blue-400 p-2"} px-4`}
              >
                Contact
              </a>
              {showContact && (
                <div className="flex flex-col gap-5 text-left px-4">
                  <a href="#">Contact Us</a>
                  <a href="#">About Us</a>
                  <a href="#">Support</a>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
