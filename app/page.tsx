import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { GraduationCap, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default async function Home() {
  const session = await getServerSession(authOptions);

  if (session) {
    if (session.user.role === "student") {
      redirect("/student");
    } else if (session.user.role === "lecturer") {
      redirect("/lecturer");
    } else if (session.user.role === "admin") {
      redirect("/admin");
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="absolute top-0 w-full z-50 border-b border-white/10 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-white">
            <GraduationCap className="h-6 w-6" />
            <span className="text-xl font-bold tracking-tight">Digifice</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="secondary" className="font-semibold">
                Sign In
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 relative flex items-center justify-center min-h-[800px]">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-bg.png"
            alt="University students collaborating"
            fill
            className="object-cover"
            priority
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto space-y-8">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight drop-shadow-sm">
              Digitize Your Academic Office Work
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-sm">
              Handle all your academic office work digitally - from medical submissions to exam results issuance and more.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <Link href="/login">
                <Button size="lg" className="h-14 px-8 text-lg rounded-full shadow-lg shadow-primary/20 transition-transform hover:scale-105">
                  Get Started
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t bg-muted/40 backdrop-blur">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-muted-foreground">
              <GraduationCap className="h-5 w-5" />
              <span className="font-semibold text-foreground">Digifice</span>
            </div>
            <p className="text-sm text-muted-foreground text-center md:text-right">
              &copy; {new Date().getFullYear()} Digifice University Management System. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
