import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuShoppingCart } from "react-icons/lu";

const CartButton = async () => {
  const numItemsInCart = 9;
  return (
    <Button
      asChild
      variant="outline"
      size="icon"
      className="flex justify-center items-center relative"
    >
      <Link href="/cart">
        <LuShoppingCart />
        <span className="absolute justify-center -top-3 -right-3 bg-primary text-white rounded-full h-6 w-6 flex items-center">
          {numItemsInCart}
        </span>
      </Link>
    </Button>
  );
};

export default CartButton;
