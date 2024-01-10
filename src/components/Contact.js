import React from "react";
import { RiMailSendLine } from "react-icons/ri";

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
          placeholder="Enter your name"
          className="text-lg bg-transparent border-b-2 h-[2.5rem]"
        />
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter your e-mail"
          className="text-lg bg-transparent border-b-2 h-[2.5rem]"
        />
        <label>Your Message</label>
        <section className="col-span-2">
          <textarea
            name="comments"
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
              className="w-[33%] h-[3.5rem] inline-block after:duration-1000 ease-out after:block after:h-0.5 after:w-full after:origin-bottom-right after:scale-x-0 after:bg-[#d08c60] after:opacity-60 after:transition-transform after:hover:origin-bottom-left after:hover:scale-x-100"
            >
              <span className="pr-3">Send!</span>
              <RiMailSendLine />
            </button>
          </div>
        </section>
      </form>
    </div>
  );
};

export default Contact;
