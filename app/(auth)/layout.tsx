import Image from "next/image";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex min-h-screen flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Image replicating Landing Page */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hero-bg.png"
                    alt="Background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Overlay for readability - slightly darker than landing page to pop the form */}
                <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px]" />
            </div>

            <div className="relative z-10 w-full max-w-md">
                {children}
            </div>
        </div>
    )
}
