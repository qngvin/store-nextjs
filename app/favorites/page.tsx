import SectionTitle from "@/components/global/SectionTitle";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";
import React from "react";

const FavoritesPage = async () => {
  const favorites = await fetchUserFavorites();
  if (favorites.length === 0)
    return <SectionTitle text="You have no favorites" />;
  return (
    <div>
      <SectionTitle text="Favorites" />
      <ProductsGrid products={favorites.map((product) => product.product)} />
    </div>
  );
};

export default FavoritesPage;
