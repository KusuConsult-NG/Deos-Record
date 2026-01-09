export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-background-light dark:bg-background-dark">
            <div className="flex flex-col items-center gap-4">
                <div className="size-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
                <p className="text-primary font-bold animate-pulse">Loading Deos Record...</p>
            </div>
        </div>
    );
}
