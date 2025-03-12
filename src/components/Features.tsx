import React from 'react';
import { BarChart3, Package, Truck, Zap, Store, Bell, ShieldCheck, FileSpreadsheet } from 'lucide-react';
export function Features() {
  return <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Features
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Everything You Need to Master Inventory
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              StockSense combines powerful features with an intuitive interface
              to give you complete control over your inventory.
            </p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-16">
          <div className="animated-feature-card flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Package className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Real-time Tracking</h3>
            <p className="text-sm text-muted-foreground">
              Monitor stock levels across all locations in real-time with
              automatic updates as items are sold or received.
            </p>
          </div>
          <div className="animated-feature-card flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Store className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Multi-location Management</h3>
            <p className="text-sm text-muted-foreground">
              Easily manage inventory across multiple warehouses, stores, or
              fulfillment centers from a single dashboard.
            </p>
          </div>
          <div className="animated-feature-card flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Bell className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Low Stock Alerts</h3>
            <p className="text-sm text-muted-foreground">
              Set custom thresholds and receive notifications when products are
              running low to prevent stockouts.
            </p>
          </div>
          <div className="animated-feature-card flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <BarChart3 className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Advanced Analytics</h3>
            <p className="text-sm text-muted-foreground">
              Gain insights with detailed reports on sales trends, inventory
              turnover, and product performance.
            </p>
          </div>
          <div className="animated-feature-card flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Truck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Order Management</h3>
            <p className="text-sm text-muted-foreground">
              Create purchase orders, track deliveries, and manage suppliers all
              within the same platform.
            </p>
          </div>
          <div className="animated-feature-card flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <FileSpreadsheet className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Batch Importing</h3>
            <p className="text-sm text-muted-foreground">
              Quickly update inventory with bulk imports from CSV files or
              connect directly with your e-commerce platform.
            </p>
          </div>
          <div className="animated-feature-card flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <Zap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">Barcode Scanning</h3>
            <p className="text-sm text-muted-foreground">
              Scan barcodes with your mobile device for quick inventory counts
              and product lookups.
            </p>
          </div>
          <div className="animated-feature-card flex flex-col items-start gap-2 rounded-lg border bg-background p-6 shadow-sm">
            <div className="rounded-full bg-primary/10 p-2">
              <ShieldCheck className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-bold">User Permissions</h3>
            <p className="text-sm text-muted-foreground">
              Control access with customizable user roles and permissions for
              team members.
            </p>
          </div>
          <div className="col-span-1 md:col-span-2 lg:col-span-1 flex flex-col items-center justify-center gap-2 rounded-lg border bg-primary p-6 shadow-sm">
            <h3 className="text-lg font-bold text-primary-foreground">
              Ready to optimize your inventory?
            </h3>
            <button className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary-foreground/90">
              Start Free Trial
            </button>
          </div>
        </div>
      </div>
    </section>;
}