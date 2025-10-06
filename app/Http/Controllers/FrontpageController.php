<?php

namespace App\Http\Controllers;

class FrontpageController extends Controller
{
    /**
     * Get all common navigation translations.
     */
    private function getNavigationTranslations(): array
    {
        return [
            'home' => __('messages.home'),
            'about' => __('messages.about'),
            'services' => __('messages.services'),
            'contact' => __('messages.contact'),
            'language' => __('messages.language'),
        ];
    }

    /**
     * Get all homepage translations.
     */
    private function getHomepageTranslations(): array
    {
        return array_merge(
            $this->getNavigationTranslations(),
            [
                // Homepage hero
                'hero_badge' => __('messages.hero_badge'),
                'hero_title' => __('messages.hero_title'),
                'hero_description' => __('messages.hero_description'),
                'hero_primary_button' => __('messages.hero_primary_button'),
                'hero_secondary_button' => __('messages.hero_secondary_button'),
                'hero_highlight_title' => __('messages.hero_highlight_title'),
                'hero_highlight_subtitle' => __('messages.hero_highlight_subtitle'),

                // Stats
                'stats_years' => __('messages.stats_years'),
                'stats_locations' => __('messages.stats_locations'),
                'stats_safety' => __('messages.stats_safety'),
                'stats_service' => __('messages.stats_service'),

                // Services section
                'services_title' => __('messages.services_title'),
                'services_description' => __('messages.services_description'),
                'service_land_title' => __('messages.service_land_title'),
                'service_land_description' => __('messages.service_land_description'),
                'service_land_feature1' => __('messages.service_land_feature1'),
                'service_land_feature2' => __('messages.service_land_feature2'),
                'service_land_feature3' => __('messages.service_land_feature3'),
                'service_maritime_title' => __('messages.service_maritime_title'),
                'service_maritime_description' => __('messages.service_maritime_description'),
                'service_maritime_feature1' => __('messages.service_maritime_feature1'),
                'service_maritime_feature2' => __('messages.service_maritime_feature2'),
                'service_maritime_feature3' => __('messages.service_maritime_feature3'),
                'service_consulting_title' => __('messages.service_consulting_title'),
                'service_consulting_description' => __('messages.service_consulting_description'),
                'service_consulting_feature1' => __('messages.service_consulting_feature1'),
                'service_consulting_feature2' => __('messages.service_consulting_feature2'),
                'service_consulting_feature3' => __('messages.service_consulting_feature3'),
                'service_warehousing_title' => __('messages.service_warehousing_title'),
                'service_warehousing_description' => __('messages.service_warehousing_description'),
                'service_warehousing_feature1' => __('messages.service_warehousing_feature1'),
                'service_warehousing_feature2' => __('messages.service_warehousing_feature2'),
                'service_warehousing_feature3' => __('messages.service_warehousing_feature3'),

                // Testimonials
                'testimonials_title' => __('messages.testimonials_title'),
                'testimonials_description' => __('messages.testimonials_description'),
                'testimonial_andi_name' => __('messages.testimonial_andi_name'),
                'testimonial_andi_title' => __('messages.testimonial_andi_title'),
                'testimonial_andi_company' => __('messages.testimonial_andi_company'),
                'testimonial_andi_content' => __('messages.testimonial_andi_content'),
                'testimonial_sari_name' => __('messages.testimonial_sari_name'),
                'testimonial_sari_title' => __('messages.testimonial_sari_title'),
                'testimonial_sari_company' => __('messages.testimonial_sari_company'),
                'testimonial_sari_content' => __('messages.testimonial_sari_content'),
                'testimonial_budi_name' => __('messages.testimonial_budi_name'),
                'testimonial_budi_title' => __('messages.testimonial_budi_title'),
                'testimonial_budi_company' => __('messages.testimonial_budi_company'),
                'testimonial_budi_content' => __('messages.testimonial_budi_content'),

                // CTA
                'cta_title' => __('messages.cta_title'),
                'cta_description' => __('messages.cta_description'),
                'cta_primary_button' => __('messages.cta_primary_button'),
                'cta_secondary_button' => __('messages.cta_secondary_button'),

                // Footer
                'footer_tagline' => __('messages.footer_tagline'),
                'footer_quick_links' => __('messages.footer_quick_links'),
                'footer_about_us' => __('messages.footer_about_us'),
                'footer_services' => __('messages.footer_services'),
                'footer_contact' => __('messages.footer_contact'),
                'footer_medan_office' => __('messages.footer_medan_office'),
                'footer_jakarta_office' => __('messages.footer_jakarta_office'),
                'footer_copyright' => __('messages.footer_copyright'),
            ]
        );
    }

    /**
     * Get all about page translations.
     */
    private function getAboutTranslations(): array
    {
        return array_merge(
            $this->getNavigationTranslations(),
            [
                // Page basics
                'page_about_title' => __('messages.page_about_title'),
                'page_about_description' => __('messages.page_about_description'),

                // Hero section
                'about_hero_badge' => __('messages.about_hero_badge'),
                'about_hero_title' => __('messages.about_hero_title'),
                'about_hero_description' => __('messages.about_hero_description'),

                // Story section
                'about_story_title' => __('messages.about_story_title'),
                'about_story_paragraph1' => __('messages.about_story_paragraph1'),
                'about_story_paragraph2' => __('messages.about_story_paragraph2'),
                'about_story_paragraph3' => __('messages.about_story_paragraph3'),

                // Stats/overview cards
                'about_experience_title' => __('messages.about_experience_title'),
                'about_experience_desc' => __('messages.about_experience_desc'),
                'about_locations_title' => __('messages.about_locations_title'),
                'about_locations_desc' => __('messages.about_locations_desc'),
                'about_clients_title' => __('messages.about_clients_title'),
                'about_clients_desc' => __('messages.about_clients_desc'),

                // Vision & Mission
                'about_purpose_badge' => __('messages.about_purpose_badge'),
                'about_vision_mission_title' => __('messages.about_vision_mission_title'),
                'about_vision_title' => __('messages.about_vision_title'),
                'about_vision_desc' => __('messages.about_vision_desc'),
                'about_mission_title' => __('messages.about_mission_title'),
                'about_mission_item1' => __('messages.about_mission_item1'),
                'about_mission_item2' => __('messages.about_mission_item2'),
                'about_mission_item3' => __('messages.about_mission_item3'),
                'about_mission_item4' => __('messages.about_mission_item4'),
                'about_mission_item5' => __('messages.about_mission_item5'),

                // Core values
                'about_principles_badge' => __('messages.about_principles_badge'),
                'about_core_values_title' => __('messages.about_core_values_title'),
                'about_core_values_desc' => __('messages.about_core_values_desc'),
                'about_value_customer_title' => __('messages.about_value_customer_title'),
                'about_value_customer_desc' => __('messages.about_value_customer_desc'),
                'about_value_safety_title' => __('messages.about_value_safety_title'),
                'about_value_safety_desc' => __('messages.about_value_safety_desc'),
                'about_value_reliability_title' => __('messages.about_value_reliability_title'),
                'about_value_reliability_desc2' => __('messages.about_value_reliability_desc2'),
                'about_value_innovation_title' => __('messages.about_value_innovation_title'),
                'about_value_innovation_desc' => __('messages.about_value_innovation_desc'),
                'about_value_integrity_title' => __('messages.about_value_integrity_title'),
                'about_value_integrity_desc2' => __('messages.about_value_integrity_desc2'),
                'about_value_sustainability_title' => __('messages.about_value_sustainability_title'),
                'about_value_sustainability_desc' => __('messages.about_value_sustainability_desc'),

                // Commitment section
                'about_commitment_title' => __('messages.about_commitment_title'),
                'about_commitment_paragraph1' => __('messages.about_commitment_paragraph1'),
                'about_commitment_paragraph2' => __('messages.about_commitment_paragraph2'),
                'about_quality_title' => __('messages.about_quality_title'),
                'about_quality_desc' => __('messages.about_quality_desc'),
                'about_improvement_title' => __('messages.about_improvement_title'),
                'about_improvement_desc' => __('messages.about_improvement_desc'),
                'about_team_title' => __('messages.about_team_title'),
                'about_team_desc' => __('messages.about_team_desc'),
                'about_discuss_button' => __('messages.about_discuss_button'),

                // Team & Technology
                'about_meet_team_title' => __('messages.about_meet_team_title'),
                'about_meet_team_paragraph1' => __('messages.about_meet_team_paragraph1'),
                'about_meet_team_paragraph2' => __('messages.about_meet_team_paragraph2'),
                'about_tech_title' => __('messages.about_tech_title'),
                'about_tech_paragraph1' => __('messages.about_tech_paragraph1'),
                'about_tech_paragraph2' => __('messages.about_tech_paragraph2'),

                // CTA Section
                'about_partner_title' => __('messages.about_partner_title'),
                'about_partner_desc' => __('messages.about_partner_desc'),
                'about_partner_button1' => __('messages.about_partner_button1'),
                'about_partner_button2' => __('messages.about_partner_button2'),

                // Footer
                'footer_tagline' => __('messages.footer_tagline'),
                'footer_quick_links' => __('messages.footer_quick_links'),
                'footer_about_us' => __('messages.footer_about_us'),
                'footer_services' => __('messages.footer_services'),
                'footer_contact' => __('messages.footer_contact'),
                'footer_medan_office' => __('messages.footer_medan_office'),
                'footer_jakarta_office' => __('messages.footer_jakarta_office'),
                'footer_copyright' => __('messages.footer_copyright'),
            ]
        );
    }

    /**
     * Get all services page translations.
     */
    private function getServicesTranslations(): array
    {
        return array_merge(
            $this->getNavigationTranslations(),
            [
                // Page content
                'page_services_title' => __('messages.page_services_title'),
                'page_services_description' => __('messages.page_services_description'),

                // Hero section
                'services_hero_badge' => __('messages.services_hero_badge'),
                'services_hero_title' => __('messages.services_hero_title'),
                'services_hero_desc' => __('messages.services_hero_desc'),
                'services_get_quote' => __('messages.services_get_quote'),

                // Service categories
                'services_land_transport' => __('messages.services_land_transport'),
                'services_maritime' => __('messages.services_maritime'),
                'services_consulting' => __('messages.services_consulting'),
                'services_warehousing' => __('messages.services_warehousing'),

                // Service details - Land Transportation
                'service_detail_land_title' => __('messages.service_detail_land_title'),
                'service_detail_land_description' => __('messages.service_detail_land_description'),
                'service_detail_land_coverage' => __('messages.service_detail_land_coverage'),
                'service_detail_land_coverage_desc' => __('messages.service_detail_land_coverage_desc'),
                'service_detail_land_tracking' => __('messages.service_detail_land_tracking'),
                'service_detail_land_tracking_desc' => __('messages.service_detail_land_tracking_desc'),
                'service_detail_land_scheduling' => __('messages.service_detail_land_scheduling'),
                'service_detail_land_scheduling_desc' => __('messages.service_detail_land_scheduling_desc'),

                // Service details - Maritime Shipping
                'service_detail_maritime_title' => __('messages.service_detail_maritime_title'),
                'service_detail_maritime_description' => __('messages.service_detail_maritime_description'),
                'service_detail_maritime_capacity' => __('messages.service_detail_maritime_capacity'),
                'service_detail_maritime_capacity_desc' => __('messages.service_detail_maritime_capacity_desc'),
                'service_detail_maritime_routes' => __('messages.service_detail_maritime_routes'),
                'service_detail_maritime_routes_desc' => __('messages.service_detail_maritime_routes_desc'),
                'service_detail_maritime_handling' => __('messages.service_detail_maritime_handling'),
                'service_detail_maritime_handling_desc' => __('messages.service_detail_maritime_handling_desc'),

                // Service details - Consulting
                'service_detail_consulting_title' => __('messages.service_detail_consulting_title'),
                'service_detail_consulting_description' => __('messages.service_detail_consulting_description'),
                'service_detail_consulting_optimization' => __('messages.service_detail_consulting_optimization'),
                'service_detail_consulting_optimization_desc' => __('messages.service_detail_consulting_optimization_desc'),
                'service_detail_consulting_cost' => __('messages.service_detail_consulting_cost'),
                'service_detail_consulting_cost_desc' => __('messages.service_detail_consulting_cost_desc'),
                'service_detail_consulting_improvement' => __('messages.service_detail_consulting_improvement'),
                'service_detail_consulting_improvement_desc' => __('messages.service_detail_consulting_improvement_desc'),

                // Service details - Warehousing
                'service_detail_warehousing_title' => __('messages.service_detail_warehousing_title'),
                'service_detail_warehousing_description' => __('messages.service_detail_warehousing_description'),
                'service_detail_warehousing_storage' => __('messages.service_detail_warehousing_storage'),
                'service_detail_warehousing_storage_desc' => __('messages.service_detail_warehousing_storage_desc'),
                'service_detail_warehousing_handling' => __('messages.service_detail_warehousing_handling'),
                'service_detail_warehousing_handling_desc' => __('messages.service_detail_warehousing_handling_desc'),
                'service_detail_warehousing_inventory' => __('messages.service_detail_warehousing_inventory'),
                'service_detail_warehousing_inventory_desc' => __('messages.service_detail_warehousing_inventory_desc'),

                // Footer
                'footer_tagline' => __('messages.footer_tagline'),
                'footer_quick_links' => __('messages.footer_quick_links'),
                'footer_about_us' => __('messages.footer_about_us'),
                'footer_services' => __('messages.footer_services'),
                'footer_contact' => __('messages.footer_contact'),
                'footer_medan_office' => __('messages.footer_medan_office'),
                'footer_jakarta_office' => __('messages.footer_jakarta_office'),
                'footer_copyright' => __('messages.footer_copyright'),
            ]
        );
    }

    /**
     * Get all contact page translations.
     */
    private function getContactTranslations(): array
    {
        return array_merge(
            $this->getNavigationTranslations(),
            [
                // Basic contact info
                'page_contact_title' => __('messages.page_contact_title'),
                'page_contact_description' => __('messages.page_contact_description'),
                'contact_form_title' => __('messages.contact_form_title'),
                'contact_form_name' => __('messages.contact_form_name'),
                'contact_form_email' => __('messages.contact_form_email'),
                'contact_form_phone' => __('messages.contact_form_phone'),
                'contact_form_company' => __('messages.contact_form_company'),
                'contact_form_service' => __('messages.contact_form_service'),
                'contact_form_service_placeholder' => __('messages.contact_form_service_placeholder'),
                'contact_form_message' => __('messages.contact_form_message'),
                'contact_form_button' => __('messages.contact_form_button'),
                'contact_info_title' => __('messages.contact_info_title'),
                'contact_address_title' => __('messages.contact_address_title'),
                'contact_phone_title' => __('messages.contact_phone_title'),
                'contact_email_title' => __('messages.contact_email_title'),
                'contact_hours_title' => __('messages.contact_hours_title'),
                'contact_medan_address' => __('messages.contact_medan_address'),
                'contact_jakarta_address' => __('messages.contact_jakarta_address'),
                'contact_medan_phone' => __('messages.contact_medan_phone'),
                'contact_jakarta_phone' => __('messages.contact_jakarta_phone'),
                'contact_email' => __('messages.contact_email'),
                'contact_hours' => __('messages.contact_hours'),

                // Hero section
                'contact_hero_badge' => __('messages.contact_hero_badge'),
                'contact_hero_title' => __('messages.contact_hero_title'),
                'contact_hero_desc' => __('messages.contact_hero_desc'),

                // Offices and contact info
                'contact_offices_title' => __('messages.contact_offices_title'),
                'contact_whatsapp_medan' => __('messages.contact_whatsapp_medan'),
                'contact_email_medan' => __('messages.contact_email_medan'),
                'contact_whatsapp_jakarta' => __('messages.contact_whatsapp_jakarta'),
                'contact_email_jakarta' => __('messages.contact_email_jakarta'),
                'contact_medan_office' => __('messages.contact_medan_office'),
                'contact_jakarta_office' => __('messages.contact_jakarta_office'),

                // Contact form
                'contact_send_message_title' => __('messages.contact_send_message_title'),
                'contact_send_message_desc' => __('messages.contact_send_message_desc'),
                'contact_first_name' => __('messages.contact_first_name'),
                'contact_last_name' => __('messages.contact_last_name'),
                'contact_email_label' => __('messages.contact_email_label'),
                'contact_phone_label' => __('messages.contact_phone_label'),
                'contact_company_label' => __('messages.contact_company_label'),
                'contact_service_label' => __('messages.contact_service_label'),
                'contact_message_label' => __('messages.contact_message_label'),
                'contact_send_button' => __('messages.contact_send_button'),

                // Service options for dropdown
                'services_land_transport' => __('messages.services_land_transport'),
                'services_maritime' => __('messages.services_maritime'),
                'services_consulting' => __('messages.services_consulting'),
                'services_warehousing' => __('messages.services_warehousing'),

                // Business hours
                'contact_business_hours_badge' => __('messages.contact_business_hours_badge'),
                'contact_business_hours_title' => __('messages.contact_business_hours_title'),
                'contact_business_hours_desc' => __('messages.contact_business_hours_desc'),
                'contact_monday_friday' => __('messages.contact_monday_friday'),
                'contact_saturday' => __('messages.contact_saturday'),
                'contact_sunday' => __('messages.contact_sunday'),
                'contact_wib_time' => __('messages.contact_wib_time'),
                'contact_closed' => __('messages.contact_closed'),
                'contact_emergency' => __('messages.contact_emergency'),

                // CTA section
                'contact_cta_title' => __('messages.contact_cta_title'),
                'contact_cta_desc' => __('messages.contact_cta_desc'),

                // Map section
                'contact_locations_badge' => __('messages.contact_locations_badge'),
                'contact_locations_title' => __('messages.contact_locations_title'),
                'contact_locations_desc' => __('messages.contact_locations_desc'),
                'contact_medan_location' => __('messages.contact_medan_location'),
                'contact_jakarta_location' => __('messages.contact_jakarta_location'),

                // Footer
                'footer_tagline' => __('messages.footer_tagline'),
                'footer_quick_links' => __('messages.footer_quick_links'),
                'footer_about_us' => __('messages.footer_about_us'),
                'footer_services' => __('messages.footer_services'),
                'footer_contact' => __('messages.footer_contact'),
                'footer_medan_office' => __('messages.footer_medan_office'),
                'footer_jakarta_office' => __('messages.footer_jakarta_office'),
                'footer_copyright' => __('messages.footer_copyright'),
            ]
        );
    }

    /**
     * Show the homepage.
     */
    public function homepage()
    {
        return inertia('homepage', [
            'translations' => $this->getHomepageTranslations(),
        ]);
    }

    /**
     * Show the about page.
     */
    public function about()
    {
        return inertia('about', [
            'translations' => $this->getAboutTranslations(),
        ]);
    }

    /**
     * Show the services page.
     */
    public function services()
    {
        return inertia('services', [
            'translations' => $this->getServicesTranslations(),
        ]);
    }

    /**
     * Show the contact page.
     */
    public function contact()
    {
        return inertia('contact', [
            'translations' => $this->getContactTranslations(),
        ]);
    }
}
