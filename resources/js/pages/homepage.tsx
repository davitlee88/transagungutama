import { Head } from '@inertiajs/react';
import NavigationHeader from '@/components/layout/NavigationHeader';
import HeroSection from '@/components/layout/HeroSection';
import StatsSection from '@/components/layout/StatsSection';
import CTASection from '@/components/layout/CTASection';
import Footer from '@/components/layout/Footer';
import ServiceCard from '@/components/cards/ServiceCard';
import TestimonialCard from '@/components/cards/TestimonialCard';
import {
    Ship,
    Truck,
    Warehouse,
    Wrench,
} from 'lucide-react';

export default function Homepage() {
    const stats = [
        { value: "20+", label: "Years of Experience" },
        { value: "2", label: "Strategic Locations" },
        { value: "100%", label: "Commitment to Safety" },
        { value: "24/7", label: "Reliable Service" },
    ];

    const services = [
        {
            icon: <Truck className="h-12 w-12 text-blue-600" />,
            title: "Land Transportation",
            description: "Extensive fleet and routes across Indonesia for cargo delivery tailored to client needs.",
            features: [
                { text: "Island-wide coverage" },
                { text: "Real-time tracking" },
                { text: "Flexible scheduling" },
            ],
        },
        {
            icon: <Ship className="h-12 w-12 text-blue-600" />,
            title: "Maritime Shipping",
            description: "Reliable sea freight services for large-volume cargo, ensuring timely and safe delivery.",
            features: [
                { text: "Large cargo capacity" },
                { text: "International routes" },
                { text: "Expert handling" },
            ],
        },
        {
            icon: <Wrench className="h-12 w-12 text-blue-600" />,
            title: "Logistics Consulting",
            description: "Strategic advice to streamline supply chain management and reduce costs.",
            features: [
                { text: "Supply chain optimization" },
                { text: "Cost reduction strategies" },
                { text: "Process improvement" },
            ],
        },
        {
            icon: <Warehouse className="h-12 w-12 text-blue-600" />,
            title: "Cargo Handling & Warehousing",
            description: "Secure storage facilities and efficient cargo handling services.",
            features: [
                { text: "Secure storage" },
                { text: "Efficient handling" },
                { text: "Inventory management" },
            ],
        },
    ];

    const testimonials = [
        {
            name: "Andi Wijaya",
            title: "CEO",
            company: "PT. Mulia Sentosa",
            content: "PT. Trans Agung Utama has been our trusted logistics partner for over a decade. Their commitment to punctuality and cargo safety is unmatched. We highly recommend their services.",
        },
        {
            name: "Sari Dewi",
            title: "Logistics Manager",
            company: "PT. Sinergi Logistik",
            content: "The team's professionalism and attention to detail have significantly improved our supply chain operations. Their innovative tracking system helps us stay informed at every step.",
        },
        {
            name: "Budi Santoso",
            title: "Operations Director",
            company: "PT. Makmur Abadi",
            content: "Reliable, efficient, and friendly service — PT. Trans Agung Utama has consistently delivered on their promises, allowing us to focus on our core business knowing our shipments are in good hands.",
        },
    ];

    return (
        <>
            <Head title="PT. Trans Agung Utama - Logistics & Freight Services" />

            <NavigationHeader currentPage="home" />

            <HeroSection
                badge="Since 2000"
                title="Trusted Logistics Partner Across Indonesia"
                description="Leading provider of land and maritime freight services with strategic locations in Medan and Jakarta. Delivering reliability, safety, and punctuality for over 20 years."
                primaryButton={{ text: "Our Services", href: "/services" }}
                secondaryButton={{ text: "Contact Us", href: "/contact" }}
                showHighlight={true}
                highlightContent={{
                    icon: <Truck className="mb-4 h-24 w-24 text-white" />,
                    title: "20+ Years",
                    subtitle: "Of Excellence in Logistics",
                }}
            />

            <StatsSection stats={stats} />

            {/* Services Section */}
            <section className="bg-gray-50 py-16 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Complete Logistics Solutions
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Comprehensive freight and logistics services
                                tailored to meet your business needs across
                                Indonesia.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-2 lg:gap-12">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                icon={service.icon}
                                title={service.title}
                                description={service.description}
                                features={service.features}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="bg-white py-16 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                Trusted by Leading Companies
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                Don't just take our word for it - hear what our
                                satisfied clients have to say about our
                                services.
                            </p>
                        </div>
                    </div>
                    <div className="mx-auto grid max-w-5xl items-center gap-6 lg:grid-cols-3 lg:gap-8">
                        {testimonials.map((testimonial, index) => (
                            <TestimonialCard
                                key={index}
                                name={testimonial.name}
                                title={testimonial.title}
                                company={testimonial.company}
                                content={testimonial.content}
                            />
                        ))}
                    </div>
                </div>
            </section>

            <CTASection
                title="Ready to Work Together?"
                description="Experience reliable logistics solutions that drive your business forward. Contact us today for a consultation and quote."
                primaryButton={{ text: "Get Started", href: "/contact" }}
                secondaryButton={{ 
                    text: "Learn More", 
                    href: "/services", 
                    variant: "outline",
                    outlineStyle: "white" 
                }}
                background="blue"
            />

            <Footer />
        </>
    );
}
