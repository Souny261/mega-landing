import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
export function Footer() {
  return <footer className="w-full border-t bg-background animate-fade-up">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
          <div className="col-span-2 lg:col-span-2 animate-fade-up">
            <div className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                <path d="M20 12V8h-4V4h-4V0H4v4H0v8h4v-4h4v4h4v4h8v-4h-4v-4h4Z" />
              </svg>
              <span className="text-lg font-bold">StockSense</span>
            </div>
            <p className="mt-2 text-sm text-muted-foreground">
              Smart inventory management for growing businesses. Track, manage,
              and optimize your inventory with ease.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <a href="#" className="animated-button rounded-full bg-muted p-2 hover:bg-muted/80">
                <Twitter className="h-4 w-4" />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="animated-button rounded-full bg-muted p-2 hover:bg-muted/80">
                <Facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="animated-button rounded-full bg-muted p-2 hover:bg-muted/80">
                <Instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="animated-button rounded-full bg-muted p-2 hover:bg-muted/80">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>
          <div className="animate-fade-up [animation-delay:100ms]">
            <h3 className="text-sm font-medium">Product</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <a href="#features" className="hover:text-primary">
                Features
              </a>
              <a href="#pricing" className="hover:text-primary">
                Pricing
              </a>
              <a href="#testimonials" className="hover:text-primary">
                Testimonials
              </a>
              <a href="#" className="hover:text-primary">
                Integrations
              </a>
              <a href="#" className="hover:text-primary">
                Updates
              </a>
            </nav>
          </div>
          <div className="animate-fade-up [animation-delay:200ms]">
            <h3 className="text-sm font-medium">Resources</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:text-primary">
                Documentation
              </a>
              <a href="#" className="hover:text-primary">
                Guides
              </a>
              <a href="#" className="hover:text-primary">
                API Reference
              </a>
              <a href="#" className="hover:text-primary">
                Blog
              </a>
              <a href="#faq" className="hover:text-primary">
                FAQ
              </a>
            </nav>
          </div>
          <div className="animate-fade-up [animation-delay:300ms]">
            <h3 className="text-sm font-medium">Company</h3>
            <nav className="mt-4 flex flex-col space-y-2 text-sm">
              <a href="#" className="hover:text-primary">
                About Us
              </a>
              <a href="#" className="hover:text-primary">
                Careers
              </a>
              <a href="#" className="hover:text-primary">
                Contact
              </a>
              <a href="#" className="hover:text-primary">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-primary">
                Terms of Service
              </a>
            </nav>
          </div>
        </div>
        <div className="mt-12 border-t pt-6 flex flex-col md:flex-row justify-between items-center animate-fade-up [animation-delay:400ms]">
          <p className="text-xs text-muted-foreground">
            © 2023 StockSense. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>;
}