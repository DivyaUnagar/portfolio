import React from "react";

import { contact } from "../data";

const Contact = () => {
  return (
    <section id="contact" className="section bg-primary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hi before:lg:block">
            Contact me
          </h2>
          <p className="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore eos
            tempore saepe eaque quasi minima quibusdam adipisci animi facere ex.
          </p>
        </div>

        <div className="flex flex-col lg-gap-x-8 lg:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal">{description}</p>
                    </div>
                </div>
              );
            })}
          </div>

          <form className="space-y-8 w-full max-w-[780px]">
            <div className="flex gap-8">
              <input className="input" type="text" placeholder="Your name" />
              <input className="input" type="text" placeholder="Your email" />
            </div>

            <input className="input" type="text" placeholder="Subject" />
            <textarea className="textarea" placeholder="Your message"></textarea>

            <button className="btn btn-lg bg-accent hover:bg-accent-hover">Send message</button>
            </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
