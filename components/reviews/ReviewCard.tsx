import React from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import Rating from "./Rating";
import Comment from "./Comment";

type ReviewCardProps = {
  review: {
    id: string;
    createdAt: Date;
    updatedAt: Date;
    clerkId: string;
    productId: string;
    authorName: string;
    authorImageUrl: string;
    rating: number;
    comment: string;
  };
  children?: React.ReactNode;
};
const ReviewCard = ({ review, children }: ReviewCardProps) => {
  return (
    <Card className="relative">
      <CardHeader>
        <div className="flex items-center">
          <Image
            src={review?.authorImageUrl}
            alt={review?.authorName}
            width={48}
            height={48}
          />
          <div className="ml-4">
            <h3 className="text-sm font-bold capitalize mb-1">
              {review.authorName}
            </h3>
            <Rating rating={review.rating} />
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Comment comment={review.comment} />
      </CardContent>
      <div className="absolute top-3 right-3">{children}</div>
    </Card>
  );
};

export default ReviewCard;
