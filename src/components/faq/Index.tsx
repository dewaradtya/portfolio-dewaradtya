import { useState } from "react";
import FAQItem from "./FAQItem";

const faqs = [
  {
    question: "How can I contact you for collaboration?",
    answer: "You can reach me via email or LinkedIn, which are listed in the contact section of this portfolio.",
  },
  {
    question: "Do you accept freelance projects?",
    answer: "Yes, I am open to freelance projects. Feel free to contact me to discuss your project requirements.",
  },
  {
    question: "What technologies do you specialize in?",
    answer: "I have experience with Laravel, Go, PHP, CodeIgniter, Next.js, and TypeScript. I am also proficient in working with MySQL databases.",
  },
  {
    question: "Where can I see your previous work?",
    answer: "You can check out some of my projects in the 'Portfolio' section of this portfolio or visit my GitHub profile.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* FAQ Header */}
        <div className="mb-10">
          <h2 className="text-6xl md:text-8xl font-bold tracking-tight leading-none z-10 text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mt-2 max-w-2xl">
            Find answers to frequently asked questions about how to work together and more.
          </p>
        </div>

        {/* FAQ List */}
        <div className="grid grid-cols-1 gap-y-4">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
