import React from "react";

const ContactUs = () => {
  return (
    <div className="pt-5 pb-10 min-h-[70vh]">
      <div className="w-[90%] xl:w-[1280px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-10 mt-10">
          <div className="neutral-content">
            <h3 className="text-3xl font-bold py-3">
              Questions, Comments? You tell us. We listen.
            </h3>

            <div>
              <p className="text-neutral font-medium">CORPORATE OFFICE</p>
              <p>Gulshan 1, Dhaka, Bangladesh</p>
            </div>
            <div className="py-4">
              <p>Saturday to Friday – 10:00 am to 10:00 pm</p>
            </div>

            <p>
              <span className="text-neutral font-medium">Email:</span>{" "}
              jborganicfoods938@gmail.com
            </p>

            <div className="mt-5">
              <h4 className="text-2xl font-medium mb-4">Need Us? Call Us.</h4>
              <h2 className="text-3xl font-semibold">09613-905 605</h2>
            </div>
          </div>

          {/* Form */}
          <div className="mt-10 lg:mt-0 pb-10 lg:pb-0 text-neutral">
            <form action="">
              <div className="mb-4">
                <label htmlFor="name" className="block mb-1">
                  Your Name (required)
                </label>
                <input
                  type="text"
                  name="name"
                  className="border w-full px-4 py-2 outline-primary/50 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="block mb-1">
                  Your Email (required)
                </label>
                <input
                  type="email"
                  name="email"
                  className="border w-full px-4 py-2 outline-primary/50 rounded"
                  required
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  name="Subject"
                  className="border w-full px-4 py-2 outline-primary/50 rounded"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="" className="block mb-1">
                  Your Message
                </label>
                <textarea
                  name="Message"
                  rows="4"
                  placeholder="Type you message..."
                  className="border w-full px-4 py-2 outline-primary/50 rounded"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-[140px] py-3 shadow rounded text-white bg-primary font-semibold border-paragraph border-opacity-50 scale-[.96] hover:scale-[1] duration-300"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                SEND
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
