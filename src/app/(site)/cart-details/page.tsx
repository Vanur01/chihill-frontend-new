"use client";
import SavedForLater from "@/components/cart/SavedForLater";
import ShoppingCart from "@/components/cart/ShoppingCart";
import PeopleBought from "@/components/PeopleBought";
import { useCartStore } from "@/store/cartStore";
import React from "react";

const cartDetails = () => {
  const { cart } = useCartStore();
  const productId =
    cart && cart.items && cart.items.length > 0
      ? typeof cart.items[0].productId !== "string"
        ? cart.items[0].productId._id
        : ""
      : undefined;
      
  return (
    <div className="">
      <ShoppingCart />
      <SavedForLater />
      {cart && cart.items && cart.items.length > 0 && (
        <PeopleBought productId={productId} />
      )}
    </div>
  );
};

export default cartDetails;
