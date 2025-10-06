import { Link } from '@inertiajs/react';
import { MapPin, Phone } from 'lucide-react';

interface FooterProps {
    showQuickLinks?: boolean;
    showContactInfo?: boolean;
}

export default function Footer({ 
    showQuickLinks = true,
    showContactInfo = true 
}: FooterProps) {
    return (
        <footer className="bg-gray-900 text-white">
            <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <div className="mb-4 flex items-center space-x-2">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-blue-600 text-white">
                                <span className="text-sm font-bold">
                                    TAU
                                </span>
                            </div>
                            <span className="font-bold">
                                PT. Trans Agung Utama
                            </span>
                        </div>
                        <p className="text-sm text-gray-400">
                            Your trusted logistics partner across Indonesia
                            since 2000.
                        </p>
                    </div>
                    
                    {showQuickLinks && (
                        <div>
                            <h3 className="mb-4 font-semibold">Quick Links</h3>
                            <ul className="space-y-2 text-sm text-gray-400">
                                <li>
                                    <Link
                                        href="/about"
                                        className="hover:text-white"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/services"
                                        className="hover:text-white"
                                    >
                                        Services
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="/contact"
                                        className="hover:text-white"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    )}

                    {showContactInfo && (
                        <>
                            <div>
                                <h3 className="mb-4 font-semibold">Medan Office</h3>
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
                                    Jakarta Office
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
                    <p>
                        &copy; 2024 PT. Trans Agung Utama. All rights
                        reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}