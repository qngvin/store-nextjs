import CartItemsList from "@/components/cart/CartItemsList";
import CartTotals from "@/components/cart/CartTotals";
import SectionTitle from "@/components/global/SectionTitle";
import { fetchOrCreateCart, updateCart } from "@/utils/actions";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import React from "react";

const CartPage = async () => {
  const { userId } = await auth();
  if (!userId) redirect("/");
  const previouscart = await fetchOrCreateCart({ userId });
  console.log("cos nhes", previouscart);
  const { currentCart, cartItems } = await updateCart(previouscart);
  if (cartItems.length === 0) return <SectionTitle text="Empty Cart" />;
  return (
    <>
      <SectionTitle text="Shopping Cart" />
      <div className="mt-8 grid gap-4 lg:grid-cols-12">
        <div className="lg:col-span-8">
          <CartItemsList cartItems={cartItems} />
        </div>
        <div className="lg:col-span-4">
          <CartTotals cart={currentCart} />
        </div>
      </div>
    </>
  );
};

export default CartPage;
