'use client';

import { useEffect, useState } from 'react';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { format } from 'date-fns';
import { Loader2 } from 'lucide-react';

interface OrderItem {
    product: {
        title: string;
        images: string[];
    };
    quantity: number;
    size: string;
    price: number;
}

interface Order {
    _id: string;
    user?: {
        name: string;
        email: string;
    };
    guestInfo?: {
        name: string;
        email: string;
        phone: string;
    };
    totalAmount: number;
    status: string;
    createdAt: string;
    items: OrderItem[];
    shippingAddress: {
        city: string;
        country: string;
    };
}

const statusColorMap: Record<string, string> = {
    Pending: 'bg-yellow-500',
    Processing: 'bg-blue-500',
    Shipped: 'bg-purple-500',
    Delivered: 'bg-green-500',
    Cancelled: 'bg-red-500',
};

export default function OrdersPage() {
    const [orders, setOrders] = useState<Order[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchOrders();
    }, []);

    const fetchOrders = async () => {
        try {
            const res = await fetch('/api/admin/orders');
            const data = await res.json();
            if (res.ok) {
                setOrders(data.orders || []);
            }
        } catch (error) {
            console.error('Error fetching orders:', error);
        } finally {
            setLoading(false);
        }
    };

    const updateStatus = async (orderId: string, newStatus: string) => {
        try {
            const res = await fetch(`/api/admin/orders/${orderId}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ status: newStatus }),
            });

            if (res.ok) {
                setOrders((prev) =>
                    prev.map((o) => (o._id === orderId ? { ...o, status: newStatus } : o))
                );
            } else {
                alert('Failed to update status');
            }
        } catch (error) {
            console.error(error);
            alert('Error updating status');
        }
    };

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-4xl font-bold tracking-tight">Orders</h1>
            </div>

            <div className="rounded-md border">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Order ID</TableHead>
                            <TableHead>Customer</TableHead>
                            <TableHead>Date</TableHead>
                            <TableHead>Total</TableHead>
                            <TableHead>Items</TableHead>
                            <TableHead>Status</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {loading ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-10">
                                    <Loader2 className="h-6 w-6 animate-spin mx-auto" />
                                </TableCell>
                            </TableRow>
                        ) : orders.length === 0 ? (
                            <TableRow>
                                <TableCell colSpan={6} className="text-center py-10">
                                    No orders found.
                                </TableCell>
                            </TableRow>
                        ) : (
                            orders.map((order) => (
                                <TableRow key={order._id}>
                                    <TableCell className="font-mono text-xs text-muted-foreground">
                                        {order._id.substring(order._id.length - 8).toUpperCase()}
                                    </TableCell>
                                    <TableCell>
                                        <div className="flex flex-col">
                                            <span className="font-medium">
                                                {order.user?.name || order.guestInfo?.name || 'Guest'}
                                            </span>
                                            <span className="text-xs text-muted-foreground">
                                                {order.user?.email || order.guestInfo?.email}
                                            </span>
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        {format(new Date(order.createdAt), 'MMM d, yyyy')}
                                    </TableCell>
                                    <TableCell>₹{order.totalAmount}</TableCell>
                                    <TableCell>
                                        <div className="text-sm">
                                            {order.items.map((item, i) => (
                                                <div key={i}>
                                                    {item.quantity}x {item.product?.title} ({item.size})
                                                </div>
                                            ))}
                                        </div>
                                    </TableCell>
                                    <TableCell>
                                        <Select
                                            defaultValue={order.status}
                                            onValueChange={(val) => updateStatus(order._id, val)}
                                        >
                                            <SelectTrigger className={`w-[130px] h-8 text-white ${statusColorMap[order.status] || 'bg-gray-500'}`}>
                                                <SelectValue />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectItem value="Pending">Pending</SelectItem>
                                                <SelectItem value="Processing">Processing</SelectItem>
                                                <SelectItem value="Shipped">Shipped</SelectItem>
                                                <SelectItem value="Delivered">Delivered</SelectItem>
                                                <SelectItem value="Cancelled">Cancelled</SelectItem>
                                            </SelectContent>
                                        </Select>
                                    </TableCell>
                                </TableRow>
                            ))
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
}
