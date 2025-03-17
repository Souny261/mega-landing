import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
export function FAQ() {
  const [openItem, setOpenItem] = useState<number | null>(0);
  const faqs = [{
    question: 'How does StockSense help prevent stockouts?',
    answer: 'StockSense uses real-time tracking and customizable low stock alerts to notify you when inventory levels fall below your set thresholds. The system can also analyze historical sales data to help you forecast demand and set optimal reorder points.'
  }, {
    question: 'Can StockSense integrate with my existing e-commerce platform?',
    answer: 'Yes, StockSense integrates with all major e-commerce platforms including Shopify, WooCommerce, Magento, and Amazon. These integrations allow for automatic syncing of inventory levels across all your sales channels.'
  }, {
    question: 'Is there a limit to how many products I can manage?',
    answer: 'Our Free plan allows up to 100 products, the Pro plan supports up to 1,000 products, and our Enterprise plan offers unlimited product management. You can upgrade or downgrade your plan as your business needs change.'
  }, {
    question: 'How secure is my inventory data with StockSense?',
    answer: 'We take security seriously. All data is encrypted both in transit and at rest, and we maintain SOC 2 compliance. Our systems are hosted on secure AWS servers with regular security audits and penetration testing.'
  }, {
    question: 'Can multiple team members use the system simultaneously?',
    answer: 'Yes, all plans support multiple users with customizable permission levels. The Pro plan includes up to 5 user accounts, while the Enterprise plan offers unlimited users with detailed access controls and role-based permissions.'
  }, {
    question: 'How long does implementation typically take?',
    answer: 'Most customers are up and running within 1-2 days. Our guided onboarding process helps you import your existing inventory data, configure your settings, and train your team. Enterprise implementations with custom integrations may take 1-2 weeks.'
  }];
  return <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-up">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            FAQ
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about StockSense and inventory
            management.
          </p>
        </div>
      </div>
      <div className="mx-auto max-w-3xl mt-12 space-y-4">
        {faqs.map((faq, index) => <div key={index} className="rounded-lg border bg-background shadow-sm transition-all duration-200 hover:shadow-md">
          <button className="flex w-full items-center justify-between p-4 text-left transition-colors duration-200 hover:bg-accent/5" onClick={() => setOpenItem(openItem === index ? null : index)}>
            <h3 className="font-medium">{faq.question}</h3>
            {openItem === index ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
          </button>
          {openItem === index && <div className="border-t p-4 animate-fade-down">
            <p className="text-sm text-muted-foreground">{faq.answer}</p>
          </div>}
        </div>)}
      </div>
      <div className="mt-12 flex flex-col items-center justify-center space-y-4 text-center">
        <p className="text-muted-foreground">
          Still have questions? We're here to help.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <button className="animated-button inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Contact Support
          </button>
          <button className="animated-button inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
            Schedule a Demo
          </button>
        </div>
      </div>
    </div>
  </section>;
}