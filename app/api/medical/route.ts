import { NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import Medical from "@/models/Medical";
import User from "@/models/User";

// Force model registration
if (!User) {
    console.log("User model not loaded");
}

export async function GET() {
    try {
        await connectToDB();
        const medicals = await Medical.find().populate('student', 'name email image').sort({ createdAt: -1 });
        return NextResponse.json(medicals);
    } catch (error) {
        console.error("Failed to fetch medicals:", error);
        return NextResponse.json({ error: "Failed to fetch medicals" }, { status: 500 });
    }
}

export async function POST(req: Request) {
    try {
        await connectToDB();
        const body = await req.json();

        // Basic validation handling could go here

        const newMedical = await Medical.create(body);
        return NextResponse.json(newMedical, { status: 201 });
    } catch (error) {
        console.error("Failed to create medical:", error);
        return NextResponse.json({ error: "Failed to create medical" }, { status: 500 });
    }
}
