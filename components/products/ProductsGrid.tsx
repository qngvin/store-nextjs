import { Product } from "@prisma/client";
import Link from "next/link";
import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "./FavoriteToggleButton";

const ProductsGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => (
        <article className="group relative" key={product.id}>
          <Link href={`/products/${product.id}`}>
            <Card className="transform group-hover:shadow-xl transition-shadow duration-500">
              <CardContent className="p-4">
                <div className="relative h-63 md:h-48 rounded overflow-hidden">
                  <Image
                    fill
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw,33vw"
                    src={product.image}
                    alt={product.name}
                    priority
                    className="rounded object-cover w-full transform group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="mt-4 text-center">
                  <h2 className="text-lg capitalize">{product.name}</h2>
                  <p className="text-muted-foreground mt-2">
                    {formatCurrency(product.price)}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
          <div className="absolute right-7 top-7 z-10">
            <FavoriteToggleButton productId={product.id} />
          </div>
        </article>
      ))}
    </div>
  );
};

export default ProductsGrid;
