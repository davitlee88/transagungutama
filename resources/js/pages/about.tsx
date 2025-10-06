import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Head, Link, usePage } from '@inertiajs/react';
import NavigationHeader from '@/components/layout/NavigationHeader';
import HeroSection from '@/components/layout/HeroSection';
import CTASection from '@/components/layout/CTASection';
import Footer from '@/components/layout/Footer';
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
    const { props } = usePage();
    const t = props.translations as Record<string, string> || {};

    return (
        <>
            <Head title="About Us - PT. Trans Agung Utama" />

            <NavigationHeader currentPage="about" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-blue-50 to-blue-100 py-20 dark:from-blue-900/20 dark:to-blue-800/20">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center">
                        <Badge variant="secondary">{t.about_hero_badge || 'About Our Company'}</Badge>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                            {t.about_hero_title || 'Building Trust Since 2000'}
                        </h1>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl">
                            {t.about_hero_description || 'PT. Trans Agung Utama has established itself as a leading provider of land and maritime freight services across Indonesia, serving diverse clientele with reliability and excellence.'}
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
                                    {t.about_story_title || 'Our Story'}
                                </h2>
                                <p className="mb-4 text-muted-foreground">
                                    {t.about_story_paragraph1 || 'Founded in 2000, PT. Trans Agung Utama has grown from a small logistics provider to one of Indonesia\'s most trusted freight service companies. With strategic locations in Medan and Jakarta, we serve a diverse clientele, from small businesses to large corporations.'}
                                </p>
                                <p className="mb-4 text-muted-foreground">
                                    {t.about_story_paragraph2 || 'Our commitment to excellence and customer satisfaction has made us a trusted partner in logistics and freight forwarding. Over the years, we have successfully transported countless shipments across Indonesia, building a reputation for reliability, safety, and punctuality.'}
                                </p>
                                <p className="text-muted-foreground">
                                    {t.about_story_paragraph3 || 'Today, we continue to innovate and expand our services, leveraging modern technology and industry best practices to meet the evolving needs of our clients.'}
                                </p>
                            </div>
                        </div>
                        <div className="grid gap-6">
                            <Card>
                                <CardHeader>
                                    <Award className="mb-2 h-10 w-10 text-blue-600" />
                                    <CardTitle>{t.about_experience_title || '20+ Years Experience'}</CardTitle>
                                    <CardDescription>
                                        {t.about_experience_desc || 'Two decades of excellence in Indonesian logistics'}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <MapPin className="mb-2 h-10 w-10 text-blue-600" />
                                    <CardTitle>{t.about_locations_title || 'Strategic Locations'}</CardTitle>
                                    <CardDescription>
                                        {t.about_locations_desc || 'Offices in Medan and Jakarta serving all of Indonesia'}
                                    </CardDescription>
                                </CardHeader>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <Users className="mb-2 h-10 w-10 text-blue-600" />
                                    <CardTitle>{t.about_clients_title || 'Diverse Clientele'}</CardTitle>
                                    <CardDescription>
                                        {t.about_clients_desc || 'Trusted by businesses of all sizes across industries'}
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
                            <Badge variant="secondary">{t.about_purpose_badge || 'Our Purpose'}</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {t.about_vision_mission_title || 'Vision & Mission'}
                            </h2>
                        </div>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        <Card className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
                            <CardHeader>
                                <Target className="mb-2 h-12 w-12 text-blue-600" />
                                <CardTitle className="text-2xl">
                                    {t.about_vision_title || 'Our Vision'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <p className="text-lg font-medium text-muted-foreground">
                                    {t.about_vision_desc || 'To become Indonesia\'s most trusted and innovative logistics partner, delivering seamless solutions that drive the success of our clients.'}
                                </p>
                            </CardContent>
                        </Card>
                        <Card className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
                            <CardHeader>
                                <Lightbulb className="mb-2 h-12 w-12 text-green-600" />
                                <CardTitle className="text-2xl">
                                    {t.about_mission_title || 'Our Mission'}
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-3 text-muted-foreground">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            {t.about_mission_item1 || 'To provide safe, reliable, and efficient freight services that align with clients\' timeframes and expectations'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            {t.about_mission_item2 || 'To foster long-term, mutually beneficial relationships with our partners through professionalism and integrity'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            {t.about_mission_item3 || 'To continually innovate by integrating cutting-edge technology to optimize operational efficiency'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            {t.about_mission_item4 || 'To develop our human resources\' capabilities, ensuring high standards of service and expertise'}
                                        </span>
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-green-500" />
                                        <span>
                                            {t.about_mission_item5 || 'To uphold safety and care for all transported goods, minimizing risk throughout the supply chain'}
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
                            <Badge variant="secondary">{t.about_principles_badge || 'Our Principles'}</Badge>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                                {t.about_core_values_title || 'Core Values'}
                            </h2>
                            <p className="max-w-[900px] text-muted-foreground md:text-xl">
                                {t.about_core_values_desc || 'The values that guide everything we do and define who we are as a company.'}
                            </p>
                        </div>
                    </div>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <Card className="text-center">
                            <CardHeader>
                                <Heart className="mx-auto mb-2 h-12 w-12 text-red-500" />
                                <CardTitle>{t.about_value_customer_title || 'Customer Satisfaction'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {t.about_value_customer_desc || 'Prioritizing client needs to achieve excellence in every service we provide.'}
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Shield className="mx-auto mb-2 h-12 w-12 text-blue-500" />
                                <CardTitle>{t.about_value_safety_title || 'Safety'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {t.about_value_safety_desc || 'Ensuring the security of cargo and staff at all times through rigorous safety protocols.'}
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <CheckCircle className="mx-auto mb-2 h-12 w-12 text-green-500" />
                                <CardTitle>{t.about_value_reliability_title || 'Reliability'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {t.about_value_reliability_desc2 || 'Committing to punctual and consistent service delivery that our clients can depend on.'}
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Lightbulb className="mx-auto mb-2 h-12 w-12 text-yellow-500" />
                                <CardTitle>{t.about_value_innovation_title || 'Innovation'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {t.about_value_innovation_desc || 'Embracing technological advances for greater efficiency and improved service quality.'}
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <Award className="mx-auto mb-2 h-12 w-12 text-purple-500" />
                                <CardTitle>{t.about_value_integrity_title || 'Integrity'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {t.about_value_integrity_desc2 || 'Building trust through transparency and ethical business practices in all our operations.'}
                                </CardDescription>
                            </CardContent>
                        </Card>
                        <Card className="text-center">
                            <CardHeader>
                                <TrendingUp className="mx-auto mb-2 h-12 w-12 text-teal-500" />
                                <CardTitle>{t.about_value_sustainability_title || 'Sustainability'}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <CardDescription>
                                    {t.about_value_sustainability_desc || 'Promoting environmentally friendly operations and building long-term partnerships.'}
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
                                    {t.about_commitment_title || 'Our Commitment'}
                                </h2>
                                <p className="mb-4 text-muted-foreground">
                                    {t.about_commitment_paragraph1 || 'At PT. Trans Agung Utama, we believe that trust is the foundation of every successful business relationship. We are dedicated to providing logistics solutions that not only meet but exceed our clients\' expectations.'}
                                </p>
                                <p className="text-muted-foreground">
                                    {t.about_commitment_paragraph2 || 'We continuously improve our systems and train our staff to adapt to dynamic industry changes and technological advancements, ensuring we remain at the forefront of the logistics sector.'}
                                </p>
                            </div>
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Shield className="mt-0.5 h-6 w-6 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">
                                            {t.about_quality_title || 'Quality Assurance'}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {t.about_quality_desc || 'Maintaining highest standards in all operations'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <TrendingUp className="mt-0.5 h-6 w-6 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">
                                            {t.about_improvement_title || 'Continuous Improvement'}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {t.about_improvement_desc || 'Always evolving to serve you better'}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Users className="mt-0.5 h-6 w-6 text-blue-600" />
                                    <div>
                                        <h4 className="font-semibold">
                                            {t.about_team_title || 'Professional Team'}
                                        </h4>
                                        <p className="text-sm text-muted-foreground">
                                            {t.about_team_desc || 'Expert staff dedicated to your success'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <Button asChild>
                                <Link href="/contact">
                                    {t.about_discuss_button || 'Discuss Your Requirements'}
                                </Link>
                            </Button>
                        </div>
                        <div className="space-y-6">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Users className="h-5 w-5 text-blue-600" />
                                        {t.about_meet_team_title || 'Meet Our Team'}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-muted-foreground">
                                        {t.about_meet_team_paragraph1 || 'Our team comprises highly skilled professionals dedicated to excellence. From logistics planners to operational staff, our team undergoes regular training, focusing on safety standards, technological tools, and customer service.'}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {t.about_meet_team_paragraph2 || 'We believe that our people are our greatest asset, and we invest in their development to ensure they can provide the best possible service to our clients.'}
                                    </p>
                                </CardContent>
                            </Card>
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Lightbulb className="h-5 w-5 text-blue-600" />
                                        {t.about_tech_title || 'Technology & Innovation'}
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="mb-4 text-muted-foreground">
                                        {t.about_tech_paragraph1 || 'Innovation is at the heart of PT. Trans Agung Utama. We employ modern tracking systems, GPS route optimization, and real-time cargo monitoring.'}
                                    </p>
                                    <p className="text-muted-foreground">
                                        {t.about_tech_paragraph2 || 'These technological tools enable us to provide cost-effective, reliable services and maintain a competitive edge in the industry.'}
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
                                {t.about_partner_title || 'Partner With Us'}
                            </h2>
                            <p className="max-w-[600px] text-blue-100 md:text-xl">
                                {t.about_partner_desc || 'Experience the difference of working with a logistics partner who truly cares about your success and values long-term relationships.'}
                            </p>
                        </div>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button size="lg" variant="secondary" asChild>
                                <Link href="/contact">{t.about_partner_button1 || 'Start Partnership'}</Link>
                            </Button>
                            <Button
                                size="lg"
                                variant="default"
                                className="border-white text-primary-foreground"
                                asChild
                            >
                                <Link href="/services">{t.about_partner_button2 || 'Our Services'}</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
