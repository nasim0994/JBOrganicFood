import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { FaDollarSign } from "react-icons/fa";

const DeliveryInfo = () => {
  return (
    <div className="py-10 bg-slate-100">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          <div className="text-center">
            <div className="text-4xl w-16 h-16 mx-auto border border-primary rounded-full flex justify-center items-center text-neutral-content opacity-90">
              <TbTruckDelivery />
            </div>
            <p className="text-xl font-semibold text-neutral">
              Cash on delivery
            </p>
            <p className="text-neutral-content">
              You don't have to pay a single Money upfront.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl w-16 h-16 mx-auto border border-secondary rounded-full flex justify-center items-center text-neutral-content opacity-90">
              <FaDollarSign />
            </div>
            <p className="text-xl font-semibold text-neutral">Delivery Fee</p>
            <p className="text-neutral-content">
              Delivery charge within Dhaka City is Tk{" "}
              <span className="font-semibold">50</span>
            </p>
          </div>
          <div className="text-center">
            <div className="text-4xl w-16 h-16 mx-auto border border-primary rounded-full flex justify-center items-center text-neutral-content opacity-90">
              <FaDollarSign />
            </div>
            <p className="text-xl font-semibold text-neutral">Delivery Fee</p>
            <p className="text-neutral-content">
              Delivery charge outside Dhaka city is Tk{" "}
              <span className="font-semibold">100</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
