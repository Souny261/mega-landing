import React from 'react';
import { BarChart3, Bell, ChevronDown, Clock, Home, Package, Search, Settings, ShoppingCart, Users } from 'lucide-react';
export function Dashboard() {
  return <section id="dashboard" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate-fade-up">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
              Dashboard
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Powerful, Yet Simple to Use
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              See how StockSense gives you a complete view of your inventory
              with an intuitive dashboard designed for efficiency.
            </p>
          </div>
        </div>
        <div className="mt-16 rounded-xl border bg-background shadow-xl overflow-hidden animate-fade-up [animation-delay:200ms]">
          <div className="flex border-b">
            <div className="w-64 border-r bg-muted/30 p-4 hidden lg:block animate-fade-right">
              <div className="flex items-center gap-2 px-2 py-3">
                <Package className="h-5 w-5" />
                <span className="font-medium">StockSense</span>
              </div>
              <nav className="mt-6 flex flex-col gap-2">
                <button className="flex items-center gap-2 rounded-lg bg-primary px-3 py-2 text-sm text-primary-foreground">
                  <Home className="h-4 w-4" />
                  <span>Dashboard</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                  <Package className="h-4 w-4" />
                  <span>Products</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                  <ShoppingCart className="h-4 w-4" />
                  <span>Orders</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                  <div className="h-4 w-4" />
                  <span>Suppliers</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                  <Users className="h-4 w-4" />
                  <span>Customers</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                  <BarChart3 className="h-4 w-4" />
                  <span>Reports</span>
                </button>
                <button className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-muted-foreground hover:bg-muted hover:text-foreground">
                  <Settings className="h-4 w-4" />
                  <span>Settings</span>
                </button>
              </nav>
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between border-b p-4 animate-fade-down">
                <div className="flex items-center gap-2 lg:hidden">
                  <Package className="h-5 w-5" />
                  <span className="font-medium">StockSense</span>
                </div>
                <div className="relative hidden md:block">
                  <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                  <input type="search" placeholder="Search products, orders..." className="w-72 rounded-md border border-input bg-background pl-8 pr-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring" />
                </div>
                <div className="flex items-center gap-4">
                  <button className="rounded-full h-8 w-8 flex items-center justify-center hover:bg-muted">
                    <Bell className="h-4 w-4" />
                  </button>
                  <span className="h-8 w-px bg-border" />
                  <button className="flex items-center gap-2 text-sm">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=256&h=256&q=80" alt="User" className="h-8 w-8 rounded-full" />
                    <span className="hidden md:inline-block">John Smith</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-medium animate-fade-up [animation-delay:300ms]">
                  Inventory Overview
                </h3>
                <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3">
                  <div className="animated-feature-card rounded-lg border bg-card p-4 shadow-sm">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Total Products
                        </p>
                        <p className="text-2xl font-bold">1,240</p>
                      </div>
                      <div className="rounded-full bg-primary/10 p-2">
                        <Package className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs text-muted-foreground">
                        <span className="text-emerald-500">↑ 12%</span> from
                        last month
                      </div>
                    </div>
                  </div>
                  <div className="animated-feature-card rounded-lg border bg-card p-4 shadow-sm [animation-delay:100ms]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Low Stock Items
                        </p>
                        <p className="text-2xl font-bold">28</p>
                      </div>
                      <div className="rounded-full bg-destructive/10 p-2">
                        <Bell className="h-4 w-4 text-destructive" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs text-muted-foreground">
                        <span className="text-destructive">↑ 5</span> since
                        yesterday
                      </div>
                    </div>
                  </div>
                  <div className="animated-feature-card rounded-lg border bg-card p-4 shadow-sm [animation-delay:200ms]">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">
                          Pending Orders
                        </p>
                        <p className="text-2xl font-bold">16</p>
                      </div>
                      <div className="rounded-full bg-yellow-500/10 p-2">
                        <Clock className="h-4 w-4 text-yellow-500" />
                      </div>
                    </div>
                    <div className="mt-4">
                      <div className="text-xs text-muted-foreground">
                        <span className="text-emerald-500">↓ 3</span> from
                        yesterday
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-6 animate-fade-up [animation-delay:400ms]">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-medium">Low Stock Products</h4>
                    <button className="text-xs text-primary hover:underline animated-button">
                      View All
                    </button>
                  </div>
                  <div className="mt-2 rounded-lg border">
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm">
                        <thead>
                          <tr className="border-b bg-muted/50">
                            <th className="px-4 py-2 text-left font-medium">
                              Product
                            </th>
                            <th className="px-4 py-2 text-left font-medium">
                              SKU
                            </th>
                            <th className="px-4 py-2 text-left font-medium">
                              Current Stock
                            </th>
                            <th className="px-4 py-2 text-left font-medium">
                              Threshold
                            </th>
                            <th className="px-4 py-2 text-left font-medium">
                              Status
                            </th>
                            <th className="px-4 py-2 text-left font-medium">
                              Action
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b">
                            <td className="px-4 py-2">Wireless Headphones</td>
                            <td className="px-4 py-2">WH-1000XM4</td>
                            <td className="px-4 py-2">5</td>
                            <td className="px-4 py-2">10</td>
                            <td className="px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                                Low Stock
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              <button className="text-xs text-primary hover:underline">
                                Reorder
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">Smartphone Case</td>
                            <td className="px-4 py-2">SC-IP13-BLK</td>
                            <td className="px-4 py-2">2</td>
                            <td className="px-4 py-2">15</td>
                            <td className="px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-red-100 px-2 py-0.5 text-xs font-medium text-red-800">
                                Critical
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              <button className="text-xs text-primary hover:underline">
                                Reorder
                              </button>
                            </td>
                          </tr>
                          <tr className="border-b">
                            <td className="px-4 py-2">USB-C Cable</td>
                            <td className="px-4 py-2">USB-C-2M</td>
                            <td className="px-4 py-2">8</td>
                            <td className="px-4 py-2">20</td>
                            <td className="px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                                Low Stock
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              <button className="text-xs text-primary hover:underline">
                                Reorder
                              </button>
                            </td>
                          </tr>
                          <tr>
                            <td className="px-4 py-2">Bluetooth Speaker</td>
                            <td className="px-4 py-2">BS-JBL-FLIP5</td>
                            <td className="px-4 py-2">4</td>
                            <td className="px-4 py-2">8</td>
                            <td className="px-4 py-2">
                              <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-0.5 text-xs font-medium text-yellow-800">
                                Low Stock
                              </span>
                            </td>
                            <td className="px-4 py-2">
                              <button className="text-xs text-primary hover:underline">
                                Reorder
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 flex flex-col items-center justify-center space-y-4 animate-fade-up [animation-delay:500ms]">
          <p className="text-center text-muted-foreground">
            This is just a glimpse of what StockSense can do for your business.
          </p>
          <button className="animated-button inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90">
            Schedule a Demo
          </button>
        </div>
      </div>
    </section>;
}