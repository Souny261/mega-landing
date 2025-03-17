import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Clock, Package } from "lucide-react";

export function Hero() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-background">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col justify-center space-y-4"
          >
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block rounded-lg bg-muted px-3 py-1 text-sm"
            >
              Trusted by 5000+ businesses worldwide
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl"
            >
              Smart Inventory Management for Growing Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-[600px] text-muted-foreground md:text-xl"
            >
              Stop losing sales due to stockouts or tying up capital in excess
              inventory. StockSense helps you track, manage, and optimize your
              inventory in real-time.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col gap-2 min-[400px]:flex-row"
            >
              <button className="animated-button inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
                Start Free Trial
              </button>
              <button className="animated-button inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground">
                Book a Demo
                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-4 pt-4"
            >
              <div className="flex -space-x-2">
                {["photo-1534528741775-53994a69daeb", "photo-1494790108377-be9c29b29330", "photo-1599566150163-29194dcaad36"].map(
                  (img, index) => (
                    <img
                      key={index}
                      alt="User"
                      className="h-8 w-8 rounded-full border-2 border-background"
                      src={`https://images.unsplash.com/${img}?ixlib=rb-4.0.3&auto=format&fit=crop&w=256&h=256&q=80`}
                    />
                  )
                )}
              </div>
              <div className="text-sm text-muted-foreground">
                <span className="font-medium">4.9/5</span> from over 2,000
                reviews
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center"
          >
            <div className="relative w-full h-full min-h-[350px] rounded-2xl overflow-hidden border bg-background p-2 shadow-xl transition-all duration-300 hover:shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80"
                alt="Inventory dashboard showing product levels and analytics"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-3 gap-2">
                {[{ Icon: Package, text: "1,240 Products" }, { Icon: Clock, text: "Real-time Updates" }, { Icon: BarChart3, text: "Smart Analytics" }].map(
                  ({ Icon, text }, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
                      className="flex items-center gap-2 rounded-lg bg-background/90 backdrop-blur p-3 shadow-lg"
                    >
                      <Icon className="h-5 w-5 text-primary" />
                      <div className="text-xs font-medium">{text}</div>
                    </motion.div>
                  )
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
