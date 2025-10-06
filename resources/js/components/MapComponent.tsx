interface MapComponentProps {
    embedUrl: string;
    height?: string;
    title?: string;
}

export default function MapComponent({
    embedUrl,
    height = '400px',
    title = 'Google Map',
}: MapComponentProps) {
    return (
        <div className="relative rounded-lg overflow-hidden border">
            <iframe
                src={embedUrl}
                width="100%"
                height={height}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={title}
                className="rounded-lg"
            />
        </div>
    );
}
