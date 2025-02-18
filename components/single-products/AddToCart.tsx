import React from "react";
import { Button } from "../ui/button";

const AddToCart = ({ productID }: { productId: string }) => {
  return (
    <Button className="capitalize mt-8 " size="lg">
      {" "}
      AddToCart
    </Button>
  );
};

export default AddToCart;
