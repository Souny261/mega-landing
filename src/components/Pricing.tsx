import React from 'react';
import { ArrowRight, Check, HelpCircle, X } from 'lucide-react';
export function Pricing() {
  return <section id="pricing" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-up">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
            Pricing
          </div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Simple, Transparent Pricing
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Choose the plan that's right for your business. All plans include
            a 14-day free trial.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-3 mt-12">
        <div className="animated-pricing-card flex flex-col rounded-lg border bg-background p-6 shadow-sm">
          <div className="flex-1">
            <h3 className="text-xl font-bold">Free</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Perfect for small businesses just getting started.
            </p>
            <div className="mt-4">
              <span className="text-3xl font-bold">$0</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Up to 100 products</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Basic reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Single location</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Email support</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Low stock alerts
                </span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">
                  Barcode scanning
                </span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">API access</span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <button className="inline-flex w-full items-center justify-center rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-muted">
              Start Free Trial
            </button>
          </div>
        </div>
        <div className="relative flex flex-col rounded-lg border border-primary bg-background p-6 shadow-sm animated-pricing-card">
          <div className="absolute -top-3 left-0 right-0 mx-auto w-fit rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
            Most Popular
          </div>
          <div className="flex-1">
            <h3 className="text-xl font-bold">Pro</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              For growing businesses with multiple locations.
            </p>
            <div className="mt-4">
              <span className="text-3xl font-bold">$49</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Up to 1,000 products</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Up to 3 locations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Priority email & chat support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Low stock alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Barcode scanning</span>
              </li>
              <li className="flex items-center gap-2">
                <X className="h-4 w-4 text-muted-foreground" />
                <span className="text-muted-foreground">API access</span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <button className="inline-flex w-full items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90">
              Start Free Trial
            </button>
          </div>
        </div>
        <div className="flex flex-col rounded-lg border bg-background p-6 shadow-sm animated-pricing-card">
          <div className="flex-1">
            <h3 className="text-xl font-bold">Enterprise</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              For large businesses with complex inventory needs.
            </p>
            <div className="mt-4">
              <span className="text-3xl font-bold">$199</span>
              <span className="text-muted-foreground">/month</span>
            </div>
            <ul className="mt-6 space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited products</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Custom reporting</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Unlimited locations</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>24/7 phone, email & chat support</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced low stock alerts</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Advanced barcode & RFID scanning</span>
              </li>
              <li className="flex items-center gap-2">
                <Check className="h-4 w-4 text-primary" />
                <span>Full API access</span>
              </li>
            </ul>
          </div>
          <div className="mt-6">
            <button className="inline-flex w-full items-center justify-center rounded-md border border-primary bg-background px-4 py-2 text-sm font-medium text-primary shadow-sm hover:bg-muted">
              Contact Sales
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 rounded-lg border bg-background p-6 shadow-sm">
        <div className="flex items-start gap-4">
          <div className="rounded-full bg-primary/10 p-2">
            <HelpCircle className="h-6 w-6 text-primary" />
          </div>
          <div>
            <h3 className="text-lg font-medium">Need a custom solution?</h3>
            <p className="mt-1 text-sm text-muted-foreground">
              We offer tailored solutions for businesses with specific
              requirements. Our team will work with you to build a custom
              plan.
            </p>
            <button className="mt-4 inline-flex items-center text-sm font-medium text-primary hover:underline">
              Contact our sales team
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>;
}