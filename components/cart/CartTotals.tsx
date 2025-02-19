import { formatCurrency } from "@/utils/format";
import { Cart } from "@prisma/client";
import React from "react";
import { Separator } from "../ui/separator";
import { Card, CardTitle } from "../ui/card";
import FormContainer from "../form/FormContainer";
import { createOrderAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";

const CartTotals = ({ cart }: { cart: Cart }) => {
  return (
    <div>
      <Card className="p-8">
        <CartTotalRow label="Subtotal" amount={cart.cartTotal} />
        <CartTotalRow label="Shipping" amount={cart.shipping} />
        <CartTotalRow label="Tax" amount={cart.tax} />
        <CardTitle className="mt-8">
          <CartTotalRow label="Order Total" amount={cart.orderTotal} />
        </CardTitle>
      </Card>
      <FormContainer action={createOrderAction}>
        <SubmitButton size="lg" text="Place Order" className="w-full mt-8" />
      </FormContainer>
    </div>
  );
};
function CartTotalRow({
  label,
  amount,
  lastRow,
}: {
  label: string;
  amount: number;
  lastRow?: boolean;
}) {
  return (
    <>
      <p className="flex justify-between text-sm ">
        <span>{label}</span>
        <span>{formatCurrency(amount)}</span>
      </p>
      {lastRow ? null : <Separator className="my-2" />}
    </>
  );
}
export default CartTotals;
