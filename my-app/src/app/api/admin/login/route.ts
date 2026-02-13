import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import connectDB from '@/lib/db';
import User from '@/lib/models/User';
import { signToken } from '@/lib/jwt';

export async function POST(req: NextRequest) {
    try {
        await connectDB();
        const { email, password } = await req.json();

        const user = await User.findOne({ email }).select('+password');

        if (!user || user.role !== 'admin') {
            return NextResponse.json(
                { error: 'Invalid credentials or not an admin' },
                { status: 401 }
            );
        }

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {
            return NextResponse.json(
                { error: 'Invalid credentials' },
                { status: 401 }
            );
        }

        const token = signToken({ id: user._id, role: user.role });

        const response = NextResponse.json(
            { message: 'Login successful' },
            { status: 200 }
        );

        response.cookies.set('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 60 * 60 * 2, // 2 hours
            path: '/',
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
