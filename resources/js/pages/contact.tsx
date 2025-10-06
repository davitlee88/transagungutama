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
import { Head, usePage } from '@inertiajs/react';
import NavigationHeader from '@/components/layout/NavigationHeader';
import HeroSection from '@/components/layout/HeroSection';
import CTASection from '@/components/layout/CTASection';
import Footer from '@/components/layout/Footer';
import ContactCard from '@/components/cards/ContactCard';
import MapComponent from '@/components/MapComponent';
import {
    Clock,
    MessageSquare,
    Phone,
    Send,
} from 'lucide-react';

export default function Contact() {
    const { props } = usePage();
    const t = props.translations as Record<string, string> || {};
    return (
        <>
            <Head title="Contact Us - PT. Trans Agung Utama" />

            <NavigationHeader currentPage="contact" />

  
            <HeroSection
                badge={t.contact_hero_badge || 'Get In Touch'}
                title={t.contact_hero_title || 'Contact Our Team'}
                description={t.contact_hero_desc || 'Ready to discuss your logistics needs? Reach out to our team at either our Medan or Jakarta office. We\'re here to help you find the right solution for your business.'}
            />

            {/* Contact Information */}
            <section className="bg-white py-16 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="grid gap-12 lg:grid-cols-2">
                        <div className="space-y-8">
                            <div>
                                <h2 className="mb-6 text-3xl font-bold">
                                    {t.contact_offices_title || 'Our Offices'}
                                </h2>

                                <div className="space-y-6">
                                    <div className="flex flex-col space-y-4">
                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button variant="outline" asChild className="flex-1">
                                                <a href="https://wa.me/628126466355" target="_blank" rel="noopener noreferrer">
                                                    <Phone className="mr-2 h-4 w-4" />
                                                    {t.contact_whatsapp_medan || 'WhatsApp Medan'}
                                                </a>
                                            </Button>
                                            <Button variant="outline" asChild className="flex-1">
                                                <a href="mailto:info@transagungutama.com">
                                                    <MessageSquare className="mr-2 h-4 w-4" />
                                                    {t.contact_email_medan || 'Email Medan'}
                                                </a>
                                            </Button>
                                        </div>

                                        <div className="flex flex-col sm:flex-row gap-4">
                                            <Button variant="outline" asChild className="flex-1">
                                                <a href="https://wa.me/6281297922068" target="_blank" rel="noopener noreferrer">
                                                    <Phone className="mr-2 h-4 w-4" />
                                                    {t.contact_whatsapp_jakarta || 'WhatsApp Jakarta'}
                                                </a>
                                            </Button>
                                            <Button variant="outline" asChild className="flex-1">
                                                <a href="mailto:jakarta@transagungutama.com">
                                                    <MessageSquare className="mr-2 h-4 w-4" />
                                                    {t.contact_email_jakarta || 'Email Jakarta'}
                                                </a>
                                            </Button>
                                        </div>
                                    </div>

                                    <ContactCard
                                        officeName={t.contact_medan_office || 'Medan Office'}
                                        address="Jln. Langsa (Ujung) No. 69"
                                        city="Medan, Sumatera Utara"
                                        postalCode="20351"
                                        phones={["0812 646 6355"]}
                                        email="info@transagungutama.com"
                                    />

                                    <ContactCard
                                        officeName={t.contact_jakarta_office || 'Jakarta Office'}
                                        address="Pergudangan Angke Indah Jin. Kapuk Poglar Blok. C No. 10"
                                        city="Jakarta Utara"
                                        postalCode="14440"
                                        phones={["021-29667216", "0812 9792 2068"]}
                                        email="jakarta@transagungutama.com"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Contact Form */}
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <MessageSquare className="h-5 w-5 text-blue-600" />
                                        {t.contact_send_message_title || 'Send Us a Message'}
                                    </CardTitle>
                                    <CardDescription>
                                        {t.contact_send_message_desc || 'Fill out the form below and our team will get back to you within 24 hours.'}
                                    </CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <form className="space-y-6">
                                        <div className="grid gap-4 sm:grid-cols-2">
                                            <div className="space-y-2">
                                                <Label htmlFor="firstName">
                                                    {t.contact_first_name || 'First Name'}
                                                </Label>
                                                <Input
                                                    id="firstName"
                                                    placeholder="John"
                                                    required
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <Label htmlFor="lastName">
                                                    {t.contact_last_name || 'Last Name'}
                                                </Label>
                                                <Input
                                                    id="lastName"
                                                    placeholder="Doe"
                                                    required
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="email">{t.contact_email_label || 'Email'}</Label>
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="john@example.com"
                                                required
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="phone">{t.contact_phone_label || 'Phone'}</Label>
                                            <Input
                                                id="phone"
                                                type="tel"
                                                placeholder="+62 812-3456-7890"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="company">
                                                {t.contact_company_label || 'Company'}
                                            </Label>
                                            <Input
                                                id="company"
                                                placeholder="Your Company Name"
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="service">
                                                {t.contact_service_label || 'Service Interest'}
                                            </Label>
                                            <select
                                                id="service"
                                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                                            >
                                                <option value="">
                                                    {t.contact_form_service_placeholder || 'Select a service'}
                                                </option>
                                                <option value="land">
                                                    {t.services_land_transport || 'Land Transportation'}
                                                </option>
                                                <option value="maritime">
                                                    {t.services_maritime || 'Maritime Shipping'}
                                                </option>
                                                <option value="consulting">
                                                    {t.services_consulting || 'Logistics Consulting'}
                                                </option>
                                                <option value="warehousing">
                                                    {t.services_warehousing || 'Cargo Handling & Warehousing'}
                                                </option>
                                                <option value="multiple">
                                                    {t.contact_form_service || 'Multiple Services'}
                                                </option>
                                            </select>
                                        </div>
                                        <div className="space-y-2">
                                            <Label htmlFor="message">
                                                {t.contact_message_label || 'Message'}
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
                                            {t.contact_send_button || 'Send Message'}
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
                            <Badge variant="secondary">{t.contact_business_hours_badge || 'Business Hours'}</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {t.contact_business_hours_title || 'When to Reach Us'}
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                {t.contact_business_hours_desc || 'Our team is available to assist you during the following hours. For urgent inquiries, please call us directly.'}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-8 md:grid-cols-3">
                        <Card className="text-center">
                            <CardHeader>
                                <Clock className="mx-auto mb-2 h-12 w-12 text-blue-600" />
                                <CardTitle>{t.contact_monday_friday || 'Monday - Friday'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-blue-600">
                                    08:00 - 17:00
                                </p>
                                <p className="text-muted-foreground">
                                    {t.contact_wib_time || 'WIB (Western Indonesia Time)'}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Clock className="mx-auto mb-2 h-12 w-12 text-blue-600" />
                                <CardTitle>{t.contact_saturday || 'Saturday'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-blue-600">
                                    08:00 - 12:00
                                </p>
                                <p className="text-muted-foreground">
                                    {t.contact_wib_time || 'WIB (Western Indonesia Time)'}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Clock className="mx-auto mb-2 h-12 w-12 text-blue-600" />
                                <CardTitle>{t.contact_sunday || 'Sunday'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-2xl font-bold text-gray-400">
                                    {t.contact_closed || 'Closed'}
                                </p>
                                <p className="text-muted-foreground">
                                    {t.contact_emergency || 'Emergency services available'}
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <CTASection
                title={t.contact_cta_title || 'Need Immediate Assistance?'}
                description={t.contact_cta_desc || 'For urgent logistics requirements or time-sensitive shipments, contact us directly on WhatsApp for immediate support.'}
                primaryButton={{ text: t.contact_whatsapp_medan || 'WhatsApp Medan', href: "https://wa.me/628126466355" }}
                secondaryButton={{ text: t.contact_whatsapp_jakarta || 'WhatsApp Jakarta', href: "https://wa.me/6281297922068" }}
                background="blue"
            />

            {/* Map Section */}
            <section className="bg-white py-16 dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="mb-12 flex flex-col items-center justify-center space-y-4 text-center">
                        <div className="space-y-2">
                            <Badge variant="secondary">{t.contact_locations_badge || 'Our Locations'}</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {t.contact_locations_title || 'Find Us'}
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                {t.contact_locations_desc || 'Visit our offices in Medan and Jakarta. Both locations are strategically positioned to serve clients across Indonesia efficiently.'}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>{t.contact_medan_location || 'Medan Office Location'}</CardTitle>
                                <CardDescription>
                                    Jln. Langsa (Ujung) No. 69, Medan
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <MapComponent
                                    embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127420.67476986806!2d98.43478899726566!3d3.6112436000000088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312fb4c756ca2d%3A0xcf2021cd7c1d91c8!2sPT.%20Trans%20Agung%20Utama!5e0!3m2!1sen!2sid!4v1759733955779!5m2!1sen!2sid"
                                    height="350px"
                                    title="PT. Trans Agung Utama - Medan Office"
                                />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>{t.contact_jakarta_location || 'Jakarta Office Location'}</CardTitle>
                                <CardDescription>
                                    Pergudangan Angke Indah, Jakarta Utara
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <MapComponent
                                    embedUrl="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d860.8568343501734!2d106.77214303569747!3d-6.144207966272568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f728a60c4075%3A0xb485d6499f9e54d6!2sPT.%20Trans%20Agung%20Utama!5e0!3m2!1sen!2sid!4v1759734087543!5m2!1sen!2sid"
                                    height="350px"
                                    title="PT. Trans Agung Utama - Jakarta Office"
                                />
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
