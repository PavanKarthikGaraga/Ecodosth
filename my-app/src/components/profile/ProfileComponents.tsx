import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Package, MapPin, Loader2 } from "lucide-react";

// --- Types ---
export interface Order {
    id: string;
    date: string;
    status: "Delivered" | "Processing" | "Shipped" | "Cancelled";
    total: number;
    items: string[];
}

export interface Address {
    id: string;
    type: "Home" | "Work" | "Other";
    name: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    phone: string;
    isDefault?: boolean;
}

export interface UserProfile {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
}

// --- Components ---

export const OrderCard = ({ order, compact = false }: { order: Order; compact?: boolean }) => {
    const getStatusColor = (status: Order["status"]) => {
        switch (status) {
            case "Delivered": return "bg-green-100 text-green-700 hover:bg-green-100/80";
            case "Processing": return "bg-blue-100 text-blue-700 hover:bg-blue-100/80";
            case "Shipped": return "bg-yellow-100 text-yellow-700 hover:bg-yellow-100/80";
            case "Cancelled": return "bg-red-100 text-red-700 hover:bg-red-100/80";
            default: return "bg-gray-100 text-gray-700 hover:bg-gray-100/80";
        }
    };

    return (
        <Card className={`min-w-[300px] snap-start ${compact ? 'shadow-sm' : ''}`}>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                    <div>
                        <CardTitle className="text-base font-semibold">Order #{order.id}</CardTitle>
                        <p className="text-xs text-muted-foreground">{order.date}</p>
                    </div>
                    <Badge className={getStatusColor(order.status)} variant="secondary">
                        {order.status}
                    </Badge>
                </div>
            </CardHeader>
            <CardContent className="text-sm">
                <div className="space-y-1 mb-3">
                    <p className="font-medium text-foreground/80">{order.items.join(", ")}</p>
                    <p className="text-muted-foreground">Total: ₹{order.total}</p>
                </div>
                <Button variant="outline" size="sm" className="w-full text-xs h-8">
                    View Details
                </Button>
            </CardContent>
        </Card>
    );
};

export const AddressCard = ({ address, compact = false }: { address: Address; compact?: boolean }) => {
    return (
        <Card className={`min-w-[280px] snap-start relative ${compact ? 'shadow-sm' : ''}`}>
            <CardHeader className="pb-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4 text-primary" />
                        <span className="font-semibold">{address.type}</span>
                    </div>
                    {address.isDefault && (
                        <Badge variant="outline" className="text-[10px] px-2 py-0 border-primary text-primary">
                            Default
                        </Badge>
                    )}
                </div>
            </CardHeader>
            <CardContent className="text-sm text-muted-foreground">
                <p className="font-medium text-foreground mb-1">{address.name}</p>
                <p>{address.street}</p>
                <p>{address.city}, {address.state} - {address.zip}</p>
                <p className="mt-2 text-xs">Ph: {address.phone}</p>
                <div className="mt-3 flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1 text-xs h-8">
                        Edit
                    </Button>
                    <Button variant="ghost" size="sm" className="text-xs h-8 text-destructive hover:text-destructive">
                        Delete
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
};

export const ProfileForm = ({ defaultValues }: { defaultValues: UserProfile }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input id="firstName" defaultValue={defaultValues.firstName} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input id="lastName" defaultValue={defaultValues.lastName} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={defaultValues.email} />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="phone">Mobile Number</Label>
                        <Input id="phone" type="tel" defaultValue={defaultValues.phone} />
                    </div>
                    <div className="md:col-span-2 pt-2">
                        <Button>Save Changes</Button>
                    </div>
                </form>
            </CardContent>
        </Card>
    );
};
