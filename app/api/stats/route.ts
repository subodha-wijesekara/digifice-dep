import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';
import Module from '@/models/Module';
import Medical from '@/models/Medical';

export async function GET() {
    try {
        await dbConnect();

        const [
            totalUsers,
            totalStudents,
            totalLecturers,
            totalAdmins,
            totalModules,
            medicalPending,
            medicalApproved,
            medicalForwarded,
            medicalRejected
        ] = await Promise.all([
            User.countDocuments({}),
            User.countDocuments({ role: 'student' }),
            User.countDocuments({ role: 'lecturer' }),
            User.countDocuments({ role: 'admin' }),
            Module.countDocuments({}),
            Medical.countDocuments({ status: 'pending' }),
            Medical.countDocuments({ status: 'approved_by_officer' }),
            Medical.countDocuments({ status: 'forwarded_to_dept' }),
            Medical.countDocuments({ status: 'rejected' })
        ]);

        return NextResponse.json({
            users: {
                total: totalUsers,
                students: totalStudents,
                lecturers: totalLecturers,
                admins: totalAdmins
            },
            modules: {
                total: totalModules
            },
            medical: {
                pending: medicalPending,
                approved: medicalApproved,
                forwarded: medicalForwarded,
                rejected: medicalRejected
            }
        });
    } catch (error) {
        console.error("Stats fetch error:", error);
        return NextResponse.json({ error: 'Failed to fetch statistics' }, { status: 500 });
    }
}
