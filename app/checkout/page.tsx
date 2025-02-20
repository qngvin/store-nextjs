"use client";
import { loadStripe } from "@stripe/stripe-js";
import { useSearchParams } from "next/navigation";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { useCallback, Suspense } from "react";
import axios from "axios";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
function Checkout() {
  const searchParams = useSearchParams();
  const orderId = searchParams.get("orderId");
  const cartId = searchParams.get("cartId");

  const fetchClientSecret = useCallback(async () => {
    const response = await axios.post("/api/payment", {
      orderId,
      cartId,
    });
    return response.data.clientSecret;
  }, [cartId, orderId]);

  const options = { fetchClientSecret };

  return (
    <Suspense fallback={null}>
      <div id="checkout">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </Suspense>
  );
}
function CheckoutPage() {
  return (
    <Suspense>
      <Checkout />
    </Suspense>
  );
}

export default CheckoutPage;
