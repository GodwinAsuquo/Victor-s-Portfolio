import React from "react";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <section className="flex flex-col items-left md:items-center py-14 px-10 mt-16 space-y-4 md:space-y-0 bg-white dark:bg-[#2C2C2E] dark:text-white justify-between md:flex-row dark:mt-0 dark:pt-16">
      <p className="font-semibold">
        &copy; Victor Asuquo, 2022. All rights reserved.
      </p>
      <button
        onClick={() => (window.location = "mailto:talktoasuquo@gmail.com")}
        className="flex items-center"
      >
        <FiMail />
        <p className="pl-2 underline underline-offset-2">
          talktoasuquo@gmail.com
        </p>
      </button>
    </section>
  );
};

export default Footer;
