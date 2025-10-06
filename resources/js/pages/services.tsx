import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Head, Link, usePage } from '@inertiajs/react';
import NavigationHeader from '@/components/layout/NavigationHeader';
import HeroSection from '@/components/layout/HeroSection';
import CTASection from '@/components/layout/CTASection';
import Footer from '@/components/layout/Footer';
import {
    CheckCircle,
    Clock,
    Globe,
    Shield,
    Ship,
    TrendingUp,
    Truck,
    Warehouse,
    Wrench,
} from 'lucide-react';

export default function Services() {
    const { props } = usePage();
    const t = props.translations as Record<string, string> || {};

    return (
        <>
            <Head title="Services - PT. Trans Agung Utama" />

            <NavigationHeader currentPage="services" />

            <HeroSection
                badge={t.page_services_title || "Our Services"}
                title={t.page_services_description || "Comprehensive Logistics Solutions"}
                description="From land transportation to maritime shipping, we provide end-to-end logistics services that ensure your cargo reaches its destination safely and on time."
                primaryButton={{ text: "Get a Quote", href: "/contact" }}
            />

            {/* Services Tabs */}
            <section className="bg-white py-16 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <Tabs
                        defaultValue="land"
                        className="mx-auto w-full max-w-6xl"
                    >
                        <TabsList className="grid w-full grid-cols-4">
                            <TabsTrigger
                                value="land"
                                className="flex items-center gap-2"
                            >
                                <Truck className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    Land Transport
                                </span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="maritime"
                                className="flex items-center gap-2"
                            >
                                <Ship className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    Maritime
                                </span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="consulting"
                                className="flex items-center gap-2"
                            >
                                <Wrench className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    Consulting
                                </span>
                            </TabsTrigger>
                            <TabsTrigger
                                value="warehousing"
                                className="flex items-center gap-2"
                            >
                                <Warehouse className="h-4 w-4" />
                                <span className="hidden sm:inline">
                                    Warehousing
                                </span>
                            </TabsTrigger>
                        </TabsList>

                        <TabsContent value="land" className="mt-8">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Truck className="h-12 w-12 text-blue-600" />
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                {t.service_detail_land_title || "Land Transportation"}
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Extensive fleet and routes
                                                across Indonesia
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Our land transportation services cover
                                        the entire Indonesian archipelago,
                                        providing reliable and efficient cargo
                                        delivery tailored to your specific
                                        needs.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Island-wide Coverage
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Comprehensive network
                                                    spanning Sumatra, Java,
                                                    Bali, and beyond
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Real-time Tracking
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Advanced GPS monitoring for
                                                    complete visibility
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Flexible Scheduling
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    24/7 availability to meet
                                                    your timeline requirements
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Diverse Fleet
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Various vehicle types for
                                                    different cargo requirements
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="mt-4" asChild>
                                        <Link href="/contact">
                                            Request Land Transport Quote
                                        </Link>
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Clock className="h-5 w-5 text-blue-600" />
                                                Service Features
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    • Express delivery options
                                                </li>
                                                <li>
                                                    • Temperature-controlled
                                                    transport
                                                </li>
                                                <li>
                                                    • Oversized cargo handling
                                                </li>
                                                <li>• Door-to-door service</li>
                                                <li>
                                                    • Insurance coverage
                                                    available
                                                </li>
                                                <li>
                                                    • Dedicated fleet options
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Shield className="h-5 w-5 text-blue-600" />
                                                Safety Standards
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    • Regular vehicle
                                                    maintenance
                                                </li>
                                                <li>
                                                    • Professional, trained
                                                    drivers
                                                </li>
                                                <li>
                                                    • Cargo securing protocols
                                                </li>
                                                <li>
                                                    • 24/7 roadside assistance
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="maritime" className="mt-8">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Ship className="h-12 w-12 text-blue-600" />
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                Maritime Shipping
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Reliable sea freight for
                                                large-volume cargo
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Our maritime shipping services handle
                                        large-volume cargo with expertise,
                                        ensuring cost-effective and timely
                                        delivery across Indonesian waters and
                                        international routes.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Large Cargo Capacity
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Accommodate bulk shipments
                                                    and oversized freight
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    International Routes
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Connect to major ports
                                                    across Asia and beyond
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Expert Handling
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Specialized equipment for
                                                    delicate and heavy cargo
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Port Partnerships
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Priority handling at major
                                                    Indonesian ports
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="mt-4" asChild>
                                        <Link href="/contact">
                                            Request Maritime Quote
                                        </Link>
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Globe className="h-5 w-5 text-blue-600" />
                                                Shipping Options
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    • Full Container Load (FCL)
                                                </li>
                                                <li>
                                                    • Less than Container Load
                                                    (LCL)
                                                </li>
                                                <li>
                                                    • Roll-on/Roll-off (RoRo)
                                                </li>
                                                <li>• Bulk cargo shipping</li>
                                                <li>
                                                    • Project cargo handling
                                                </li>
                                                <li>
                                                    • Customs clearance
                                                    assistance
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <TrendingUp className="h-5 w-5 text-blue-600" />
                                                Advantages
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    • Cost-effective for large
                                                    volumes
                                                </li>
                                                <li>
                                                    • Lower environmental impact
                                                </li>
                                                <li>
                                                    • Ideal for non-urgent
                                                    shipments
                                                </li>
                                                <li>
                                                    • Comprehensive insurance
                                                    options
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="consulting" className="mt-8">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Wrench className="h-12 w-12 text-blue-600" />
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                Logistics Consulting
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Strategic advice for supply
                                                chain optimization
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Our logistics consulting services help
                                        you streamline operations, reduce costs,
                                        and improve efficiency through expert
                                        analysis and strategic planning.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Supply Chain Optimization
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Analyze and improve your
                                                    entire logistics workflow
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Cost Reduction Strategies
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Identify opportunities for
                                                    savings without compromising
                                                    service
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Process Improvement
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Implement best practices and
                                                    industry standards
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Technology Integration
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Modernize operations with
                                                    digital solutions
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="mt-4" asChild>
                                        <Link href="/contact">
                                            Schedule Consultation
                                        </Link>
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <TrendingUp className="h-5 w-5 text-blue-600" />
                                                Consulting Services
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>• Supply chain audits</li>
                                                <li>
                                                    • Logistics network design
                                                </li>
                                                <li>
                                                    • Inventory optimization
                                                </li>
                                                <li>
                                                    • Transportation analysis
                                                </li>
                                                <li>• Process mapping</li>
                                                <li>• Performance metrics</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <CheckCircle className="h-5 w-5 text-blue-600" />
                                                Deliverables
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    • Comprehensive analysis
                                                    reports
                                                </li>
                                                <li>
                                                    • Implementation roadmaps
                                                </li>
                                                <li>• ROI projections</li>
                                                <li>• Training and support</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>

                        <TabsContent value="warehousing" className="mt-8">
                            <div className="grid gap-8 lg:grid-cols-2">
                                <div className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Warehouse className="h-12 w-12 text-blue-600" />
                                        <div>
                                            <h2 className="text-2xl font-bold">
                                                Cargo Handling & Warehousing
                                            </h2>
                                            <p className="text-muted-foreground">
                                                Secure storage and efficient
                                                cargo management
                                            </p>
                                        </div>
                                    </div>
                                    <p className="text-muted-foreground">
                                        Our warehousing and cargo handling
                                        services provide secure storage
                                        solutions and professional management
                                        for your goods throughout the supply
                                        chain.
                                    </p>
                                    <div className="space-y-3">
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Secure Storage
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    24/7 monitored facilities
                                                    with advanced security
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Efficient Handling
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Professional equipment and
                                                    trained personnel
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Inventory Management
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Real-time tracking and
                                                    management systems
                                                </p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <CheckCircle className="mt-0.5 h-5 w-5 text-green-500" />
                                            <div>
                                                <h4 className="font-semibold">
                                                    Strategic Locations
                                                </h4>
                                                <p className="text-sm text-muted-foreground">
                                                    Facilities in Medan and
                                                    Jakarta
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <Button className="mt-4" asChild>
                                        <Link href="/contact">
                                            Learn About Warehousing
                                        </Link>
                                    </Button>
                                </div>
                                <div className="space-y-4">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Warehouse className="h-5 w-5 text-blue-600" />
                                                Storage Solutions
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    • Short and long-term
                                                    storage
                                                </li>
                                                <li>
                                                    • Climate-controlled
                                                    facilities
                                                </li>
                                                <li>
                                                    • Hazardous material storage
                                                </li>
                                                <li>
                                                    • Cross-docking services
                                                </li>
                                                <li>
                                                    • Pallet racking systems
                                                </li>
                                                <li>
                                                    • Floor space optimization
                                                </li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                    <Card>
                                        <CardHeader>
                                            <CardTitle className="flex items-center gap-2">
                                                <Shield className="h-5 w-5 text-blue-600" />
                                                Value-Added Services
                                            </CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <ul className="space-y-2 text-sm">
                                                <li>
                                                    • Packaging and labeling
                                                </li>
                                                <li>• Quality inspection</li>
                                                <li>• Order fulfillment</li>
                                                <li>• Returns processing</li>
                                            </ul>
                                        </CardContent>
                                    </Card>
                                </div>
                            </div>
                        </TabsContent>
                    </Tabs>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="bg-gray-50 py-16 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <Badge variant="secondary">Why Choose Us</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                The PT. Trans Agung Utama Advantage
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                With over 20 years of experience, we combine
                                expertise, technology, and commitment to deliver
                                exceptional logistics solutions.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
                        <Card>
                            <CardHeader>
                                <Shield className="mb-2 h-10 w-10 text-blue-600" />
                                <CardTitle>Safety First</CardTitle>
                                <CardDescription>
                                    We prioritize the security of your cargo
                                    with comprehensive safety protocols and
                                    insurance coverage options.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Clock className="mb-2 h-10 w-10 text-blue-600" />
                                <CardTitle>On-Time Delivery</CardTitle>
                                <CardDescription>
                                    Our commitment to punctuality ensures your
                                    shipments arrive exactly when you need them,
                                    every time.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                        <Card>
                            <CardHeader>
                                <Globe className="mb-2 h-10 w-10 text-blue-600" />
                                <CardTitle>Wide Coverage</CardTitle>
                                <CardDescription>
                                    Strategic locations in Medan and Jakarta
                                    enable us to serve clients across Indonesia
                                    effectively.
                                </CardDescription>
                            </CardHeader>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-blue-600 py-16 text-white">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Ready to Get Started?
                            </h2>
                            <p className="max-w-[600px] text-blue-100 md:text-xl">
                                Contact our team today to discuss your logistics
                                needs and receive a personalized quote.
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">Get Quote Now</Link>
                            </Button>
                            <Button
                                size="lg"
                                className=""
                                asChild
                            >
                                <Link href="/contact">Contact Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
