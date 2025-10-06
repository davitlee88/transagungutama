import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Head, Link } from '@inertiajs/react';
import NavigationHeader from '@/components/layout/NavigationHeader';
import HeroSection from '@/components/layout/HeroSection';
import CTASection from '@/components/layout/CTASection';
import Footer from '@/components/layout/Footer';
import ContactCard from '@/components/cards/ContactCard';
import {
    Clock,
    MessageSquare,
    Phone,
    Send,
    MapPin,
} from 'lucide-react';

export default function Contact() {
    return (
        <>
            <Head title="Contact Us - PT. Trans Agung Utama" />

            {/* Navigation Header */}
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
                                className="font-medium text-foreground transition-colors hover:text-blue-600"
                            >
                                Home
                            </Link>
                            <Link
                                href="/about"
                                className="font-medium text-foreground transition-colors hover:text-blue-600"
                            >
                                About
                            </Link>
                            <Link
                                href="/services"
                                className="font-medium text-foreground transition-colors hover:text-blue-600"
                            >
                                Services
                            </Link>
                            <Link
                                href="/contact"
                                className="font-medium text-blue-600"
                            >
                                Contact
                            </Link>
                        </nav>
                    </div>
                    <div className="flex flex-1 items-center justify-end space-x-2">
                        <AppearanceToggleDropdown />
                        <div className="w-full flex-1 md:w-auto md:flex-none">
                            <Button variant="outline" size="sm">
                                Get Quote
                            </Button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 dark:from-blue-900/20 dark:to-blue-800/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <Badge variant="secondary">Get In Touch</Badge>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Contact Our Team
                        </h1>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            Ready to discuss your logistics needs? Reach out to
                            our team at either our Medan or Jakarta office.
                            We're here to help you find the right solution for
                            your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-white py-16 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h2 className="mb-6 text-3xl font-bold">
                                    Our Offices
                                </h2>

                                {/* Medan Office */}
                                <Card className="mb-6">
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Building className="h-5 w-5 text-blue-600" />
                                            Medan Office
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="mt-0.5 h-5 w-5 text-blue-600" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Address
                                                </h4>
                                                <p className="text-muted-foreground">
                                                    Jln. Langsa (Ujung) No. 69
                                                    <br />
                                                    Medan, Sumatera Utara
                                                    <br />
                                                    Kode Pos: 20351
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Phone
                                                </h4>
                                                <p className="text-muted-foreground">
                                                    0812 646 6355
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Email
                                                </h4>
                                                <p className="text-muted-foreground">
                                                    info@transagungutama.com
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Jakarta Office */}
                                <Card>
                                    <CardHeader>
                                        <CardTitle className="flex items-center gap-2">
                                            <Building className="h-5 w-5 text-blue-600" />
                                            Jakarta Office
                                        </CardTitle>
                                    </CardHeader>
                                    <CardContent className="space-y-4">
                                        <div className="flex items-start gap-3">
                                            <MapPin className="mt-0.5 h-5 w-5 text-blue-600" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Address
                                                </h4>
                                                <p className="text-muted-foreground">
                                                    Pergudangan Angke Indah Jin.
                                                    Kapuk Poglar
                                                    <br />
                                                    Blok. C No. 10
                                                    <br />
                                                    Jakarta Utara, Kode Pos:
                                                    14440
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Phone
                                                </h4>
                                                <p className="text-muted-foreground">
                                                    021-29667216
                                                </p>
                                                <p className="text-muted-foreground">
                                                    0812 9792 2068
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-5 w-5 text-blue-600" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Email
                                                </h4>
                                                <p className="text-muted-foreground">
                                                    jakarta@transagungutama.com
                                                </p>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5 text-blue-600" />
                                        Send Us a Message
                                    </CardTitle>
                                    <CardDescription>
                                        Fill out the form below and our team
                                        will get back to you within 24 hours.
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">
                                                    First Name
                                                </Label>
                                                <Input
                                                    id="firstName"
                                                    placeholder="John"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">
                                                    Last Name
                                                </Label>
                                                <Input
                                                    id="lastName"
                                                    placeholder="Doe"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">Email</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">Phone</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+62 812-3456-7890"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">
                                                Company
                                            </Label>
                                            <Input
                                                id="company"
                                                placeholder="Your Company Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="service">
                                                Service Interest
                                            </Label>
                                            <select
                                                id="service"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value="">
                                                    Select a service
                                                </option>
                                                <option value="land">
                                                    Land Transportation
                                                </option>
                                                <option value="maritime">
                                                    Maritime Shipping
                                                </option>
                                                <option value="consulting">
                                                    Logistics Consulting
                                                </option>
                                                <option value="warehousing">
                                                    Cargo Handling & Warehousing
                                                </option>
                                                <option value="multiple">
                                                    Multiple Services
                                                </option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">
                                                Message
                                            </Label>
                                            <Textarea
                                                id="message"
                                                placeholder="Tell us about your logistics needs..."
                                                rows={4}
                                                required
                                            />
                                        </div>
                                        <Button
                                            type="submit"
                                            className="w-full"
                                            size="lg"
                                        >
                                            <Send className="mr-2 h-4 w-4" />
                                            Send Message
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Business Hours */}
            <section className="bg-gray-50 py-16 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <Badge variant="secondary">Business Hours</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                When to Reach Us
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Our team is available to assist you during the
                                following hours. For urgent inquiries, please
                                call us directly.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="text-center">
                            <CardHeader>
                                <Clock className="mx-auto mb-2 h-12 w-12 text-blue-600" />
                                <CardTitle>Monday - Friday</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-blue-600">
                                    08:00 - 17:00
                                </p>
                                <p className="text-muted-foreground">
                                    WIB (Western Indonesia Time)
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Clock className="mx-auto mb-2 h-12 w-12 text-blue-600" />
                                <CardTitle>Saturday</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-blue-600">
                                    08:00 - 12:00
                                </p>
                                <p className="text-muted-foreground">
                                    WIB (Western Indonesia Time)
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Clock className="mx-auto mb-2 h-12 w-12 text-blue-600" />
                                <CardTitle>Sunday</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-gray-400">
                                    Closed
                                </p>
                                <p className="text-muted-foreground">
                                    Emergency services available
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Quick Response CTA */}
            <section className="bg-blue-600 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Need Immediate Assistance?
                            </h2>
                            <p className="max-w-[600px] text-blue-100 md:text-xl">
                                For urgent logistics requirements or
                                time-sensitive shipments, call us directly for
                                immediate support.
                            </p>
                        </div>
                        <div className="flex flex-col gap-4 min-[400px]:flex-row">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="tel:08126466355">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Call Medan Office
                                </Link>
                            </Button>
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="tel:02129667216">
                                    <Phone className="mr-2 h-4 w-4" />
                                    Call Jakarta Office
                                </Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-blue-600"
                                asChild
                            >
                                <Link href="mailto:info@transagungutama.com">
                                    <Mail className="mr-2 h-4 w-4" />
                                    Email Us
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section - Placeholder */}
            <section className="bg-white py-16 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <Badge variant="secondary">Our Locations</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Find Us
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Visit our offices in Medan and Jakarta. Both
                                locations are strategically positioned to serve
                                clients across Indonesia efficiently.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>Medan Office Location</CardTitle>
                                <CardDescription>
                                    Jln. Langsa (Ujung) No. 69, Medan
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
                                    <MapPin className="h-12 w-12 text-gray-400" />
                                    <span className="ml-2 text-gray-500">
                                        Map Placeholder
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Jakarta Office Location</CardTitle>
                                <CardDescription>
                                    Pergudangan Angke Indah, Jakarta Utara
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <div className="flex aspect-video items-center justify-center rounded-lg bg-gray-200">
                                    <MapPin className="h-12 w-12 text-gray-400" />
                                    <span className="ml-2 text-gray-500">
                                        Map Placeholder
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>
        </>
    );
}
