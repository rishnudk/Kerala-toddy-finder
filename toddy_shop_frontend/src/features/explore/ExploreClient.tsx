"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Search, SlidersHorizontal, X, Star, MapPin, Sparkles } from "lucide-react";

// Define the static toddy shops data
const toddyShops = [
  {
    id: 1,
    name: "Mullapanthal Toddy Shop",
    locationName: "Tripunithura, Kochi",
    position: [9.9351, 76.3533] as [number, number],
    description: "Famous for its spicy duck curry, beef roast, and pure coconut toddy.",
    rating: 4.7,
    specialty: "Duck & Beef",
  },
  {
    id: 2,
    name: "Kadamakkudy Toddy Shop",
    locationName: "Kadamakkudy Islands, Kochi",
    position: [10.0528, 76.2482] as [number, number],
    description: "Located amidst scenic backwaters. Scenic sunsets and fresh sweet toddy.",
    rating: 4.8,
    specialty: "Crab & Sweet Toddy",
  },
  {
    id: 3,
    name: "Nettoor Toddy Shop",
    locationName: "Nettoor, Ernakulam",
    position: [9.9248, 76.3150] as [number, number],
    description: "Traditional lakeside toddy shop serving fiery local delicacies.",
    rating: 4.4,
    specialty: "Prawns & Seafood",
  },
  {
    id: 4,
    name: "Karimpumkala Toddy Shop",
    locationName: "Pallom, Kottayam",
    position: [9.5524, 76.5412] as [number, number],
    description: "Legendary culinary spot since 1952. Outstanding food and toddy.",
    rating: 4.9,
    specialty: "Karimeen Pollichathu",
  },
  {
    id: 5,
    name: "Heritage Alappuzha Toddy Shop",
    locationName: "Kainakary, Alappuzha",
    position: [9.4981, 76.3388] as [number, number],
    description: "Historic shop on the water margins of Kuttanad.",
    rating: 4.6,
    specialty: "Beef & Sweet Toddy",
  },
];

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
  const [searchQuery, setSearchQuery] = useState("");
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeCenter, setActiveCenter] = useState<[number, number] | null>(null);
  const [activeShopId, setActiveShopId] = useState<number | null>(null);
  
  // Filter States
  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showFilters, setShowFilters] = useState(false);

  // Filter Logic
  const filteredShops = toddyShops.filter((shop) => {
    const matchesSearch =
      shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.locationName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      shop.specialty.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesRating = selectedRating ? shop.rating >= selectedRating : true;

    const matchesCategory = selectedCategory
      ? shop.specialty.toLowerCase().includes(selectedCategory.toLowerCase()) ||
        shop.description.toLowerCase().includes(selectedCategory.toLowerCase())
      : true;

    return matchesSearch && matchesRating && matchesCategory;
  });

  // Suggestions Logic
  const suggestions = searchQuery
    ? toddyShops.filter(
        (shop) =>
          (shop.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            shop.locationName.toLowerCase().includes(searchQuery.toLowerCase())) &&
          shop.name.toLowerCase() !== searchQuery.toLowerCase()
      )
    : [];

  const handleSelectShop = (shop: typeof toddyShops[0]) => {
    setSearchQuery(shop.name);
    setActiveCenter(shop.position);
    setActiveShopId(shop.id);
    setShowSuggestions(false);
  };

  const handleClearSearch = () => {
    setSearchQuery("");
    setActiveShopId(null);
    setActiveCenter(null);
    setShowSuggestions(false);
  };

  const handleResetFilters = () => {
    setSelectedRating(null);
    setSelectedCategory(null);
  };

  return (
    <div className="absolute inset-0 z-0">
      {/* MAP */}
      <MapView
        shops={filteredShops}
        activeCenter={activeCenter}
        activeShopId={activeShopId}
        onMarkerClick={(shopId) => {
          setActiveShopId(shopId);
          const shop = toddyShops.find((s) => s.id === shopId);
          if (shop) {
            setActiveCenter(shop.position);
          }
        }}
      />

      {/* FLOATING UI LAYER */}
      <div className="absolute inset-x-0 top-0 bottom-0 z-[1000] pointer-events-none flex flex-col md:flex-row p-4 gap-4 justify-between md:justify-start items-start">
        
        {/* LEFT COLUMN: BRAND CARD & FILTER OPTIONS */}
        <div className="flex flex-col gap-3 w-full md:w-[320px] pointer-events-auto shrink-0 order-2 md:order-1 mt-auto md:mt-0">
          
          {/* BRAND CARD */}
          <div className="p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/50">
            <h1 className="text-xl font-bold font-heading text-[#003e1c] dark:text-emerald-400">Kerala Toddy Finder</h1>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 leading-relaxed">
              Discover traditional, authentic toddy shops across Kerala.
            </p>
            <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-slate-600 dark:text-slate-300 font-semibold">
                  {filteredShops.length} Shops Found
                </span>
              </div>
              
              {(selectedRating || selectedCategory) && (
                <button
                  onClick={handleResetFilters}
                  className="text-[10px] font-bold text-amber-700 bg-amber-50 hover:bg-amber-100 px-2 py-0.5 rounded transition-colors duration-150 cursor-pointer"
                >
                  Clear Filters
                </button>
              )}
            </div>
          </div>

          {/* ACTIVE FILTER STATUS BADGES */}
          {(selectedRating || selectedCategory) && (
            <div className="flex flex-wrap gap-2">
              {selectedRating && (
                <span className="text-xs font-semibold bg-emerald-50 text-emerald-800 dark:bg-emerald-950/50 dark:text-emerald-300 px-2.5 py-1 rounded-full border border-emerald-100 dark:border-emerald-900 flex items-center gap-1">
                  ★ {selectedRating}+ Rating
                  <button onClick={() => setSelectedRating(null)} className="cursor-pointer">
                    <X className="w-3.5 h-3.5 hover:text-red-500" />
                  </button>
                </span>
              )}
              {selectedCategory && (
                <span className="text-xs font-semibold bg-amber-50 text-amber-800 dark:bg-amber-950/50 dark:text-amber-300 px-2.5 py-1 rounded-full border border-amber-100 dark:border-amber-900 flex items-center gap-1">
                  🔥 {selectedCategory}
                  <button onClick={() => setSelectedCategory(null)} className="cursor-pointer">
                    <X className="w-3.5 h-3.5 hover:text-red-500" />
                  </button>
                </span>
              )}
            </div>
          )}

          {/* FILTER PANEL DRAWER */}
          {showFilters && (
            <div className="p-4 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/50 flex flex-col gap-4 transition-all duration-200">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-sm text-slate-800 dark:text-slate-200 flex items-center gap-1.5">
                  <Sparkles className="w-4 h-4 text-amber-600" /> Filter Options
                </h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Rating filter */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Minimum Rating</span>
                <div className="flex gap-2">
                  {[4.5, 4.7, 4.8].map((rating) => (
                    <button
                      key={rating}
                      onClick={() => setSelectedRating(selectedRating === rating ? null : rating)}
                      className={`flex-1 text-xs py-1.5 rounded-lg border transition-all duration-200 font-bold cursor-pointer ${
                        selectedRating === rating
                          ? "bg-[#003e1c] border-[#003e1c] text-white"
                          : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      ★ {rating}+
                    </button>
                  ))}
                </div>
              </div>

              {/* Specialty filter */}
              <div className="flex flex-col gap-1.5">
                <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Specialty Category</span>
                <div className="flex flex-wrap gap-2">
                  {["Beef", "Duck", "Seafood", "Crab", "Sweet"].map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                      className={`text-xs px-3 py-1.5 rounded-lg border transition-all duration-200 font-semibold cursor-pointer ${
                        selectedCategory === category
                          ? "bg-[#003e1c] border-[#003e1c] text-white"
                          : "border-slate-200 hover:bg-slate-50 dark:border-slate-800 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* RIGHT/CENTER COLUMN: FLOATING SEARCH BAR */}
        <div className="relative w-full md:w-[450px] pointer-events-auto order-1 md:order-2">
          <div className="bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-xl border border-slate-100 dark:border-slate-800/50 flex items-center p-1.5 pl-4 transition-all duration-200 focus-within:ring-2 focus-within:ring-[#003e1c]/25 focus-within:border-[#003e1c]">
            <Search className="w-5 h-5 text-[#003e1c] dark:text-emerald-500 shrink-0" />
            
            <input
              type="text"
              placeholder="Search toddy shops or locations..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value);
                setShowSuggestions(true);
              }}
              onFocus={() => setShowSuggestions(true)}
              className="bg-transparent border-none outline-none flex-1 text-sm px-3 text-slate-800 dark:text-slate-100 placeholder-slate-400 w-full"
            />

            {searchQuery && (
              <button
                onClick={handleClearSearch}
                className="p-1 mr-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            )}

            <button
              onClick={() => setShowFilters(!showFilters)}
              className={`p-2.5 rounded-xl transition-all duration-200 shrink-0 flex items-center justify-center cursor-pointer ${
                showFilters
                  ? "bg-amber-600 text-white shadow-lg shadow-amber-600/20"
                  : "bg-[#003e1c] hover:bg-[#002e14] text-white"
              }`}
              title="Filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
            </button>
          </div>

          {/* AUTOCOMPLETE SUGGESTIONS DROPDOWN */}
          {showSuggestions && suggestions.length > 0 && (
            <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md rounded-2xl shadow-2xl border border-slate-100 dark:border-slate-800/50 overflow-hidden max-h-64 overflow-y-auto z-[2000] transition-all duration-150">
              {suggestions.map((shop) => (
                <button
                  key={shop.id}
                  onClick={() => handleSelectShop(shop)}
                  className="w-full px-4 py-3 text-left hover:bg-slate-50 dark:hover:bg-slate-800/50 flex items-center justify-between border-b border-slate-50 last:border-0 dark:border-slate-800/30 transition-colors duration-150 cursor-pointer"
                >
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-slate-400 mt-0.5 shrink-0" />
                    <div>
                      <p className="font-bold text-sm text-slate-800 dark:text-slate-200">{shop.name}</p>
                      <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">📍 {shop.locationName}</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold text-emerald-800 bg-emerald-50 dark:bg-emerald-950 dark:text-emerald-300 px-2 py-0.5 rounded leaf-chip flex items-center gap-0.5 shrink-0">
                    ★ {shop.rating}
                  </span>
                </button>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
