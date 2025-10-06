import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';

interface NavigationHeaderProps {
    currentPage?: string;
}

export default function NavigationHeader({ currentPage }: NavigationHeaderProps) {
    const getLinkClassName = (page: string) => {
        const baseClass = "font-medium transition-colors hover:text-blue-600";
        return currentPage === page 
            ? `${baseClass} text-blue-600` 
            : `${baseClass} text-foreground`;
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl flex h-16 items-center px-4 sm:px-6 lg:px-8">
                <div className="mr-4 hidden md:flex">
                    <Link
                        href="/"
                        className="mr-6 flex items-center space-x-2"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                            <span className="text-sm font-bold">TAU</span>
                        </div>
                        <span className="hidden font-bold sm:inline-block">
                            PT. Trans Agung Utama
                        </span>
                    </Link>
                    <nav className="flex items-center gap-6 text-sm">
                        <Link
                            href="/"
                            className={getLinkClassName('home')}
                        >
                            Home
                        </Link>
                        <Link
                            href="/about"
                            className={getLinkClassName('about')}
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className={getLinkClassName('services')}
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className={getLinkClassName('contact')}
                        >
                            Contact
                        </Link>
                    </nav>
                </div>
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <AppearanceToggleDropdown />
                    <div className="w-full flex-1 md:w-auto md:flex-none">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/contact">Get Quote</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
}