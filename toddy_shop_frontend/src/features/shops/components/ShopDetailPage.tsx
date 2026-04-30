import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ShopDetail } from "@/features/shops/data";

// ─── Back Button ─────────────────────────────────────────────────────────────
function BackButton() {
  return (
    <Link
      href="/"
      className="inline-flex items-center gap-2 text-primary font-bold hover:opacity-70 transition-opacity mb-6"
    >
      <span className="material-symbols-outlined">arrow_back</span>
      Back to Home
    </Link>
  );
}

// ─── Hero Banner ─────────────────────────────────────────────────────────────
function ShopHero({ shop }: { shop: ShopDetail }) {
  return (
    <div className="relative w-full h-72 md:h-96 rounded-3xl overflow-hidden mb-8">
      <Image
        src={shop.image}
        alt={shop.alt}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
      <div className="absolute bottom-0 left-0 p-8">
        {shop.badge && (
          <span
            className={cn(
              "inline-flex items-center gap-1 px-3 py-1 rounded-full",
              "text-white text-[11px] font-bold uppercase tracking-wider mb-3",
              shop.badgeColor
            )}
          >
            <span
              className="material-symbols-outlined text-[12px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              verified
            </span>
            {shop.badge}
          </span>
        )}
        <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-white font-semibold">
          {shop.name}
        </h1>
        <p className="text-white/80 mt-1 text-sm">{shop.tagline}</p>
      </div>
    </div>
  );
}

// ─── Info Bar ─────────────────────────────────────────────────────────────────
function ShopInfoBar({ shop }: { shop: ShopDetail }) {
  return (
    <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-tertiary-fixed">
      {/* Rating */}
      <div className="flex items-center gap-2">
        <span className="text-secondary font-bold text-2xl">{shop.rating} ★</span>
        <span className="text-stone-500 text-sm">({shop.totalReviews} reviews)</span>
      </div>

      {/* Status */}
      <span
        className={cn(
          "leaf-chip px-3 py-1 text-[11px] font-bold uppercase tracking-wider",
          shop.isOpen
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        )}
      >
        {shop.isOpen ? "Open Now" : "Closed"}
      </span>

      {/* Location */}
      <span className="flex items-center gap-1 text-stone-600 text-sm">
        <span className="material-symbols-outlined text-[16px] text-primary">location_on</span>
        {shop.location}
      </span>

      {/* Est. */}
      <span className="flex items-center gap-1 text-stone-600 text-sm">
        <span className="material-symbols-outlined text-[16px] text-primary">history</span>
        Est. {shop.established}
      </span>

      {/* Phone */}
      <a
        href={`tel:${shop.phone}`}
        className="flex items-center gap-1 text-primary font-bold text-sm hover:opacity-70 transition-opacity"
      >
        <span className="material-symbols-outlined text-[16px]">call</span>
        {shop.phone}
      </a>
    </div>
  );
}

// ─── Amenities ────────────────────────────────────────────────────────────────
function Amenities({ shop }: { shop: ShopDetail }) {
  return (
    <div className="bg-surface-container-low rounded-2xl p-6 mb-6">
      <h2 className="font-[family-name:var(--font-heading)] text-xl text-primary font-semibold mb-4">
        Amenities
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {shop.amenities.map((a) => (
          <div
            key={a.label}
            className="flex items-center gap-2 text-stone-700 text-sm"
          >
            <span className="material-symbols-outlined text-[18px] text-primary">{a.icon}</span>
            {a.label}
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Opening Hours ────────────────────────────────────────────────────────────
function OpeningHours({ shop }: { shop: ShopDetail }) {
  return (
    <div className="bg-surface-container-low rounded-2xl p-6 mb-6">
      <h2 className="font-[family-name:var(--font-heading)] text-xl text-primary font-semibold mb-4">
        Opening Hours
      </h2>
      <div className="space-y-2">
        {shop.hours.map((h) => (
          <div key={h.day} className="flex justify-between text-sm">
            <span className="text-stone-600">{h.day}</span>
            <span
              className={cn(
                "font-bold",
                h.time === "Closed" ? "text-red-600" : "text-primary"
              )}
            >
              {h.time}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Menu ─────────────────────────────────────────────────────────────────────
function Menu({ shop }: { shop: ShopDetail }) {
  return (
    <section className="mb-10">
      <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary font-semibold mb-6">
        Menu
      </h2>
      <div className="space-y-6">
        {shop.menu.map((section) => (
          <div key={section.category}>
            <h3 className="text-[11px] font-bold tracking-[3px] uppercase text-stone-500 mb-3">
              {section.category}
            </h3>
            <div className="space-y-3">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start bg-white border border-tertiary-fixed rounded-xl px-5 py-4 hover:border-secondary/40 transition-colors"
                >
                  <div>
                    <p className="font-bold text-primary">{item.name}</p>
                    <p className="text-stone-500 text-sm mt-0.5">{item.description}</p>
                  </div>
                  <span className="font-bold text-secondary ml-6 shrink-0">{item.price}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Reviews ─────────────────────────────────────────────────────────────────
function Reviews({ shop }: { shop: ShopDetail }) {
  return (
    <section>
      <h2 className="font-[family-name:var(--font-heading)] text-2xl text-primary font-semibold mb-6">
        Community Reviews
      </h2>
      <div className="space-y-4">
        {shop.reviews.map((review) => (
          <div
            key={review.id}
            className="bg-white border border-tertiary-fixed rounded-2xl p-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold text-sm shrink-0">
                {review.avatar}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <span className="font-bold text-primary">{review.author}</span>
                  <span className="text-stone-400 text-xs">{review.date}</span>
                </div>
                <div className="text-secondary font-bold text-sm my-1">
                  {"★".repeat(review.rating)}
                  {"☆".repeat(5 - review.rating)}
                </div>
                <p className="text-stone-600 text-sm leading-relaxed">{review.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Not Found ────────────────────────────────────────────────────────────────
function ShopNotFound({ id }: { id: string }) {
  return (
    <div className="max-w-7xl mx-auto py-20 px-8 text-center">
      <span className="material-symbols-outlined text-6xl text-stone-300 mb-4">storefront</span>
      <h1 className="font-[family-name:var(--font-heading)] text-3xl text-primary font-semibold mb-3">
        Shop not found
      </h1>
      <p className="text-stone-500 mb-8">
        No shop found with the ID &quot;{id}&quot;.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition-colors"
      >
        <span className="material-symbols-outlined">arrow_back</span>
        Back to Home
      </Link>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function ShopDetailPage({ shop }: { shop: ShopDetail }) {
  return (
    <div className="max-w-7xl mx-auto py-10 px-6 md:px-8">
      <BackButton />
      <ShopHero shop={shop} />
      <ShopInfoBar shop={shop} />

      {/* Two-column layout on desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Menu + Reviews */}
        <div className="lg:col-span-2">
          <Menu shop={shop} />
          <Reviews shop={shop} />
        </div>

        {/* Right: Sidebar */}
        <div>
          <Amenities shop={shop} />
          <OpeningHours shop={shop} />
        </div>
      </div>
    </div>
  );
}

export { ShopNotFound };
