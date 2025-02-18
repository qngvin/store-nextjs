import { fetchFeatureProducts } from "@/utils/actions";
import React from "react";
import EmptyList from "../global/EmptyList";
import SectionTitle from "../global/SectionTitle";
import ProductsGrid from "../products/ProductsGrid";

const FeaturedProducts = async () => {
  const products = await fetchFeatureProducts();
  if (products.length === 0)
    return <EmptyList heading="No items found" className="text-emerald-50" />;
  return (
    <section className="pt-24">
      <SectionTitle text="featured products" />
      <ProductsGrid products={products} />
    </section>
  );
};

export default FeaturedProducts;
