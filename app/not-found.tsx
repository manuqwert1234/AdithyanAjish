import Link from "next/link";

export default function NotFound() {
    return (
        <main className="h-screen w-full flex flex-col items-center justify-center bg-zinc-50 dark:bg-black text-center px-4">
            <h1 className="text-9xl font-bold tracking-tighter mb-4">404</h1>
            <p className="text-xl text-zinc-500 mb-8">Page not found.</p>
            <Link
                href="/"
                className="px-6 py-3 bg-black text-white rounded-full font-medium hover:opacity-80 transition-opacity"
            >
                Go Home
            </Link>
        </main>
    );
}
