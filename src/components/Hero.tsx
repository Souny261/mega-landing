import React from 'react';
import { ArrowRight, BarChart3, Clock, Package } from 'lucide-react';
export function Hero() {
  return <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-4">
            <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm animate-fade-down">
              Trusted by 5000+ businesses worldwide
            </div>
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none animate-fade-up">
              Smart Inventory Management for Growing Businesses
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl animate-fade-up [animation-delay:200ms]">
              Stop losing sales due to stockouts or tying up capital in excess
              inventory. StockSense helps you track, manage, and optimize your
              inventory in real-time.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row animate-fade-up [animation-delay:400ms]">
              <button className="animated-button inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Start Free Trial
              </button>
              <button className="animated-button inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
            <div className="flex items-center gap-4 pt-4 animate-fade-up [animation-delay:600ms]">
              <div className="flex -space-x-2">
                <img alt="User" className="h-8 w-8 rounded-full border-2 border-background" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" />
                <img alt="User" className="h-8 w-8 rounded-full border-2 border-background" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" />
                <img alt="User" className="h-8 w-8 rounded-full border-2 border-background" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" />
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">4.9/5</span> from over 2,000
                reviews
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center animate-fade-up [animation-delay:300ms]">
            <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden border bg-background p-2 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="Inventory dashboard showing product levels and analytics" className="w-full h-full object-cover rounded-lg" />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                <div className="flex items-center gap-2 rounded-lg bg-background/90 backdrop-blur p-3 shadow-lg">
                  <Package className="h-5 w-5 text-primary" />
                  <div className="text-xs font-medium">1,240 Products</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-background/90 backdrop-blur p-3 shadow-lg">
                  <Clock className="h-5 w-5 text-primary" />
                  <div className="text-xs font-medium">Real-time Updates</div>
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-background/90 backdrop-blur p-3 shadow-lg">
                  <BarChart3 className="h-5 w-5 text-primary" />
                  <div className="text-xs font-medium">Smart Analytics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}