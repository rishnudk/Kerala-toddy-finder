"use client";

import Image from "next/image";
import { useState } from "react";

const DISTRICTS = [
    "Kasaragod",
    "Kannur",
    "Wayanad",
    "Kozhikode",
    "Malappuram",
    "Palakkad",
];

const MOCK_SHOPS = [
    { id: 1, title: "Heritage", rating: "4.2", tags: "Family Dining" },
    { id: 2, title: "Heritage", rating: "4.2", tags: "Family Dining" },
    { id: 3, title: "Heritage", rating: "4.2", tags: "Family Dining" },
];

export function DistrictExplorer() {
    const [activeDistrict, setActiveDistrict] = useState("Kasaragod");

    return (
        <section className="bg-white py-24 px-8 border-b border-stone-100">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
                {/* Left Side: Map graphic */}
                <div className="w-full lg:w-1/3 flex items-center justify-center lg:justify-start relative min-h-[400px]">
                    {/* Abstract stylized Kerala map representation */}
                    <svg
                        viewBox="0 0 400 800"
                        className="w-[80%] h-auto max-h-[600px] drop-shadow-xl"
                        fill="none"
                        stroke="#e5e7eb"
                        strokeWidth="2"
                    >
                        {/* Outline */}
                        <path
                            d="M120,50 L180,80 L160,150 L190,250 L220,350 L250,450 L300,600 L320,700 L280,750 L220,700 L180,600 L140,500 L100,400 L80,250 L90,150 Z"
                            fill="#ffffff"
                        />
                        {/* Highlighted Kasaragod region (top part) */}
                        <path
                            d="M120,50 L180,80 L160,150 L90,150 Z"
                            fill="#003e1c"
                            stroke="#003e1c"
                            strokeWidth="2"
                            className="transition-all duration-500"
                        />
                    </svg>

                    <div className="absolute top-10 right-10 bg-white p-4 rounded-xl shadow-lg border border-stone-100 flex flex-col items-center">
                        <span className="font-bold text-stone-800 tracking-wide">
                            {activeDistrict}
                        </span>
                        <span className="text-xs text-stone-500 font-medium mt-1">
                            12 Top Rating • 150 Shops
                        </span>
                    </div>

                    <div className="absolute bottom-10 left-0 bg-white shadow-md border border-stone-100 rounded-lg flex flex-col">
                        <button className="w-10 h-10 border-b border-stone-100 flex items-center justify-center text-stone-600 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">
                                add
                            </span>
                        </button>
                        <button className="w-10 h-10 flex items-center justify-center text-stone-600 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-[20px]">
                                remove
                            </span>
                        </button>
                    </div>
                </div>

                {/* Right Side: Districts List */}
                <div className="w-full lg:w-2/3 flex flex-col">
                    <div className="mb-10">
                        <h2 className="font-[family-name:var(--font-heading)] text-5xl font-semibold text-on-surface mb-3">
                            Explore by{" "}
                            <span className="text-primary">District.</span>
                        </h2>
                        <p className="text-stone-500 font-medium">
                            choose your district and find best shops nearby.
                        </p>
                    </div>

                    <div className="flex flex-col gap-4">
                        {DISTRICTS.map((district) => {
                            const isActive = activeDistrict === district;
                            return (
                                <div
                                    key={district}
                                    className={`grid transition-[grid-template-rows,background-color,border-color,box-shadow] duration-300 ease-in-out border border-stone-200 rounded-2xl overflow-hidden ${isActive ? "grid-rows-[auto_1fr] bg-stone-50 shadow-sm" : "grid-rows-[auto_0fr] bg-white hover:border-stone-300"}`}
                                >
                                    {/* Accordion Header */}
                                    <div
                                        className="flex items-center justify-between p-6 cursor-pointer"
                                        onClick={() =>
                                            setActiveDistrict(
                                                activeDistrict === district
                                                    ? ""
                                                    : district,
                                            )
                                        }
                                    >
                                        <div className="flex flex-col">
                                            <span
                                                className={`text-lg font-bold ${isActive ? "text-primary" : "text-stone-700"}`}
                                            >
                                                {district}
                                            </span>
                                            <span className="text-xs text-stone-400 font-medium mt-1">
                                                12 Top Rating • 150 Shops
                                            </span>
                                        </div>
                                        <button className="bg-primary text-white px-5 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-primary/90 transition-colors">
                                            View all{" "}
                                            <span className="material-symbols-outlined text-[14px]">
                                                arrow_forward
                                            </span>
                                        </button>
                                    </div>

                                    {/* Expanded Content (Cards) */}
                                    <div
                                        className={`px-6 min-h-0 overflow-hidden transition-all duration-300 ease-in-out ${isActive ? "pb-6 opacity-100" : "pb-0 opacity-0"}`}
                                    >
                                        <div className="flex gap-4 overflow-x-auto pb-4 pt-2 snap-x hide-scrollbar ">
                                            {MOCK_SHOPS.map((shop) => (
                                                <div
                                                    key={shop.id}
                                                    className="min-w-[240px] bg-white rounded-xl overflow-hidden border border-stone-200 shadow-sm snap-start group cursor-pointer hover:shadow-md transition-all"
                                                >
                                                    <div className="relative h-[140px] w-full bg-stone-100">
                                                        <Image
                                                            src="/kerala-hero.png"
                                                            alt="Shop"
                                                            fill
                                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                                        />
                                                        <div className="absolute top-3 right-3 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded">
                                                            Popular
                                                        </div>
                                                    </div>
                                                    <div className="p-4">
                                                        <div className="flex justify-between items-start mb-2">
                                                            <span className="font-bold text-stone-800">
                                                                {shop.title}
                                                            </span>
                                                            <span className="material-symbols-outlined text-stone-400 text-[18px]">
                                                                arrow_forward
                                                            </span>
                                                        </div>
                                                        <span className="text-xs text-stone-500 bg-stone-100 px-2 py-1 rounded-md mb-3 inline-block">
                                                            our Village
                                                        </span>
                                                        <p className="text-[11px] text-stone-400 leading-tight mb-4">
                                                            The overall rating
                                                            is based on verified
                                                            reviews and food
                                                            quality.
                                                        </p>
                                                        <div className="flex items-center justify-between pt-3 border-t border-stone-100">
                                                            <span className="text-xs font-bold text-primary flex items-center gap-1">
                                                                <span className="material-symbols-outlined text-[14px] text-[#ffb148]">
                                                                    star
                                                                </span>
                                                                {shop.rating}{" "}
                                                                Rating
                                                            </span>
                                                            <span className="text-[10px] text-stone-400 font-bold uppercase tracking-wider">
                                                                {shop.tags}
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
