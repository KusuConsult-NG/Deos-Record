import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-center px-6">
            <div className="space-y-6 max-w-md">
                <h1 className="text-8xl font-black text-primary">404</h1>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Page Not Found</h2>
                <p className="text-slate-500 dark:text-slate-400">
                    The page you are looking for doesn't exist or has been moved.
                </p>
                <Link
                    href="/"
                    className="inline-block bg-primary text-background-dark font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                    Return Home
                </Link>
            </div>
        </div>
    );
}
