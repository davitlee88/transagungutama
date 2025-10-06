import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import AppearanceToggleDropdown from '@/components/appearance-dropdown';
import { Head, Link } from '@inertiajs/react';
import {
    Award,
    CheckCircle,
    Heart,
    Lightbulb,
    MapPin,
    Shield,
    Target,
    TrendingUp,
    Users,
} from 'lucide-react';

export default function About() {
    return (
        <>
            <Head title="About Us - PT. Trans Agung Utama" />

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
                                className="font-medium text-blue-600"
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
                                className="font-medium text-foreground transition-colors hover:text-blue-600"
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

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 dark:from-blue-900/20 dark:to-blue-800/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <Badge variant="secondary">About Our Company</Badge>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            Building Trust Since 2000
                        </h1>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            PT. Trans Agung Utama has established itself as a
                            leading provider of land and maritime freight
                            services across Indonesia, serving diverse clientele
                            with reliability and excellence.
                        </p>
                    </div>
                </div>
            </section>

            {/* Company Overview */}
            <section className="bg-white py-16 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div>
                                <h2 className="mb-4 text-3xl font-bold">
                                    Our Story
                                </h2>
                                <p className="mb-4 text-muted-foreground">
                                    Founded in 2000, PT. Trans Agung Utama has
                                    grown from a small logistics provider to one
                                    of Indonesia's most trusted freight service
                                    companies. With strategic locations in Medan
                                    and Jakarta, we serve a diverse clientele,
                                    from small businesses to large corporations.
                                </p>
                                <p className="mb-4 text-muted-foreground">
                                    Our commitment to excellence and customer
                                    satisfaction has made us a trusted partner
                                    in logistics and freight forwarding. Over
                                    the years, we have successfully transported
                                    countless shipments across Indonesia,
                                    building a reputation for reliability,
                                    safety, and punctuality.
                                </p>
                                <p className="text-muted-foreground">
                                    Today, we continue to innovate and expand
                                    our services, leveraging modern technology
                                    and industry best practices to meet the
                                    evolving needs of our clients.
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <Award className="mb-2 h-10 w-10 text-blue-600" />
                                    <CardTitle>20+ Years Experience</CardTitle>
                                    <CardDescription>
                                        Two decades of excellence in Indonesian
                                        logistics
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <MapPin className="mb-2 h-10 w-10 text-blue-600" />
                                    <CardTitle>Strategic Locations</CardTitle>
                                    <CardDescription>
                                        Offices in Medan and Jakarta serving all
                                        of Indonesia
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Users className="mb-2 h-10 w-10 text-blue-600" />
                                    <CardTitle>Diverse Clientele</CardTitle>
                                    <CardDescription>
                                        Trusted by businesses of all sizes
                                        across industries
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Vision & Mission */}
            <section className="bg-gray-50 py-16 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <Badge variant="secondary">Our Purpose</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Vision & Mission
                            </h2>
                        </div>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardHeader>
                                <Target className="mb-2 h-12 w-12 text-blue-600" />
                                <CardTitle className="text-2xl">
                                    Our Vision
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-medium text-muted-foreground">
                                    To become Indonesia's most trusted and
                                    innovative logistics partner, delivering
                                    seamless solutions that drive the success of
                                    our clients.
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                            <CardHeader>
                                <Lightbulb className="mb-2 h-12 w-12 text-green-600" />
                                <CardTitle className="text-2xl">
                                    Our Mission
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            To provide safe, reliable, and
                                            efficient freight services that
                                            align with clients' timeframes and
                                            expectations
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            To foster long-term, mutually
                                            beneficial relationships with our
                                            partners through professionalism and
                                            integrity
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            To continually innovate by
                                            integrating cutting-edge technology
                                            to optimize operational efficiency
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            To develop our human resources'
                                            capabilities, ensuring high
                                            standards of service and expertise
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            To uphold safety and care for all
                                            transported goods, minimizing risk
                                            throughout the supply chain
                                        </span>
                                    </li>
                                </ul>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="bg-white py-16 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <Badge variant="secondary">Our Principles</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Core Values
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                The values that guide everything we do and
                                define who we are as a company.
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="text-center">
                            <CardHeader>
                                <Heart className="mx-auto mb-2 h-12 w-12 text-red-500" />
                                <CardTitle>Customer Satisfaction</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Prioritizing client needs to achieve
                                    excellence in every service we provide.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Shield className="mx-auto mb-2 h-12 w-12 text-blue-500" />
                                <CardTitle>Safety</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Ensuring the security of cargo and staff at
                                    all times through rigorous safety protocols.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <CheckCircle className="mx-auto mb-2 h-12 w-12 text-green-500" />
                                <CardTitle>Reliability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Committing to punctual and consistent
                                    service delivery that our clients can depend
                                    on.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Lightbulb className="mx-auto mb-2 h-12 w-12 text-yellow-500" />
                                <CardTitle>Innovation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Embracing technological advances for greater
                                    efficiency and improved service quality.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Award className="mx-auto mb-2 h-12 w-12 text-purple-500" />
                                <CardTitle>Integrity</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Building trust through transparency and
                                    ethical business practices in all our
                                    operations.
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <TrendingUp className="mx-auto mb-2 h-12 w-12 text-teal-500" />
                                <CardTitle>Sustainability</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    Promoting environmentally friendly
                                    operations and building long-term
                                    partnerships.
                                </CardDescription>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Our Commitment */}
            <section className="bg-gray-50 py-16 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-6">
                            <div>
                                <h2 className="mb-4 text-3xl font-bold">
                                    Our Commitment
                                </h2>
                                <p className="mb-4 text-muted-foreground">
                                    At PT. Trans Agung Utama, we believe that
                                    trust is the foundation of every successful
                                    business relationship. We are dedicated to
                                    providing logistics solutions that not only
                                    meet but exceed our clients' expectations.
                                </p>
                                <p className="text-muted-foreground">
                                    We continuously improve our systems and
                                    train our staff to adapt to dynamic industry
                                    changes and technological advancements,
                                    ensuring we remain at the forefront of the
                                    logistics sector.
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Shield className="mt-0.5 h-6 w-6 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">
                                            Quality Assurance
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Maintaining highest standards in all
                                            operations
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <TrendingUp className="mt-0.5 h-6 w-6 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">
                                            Continuous Improvement
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Always evolving to serve you better
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users className="mt-0.5 h-6 w-6 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">
                                            Professional Team
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            Expert staff dedicated to your
                                            success
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button asChild>
                                <Link href="/contact">
                                    Discuss Your Requirements
                                </Link>
                            </Button>
                        </div>
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-blue-600" />
                                        Meet Our Team
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-muted-foreground">
                                        Our team comprises highly skilled
                                        professionals dedicated to excellence.
                                        From logistics planners to operational
                                        staff, our team undergoes regular
                                        training, focusing on safety standards,
                                        technological tools, and customer
                                        service.
                                    </p>
                                    <p className="text-muted-foreground">
                                        We believe that our people are our
                                        greatest asset, and we invest in their
                                        development to ensure they can provide
                                        the best possible service to our
                                        clients.
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Lightbulb className="h-5 w-5 text-blue-600" />
                                        Technology & Innovation
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-muted-foreground">
                                        Innovation is at the heart of PT. Trans
                                        Agung Utama. We employ modern tracking
                                        systems, GPS route optimization, and
                                        real-time cargo monitoring.
                                    </p>
                                    <p className="text-muted-foreground">
                                        These technological tools enable us to
                                        provide cost-effective, reliable
                                        services and maintain a competitive edge
                                        in the industry.
                                    </p>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Partner With Us
                            </h2>
                            <p className="max-w-[600px] text-blue-100 md:text-xl">
                                Experience the difference of working with a
                                logistics partner who truly cares about your
                                success and values long-term relationships.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">Start Partnership</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="default"
                                className="border-white text-primary-foreground"
                                asChild
                            >
                                <Link href="/services">Our Services</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
