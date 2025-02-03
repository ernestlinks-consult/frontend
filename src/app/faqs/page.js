"use client";
// import { useState } from "react";
import Header from "@/app/components/header/index";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We provide educational consulting, application assistance, and career guidance to students worldwide.",
  },
  {
    question: "How can I apply for a program?",
    answer:
      "You can apply through our online portal by filling out the necessary forms and submitting required documents.",
  },
  {
    question: "Do you offer scholarships?",
    answer:
      "Yes, we assist students in finding and applying for scholarships based on eligibility.",
  },
  {
    question: "What are the payment options available?",
    answer:
      "We accept payments through credit cards, bank transfers, and cryptocurrency options.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div
        className="container-fluid mainContainer"
        style={{ height: "100vh" }}>
        <Header />
        <div className="container py-5">
          <div className="p-4">
            <h2 className="fag-title text-center mb-4">
              Frequently Asked Questions
            </h2>
            <div className="accordion" id="faqAccordion">
              {faqs.map((faq, index) => (
                <div key={index} className="accordion-item">
                  <h2 className="accordion-header">
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target={`#collapse${index}`}
                      aria-expanded={openIndex === index ? "true" : "false"}
                      aria-controls={`collapse${index}`}
                      onClick={() => toggleFAQ(index)}>
                      {faq.question}
                    </button>
                  </h2>
                  {/* <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      openIndex === index ? "show" : ""
                    }`}
                    data-bs-parent="#faqAccordion">
                    <div className="accordion-body">{faq.answer}</div>
                  </div> */}
                  <div
                    id={`collapse${index}`}
                    className={`accordion-collapse collapse ${
                      openIndex === index ? "show" : ""
                    }`}
                    data-bs-parent="#faqAccordion">
                    <div
                      className="accordion-body"
                      style={{ color: "rgba(5, 5, 130, 1)" }}>
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
