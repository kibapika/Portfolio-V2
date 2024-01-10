import React from "react";
import { RiMailSendLine } from "react-icons/ri";
import { HiArrowLongRight } from "react-icons/hi2";

const Contact = () => {
  return (
    <div className="h-[100%] flex flex-col justify-center content-center items-center">
      <section className="h-[25%] flex flex-col justify-evenly items-center text-center mb-8">
        <h1 className="text-4xl font-bold">Hope to connect with you!</h1>
        <p className="text-lg w-[55%]">
          Have a question or proposal, or just want to say hello? Send me a
          message!
        </p>
      </section>
      <form
        action="mailto:evali3101@gmail.com"
        method="get"
        enctype="text/plain"
        className="grid grid-cols-2 gap-6 w-[75%] sm:w-[55%]"
      >
        <label>Your Name</label>
        <label>E-mail Address</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          placeholder="Enter your name"
          className="text-lg bg-transparent border-b-2 h-[2.5rem]"
        />
        <input
          type="text"
          name="email"
          id="email"
          required
          placeholder="Enter your e-mail"
          className="text-lg bg-transparent border-b-2 h-[2.5rem]"
        />
        <label>Your Message</label>
        <section className="col-span-2">
          <textarea
            name="comments"
            required
            rows="2"
            placeholder="Hi Eva, I am from X Company looking for a software engineeer. We would love to discuss a great opportunity with you!"
            className="w-[100%] h-[4rem] text-lg bg-transparent border-b-2"
          />
        </section>
        <section className="col-span-2 text-[1.4rem]">
          <div className="w-[100%] flex justify-center">
            <button
              type="submit"
              name="submit"
              value="Send"
              className="relative inline-flex items-center justify-center px-1 py-3 overflow-hidden transition duration-[400ms] ease-out border-2 border-[#d08c60] border-opacity-60 rounded-full shadow-lg group"
            >
              <span className="absolute inset-0 flex items-center justify-center w-full h-full rounded-full text-white duration-[400ms] -translate-x-full bg-[#a2a392] group-hover:translate-x-0 ease">
                <HiArrowLongRight className="text-[2.75rem]" />
              </span>
              <div class="absolute flex items-center justify-center w-full h-full transition-all duration-[400ms] transform group-hover:translate-x-full ease">
                <span className="pr-3 pb-1">Send!</span>
                <RiMailSendLine />
              </div>
              <span className="relative invisible">Button Text</span>
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Contact;
