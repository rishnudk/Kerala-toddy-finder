"use client";

import dynamic from "next/dynamic";

// Dynamically import MapView with ssr: false to prevent "window is not defined" error in SSR
const MapView = dynamic(() => import("@/features/explore/MapView"), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-[#fcf9f8] flex items-center justify-center dark:bg-slate-900">
      <div className="flex flex-col items-center gap-3">
        <div className="w-10 h-10 border-4 border-[#003e1c] border-t-transparent rounded-full animate-spin"></div>
        <p className="text-sm text-slate-600 dark:text-slate-400 font-medium tracking-wide animate-pulse">
          Loading Toddy Shop Map...
        </p>
      </div>
    </div>
  ),
});

export default function ExploreClient() {
  return (
    <div className="absolute inset-0 z-0">
      <MapView />
    </div>
  );
}
