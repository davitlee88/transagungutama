import { Button } from '@/components/ui/button';
import { usePage } from '@inertiajs/react';
import { Globe } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export default function LanguageToggle() {
    const { props } = usePage();
    const currentLocale = props.locale as string || 'en';
    const availableLocales = props.available_locales as Record<string, string> || {};

    const handleLanguageChange = (locale: string) => {
        window.location.href = `/language/${locale}`;
    };

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Globe className="h-4 w-4" />
                    <span className="sr-only">Switch language</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {Object.entries(availableLocales).map(([code, name]) => (
                    <DropdownMenuItem
                        key={code}
                        onClick={() => handleLanguageChange(code)}
                        className={currentLocale === code ? 'bg-accent' : ''}
                    >
                        {name}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}