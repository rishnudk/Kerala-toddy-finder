import { SHOP_DETAILS } from "@/features/shops/data";
import { ShopDetailPage, ShopNotFound } from "@/features/shops/components/ShopDetailPage";

export async function generateStaticParams() {
  return SHOP_DETAILS.map((shop) => ({ id: shop.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shop = SHOP_DETAILS.find((s) => s.id === id);

  if (!shop) {
    return { title: "Shop Not Found | Shaap" };
  }

  return {
    title: `${shop.name} — ${shop.district} | Shaap`,
    description: shop.tagline,
  };
}

export default async function ShopDetailRoute({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shop = SHOP_DETAILS.find((s) => s.id === id);

  if (!shop) {
    return <ShopNotFound id={id} />;
  }

  return <ShopDetailPage shop={shop} />;
}
