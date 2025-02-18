import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";
import AddToCart from "@/components/single-products/AddToCart";
import BreadCrumbs from "@/components/single-products/BreadCrumbs";
import ProductRating from "@/components/single-products/ProductRating";
import { fetchSignleProduct } from "@/utils/actions";
import { formatCurrency } from "@/utils/format";
import Image from "next/image";
import React from "react";

const SingleProductPage = async ({
  params,
}: {
  params: Promise<{ id: string }>;
}) => {
  const paramsId = await params;
  const product = await fetchSignleProduct(paramsId.id);
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        <div className="relative h-full">
          <Image
            src={product.image}
            alt={product.name}
            fill
            priority
            sizes="(max-width:768px 100vw, max-width:1200 50vw, 33vw)"
            className=" w-full rounded object-cover "
          />
        </div>
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold ">{product.name}</h1>
            <FavoriteToggleButton productId={product.id} />
          </div>
          <ProductRating productId={product.id} />
          <h4 className="text-xl mt-2">{product.company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {formatCurrency(product.price)}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">
            {product.description}
          </p>
          <AddToCart productId={product.id} />
        </div>
      </div>
    </section>
  );
};

export default SingleProductPage;
