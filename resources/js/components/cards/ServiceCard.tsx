import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';

interface ServiceFeature {
    text: string;
}

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    features: ServiceFeature[];
}

export default function ServiceCard({
    icon,
    title,
    description,
    features,
}: ServiceCardProps) {
    return (
        <Card>
            <CardHeader>
                <div className="mb-2">
                    {icon}
                </div>
                <CardTitle>{title}</CardTitle>
                <CardDescription>
                    {description}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    {features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            {feature.text}
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
}