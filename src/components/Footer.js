import React from "react";
import {
  Arrowright,
  EmailLogo,
  FacebookLogo,
  InstaLogo,
  LinkedINLogo,
  TelLogo,
  TwitterLogo,
  UtubeLogo,
} from "../icons/icons";

const Footer = () => {
  return (
    <div className="bg-[#4246C9] text-white">
      <div className=" flex flex-col p-5 gap-4 md:flex-row w-full md:justify-between lg:px-10 ">
        <div className="md:w-56 px-5">
          <h1 className="text-center text-2xl font-bold md:text-left">
            EricHost
          </h1>
          <p className="font-serif text-sm">
            We are a web hosting company with a mission to help everyone who
            goes online succeed. We accomplish this by continuously developing
            server technology, giving expert assistance, and ensuring a flawless
            online website hosting experience.
          </p>
        </div>
        <div className="flex justify-between md:gap-10 gap-10">
          <div>
            <h1 className="border-b-2 border-white py-2">Our Services</h1>
            <p className="flex items-center text-sm mt-1">
              <Arrowright />
              Shared Hosting
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Buisness Hosting
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Reseller Hosting
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Register a Domain
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Transfer domain to Us
            </p>
          </div>
          <div>
            <h1 className="border-b-2 border-white py-2">Servers</h1>
            <p className="flex items-center text-sm mt-1F">
              <Arrowright />
              Shared Hosting
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Buisness Hosting
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Reseller Hosting
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Register a Domain
            </p>
            <p className="flex items-center text-sm">
              <Arrowright />
              Transfer domain to Us
            </p>
          </div>
        </div>
        <div>
          <h1 className="border-b-2 border-white py-2">Quick Contact</h1>
          <div>
            <p className="flex items-center gap-1">
              <EmailLogo />
              Email
            </p>
            <p className="flex items-center gap-1">
              <TelLogo />
              Mobile No
            </p>
          </div>
        </div>
        <div className="md:flex md:items-center md:flex-col">
          <input
            type="email"
            placeholder="Email"
            className="p-2 w-full "
          ></input>
          <button className="w-full bg-black text-white  ">Subscribe</button>
          <div className=" gap-5 items-center justify-center md:flex hidden mt-5">
            <p className="p-1 bg-blue-500 rounded">
              <FacebookLogo />
            </p>
            <p className="p-1 bg-blue-500 rounded">
              <TwitterLogo />
            </p>
            <p className="p-1 bg-blue-500 rounded">
              <UtubeLogo />
            </p>
            <p className="p-1 bg-blue-500 rounded">
              <InstaLogo />
            </p>
            <p className="p-1 bg-blue-500 rounded">
              <LinkedINLogo />
            </p>
          </div>
        </div>
        <div className="flex gap-5 items-center justify-center md:hidden">
          <p className="p-1 bg-blue-500 rounded">
            <FacebookLogo />
          </p>
          <p className="p-1 bg-blue-500 rounded">
            <TwitterLogo />
          </p>
          <p className="p-1 bg-blue-500 rounded">
            <UtubeLogo />
          </p>
          <p className="p-1 bg-blue-500 rounded">
            <InstaLogo />
          </p>
          <p className="p-1 bg-blue-500 rounded">
            <LinkedINLogo />
          </p>
        </div>
        <div className="flex gap-5 items-center justify-center flex-col md:hidden">
          <p>
            Copyright 2023 © Eric Web Solutions Private Limited, All Rights
            Reserved.
          </p>
          <p>Terms & Condition | Privacy policy</p>
        </div>
      </div>
      <div className=" gap-5  justify-between hidden md:flex p-4 px-20">
        <p>
          Copyright 2023 © Eric Web Solutions Private Limited, All Rights
          Reserved.
        </p>
        <p>Terms & Condition | Privacy policy</p>
      </div>
    </div>
  );
};

export default Footer;
