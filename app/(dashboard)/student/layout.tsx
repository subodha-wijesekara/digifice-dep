import LogOutButton from "@/components/LogOutButton";
import { ModeToggle } from "@/components/mode-toggle";
import { GraduationCap } from "lucide-react";

import { StudentNav } from "@/components/student-nav";

export default function StudentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex h-screen bg-background text-foreground">
            <aside className="w-64 border-r border-border bg-card/50 backdrop-blur supports-[backdrop-filter]:bg-background/60 hidden md:flex flex-col relative justify-between">
                <div>
                    <div className="p-6 flex items-center gap-2">
                        <GraduationCap className="h-6 w-6 text-primary" />
                        <div>
                            <h1 className="text-xl font-bold tracking-tight">Digifice</h1>
                            <p className="text-xs text-muted-foreground uppercase tracking-wider font-semibold">Student</p>
                        </div>
                    </div>
                    <StudentNav />
                </div>

                <div className="p-4 space-y-2 border-t border-border bg-background/50">
                    <div className="flex items-center justify-between px-2 mb-2">
                        <span className="text-xs font-semibold text-muted-foreground">Theme</span>
                        <ModeToggle />
                    </div>
                    <LogOutButton className="text-muted-foreground hover:text-foreground hover:bg-destructive/10 hover:text-destructive" />
                </div>
            </aside>
            <main className="flex-1 overflow-y-auto p-8 bg-muted/20">
                <div className="max-w-6xl mx-auto">
                    {children}
                </div>
            </main>
        </div>
    )
}
