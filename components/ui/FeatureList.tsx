export function FeatureList({
    features,
}: {
    features: { title: string; description: string; icon?: string }[];
}) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {features.map((feature, i) => (
                <div key={i}>
                    <h3 className="text-xl font-bold mb-3 text-black">{feature.title}</h3>
                    <p className="text-black/80 leading-relaxed">
                        {feature.description}
                    </p>
                </div>
            ))}
        </div>
    );
}
