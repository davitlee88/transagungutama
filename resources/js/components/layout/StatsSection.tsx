interface StatItem {
    value: string;
    label: string;
}

interface StatsSectionProps {
    stats: StatItem[];
    background?: 'white' | 'gray';
}

export default function StatsSection({ 
    stats, 
    background = 'white' 
}: StatsSectionProps) {
    const bgClass = background === 'gray' 
        ? 'bg-gray-50 dark:bg-gray-800' 
        : 'bg-white dark:bg-gray-900';

    return (
        <section className={`${bgClass} py-16`}>
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    {stats.map((stat, index) => (
                        <div key={index} className="flex flex-col items-center space-y-2 text-center">
                            <div className="text-4xl font-bold text-blue-600">
                                {stat.value}
                            </div>
                            <div className="text-sm text-muted-foreground">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}