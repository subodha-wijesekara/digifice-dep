import { NextResponse } from "next/server";
import connectToDB from "@/lib/db";
import Medical from "@/models/Medical";

export async function PATCH(req: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        await connectToDB();
        const { id } = await params;
        const body = await req.json();

        // Allow updating status and comments
        const updateData = {
            ...(body.status && { status: body.status }),
            ...(body.officerComments && { officerComments: body.officerComments }),
            ...(body.adminComments && { adminComments: body.adminComments }),
        };

        const updatedMedical = await Medical.findByIdAndUpdate(
            id,
            updateData,
            { new: true }
        );

        if (!updatedMedical) {
            return NextResponse.json({ error: "Medical record not found" }, { status: 404 });
        }

        return NextResponse.json(updatedMedical);
    } catch (error) {
        console.error("Failed to update medical:", error);
        return NextResponse.json({ error: "Failed to update medical" }, { status: 500 });
    }
}
