import ExploreClient from "@/features/explore/ExploreClient";

export const metadata = {
  title: "Explore Shops | Toddy Finder",
  description: "Find toddy shops near you on an interactive map.",
};

export default function ExplorePage() {
  return (
    <main className="relative h-screen w-full overflow-hidden">
      
      {/* MAP */}
      <ExploreClient />

      {/* OVERLAY UI */}
      <div className="relative z-[10] pointer-events-none">
        <div className="absolute top-4 left-4 p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/50 max-w-sm pointer-events-auto">
          <h1 className="text-xl font-bold font-heading text-[#003e1c] dark:text-emerald-400">Kerala Toddy Finder</h1>
          <p className="text-xs text-slate-500 mt-1">Discover traditional, authentic toddy shops across Kerala.</p>
          <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center gap-2">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold">Interactive Map Live</span>
          </div>
        </div>
      </div>

    </main>
  );
}

