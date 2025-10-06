import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface CTAButton {
    text: string;
    href: string;
    variant?: 'default' | 'secondary' | 'outline';
    outlineStyle?: 'white' | 'default';
}

interface CTASectionProps {
    title: string;
    description: string;
    primaryButton: CTAButton;
    secondaryButton?: CTAButton;
    background?: 'blue' | 'gray';
}

export default function CTASection({
    title,
    description,
    primaryButton,
    secondaryButton,
    background = 'blue',
}: CTASectionProps) {
    const bgClass = background === 'blue' 
        ? 'bg-blue-600 text-white' 
        : 'bg-gray-100 text-gray-900 dark:bg-gray-800 dark:text-gray-100';

    const getButtonVariant = (variant?: string, outlineStyle?: string) => {
        if (variant === 'outline' && outlineStyle === 'white') {
            return 'outline border-white text-white hover:bg-white hover:text-blue-600';
        }
        return variant || 'default';
    };

    return (
        <section className={`${bgClass} py-16`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {title}
                        </h2>
                        <p className={`max-w-[600px] md:text-xl ${
                            background === 'blue' ? 'text-blue-100' : 'text-muted-foreground'
                        }`}>
                            {description}
                        </p>
                    </div>
                    <div className="flex flex-col gap-2 min-[400px]:flex-row">
                        <Button 
                            size="lg" 
                            variant={primaryButton.variant === 'secondary' ? 'secondary' : 'default'}
                            asChild
                        >
                            <Link href={primaryButton.href}>
                                {primaryButton.text}
                            </Link>
                        </Button>
                        {secondaryButton && (
                            <Button
                                size="lg"
                                variant={getButtonVariant(secondaryButton.variant, secondaryButton.outlineStyle)}
                                asChild
                            >
                                <Link href={secondaryButton.href}>
                                    {secondaryButton.text}
                                </Link>
                            </Button>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}