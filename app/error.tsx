"use client";

import { useEffect } from "react";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Logic to log error to a service could go here
        console.error(error);
    }, [error]);

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-background-light dark:bg-background-dark text-center px-6">
            <div className="space-y-6 max-w-md">
                <div className="size-20 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="material-symbols-outlined text-4xl">error</span>
                </div>
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">Something went wrong!</h2>
                <p className="text-slate-500 dark:text-slate-400">
                    We apologize for the inconvenience. Please try again.
                </p>
                <button
                    onClick={reset}
                    className="inline-block bg-primary text-background-dark font-bold px-8 py-4 rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20"
                >
                    Try again
                </button>
            </div>
        </div>
    );
}
