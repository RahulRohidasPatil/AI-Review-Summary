"use server";

import { revalidateTag } from "next/cache";

export async function invalidateProductCache(productSlug: string) {
  revalidateTag(`product-summary-${productSlug}`, "max");
  revalidateTag(`product-insights-${productSlug}`, "max");
}
