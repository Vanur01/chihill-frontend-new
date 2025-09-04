"use client";

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CheckCircle, XCircle, X, Loader2, MapPin, Package } from "lucide-react";
import { usePaymentStore, usePaymentLoading, usePaymentError, usePaymentActions } from "@/store/paymentStore";
import { getAddressById } from "@/api/address.api";
import { getCartById } from "@/api/cart.api";
import type { Address } from "@/api/address.api";
import type { Cart } from "@/api/cart.api";

export const PaymentContent = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  // Get addressId and cartId from URL parameters
  const addressId = searchParams.get('addressId');
  const cartId = searchParams.get('cartId');
  
  const [isProcessing, setIsProcessing] = useState(false);
  const [address, setAddress] = useState<Address | null>(null);
  const [cart, setCart] = useState<Cart | null>(null);
  // Additional state for cart details
  const [cartSummary, setCartSummary] = useState<{
    itemCount: number;
    subtotal: number;
    discount: number;
    total: number;
    items: number;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Additional state for cart details that might not be in the type
  const [shippingCharge, setShippingCharge] = useState<number>(0);
  
  const paymentLoading = usePaymentLoading();
  const paymentError = usePaymentError();
  const { initiatePayment } = usePaymentActions();
  
  // Fetch address and cart data
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      setError(null);
      
      try {
        // Fetch address data
        if (addressId) {
          try {
            const addressResponse = await getAddressById(addressId);
            if (addressResponse.success) {
              setAddress(addressResponse.data.address);
            } else {
              throw new Error(addressResponse.message || 'Failed to fetch address');
            }
          } catch (addressError: any) {
            console.error("Address fetch error:", addressError);
            setError(`Address error: ${addressError.message}`);
          }
        }
        
        // Fetch cart data
        if (cartId) {
          try {
            // Add cache busting parameter to avoid 304 Not Modified
            const timestamp = new Date().getTime();
            // Use a clean URL structure for the API call
            const cleanCartId = cartId.split('?')[0]; // Remove any existing query params
            const response = await getCartById(`${cleanCartId}?_=${timestamp}`);
            
            console.log("Cart API Response:", response); // Debug log
            
            // The API should return the success response with cart data
            if (response.success && response.data) {
              const cartData = response.data.cart;
              const summaryData = response.data.summary;
              
              if (cartData) {
                setCart(cartData);
                
                // Set cart summary
                if (summaryData) {
                  setCartSummary(summaryData);
                  console.log("Cart Summary:", summaryData); // Debug log
                } else {
                  // If summary is not provided, create one from cart data
                  const cartItems = cartData.items || [];
                  const calculatedSummary = {
                    itemCount: cartItems.length,
                    subtotal: cartItems.reduce((sum: number, item: any) => sum + (item.priceAtAdd * item.quantity), 0),
                    discount: 0,
                    total: cartItems.reduce((sum: number, item: any) => sum + (item.priceAtAdd * item.quantity), 0),
                    items: cartItems.reduce((sum: number, item: any) => sum + item.quantity, 0)
                  };
                  setCartSummary(calculatedSummary);
                  console.log("Calculated Summary:", calculatedSummary); // Debug log
                }
                
                // Set shipping charge - free over 1000
                const subtotal = summaryData?.subtotal || 0;
                setShippingCharge(subtotal > 1000 ? 0 : 50);
              } else {
                console.error("No cart data in response:", response); // Debug log
                throw new Error('Cart data not found in response');
              }
            } else {
              console.error("Invalid response:", response); // Debug log
              throw new Error(response.message || 'Invalid response from server');
            }
          } catch (cartError: any) {
            console.error("Cart fetch error:", cartError); // Debug log
            setError(`Cart error: ${cartError.message || 'Failed to fetch cart data'}`);
          }
        }
        
        setLoading(false);
      } catch (err: any) {
        console.error("General fetch error:", err);
        setError(err.message || 'Failed to load data');
        setLoading(false);
      }
    };
    
    if (addressId || cartId) {
      fetchData();
    } else {
      setLoading(false);
    }
  }, [addressId, cartId]);
  
  // Redirect if addressId is missing
  useEffect(() => {
    if (!addressId && !loading) {
      router.push('/address');
    }
  }, [addressId, router, loading]);

  const handlePayment = () => {
    if (!addressId) {
      alert('Please select a delivery address first');
      router.push('/address');
      return;
    }
    
    if (!cartId) {
      alert('No cart found. Please add items to your cart first.');
      router.push('/');
      return;
    }
    
    // Process payment directly with success status
    processPayment(true);
  };

  const processPayment = async (isSuccess: boolean) => {
    if (!isSuccess) {
      // For failed demo, just simulate
      setIsProcessing(true);
      setTimeout(() => {
        setIsProcessing(false);
        
        const orderParams = new URLSearchParams({
          status: 'failed',
          orderId: `ORD${Date.now()}`,
          amount: cartSummary?.total.toString() || "0",
          ...(addressId ? { addressId } : {}),
          ...(cartId ? { cartId } : {})
        });
        
        router.push(`/order-success?${orderParams.toString()}`);
      }, 2000);
      return;
    }
    
    // For success, actually call the API
    setIsProcessing(true);
    
    try {
      // Call the payment API
      const paymentUrl = await initiatePayment({
        cartId: cartId!,
        addressId: addressId!
      });
      
      setIsProcessing(false);
      
      if (paymentUrl) {
        // Redirect to the payment gateway
        window.location.href = paymentUrl;
      } else {
        throw new Error('Failed to get payment URL');
      }
    } catch (err: any) {
      setIsProcessing(false);
      alert(err.message || 'Payment initiation failed');
    }
  };

  return (
    <div className="min-h-screen py-4 mt-20 sm:mt-40 font-lato">
      <div className="max-w-[90rem] mx-auto px-2 sm:px-6 lg:px-8">
        {/* Header */}
        <h1 className="text-xl sm:text-3xl text-center font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-secondary2  mb-10 font-crimson-pro">
          PAYMENT METHODS
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Cart Summary */}
          <div className="space-y-6">
            {/* Cart Summary */}
            <div className="bg-secondary border border-secondary1 p-6">
              <h2 className="text-md lg:text-xl items-center font-light tracking-[0.1rem] sm:tracking-[0.2rem] mb-3 sm:mb-6 text-start font-crimson-pro">
                CART SUMMARY
              </h2>
              
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="w-8 h-8 text-primary1 animate-spin" />
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-500">{error}</p>
                </div>
              ) : cart && cartSummary ? (
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between border-b border-secondary1 pb-3">
                    <span className="text-zinc-800">Subtotal</span>
                    <span className="font-medium">₹{cartSummary.subtotal.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between items-center border-b border-secondary1 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-800">Shipping charges</span>
                      <div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center text-white text-xs">
                        ?
                      </div>
                    </div>
                    <span className="font-medium">₹{shippingCharge.toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between border-b border-secondary1 pb-3">
                    <span className="text-zinc-800">Total Discount</span>
                    <span className="font-medium text-green-600">
                      - ₹{cartSummary.discount.toFixed(2)}
                    </span>
                  </div>

                  <div className="flex justify-between items-center border-b border-secondary1 pb-3">
                    <div className="flex items-center gap-2">
                      <span className="text-zinc-800">Tax estimate</span>
                      <div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center text-white text-xs">
                        ?
                      </div>
                    </div>
                    <span className="font-medium">₹{(cartSummary.subtotal * 0.18).toFixed(2)}</span>
                  </div>

                  <div className="flex justify-between text-lg font-medium">
                    <span>Total Payable</span>
                    <span>₹{(cartSummary.total + shippingCharge + (cartSummary.subtotal * 0.18)).toFixed(2)}</span>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4">
                  <p>No cart information available</p>
                </div>
              )}
            </div>

            {/* Product Summary */}
            <div className="bg-white p-6 border border-secondary1">
              <h2 className="text-md lg:text-xl items-center font-light tracking-[0.1rem] sm:tracking-[0.2rem] mb-3 sm:mb-6 text-start font-crimson-pro">
                PRODUCT SUMMARY
              </h2>

              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="w-8 h-8 text-primary1 animate-spin" />
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-500">{error}</p>
                </div>
              ) : cart && cart.items && cart.items.length > 0 ? (
                <div className="space-y-4">
                  {cart.items.map((item, index) => {
                    // Handle the nested structure where productId can be an object
                    const product = typeof item.productId !== 'string' ? item.productId : null;
                    const variant = product?.variants?.find((v: any) => v.sku === item.variantSku) || null;
                    const productId = typeof item.productId !== 'string' ? item.productId._id : item.productId;
                    
                    return (
                      <div key={`${productId}-${item.variantSku || ''}-${index}`} className="flex gap-4">
                        <div className="flex items-center justify-center">
                          <img
                            src={product?.images && product.images.length > 0 
                              ? product.images[0] 
                              : variant?.images && variant.images.length > 0 
                                ? variant.images[0] 
                                : "/best1.jpg"}
                            alt={product?.name || "Product"}
                            className="w-20 h-25 object-cover"
                          />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-gray-800">
                            {product?.name || "Product"} 
                            {variant && variant.title && ` (${variant.title})`}
                          </h3>
                          <p className="text-sm mt-1">Quantity: {item.quantity}</p>
                          {variant && variant.attributes && (
                            <p className="text-sm text-gray-600">
                              {variant.attributes.size && `Size: ${variant.attributes.size}`}
                              {variant.attributes.color && variant.attributes.size && ' • '}
                              {variant.attributes.color && `Color: ${variant.attributes.color}`}
                            </p>
                          )}
                        </div>
                        <div className="text-right">
                          <span className="font-semibold text-lg">₹{item.priceAtAdd.toFixed(2)}</span>
                          {variant && variant.mrp && variant.mrp > item.priceAtAdd && (
                            <p className="text-sm line-through text-gray-500">₹{variant.mrp.toFixed(2)}</p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="text-center py-4">
                  <p>No products in cart</p>
                </div>
              )}
            </div>
          </div>

          {/* Right Column - Address Information and Payment Button */}
          <div className="space-y-6">
            <div className="p-6 border border-secondary1 bg-white">
              <h2 className="text-md lg:text-xl items-center font-light tracking-[0.1rem] sm:tracking-[0.2rem] mb-6 text-start font-crimson-pro">
                DELIVERY ADDRESS
              </h2>
              
              {loading ? (
                <div className="flex justify-center items-center py-8">
                  <Loader2 className="w-8 h-8 text-primary1 animate-spin" />
                </div>
              ) : error ? (
                <div className="text-center py-8">
                  <p className="text-red-500">{error}</p>
                </div>
              ) : address ? (
                <div className="mb-8">
                  <div className="flex items-start gap-3 mb-4">
                    <MapPin className="w-5 h-5 text-gray-600 mt-0.5" />
                    <div>
                      <p className="font-medium">{address.name}</p>
                      <p className="text-sm text-gray-600 mt-1">
                        {address.street}, {address.landmark && `${address.landmark}, `}
                        {address.city}, {address.state} - {address.postalCode}
                      </p>
                      <p className="text-sm text-gray-600 mt-1">Phone: {address.phone}</p>
                    </div>
                  </div>
                  
                  <div className="bg-secondary p-3 text-sm my-4 rounded">
                    <p className="flex items-center text-secondary2">
                      <Package className="w-4 h-4 mr-2" /> 
                      Delivery expected in 3-5 business days
                    </p>
                  </div>
                </div>
              ) : (
                <div className="text-center py-4 mb-6">
                  <p>No address selected. Please select a delivery address.</p>
                  <button 
                    onClick={() => router.push('/address')}
                    className="mt-4 px-4 py-2 bg-primary1 text-white rounded-md"
                  >
                    Add Address
                  </button>
                </div>
              )}
              
              {/* <div className="bg-secondary border border-secondary1 p-4 mb-6">
                <p className="text-md">
                  Your order is eligible for{" "}
                  <span className="font-semibold text-secondary2">
                    Cash on Delivery
                  </span>
                </p>
              </div> */}

              <button 
                onClick={handlePayment}
                disabled={paymentLoading || isProcessing || !address || !cart}
                className="w-full mt-4 bg-primary1 hover:bg-primary2 text-white font-medium py-3 px-6 transition-colors cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed"
              >
                {paymentLoading || isProcessing ? (
                  <div className="flex items-center justify-center">
                    <Loader2 className="w-5 h-5 animate-spin mr-2" />
                    Processing...
                  </div>
                ) : (
                  "Proceed to Pay"
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


