import { notFound } from "next/navigation";
import { products } from "@/lib/products";
import ProductDetailClient from "./ProductDetailClient";

// Generate static params for export - must be in server component
export function generateStaticParams() {
  return products.map((product) => ({
    productSlug: product.slug,
  }));
}

export default function ProductDetailPage({ params }) {
  const product = products.find(p => p.slug === params.productSlug);

  if (!product) {
    notFound();
  }

  return <ProductDetailClient product={product} />;
}