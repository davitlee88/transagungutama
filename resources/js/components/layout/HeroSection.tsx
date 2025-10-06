import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface HeroSectionProps {
    badge?: string;
    title: string;
    description: string;
    primaryButton?: {
        text: string;
        href: string;
    };
    secondaryButton?: {
        text: string;
        href: string;
    };
    showHighlight?: boolean;
    highlightContent?: {
        icon: React.ReactNode;
        title: string;
        subtitle: string;
    };
}

export default function HeroSection({
    badge,
    title,
    description,
    primaryButton,
    secondaryButton,
    showHighlight = false,
    highlightContent,
}: HeroSectionProps) {
    return (
        <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 dark:from-blue-900/20 dark:to-blue-800/20">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-10 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
                    <div className="flex flex-col justify-center space-y-4">
                        <div className="space-y-2">
                            {badge && (
                                <Badge variant="secondary" className="w-fit">
                                    {badge}
                                </Badge>
                            )}
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                                {title}
                            </h1>
                            <p className="text-xl text-muted-foreground">
                                {description}
                            </p>
                        </div>
                        {(primaryButton || secondaryButton) && (
                            <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                {primaryButton && (
                                    <Button size="lg" asChild>
                                        <Link href={primaryButton.href}>
                                            {primaryButton.text}
                                        </Link>
                                    </Button>
                                )}
                                {secondaryButton && (
                                    <Button variant="outline" size="lg" asChild>
                                        <Link href={secondaryButton.href}>
                                            {secondaryButton.text}
                                        </Link>
                                    </Button>
                                )}
                            </div>
                        )}
                    </div>
                    {showHighlight && highlightContent && (
                        <div className="flex items-center justify-center">
                            <div className="relative">
                                <div className="absolute inset-0 bg-blue-600/20 blur-3xl"></div>
                                <div className="relative rounded-2xl bg-gradient-to-br from-blue-600 to-blue-800 p-8 shadow-2xl">
                                    {highlightContent.icon}
                                    <h3 className="text-xl font-bold text-white">
                                        {highlightContent.title}
                                    </h3>
                                    <p className="text-blue-100">
                                        {highlightContent.subtitle}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}