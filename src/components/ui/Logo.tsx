import Image from "next/image";

interface LogoProps {
    className?: string;
}

export function Logo({ className }: LogoProps) {
    return (
        <div className={`relative flex items-center ${className}`}>
            <Image
                src="/logo-dark.png"
                alt="Finch Global"
                width={640}
                height={352}
                className="block w-auto h-12"
                priority
            />
            <Image
                src="/logo-light.png"
                alt="Finch Global"
                width={728}
                height={360}
                className="hidden w-auto h-12"
                priority
            />
        </div>
    );
}
