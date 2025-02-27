import { fetchSignleProduct, findExistingReview } from "@/utils/actions";
import Image from "next/image";
import { formatCurrency } from "@/utils/format";
import FavoriteToggleButton from "@/components/products/FavoriteToggleButton";

import SubmitReview from "@/components/reviews/SubmitReview";
import ProductReviews from "@/components/reviews/ProductReviews";
import { auth } from "@clerk/nextjs/server";
import BreadCrumbs from "@/components/single-products/BreadCrumbs";
import ShareButton from "@/components/single-products/ShareButton";
import ProductRating from "@/components/single-products/ProductRating";
import AddToCart from "@/components/single-products/AddToCart";
type Params = Promise<{ id: string }>;

async function SingleProductPage(props: { params: Params }) {
  const params = await props.params;
  const id = params.id;
  const product = await fetchSignleProduct(id);
  const { name, image, company, description, price } = product;
  const dollarsAmount = formatCurrency(price);
  const { userId } = await auth();
  const reviewDoesNotExist =
    userId && !(await findExistingReview(userId, product.id));
  return (
    <section>
      <BreadCrumbs name={product.name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            priority
            className="w-full rounded object-cover"
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name} </h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={id} />
              <ShareButton name={product.name} productId={id} />
            </div>
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {dollarsAmount}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={id} />
        </div>
      </div>
      <ProductReviews productId={id} />

      {reviewDoesNotExist && <SubmitReview productId={id} />}
    </section>
  );
}
export default SingleProductPage;
