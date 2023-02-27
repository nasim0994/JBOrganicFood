import React, { useState } from "react";
import "./Faq.css";
import faqImage from "../../assets/Images/faq.png";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const faqs = [
  {
    question: "Why take honey nuts from us?",
    ans: `All our dry fruits and nuts are imported. It contains no artificial colors or preservatives. We do not sell products with any local colors or preservatives.  You don't have to make any upfront payment. We offer cash on delivery. After receiving the product, check it, if necessary,
    test it by eating 2-3 spoons while the delivery man is present
    and then pay the price. If you don't like it, return it
    immediately.`,
  },
  {
    question: "Rules for eating honey nuts",
    ans: `There is no specific rule for eating honey nuts. You can eat
    whenever you want. But it is best consumed in the morning on
    an empty stomach and when you are very tired. Because
    honey-nuts are easily digestible, 2-4 spoons of honey nuts
    daily will give you instant energy, keeping you vibrant and
    fresh. Eating honey-nuts in the morning is very beneficial for
    the skin.`,
  },
  {
    question: "Which payment methods are accepted in the Online Shop?",
    ans: `There is no specific rule for eating honey nuts. You can eat
    whenever you want. But it is best consumed in the morning on
    an empty stomach and when you are very tired. Because
    honey-nuts are easily digestible, 2-4 spoons of honey nuts
    daily will give you instant energy, keeping you vibrant and
    fresh. Eating honey-nuts in the morning is very beneficial for
    the skin.`,
  },
  {
    question: "How long will delivery take?",
    ans: `There is no specific rule for eating honey nuts. You can eat
    whenever you want. But it is best consumed in the morning on
    an empty stomach and when you are very tired. Because
    honey-nuts are easily digestible, 2-4 spoons of honey nuts
    daily will give you instant energy, keeping you vibrant and
    fresh. Eating honey-nuts in the morning is very beneficial for
    the skin.`,
  },
  {
    question: "Do I receive an invoice for my order?",
    ans: `There is no specific rule for eating honey nuts. You can eat
    whenever you want. But it is best consumed in the morning on
    an empty stomach and when you are very tired. Because
    honey-nuts are easily digestible, 2-4 spoons of honey nuts
    daily will give you instant energy, keeping you vibrant and
    fresh. Eating honey-nuts in the morning is very beneficial for
    the skin.`,
  },
];

const Faq = () => {
  const [toggleFAQ, setToggleFAQ] = useState(null);
  const handelToggleFAQ = (i) => {
    if (toggleFAQ === i) {
      return setToggleFAQ(null);
    }
    setToggleFAQ(i);
  };
  return (
    <div className="pt-5 pb-20 min-h-[80vh]">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <img src={faqImage} alt="" className="w-96 mx-auto" />

        <div className="mt-10 sm:w-2/3 mx-auto">
          {faqs.map((faq, i) => (
            <div key={i} className="mb-2">
              <button
                onClick={() => handelToggleFAQ(i)}
                className="w-full flex justify-between items-center p-4 bg-slate-200 text-lg font-semibold text-neutral-content rounded"
              >
                <p>{faq.question}</p>
                <span>
                  {toggleFAQ === i && "activeFAQ" ? (
                    <IoIosArrowUp />
                  ) : (
                    <IoIosArrowDown />
                  )}
                </span>
              </button>

              {/* Content/Ans */}
              <div
                className={`text-justify text-neutral-content duration-500 faq-content ${
                  toggleFAQ === i && "activeFAQ"
                }`}
              >
                <p className="pb-5 p-3 text-lg">{faq.ans}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
