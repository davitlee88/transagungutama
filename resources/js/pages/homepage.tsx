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
import { usePage } from '@inertiajs/react';

export default function Homepage() {
    const { props } = usePage();
    const t = props.translations as Record<string, string> || {};

    const stats = [
        { value: "20+", label: t.stats_years || "Years of Experience" },
        { value: "2", label: t.stats_locations || "Strategic Locations" },
        { value: "100%", label: t.stats_safety || "Commitment to Safety" },
        { value: "24/7", label: t.stats_service || "Reliable Service" },
    ];

    const services = [
        {
            icon: <Truck className="h-12 w-12 text-blue-600" />,
            title: t.service_land_title || "Land Transportation",
            description: t.service_land_description || "Extensive fleet and routes across Indonesia for cargo delivery tailored to client needs.",
            features: [
                { text: t.service_land_feature1 || "Island-wide coverage" },
                { text: t.service_land_feature2 || "Real-time tracking" },
                { text: t.service_land_feature3 || "Flexible scheduling" },
            ],
        },
        {
            icon: <Ship className="h-12 w-12 text-blue-600" />,
            title: t.service_maritime_title || "Maritime Shipping",
            description: t.service_maritime_description || "Reliable sea freight services for large-volume cargo, ensuring timely and safe delivery.",
            features: [
                { text: t.service_maritime_feature1 || "Large cargo capacity" },
                { text: t.service_maritime_feature2 || "International routes" },
                { text: t.service_maritime_feature3 || "Expert handling" },
            ],
        },
        {
            icon: <Wrench className="h-12 w-12 text-blue-600" />,
            title: t.service_consulting_title || "Logistics Consulting",
            description: t.service_consulting_description || "Strategic advice to streamline supply chain management and reduce costs.",
            features: [
                { text: t.service_consulting_feature1 || "Supply chain optimization" },
                { text: t.service_consulting_feature2 || "Cost reduction strategies" },
                { text: t.service_consulting_feature3 || "Process improvement" },
            ],
        },
        {
            icon: <Warehouse className="h-12 w-12 text-blue-600" />,
            title: t.service_warehousing_title || "Cargo Handling & Warehousing",
            description: t.service_warehousing_description || "Secure storage facilities and efficient cargo handling services.",
            features: [
                { text: t.service_warehousing_feature1 || "Secure storage" },
                { text: t.service_warehousing_feature2 || "Efficient handling" },
                { text: t.service_warehousing_feature3 || "Inventory management" },
            ],
        },
    ];

    const testimonials = [
        {
            name: t.testimonial_andi_name || "Andi Wijaya",
            title: t.testimonial_andi_title || "CEO",
            company: t.testimonial_andi_company || "PT. Mulia Sentosa",
            content: t.testimonial_andi_content || "PT. Trans Agung Utama has been our trusted logistics partner for over a decade. Their commitment to punctuality and cargo safety is unmatched. We highly recommend their services.",
        },
        {
            name: t.testimonial_sari_name || "Sari Dewi",
            title: t.testimonial_sari_title || "Logistics Manager",
            company: t.testimonial_sari_company || "PT. Sinergi Logistik",
            content: t.testimonial_sari_content || "The team's professionalism and attention to detail have significantly improved our supply chain operations. Their innovative tracking system helps us stay informed at every step.",
        },
        {
            name: t.testimonial_budi_name || "Budi Santoso",
            title: t.testimonial_budi_title || "Operations Director",
            company: t.testimonial_budi_company || "PT. Makmur Abadi",
            content: t.testimonial_budi_content || "Reliable, efficient, and friendly service — PT. Trans Agung Utama has consistently delivered on their promises, allowing us to focus on our core business knowing our shipments are in good hands.",
        },
    ];

    return (
        <>
            <Head title="PT. Trans Agung Utama - Logistics & Freight Services" />

            <NavigationHeader currentPage="home" />

            <HeroSection
                badge={t.hero_badge || "Since 2000"}
                title={t.hero_title || "Trusted Logistics Partner Across Indonesia"}
                description={t.hero_description || "Leading provider of land and maritime freight services with strategic locations in Medan and Jakarta. Delivering reliability, safety, and punctuality for over 20 years."}
                primaryButton={{ text: t.hero_primary_button || "Our Services", href: "/services" }}
                secondaryButton={{ text: t.hero_secondary_button || "Contact Us", href: "/contact" }}
                showHighlight={true}
                highlightContent={{
                    icon: <Truck className="mb-4 h-24 w-24 text-white" />,
                    title: t.hero_highlight_title || "20+ Years",
                    subtitle: t.hero_highlight_subtitle || "Of Excellence in Logistics",
                }}
            />

            <StatsSection stats={stats} />

            {/* Services Section */}
            <section className="bg-gray-50 py-16 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="space-y-2">
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {t.services_title || "Complete Logistics Solutions"}
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                {t.services_description || "Comprehensive freight and logistics services tailored to meet your business needs across Indonesia."}
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
                                {t.testimonials_title || "Trusted by Leading Companies"}
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                {t.testimonials_description || "Don't just take our word for it - hear what our satisfied clients have to say about our services."}
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
                title={t.cta_title || "Ready to Work Together?"}
                description={t.cta_description || "Experience reliable logistics solutions that drive your business forward. Contact us today for a consultation and quote."}
                primaryButton={{ text: t.cta_primary_button || "Get Started", href: "/contact" }}
                secondaryButton={{ 
                    text: t.cta_secondary_button || "Learn More", 
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
