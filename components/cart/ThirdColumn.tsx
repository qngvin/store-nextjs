"use client";

import { useState } from "react";
import SelectProductAmount, {
  Mode,
} from "../single-products/SelectProductAmount";
import { removeCartItemAction, updateCartItemAction } from "@/utils/actions";
import { SubmitButton } from "../form/Buttons";
import FormContainer from "../form/FormContainer";
import { useToast } from "@/hooks/use-toast";

const ThirdColumn = ({ quantity, id }: { quantity: number; id: string }) => {
  const [amout, setAmount] = useState(quantity);
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();
  const handleAmountChange = async (value: number) => {
    setLoading(true);
    toast({ description: "Calculating..." });
    const result = await updateCartItemAction({
      amount: value,
      cartItemId: id,
    });
    setAmount(value);
    toast({ description: result.message });
    setLoading(false);
  };
  return (
    <div className="md:ml-8">
      <SelectProductAmount
        amount={amout}
        setAmount={handleAmountChange}
        mode={Mode.CartItem}
        isLoading={false}
      />
      <FormContainer action={removeCartItemAction}>
        <input type="hidden" name="id" value={id} />
        <SubmitButton size="sm" className="mt-4 " text="remove" />
      </FormContainer>
    </div>
  );
};

export default ThirdColumn;
