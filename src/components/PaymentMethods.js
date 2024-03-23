import React from "react";
import { CreditLogo } from "../icons/icons";

const PaymentMethods = () => {
  return (
    <div className=" rounded-lg flex flex-col gap-1 ">
      <div className="flex gap-4 border-4 rounded-lg p-3 lg:w-96 ">
        <input type="checkbox" className="accent-blue-500"></input>
        <p>Google Pay</p>
      </div>
      <div className="flex gap-4 border-4 rounded-lg p-3 md:w-full">
        <input type="checkbox" className="accent-blue-500"></input>
        <p>Credit / Debit Card</p>
      </div>
      <div className="flex gap-4 border-4 rounded-lg p-3 md:w-full">
        <input type="checkbox" className="accent-blue-500"></input>
        <p>Net Banking</p>
      </div>

      <button className="w-full p-2 bg-[#4246C9] rounded-lg text-white font-bold flex gap-5 items-center">
        <CreditLogo />
        CheckOut
      </button>
    </div>
  );
};

export default PaymentMethods;
