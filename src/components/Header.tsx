import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
    <div className="container flex h-16 items-center justify-between animate-fade-down">
      <div className="flex items-center gap-2">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary animate-fade-in">
          <path d="M20 12V8h-4V4h-4V0H4v4H0v8h4v-4h4v4h4v4h8v-4h-4v-4h4Z" />
        </svg>
        <span className="text-xl font-bold">StockSense</span>
      </div>
      <nav className="hidden md:flex items-center gap-6">
        <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
          Features
        </a>
        <a href="#dashboard" className="text-sm font-medium hover:text-primary transition-colors">
          Dashboard
        </a>
        <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
          Pricing
        </a>
        <a href="#testimonials" className="text-sm font-medium hover:text-primary transition-colors">
          Testimonials
        </a>
        <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
          FAQ
        </a>
        <a href="#customers" className="text-sm font-medium hover:text-primary transition-colors">
          Our Customers
        </a>
      </nav>
      <div className="hidden md:flex items-center gap-4">
        <button className="animated-button text-sm font-medium hover:text-primary">
          Login
        </button>
        <button className="animated-button inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
          Start Free Trial
        </button>
      </div>
      <button className="md:hidden animated-button" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
    {mobileMenuOpen && <div className="md:hidden p-4 bg-background border-b animate-fade-down">
      <nav className="flex flex-col gap-4">
        <a href="#features" className="text-sm font-medium hover:text-primary">
          Features
        </a>
        <a href="#dashboard" className="text-sm font-medium hover:text-primary">
          Dashboard
        </a>
        <a href="#pricing" className="text-sm font-medium hover:text-primary">
          Pricing
        </a>
        <a href="#testimonials" className="text-sm font-medium hover:text-primary">
          Testimonials
        </a>
        <a href="#faq" className="text-sm font-medium hover:text-primary">
          FAQ
        </a>
        <hr className="my-2" />
        <button className="text-sm font-medium hover:text-primary text-left">
          Login
        </button>
        <button className="bg-primary text-primary-foreground rounded-md px-4 py-2 text-sm font-medium hover:bg-primary/90 w-full text-center">
          Start Free Trial
        </button>
      </nav>
    </div>}
  </header>;
}