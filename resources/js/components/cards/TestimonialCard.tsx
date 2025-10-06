import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Quote } from 'lucide-react';

interface TestimonialCardProps {
    name: string;
    title: string;
    company: string;
    content: string;
}

export default function TestimonialCard({
    name,
    title,
    company,
    content,
}: TestimonialCardProps) {
    return (
        <Card className="relative">
            <Quote className="absolute -top-3 -right-3 h-8 w-8 text-blue-600" />
            <CardHeader>
                <CardTitle className="text-lg">
                    {name}
                </CardTitle>
                <CardDescription>
                    {title} at {company}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-muted-foreground italic">
                    "{content}"
                </p>
            </CardContent>
        </Card>
    );
}