import React from "react";
import CheckoutCard from "./CheckoutCard/CheckoutCard";
import CheckoutForm from "./CheckoutForm/CheckoutForm";

const Checkout = () => {
  return (
    <div className="py-5">
      <div className="w-[90%] xl:w-[1200px] mx-auto">
        <form className="lg:flex gap-10">
          <div className="lg:w-[60%]">
            <CheckoutForm />
          </div>

          <div className="lg:w-[40%]">
            <CheckoutCard />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
