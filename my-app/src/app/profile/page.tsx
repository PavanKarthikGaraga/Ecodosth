"use client";

import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Order, Address, UserProfile, OrderCard, AddressCard, ProfileForm } from "@/components/profile/ProfileComponents";
import { Package, User, MapPin, LayoutDashboard, LogOut, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ProfilePage() {
    const [activeTab, setActiveTab] = useState("overview");

    // --- Dummy Data ---
    const userProfile: UserProfile = {
        firstName: "Karthik",
        lastName: "Garaga",
        email: "karthik@example.com",
        phone: "+91 98765 43210",
    };

    const orders: Order[] = [
        {
            id: "ORD-7782",
            date: "Oct 24, 2023",
            status: "Delivered",
            total: 1250,
            items: ["Bamboo Toothbrush (x2)", "Wooden Comb"],
        },
        {
            id: "ORD-7783",
            date: "Nov 02, 2023",
            status: "Processing",
            total: 450,
            items: ["Neem Wood Comb"],
        },
        {
            id: "ORD-7784",
            date: "Nov 15, 2023",
            status: "Shipped",
            total: 890,
            items: ["Coconut Shell Bowl", "Bamboo Straws"],
        },
        {
            id: "ORD-7781",
            date: "Sep 10, 2023",
            status: "Delivered",
            total: 2100,
            items: ["Eco Gift Set", "Jute Bag"],
        },
    ];

    const addresses: Address[] = [
        {
            id: "addr_1",
            type: "Home",
            name: "Karthik Garaga",
            street: "123 Green Street, Eco City",
            city: "Hyderabad",
            state: "Telangana",
            zip: "500001",
            phone: "+91 98765 43210",
            isDefault: true,
        },
        {
            id: "addr_2",
            type: "Work",
            name: "Karthik Garaga",
            street: "456 Tech Park, Cyber Towers",
            city: "Hyderabad",
            state: "Telangana",
            zip: "500081",
            phone: "+91 98765 43210",
        },
        {
            id: "addr_3",
            type: "Other",
            name: "Parents",
            street: "789 Quiet Lane, Suburbia",
            city: "Vijayawada",
            state: "Andhra Pradesh",
            zip: "520001",
            phone: "+91 98765 43210",
        },
    ];

    const renderContent = () => {
        switch (activeTab) {
            case "overview":
                return (
                    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Recent Orders Horizontal Scroll */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold">Recent Orders</h2>
                                <Button variant="link" onClick={() => setActiveTab("orders")} className="text-primary">
                                    View All <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                                {orders.slice(0, 3).map((order) => (
                                    <OrderCard key={order.id} order={order} compact />
                                ))}
                            </div>
                        </section>

                        {/* Saved Addresses Horizontal Scroll */}
                        <section>
                            <div className="flex items-center justify-between mb-4">
                                <h2 className="text-xl font-semibold">Saved Addresses</h2>
                                <Button variant="link" onClick={() => setActiveTab("addresses")} className="text-primary">
                                    View All <ChevronRight className="w-4 h-4 ml-1" />
                                </Button>
                            </div>
                            <div className="flex gap-4 overflow-x-auto pb-4 -mx-4 px-4 scrollbar-hide">
                                {addresses.map((addr) => (
                                    <AddressCard key={addr.id} address={addr} compact />
                                ))}
                            </div>
                        </section>
                    </div>
                );
            case "profile":
                return (
                    <div className="max-w-2xl animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-xl font-semibold mb-4">My Profile</h2>
                        <ProfileForm defaultValues={userProfile} />
                    </div>
                );
            case "orders":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <h2 className="text-xl font-semibold mb-4">My Orders</h2>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                            {orders.map((order) => (
                                <OrderCard key={order.id} order={order} />
                            ))}
                        </div>
                    </div>
                );
            case "addresses":
                return (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-xl font-semibold">My Addresses</h2>
                            <Button>
                                <PlusIcon className="w-4 h-4 mr-2" /> Add New Address
                            </Button>
                        </div>
                        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                            {addresses.map((addr) => (
                                <AddressCard key={addr.id} address={addr} />
                            ))}
                        </div>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container mx-auto py-10 px-4 md:px-6 min-h-screen">
            <div className="flex flex-col md:flex-row gap-8">

                {/* Sidebar Navigation */}
                <aside className="w-full md:w-64 shrink-0">
                    <div className="sticky top-24">
                        <h1 className="text-3xl font-heading font-bold text-headings mb-8">My Account</h1>

                        <nav className="space-y-2">
                            <NavItem
                                active={activeTab === "overview"}
                                onClick={() => setActiveTab("overview")}
                                icon={<LayoutDashboard className="w-4 h-4 mr-3" />}
                                label="Overview"
                            />
                            <NavItem
                                active={activeTab === "profile"}
                                onClick={() => setActiveTab("profile")}
                                icon={<User className="w-4 h-4 mr-3" />}
                                label="My Profile"
                            />
                            <NavItem
                                active={activeTab === "orders"}
                                onClick={() => setActiveTab("orders")}
                                icon={<Package className="w-4 h-4 mr-3" />}
                                label="My Orders"
                            />
                            <NavItem
                                active={activeTab === "addresses"}
                                onClick={() => setActiveTab("addresses")}
                                icon={<MapPin className="w-4 h-4 mr-3" />}
                                label="Addresses"
                            />

                            <div className="pt-4 mt-4 border-t border-border">
                                <Button variant="ghost" className="w-full justify-start text-red-500 hover:text-red-600 hover:bg-red-50 px-4">
                                    <LogOut className="w-4 h-4 mr-3" />
                                    Log Out
                                </Button>
                            </div>
                        </nav>
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 min-w-0 py-2">
                    {renderContent()}
                </main>
            </div>
        </div>
    );
}

// Helper Component for Navigation Items
function NavItem({ active, onClick, icon, label }: { active: boolean; onClick: () => void; icon: React.ReactNode; label: string }) {
    return (
        <button
            onClick={onClick}
            className={`w-full flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-colors duration-200 ${active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                }`}
        >
            {icon}
            {label}
        </button>
    );
}

function PlusIcon({ className }: { className?: string }) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
            <path d="M5 12h14" />
            <path d="M12 5v14" />
        </svg>
    )
}
