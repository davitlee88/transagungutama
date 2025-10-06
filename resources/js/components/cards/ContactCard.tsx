import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '@/components/ui/card';
import { Building, Mail, MapPin, Phone } from 'lucide-react';

interface ContactCardProps {
    officeName: string;
    address: string;
    city: string;
    postalCode: string;
    phones: string[];
    email?: string;
}

export default function ContactCard({
    officeName,
    address,
    city,
    postalCode,
    phones,
    email,
}: ContactCardProps) {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Building className="h-5 w-5 text-blue-600" />
                    {officeName}
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 text-blue-600" />
                    <div>
                        <h4 className="font-semibold">
                            Address
                        </h4>
                        <p className="text-muted-foreground">
                            {address}
                            <br />
                            {city}
                            <br />
                            Kode Pos: {postalCode}
                        </p>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <div>
                        <h4 className="font-semibold">
                            Phone
                        </h4>
                        {phones.map((phone, index) => (
                            <p key={index} className="text-muted-foreground">
                                {phone}
                            </p>
                        ))}
                    </div>
                </div>
                {email && (
                    <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-blue-600" />
                        <div>
                            <h4 className="font-semibold">
                                Email
                            </h4>
                            <p className="text-muted-foreground">
                                {email}
                            </p>
                        </div>
                    </div>
                )}
            </CardContent>
        </Card>
    );
}