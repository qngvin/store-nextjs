"use client";
import { useUser } from "@clerk/nextjs";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import FormContainer from "../form/FormContainer";
import RatingInput from "./RatingInput";
import TextAreaInput from "../form/TextAreaInput";
import { SubmitButton } from "../form/Buttons";
import { createReviewAction } from "@/utils/actions";

const SubmitReview = ({ productId }: { productId: string }) => {
  const [isReviewFormVisible, setIsReviewFormVisible] = useState(false);
  const { user } = useUser();
  return (
    <div>
      <Button
        size="lg"
        className="capitalize "
        onClick={() => setIsReviewFormVisible((prev) => !prev)}
      >
        leave review
      </Button>
      {isReviewFormVisible && (
        <Card className="p-8 mt-8">
          <FormContainer action={createReviewAction}>
            <input type="hidden" name="productId" value={productId} />
            <input
              type="hidden"
              name="authorName"
              value={user?.firstName || "user"}
            />
            <input type="hidden" name="authorImageUrl" value={user?.imageUrl} />
            <RatingInput name="rating" labelText="feedback" />
            <TextAreaInput
              name="comment"
              labelText="feedback"
              defaultValue="Outstanding product!!!"
            />
            <SubmitButton size="lg" className="mt-4" />
          </FormContainer>
        </Card>
      )}
    </div>
  );
};

export default SubmitReview;
