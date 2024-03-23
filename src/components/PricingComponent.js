import React from "react";

const PricingComponent = ({ data }) => {
  return (
    <div className="border-2 p-3 items-center flex flex-col gap-2 rounded-lg px-6 text-center bg-white">
      <span className="bg-[#4246C9] p-1 rounded-full text-white px-2">{data.duration}</span>
      <span className="text-[#4246C9] text-xl font-medium">${data.price}</span>
      <span className="font-sans font-bold">USD/Month</span>
      <span className="text-sm font-normal">
        Plans renews at ${data.renewprice}/month on {data.renewDate}
      </span>
    </div>
  );
};

export default PricingComponent;
