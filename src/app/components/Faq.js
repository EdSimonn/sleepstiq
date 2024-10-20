'use client'

import { useState } from 'react';

const Faq = () => {
  // State to track which FAQ is opened
  const [openFAQ, setOpenFAQ] = useState(null);

  // Toggle function to handle opening/closing
  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index); 
    }
  };

  // FAQ data (questions and answers)
  const faqs = [
    {
      question: 'Q1: How does it work?',
      answer:
        'Inhaling on the diffuser will turn the inside liquids (melatonin, lavender, chamomile) into a light mist which you inhale, and then exhale out your nose. Inhaling the melatonin allows for a near-instant effect and also allows you to experience the soothing aromatherapeutic effect of lavender and chamomile.',
    },
    {
      question: 'Q2: Why inhale melatonin?',
      answer: 'Melatonin inhalation provides a fast, convenient way to help the body prepare for sleep.',
    },
    {
      question: 'Q3: How much melatonin is there per inhale?',
      answer: 'Each inhale contains a microdose of melatonin, approximately 0.3 mg per inhale.',
    },
    {
      question: 'Q4: Is it an e-cigarette or tobacco product?',
      answer: 'No, it is neither a tobacco product nor an e-cigarette. It contains only plant-based ingredients.',
    },
    {
      question: "Q5: What's in it?",
      answer: 'The device contains melatonin, lavender, chamomile, and other plant-based essential oils.',
    },
    {
      question: "Q6: What's not in it?",
      answer: 'It does not contain any nicotine, tobacco, or harmful chemicals.',
    },
    {
      question: 'Q7: How long does it last?',
      answer: 'Each device lasts for approximately 300 puffs, which is equivalent to about 30 nights of use.',
    },
    {
      question: 'Q8: How do I know it has run out/died?',
      answer: 'The device will stop producing vapor when it has run out of the liquid.',
    },
  ];

  return (
    <div className="flex flex-col md:flex-row max-w-7xl mx-auto px-4 py-8 space-y-8 md:space-y-0 md:space-x-12">
      {/* Left Sidebar */}
      <div className="md:w-1/4">
        <ul className="space-y-4 text-lg text-primary ">
          {/* <li className="font-bold">Sleepstiq Product</li> */}
          <li className="text-xl font-bold">
  Sleepstiq
  <span className="bg-faqBg py-2 px-1 pr-8 ml-1">Product</span>
</li>
          <li>Order</li>
          <li>Melatonin</li>
        </ul>
      </div>

      {/* FAQ Section */}
      <div className="md:w-3/4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-gray-300 py-4">
            {/* Question */}
            <div
              className="cursor-pointer flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <h3 className="text-lg text-primary font-semibold">{faq.question}</h3>
              <span>{openFAQ === index ? '-' : '+'}</span>
            </div>
            {/* Answer */}
            {openFAQ === index && (
              <p className="mt-4">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;

