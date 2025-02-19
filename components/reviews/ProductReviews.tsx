import { fetchProductReviews } from "@/utils/actions";
import React from "react";
import SectionTitle from "../global/SectionTitle";
import ReviewCard from "./ReviewCard";

const ProductReviews = async ({ productId }: { productId: string }) => {
  const reviews = await fetchProductReviews(productId);

  return (
    <div className="mt-16">
      <SectionTitle text="product reviews" />
      <div className="grid md:grid-cols-2 gap-8 my-8">
        {reviews.map((review) => {
          return <ReviewCard key={review.id} review={review} />;
        })}
      </div>
    </div>
  );
};

export default ProductReviews;
