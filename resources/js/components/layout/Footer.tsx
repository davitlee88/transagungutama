import { Link, usePage } from '@inertiajs/react';
import { MapPin, Phone } from 'lucide-react';

interface FooterProps {
    showQuickLinks?: boolean;
    showContactInfo?: boolean;
}

export default function Footer({
    showQuickLinks = true,
    showContactInfo = true
}: FooterProps) {
    const { props } = usePage();
    const t = props.translations as Record<string, string> || {};
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="mb-4 flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary-foreground">
                                <img src="/assets/logo.webp" alt="TAU" className="text-sm font-bold" />
                            </div>
                            <span className="font-bold">
                                PT. Trans Agung Utama
                            </span>
                        </div>
                        <p className="text-sm text-gray-400">
                            {t.footer_tagline || 'Your trusted logistics partner across Indonesia since 2000.'}
                        </p>
                    </div>

                    {showQuickLinks && (
                        <div>
                            <h3 className="mb-4 font-semibold">{t.footer_quick_links || 'Quick Links'}</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Link
                                        href="/about"
                                        className="hover:text-white"
                                    >
                                        {t.footer_about_us || 'About Us'}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className="hover:text-white"
                                    >
                                        {t.footer_services || 'Services'}
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:text-white"
                                    >
                                        {t.footer_contact || 'Contact'}
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    {showContactInfo && (
                        <>
                            <div>
                                <h3 className="mb-4 font-semibold">{t.footer_medan_office || 'Medan Office'}</h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        Jln. Langsa (Ujung) No. 69
                                    </li>
                                    <li>Medan, Sumatera Utara 20351</li>
                                    <li className="flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        0812 646 6355
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="mb-4 font-semibold">
                                    {t.footer_jakarta_office || 'Jakarta Office'}
                                </h3>
                                <ul className="space-y-2 text-sm text-gray-400">
                                    <li className="flex items-center gap-2">
                                        <MapPin className="h-4 w-4" />
                                        Pergudangan Angke Indah Jin. Kapuk Poglar
                                        Blok. C No. 10
                                    </li>
                                    <li>Jakarta Utara 14440</li>
                                    <li className="flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        021-29667216
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <Phone className="h-4 w-4" />
                                        0812 9792 2068
                                    </li>
                                </ul>
                            </div>
                        </>
                    )}
                </div>
                <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
                    <p
                    dangerouslySetInnerHTML={{
                        __html: (t.footer_copyright || '&copy; {year} PT. Trans Agung Utama. All rights reserved.').replace('{year}', new Date().getFullYear().toString())
                    }}
                />
                </div>
            </div>
        </footer>
    );
}
