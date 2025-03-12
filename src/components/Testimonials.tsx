import React from 'react';
import { Star } from 'lucide-react';
export function Testimonials() {
  return <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Testimonials
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Trusted by Businesses Everywhere
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See what our customers are saying about how StockSense has
              transformed their inventory management.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-12">
          <div className="animated-testimonial-card flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <blockquote className="mt-4 flex-1">
              <p className="text-sm text-muted-foreground">
                "StockSense has completely transformed how we manage inventory
                across our three retail locations. The real-time tracking and
                low stock alerts have eliminated stockouts, and we've reduced
                excess inventory by 23%. The ROI has been incredible."
              </p>
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" alt="Sarah Johnson" className="h-10 w-10 rounded-full" />
              <div>
                <p className="text-sm font-medium">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">
                  Retail Store Owner
                </p>
              </div>
            </div>
          </div>
          <div className="animated-testimonial-card flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <blockquote className="mt-4 flex-1">
              <p className="text-sm text-muted-foreground">
                "As an e-commerce business shipping hundreds of orders daily, we
                needed a reliable system to track our inventory. StockSense
                integrates perfectly with our online store and has automated
                what used to be hours of manual work. The analytics have helped
                us optimize our purchasing decisions."
              </p>
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" alt="Michael Chen" className="h-10 w-10 rounded-full" />
              <div>
                <p className="text-sm font-medium">Michael Chen</p>
                <p className="text-xs text-muted-foreground">
                  E-commerce Founder
                </p>
              </div>
            </div>
          </div>
          <div className="animated-testimonial-card flex flex-col rounded-lg border bg-background p-6 shadow-sm">
            <div className="flex">
              {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-primary text-primary" />)}
            </div>
            <blockquote className="mt-4 flex-1">
              <p className="text-sm text-muted-foreground">
                "We manage over 5,000 SKUs across multiple warehouses, and
                StockSense has been a game-changer. The barcode scanning feature
                has made our inventory counts 75% faster, and the multi-location
                management gives us complete visibility across all facilities.
                Worth every penny."
              </p>
            </blockquote>
            <div className="mt-6 flex items-center gap-3">
              <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" alt="Lisa Rodriguez" className="h-10 w-10 rounded-full" />
              <div>
                <p className="text-sm font-medium">Lisa Rodriguez</p>
                <p className="text-xs text-muted-foreground">
                  Operations Manager
                </p>
              </div>
            </div>
          </div>
          <div className="md:col-span-2 lg:col-span-3 rounded-lg border bg-muted/30 p-6 shadow-sm">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-1/3">
                <img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="Office team meeting" className="rounded-lg w-full h-auto object-cover" />
              </div>
              <div className="md:w-2/3">
                <h3 className="text-xl font-bold">
                  Case Study: Northwind Traders
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Northwind Traders, a wholesale food distributor with 12
                  delivery trucks and over 2,000 products, was struggling with
                  inventory accuracy and frequent stockouts. After implementing
                  StockSense:
                </p>
                <ul className="mt-4 space-y-2">
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary h-1.5 w-1.5" />
                    <span>
                      Reduced stockouts by 94% in the first three months
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary h-1.5 w-1.5" />
                    <span>
                      Decreased excess inventory by 31%, freeing up $240,000 in
                      working capital
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary h-1.5 w-1.5" />
                    <span>
                      Improved order fulfillment rate from 86% to 99.2%
                    </span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="rounded-full bg-primary h-1.5 w-1.5" />
                    <span>
                      Cut manual inventory management time by 25 hours per week
                    </span>
                  </li>
                </ul>
                <button className="mt-6 inline-flex items-center text-sm font-medium text-primary hover:underline">
                  Read the full case study
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}