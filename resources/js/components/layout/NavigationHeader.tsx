import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import LanguageToggle from '@/components/language-toggle';
import { Button } from '@/components/ui/button';
import { Link } from '@inertiajs/react';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationHeaderProps {
    currentPage?: string;
}

export default function NavigationHeader({ currentPage }: NavigationHeaderProps) {
    const { props } = usePage();
    const translations = props.translations as Record<string, string> || {};
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const getLinkClassName = (page: string) => {
        const baseClass = "font-medium transition-colors hover:text-blue-600";
        return currentPage === page
            ? `${baseClass} text-blue-600`
            : `${baseClass} text-foreground`;
    };

    const getMobileLinkClassName = (page: string) => {
        const baseClass = "block px-3 py-2 text-base font-medium transition-colors hover:text-blue-600 hover:bg-gray-50 dark:hover:bg-gray-800";
        return currentPage === page
            ? `${baseClass} text-blue-600 bg-gray-50 dark:bg-gray-800`
            : `${baseClass} text-foreground`;
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false);
    };

    return (
        <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
            <div className="mx-auto max-w-7xl flex h-16 items-center px-4 sm:px-6 lg:px-8">
                {/* Mobile menu button */}
                <div className="flex md:hidden">
                    <button
                        type="button"
                        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        onClick={toggleMobileMenu}
                        aria-expanded="false"
                    >
                        <span className="sr-only">Open main menu</span>
                        {isMobileMenuOpen ? (
                            <X className="block h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="block h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Logo - visible on all screen sizes */}
                <div className="flex items-center">
                    <Link
                        href="/"
                        className="flex items-center space-x-2"
                    >
                        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground">
                            <img className="text-sm font-bold" src="/assets/logo.webp" alt="TAU" />
                        </div>
                        <span className="hidden font-bold sm:inline-block">
                            PT. Trans Agung Utama
                        </span>
                    </Link>
                </div>

                {/* Desktop navigation */}
                <div className="hidden md:flex md:ml-6">
                    <nav className="flex items-center gap-6 text-sm">
                        <Link
                            href="/"
                            className={getLinkClassName('home')}
                        >
                            {translations.home || 'Home'}
                        </Link>
                        <Link
                            href="/about"
                            className={getLinkClassName('about')}
                        >
                            {translations.about || 'About'}
                        </Link>
                        <Link
                            href="/services"
                            className={getLinkClassName('services')}
                        >
                            {translations.services || 'Services'}
                        </Link>
                        <Link
                            href="/contact"
                            className={getLinkClassName('contact')}
                        >
                            {translations.contact || 'Contact'}
                        </Link>
                    </nav>
                </div>

                {/* Right side controls */}
                <div className="flex flex-1 items-center justify-end space-x-2">
                    <div className="hidden md:flex items-center space-x-2">
                        <LanguageToggle />
                        <AppearanceToggleDropdown />
                    </div>
                    <div className="md:w-auto md:flex-none">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/contact">Get Quote</Link>
                        </Button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t">
                        <Link
                            href="/"
                            className={getMobileLinkClassName('home')}
                            onClick={closeMobileMenu}
                        >
                            {translations.home || 'Home'}
                        </Link>
                        <Link
                            href="/about"
                            className={getMobileLinkClassName('about')}
                            onClick={closeMobileMenu}
                        >
                            {translations.about || 'About'}
                        </Link>
                        <Link
                            href="/services"
                            className={getMobileLinkClassName('services')}
                            onClick={closeMobileMenu}
                        >
                            {translations.services || 'Services'}
                        </Link>
                        <Link
                            href="/contact"
                            className={getMobileLinkClassName('contact')}
                            onClick={closeMobileMenu}
                        >
                            {translations.contact || 'Contact'}
                        </Link>

                        {/* Mobile controls */}
                        <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
                            <div className="flex items-center justify-between px-3">
                                <div className="flex items-center space-x-3">
                                    <LanguageToggle />
                                    <AppearanceToggleDropdown />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
