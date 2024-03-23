import React from "react";
import { DivideLogo } from "../icons/icons";

const Outcome = () => {
  return (
    <div className="p-4 flex flex-col gap-5 font-sans font-medium">
      <div>
        <h1 className="font-bold">
          Selected Plan :{" "}
          <span className="font-normal">Premium Web Hosting</span>
        </h1>
        <h1 className="font-bold">
          Period : <span className="font-normal">1 Month</span>
        </h1>
      </div>
      <div className="flex flex-col">
        <div className="flex justify-between items-center">
          <p>Plan Amount</p>
          <p>$134.99</p>
        </div>
        <div className="flex justify-between items-center">
          <p>✅ 100 Panels</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between items-center">
          <p>✅ SetUp Charges</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between items-center">
          <p>✅ Unlimited SSL</p>
          <p>$0</p>
        </div>
        <div className="flex justify-between items-center">
          <p> ✅Free Website Migration</p>
          <p>$0</p>
        </div>
      </div>

      <div className="flex justify-between items-center border-t-2 border-black pt-3">
        <p>Total Amount</p>
        <p className="font-extrabold">$134.99</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-1"><DivideLogo/> Plan Discount - 77%</p>
        <p>-$34.99</p>
      </div>
      <div className="flex justify-between items-center">
        <p>💸 Coupon Apllied (VKLGRI10)</p>
        <p>-$10</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="flex items-center gap-1"><DivideLogo/> Taxes & Fees</p>
        <p>$20</p>
      </div>

      <div className="flex justify-between items-center border-y-2 border-black py-3 font-extrabold">
        <p>Net Amount Due</p>
        <p>$134.99</p>
      </div>

      <div className="flex gap-8 items-center">
        <input type="checkbox" className="accent-blue-500"></input>
        <p>Do you have any Coupon</p>
      </div>
    </div>
  );
};

export default Outcome;
