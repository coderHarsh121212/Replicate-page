import React, { useState } from "react";
import BillingComponent from "../components/BillingComponent";
import Outcome from "../components/Outcome";
import PaymentMethods from "../components/PaymentMethods";
import PricingComponent from "../components/PricingComponent";
import { PricingData } from "../data/pricingData";

const HomePage = () => {
  const [pricingData, setPriceData] = useState(PricingData);
  return (
    <div className=" w-full h-full bg-[#F2F3FF] p-4 mx-auto font-sans">
      <div className="pt-20 px-4 flex flex-col gap-10 md:hidden">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold">CheckOut</h1>
          <h3 className="font-bold text-xl">
            You’re almost there! Complete your order
          </h3>
        </div>
        <div className="flex flex-col gap-4 p-2 rounded-lg border-2 relative bg-[#ffff]">
          <div className="flex gap-5 p-2  rounded-lg border-2 ">
            <input type="checkbox" className="accent-blue-500"></input>
            <label>Register a new domain</label>
          </div>
          <div className="flex gap-5 p-2  rounded-lg border-2 ">
            <input type="checkbox" className="accent-blue-500"></input>
            <label>Transfer your domain from another register</label>
          </div>
          <div className="flex gap-5 p-2  rounded-lg border-2 ">
            <input type="checkbox" className="accent-blue-500"></input>
            <label>
              I will use my existing domain and update my nameservers
            </label>
          </div>
          <div className="absolute-heading p-1 font-sans">
            <span>1. Choose Your Domain</span>
          </div>
        </div>
        <div className="grid grid-cols-2 p-2 gap-2  border-2 rounded-lg relative bg-white">
          {pricingData.map((e) => (
            <PricingComponent data={e} key={e.price} />
          ))}
          <div className="absolute-heading">
            <span>2. Choose a Period</span>
          </div>
        </div>
        <div className="flex-cols p-2 gap-2  border-2 rounded-lg relative bg-white">
          <BillingComponent />
          <div className="absolute-heading">
            <span>3. Billing Details</span>
          </div>
        </div>

        <div className="flex-cols p-2 gap-2  border-2 rounded-lg relative bg-white md:hidden">
          <Outcome />
          <div className="absolute-heading">
            <span>4. Checkout</span>
          </div>
        </div>

        <div className="flex-cols p-2 gap-2  border-2 rounded-lg relative bg-white md:hidden">
          <PaymentMethods />
          <div className="absolute-heading">
            <span>5. Payment Menthods</span>
          </div>
        </div>
      </div>
      <div className="hidden justify-between pt-20 pb-5 w-[90%] mx-auto gap-10 md:flex">
        <div className="flex flex-col gap-8 h-[55rem] overflow-scroll  p-2 w-[70%]">
          <div className="flex flex-col gap-2 ">
            <h1 className="text-3xl font-bold">CheckOut</h1>
            <h3 className="font-bold text-xl">
              You’re almost there! Complete your order
            </h3>
          </div>
          <div className="flex flex-col gap-4 p-2 rounded-lg border-2 relative bg-white">
            <div className="flex gap-5 p-2  rounded-lg border-2 ">
              <input type="checkbox" className="accent-blue-500"></input>
              <label>Register a new domain</label>
            </div>
            <div className="flex gap-5 p-2  rounded-lg border-2 ">
              <input type="checkbox" className="accent-blue-500"></input>
              <label>Transfer your domain from another register</label>
            </div>
            <div className="flex gap-5 p-2  rounded-lg border-2 ">
              <input type="checkbox" className="accent-blue-500"></input>
              <label>
                I will use my existing domain and update my nameservers
              </label>
            </div>
            <div className="absolute-heading font-sans">
              <span>1. Choose Your Domain</span>
            </div>
          </div>
          <div className=" grid grid-cols-2 p-2 gap-2  border-2 rounded-lg relative bg-white">
            {pricingData.map((e) => (
              <PricingComponent data={e} key={e.price} />
            ))}
            <div className="absolute-heading">
              <span>2. Choose a Period</span>
            </div>
          </div>
          <div className="flex-cols p-2 gap-2  border-2 rounded-lg relative bg-white">
            <BillingComponent />
            <div className="absolute-heading">
              <span>3. Billing Details</span>
            </div>
          </div>
        </div>
        <div className="mt-10  right-0  flex flex-col gap-12   h-[48rem]">
          <div className="flex-cols p-2 gap-2  border-2 rounded-lg relative bg-white md:flex hidden">
            <Outcome />
            <div className="absolute-heading">
              <span>4. Checkout</span>
            </div>
          </div>
          <div className="flex-cols p-2 gap-2  border-2 rounded-lg relative bg-white md:flex hid">
            <PaymentMethods />
            <div className="absolute-heading">
              <span>5. Payment Menthods</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
