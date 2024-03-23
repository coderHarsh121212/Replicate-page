import React from "react";

const BillingComponent = () => {
  return (
    <div className="p-4">
      <form className="flex flex-col gap-3">
        <h1 className="text-[#4246C9]  font-bold text-xl">Customer Details</h1>
        <div className="grid grid-cols-2 gap-8 sm:gap-12">
          <input
            type="text"
            placeholder="First Name"
            className="p-2 rounded-lg  border-2 border-black "
          ></input>
          <input
            type="text"
            placeholder="Last Name"
            className="p-2  rounded-lg border-2  border-black"
          ></input>
        </div>
        <input
          type="email"
          placeholder="Email"
          className="p-2 rounded-lg border-2 border-black"
        ></input>
        <input
          type="tel"
          placeholder="Phone"
          className="p-2 rounded-lg border-2 border-black"
        ></input>
        <input
          type="text"
          placeholder="Billing Address"
          className="p-2 rounded-lg border-2 border-black"
        ></input>
        <div className="grid grid-cols-2 gap-8 sm:gap-12">
          <input
            type="text"
            placeholder="State"
            className="p-2 rounded-lg border-2 border-black"
          ></input>
          <input
            type="text"
            placeholder="City"
            className="p-2 rounded-lg border-2 border-black"
          ></input>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:gap-12">
          <select className="p-2 rounded-lg border-2 border-black">
            <option value="India">India</option>
            <option value="Pakistan">Pakistan</option>
            <option value="Bangaladesh">Bangaladesh</option>
          </select>
          <input
            type="text"
            placeholder="City"
            className="p-2 rounded-lg border-2 border-black"
          ></input>
        </div>
        <h1 className="text-[#4246C9]  font-bold text-xl">Company Details</h1>
        <input
          type="text"
          placeholder="Company Name"
          className="p-2 rounded-lg border-2 border-black"
        ></input>
        <input
          type="text"
          placeholder="GSTIN"
          className="p-2 rounded-lg border-2 border-black"
        ></input>
        <h1 className="text-[#4246C9]  font-bold text-xl">Security Details</h1>
        <input
          type="text"
          placeholder="Password"
          className="p-2 rounded-lg border-2 border-black"
        ></input>
        <input
          type="text"
          placeholder="Confirm Password"
          className="p-2 rounded-lg border-2 border-black"
        ></input>
      </form>
    </div>
  );
};

export default BillingComponent;
