import React from "react";

const Contact = () => {
  return (
    <div className="h-[100%] flex flex-col justify-center content-center items-center">
      <section className="text-center">
        <h1>Hope to connect with you!</h1>
        <p>
          Have a question or proposal, or just want to say hello? Send me a
          message!
        </p>
      </section>
      <form
        action="mailto:evali3101@gmail.com"
        method="get"
        enctype="text/plain"
        className="grid grid-cols-2"
      >
        <input type="text" name="name" id="name" placeholder="Name" />
        <input type="text" name="email" id="email" placeholder="E-mail" />
        <section className="col-span-2">
          <textarea name="comments" rows="3" placeholder="Message" className="w-[100%]"/>
        </section>
        <section className="col-span-2 text-center">
          <button className="w-[100%]">Say Hello!</button>
        </section>
      </form>
    </div>
  );
};

export default Contact;
