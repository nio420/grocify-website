import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqData } from "../utils/value.js";


const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="max-w-330 mx-auto px-6 py-20">
      <h2 className="text-4xl md:text-5xl font-bold text-zinc-800 text-center">
        Frequently Asked <span className="text-orange-500">Questions</span>
      </h2>

      <div className="mt-12 space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="bg-zinc-100 rounded-2xl shadow-md overflow-hidden "
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center px-6 py-4 text-left focus:outline-none cursor-pointer"
            >
              <span className="text-zinc-800 font-semibold text-lg">
                {item.question}
              </span>
              <span className="text-orange-500">
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </span>
            </button>

            <div
              className={`px-6 text-zinc-600 overflow-hidden transition-all duration-300 ease-in-out ${
                openIndex === index ? "max-h-96 py-4" : "max-h-0"
              }`}
            >
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;