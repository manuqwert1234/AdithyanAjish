export interface Project {
    slug: string;
    title: string;
    description: string;
    shortDescription: string;
    features: { icon?: string; title: string; description: string }[];
    techStack: string[];
    images: string[];
    links: {
        demo?: string;
        github?: string;
        paper?: string;
    };
    gettingStarted?: {
        title: string;
        steps: {
            step: number;
            title: string;
            command?: string;
            description?: string;
        }[];
    };
}

export const projects: Project[] = [
    {
        slug: "inventory-management",
        title: "Intelligent Inventory Management",
        shortDescription: "Full-stack solution with predictive analytics.",
        description:
            "A full-stack inventory management solution designed to optimize stock levels and forecast demand. Features a predictive analytics dashboard powered by 5 implemented ML models including ARIMA and Isolation Forest.",
        features: [
            {
                title: "Predictive Analytics",
                description: "Forecasts demand and recommends stock optimizations using ARIMA and Isolation Forest models.",
            },
            {
                title: "Dashboard",
                description: "Interactive dashboard for visualizing stock levels and predictions.",
            },
            {
                title: "Cloud Deployment",
                description: "Fully deployed on AWS for scalability and accessibility.",
            },
        ],
        techStack: ["FastAPI", "PostgreSQL", "JavaScript", "AWS", "ARIMA", "Isolation Forest"],
        images: [],
        links: {
            github: "https://github.com/manuqwert1234",
        },
    },
    {
        slug: "churn-prediction",
        title: "Customer Churn Prediction",
        shortDescription: "ML model predicting churn with 92% accuracy.",
        description:
            "Developed and deployed an XGBoost model to predict customer churn with 92% accuracy. The solution presents key business insights and drivers via an interactive Power BI dashboard.",
        features: [
            {
                title: "High Accuracy Model",
                description: "XGBoost model achieving 92% accuracy in predicting customer churn.",
            },
            {
                title: "Business Insights",
                description: "Interactive Power BI dashboard to visualize key drivers of churn.",
            },
        ],
        techStack: ["XGBoost", "Power BI", "Python", "Pandas", "Scikit-run"],
        images: [],
        links: {
            github: "https://github.com/manuqwert1234",
        },
    },
    {
        slug: "mediaplus",
        title: "MediaPlus Marketing Tool",
        shortDescription: "NLP-driven sentiment analysis and ad targeting.",
        description:
            "Engineered a digital marketing solution using DeepSeek API for NLP-driven sentiment analysis and ad targeting. The tool boosted click-through rates by 20% on a test dataset.",
        features: [
            {
                title: "DeepSeek API Integration",
                description: "Leverages advanced NLP for accurate sentiment analysis.",
            },
            {
                title: "Ad Targeting",
                description: "Optimizes ad placement based on sentiment data, improving CTR.",
            },
        ],
        techStack: ["DeepSeek API", "NLP", "Python", "React"],
        images: [],
        links: {
            github: "https://github.com/manuqwert1234",
        },
    },
    {
        slug: "bloomnet",
        title: "BloomNet Research",
        shortDescription: "Eco-aware lightweight deep learning model.",
        description:
            "Published Paper: 'BloomNet: Eco-Aware Lightweight Deep Learning (2024)'. Achieved up to 100% accuracy on flower datasets using a resource-efficient architecture.",
        features: [
            {
                title: "Eco-Aware Architecture",
                description: "Designed for computational efficiency without sacrificing accuracy.",
            },
            {
                title: "Published Research",
                description: "Published in IJPRI, 16(4). Top 50 Finalist at TechXcelerate National Hackathon.",
            },
        ],
        techStack: ["TensorFlow", "Deep Learning", "Python"],
        images: [],
        links: {
            paper: "#", // Placeholder for actual paper link if available
        },
    },
    {
        slug: "writer",
        title: "Writer",
        shortDescription: "A minimal, ambient writing space with AI autocomplete.",
        description:
            "Writer is a minimal, ambient writing space with AI autocomplete, real‑time sync, and lo‑fi background music. It's designed to feel like a focused studio for long-form writing.",
        features: [
            {
                title: "AI Ghost Autocomplete",
                description:
                    "Tab-completion ghost text (like GitHub Copilot, but for prose) with a 2-layer speed system (IndexedDB + Groq Llama 3).",
            },
            {
                title: "Ambient Lo-Fi Music",
                description:
                    "Integrated Jamendo API for focus-friendly background music with genre selection and dynamic vibe backgrounds.",
            },
            {
                title: "Realtime Sync",
                description:
                    "Per-user documents with auth-protected access and debounced autosave via Firebase Firestore.",
            },
        ],
        techStack: [
            "Next.js 16",
            "React 19",
            "Tailwind 4",
            "Firebase",
            "Groq SDK",
        ],
        images: [],
        links: {
            github: "https://github.com/manuqwert1234/writer",
        },
        gettingStarted: {
            title: "Getting Started",
            steps: [
                {
                    step: 1,
                    title: "Clone and install",
                    command: "git clone https://github.com/manuqwert1234/writer.git\ncd writer\nnpm install",
                },
                {
                    step: 2,
                    title: "Environment variables",
                    description: "Create a .env.local file in the project root with your Firebase and Groq keys.",
                    command: "NEXT_PUBLIC_FIREBASE_API_KEY=...\nGROQ_API_KEY=...",
                },
                {
                    step: 3,
                    title: "Run the dev server",
                    command: "npm run dev",
                    description: "Open http://127.0.0.1:3000 in your browser.",
                },
            ],
        },
    },
];
