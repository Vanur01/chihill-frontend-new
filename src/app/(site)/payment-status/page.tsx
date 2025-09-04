"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import {
  CheckCircle,
  XCircle,
  Package,
  Truck,
  ArrowRight,
  Home,
  RotateCcw,
  Loader2,
} from "lucide-react";
import { Suspense } from "react";
import {
  usePaymentActions,
  usePaymentLoading,
  usePaymentError,
  usePaymentStatus,
} from "@/store/paymentStore";
import { PaymentStatusResponse } from "@/api/payment.api";

interface OrderDetails {
  orderId: string;
  transactionId: string;
  amount: number;
  items: number;
  paymentMode: string;
  paymentState: string;
  estimatedDelivery: string;
  paymentDate: string;
  accountHolderName?: string;
}

function OrderSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<OrderDetails | null>(null);
  const [redirectCountdown, setRedirectCountdown] = useState<number | null>(null);

  const { checkPaymentStatus } = usePaymentActions();
  const loading = usePaymentLoading();
  const error = usePaymentError();
  const paymentStatus = usePaymentStatus();

  const orderId = searchParams.get("orderId") || "";
 
  useEffect(() => {
    if (!orderId) {
      console.log("No orderId found in URL params"); // Debug log
      setOrderDetails({
        orderId: "ORDER_NOT_FOUND",
        transactionId: "",
        amount: 0,
        items: 0,
        paymentMode: "",
        paymentState: "FAILED",
        estimatedDelivery: "15-20 business days",
        paymentDate: new Date().toISOString(),
      });
      return;
    }

    console.log("Fetching payment status for orderId:", orderId); // Debug log

    // Fetch payment status
    const fetchPaymentStatus = async () => {
      try {
        const result = await checkPaymentStatus(orderId);
        console.log("Payment status result:", result); // Debug log
      } catch (err) {
        console.error("Error fetching payment status:", err); // Debug log
      }
    };

    fetchPaymentStatus();
  }, [orderId, checkPaymentStatus]);

  // Process payment status data when it's available
  useEffect(() => {
    if (paymentStatus) {
      // Based on the actual API response structure
      const status = paymentStatus.status; // This is now a string like "COMPLETED"
      const orderData = paymentStatus.data; // Contains orderId, state, amount, etc.
      const paymentData = paymentStatus.payment; // Contains payment details
      const paymentDetails = orderData?.paymentDetails?.[0] || null;

      console.log("status:", status);
      console.log("orderData:", orderData);
      console.log("paymentData:", paymentData);
      console.log("paymentDetails:", paymentDetails);

      // Map the correct data structure
      const orderIdFromData =
        paymentData?.orderId || orderData?.orderId || orderId || "";
      const transactionId =
        paymentData?.transactionId || paymentDetails?.transactionId || "";
      const amount = paymentData?.amount || orderData?.amount || 0;
      const items = paymentData?.products?.length || 0;
      const paymentMode = paymentDetails?.paymentMode || "Online Payment";
      const paymentState = status || orderData?.state || paymentData?.status || "UNKNOWN";
      const paymentDate =
        paymentData?.paidAt ||
        paymentData?.createdAt ||
        paymentData?.updatedAt ||
        new Date().toISOString();
      const accountHolderName =
        paymentDetails?.splitInstruments?.[0]?.instrument?.accountHolderName;

      setOrderDetails({
        orderId: orderIdFromData,
        transactionId,
        amount,
        items,
        paymentMode,
        paymentState,
        estimatedDelivery: "15-20 business days",
        paymentDate,
        accountHolderName,
      });
    } else if (error) {
      // If we have an error
      console.log("Payment status indicates error:", error); // Debug log
      setOrderDetails({
        orderId: orderId,
        transactionId: "",
        amount: 0,
        items: 0,
        paymentMode: "",
        paymentState: "FAILED",
        estimatedDelivery: "15-20 business days",
        paymentDate: new Date().toISOString(),
      });
    }
  }, [paymentStatus, orderId, error]);

  const isSuccess = () => {
    if (!paymentStatus) return false;

    const status = paymentStatus.status; // This is now a string
    const orderData = paymentStatus.data;
    const paymentData = paymentStatus.payment;

    return (
      status === "COMPLETED" ||
      orderData?.state === "COMPLETED" ||
      status === "SUCCESS" ||
      orderData?.state === "SUCCESS" ||
      paymentData?.status === "COMPLETED" ||
      paymentData?.status === "SUCCESS"
    );
  };

  const success = isSuccess();

  const handleContinueShopping = () => router.push("/");
  const handleViewOrders = () => router.push("/orderConfirmation");
  const handleRetryPayment = () => router.push("/payment");

  // Auto-redirect to order confirmation page when payment is successful
  useEffect(() => {
    if (success && orderDetails?.orderId && orderDetails.orderId !== "ORDER_NOT_FOUND") {
      setRedirectCountdown(3);
      
      const countdownInterval = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev === null || prev <= 1) {
            clearInterval(countdownInterval);
            router.push(`/order-confirmation/${orderDetails.orderId}`);
            return null;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(countdownInterval);
    }
  }, [success, orderDetails?.orderId, router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center font-lato">
        <div className="flex flex-col items-center">
          <Loader2 className="w-12 h-12 text-primary1 animate-spin mb-4" />
          <p className="text-gray-600">Checking payment status...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center font-lato">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-red-800 mb-2">Error</h2>
          <p className="text-gray-600 mb-6">{error}</p>
          <button
            onClick={() => router.push("/")}
            className="bg-primary1 text-white py-2 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  if (!orderDetails && !loading && !error) {
    return (
      <div className="min-h-screen flex items-center justify-center font-lato">
        <div className="bg-white p-8 rounded-lg shadow-md max-w-md w-full text-center">
          <XCircle className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            No Data Available
          </h2>
          <p className="text-gray-600 mb-6">
            Unable to load payment information. Please check the URL or try
            again.
          </p>
          <div className="space-y-2">
            <p className="text-sm text-gray-500">
              Order ID: {orderId || "Not provided"}
            </p>
            <p className="text-sm text-gray-500">
              Payment Status: {paymentStatus ? "Loaded" : "Not loaded"}
            </p>
          </div>
          <button
            onClick={() => router.push("/")}
            className="mt-4 bg-primary1 text-white py-2 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors"
          >
            Go Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-secondary py-4 px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 font-lato">
      <div className="max-w-3xl mx-auto">
        {/* Mobile Header */}
        <div className="lg:hidden mb-4 text-center font-lato">
          <h1
            className={`text-2xl font-bold font-lato ${
              success ? "text-green-800" : "text-red-800"
            }`}
          >
            {success
              ? "Payment Completed!"
              : `Payment ${orderDetails?.paymentState || "Failed"}`}
          </h1>
        </div>

        <div className="bg-white border-1 border-zinc-200 rounded overflow-hidden font-lato">
          {/* ...existing code... */}

          {/* Header Section */}
          <div
            className={`px-4 py-6 sm:px-6 sm:py-8 text-center ${
              success ? "bg-green-100" : "bg-red-50"
            } font-lato`}
          >
            <div className="flex justify-center mb-3 sm:mb-4">
              {success ? (
                <CheckCircle className="w-12 h-12 sm:w-16 sm:h-16 text-green-500" />
              ) : (
                <XCircle className="w-12 h-12 sm:w-16 sm:h-16 text-red-500" />
              )}
            </div>

            <h1
              className={`hidden lg:block text-2xl sm:text-3xl font-bold mb-1 sm:mb-2 font-lato ${
                success ? "text-green-600" : "text-red-800"
              }`}
            >
              {success
                ? "Payment Completed Successfully!"
                : `Payment ${orderDetails?.paymentState || "Failed"}`}
            </h1>

            <p
              className={`text-sm sm:text-lg font-lato ${
                success ? "text-green-600" : "text-red-600"
              }`}
            >
              {success
                ? redirectCountdown
                  ? `Thank you for your purchase. Your order has been confirmed. Redirecting to order details in ${redirectCountdown}...`
                  : "Thank you for your purchase. Your order has been confirmed."
                : "We're sorry, but your payment could not be processed."}
            </p>
          </div>

          {/* Order Details Section */}
          <div className="px-4 py-4 sm:px-6 sm:py-6 font-lato">
            <div className="border-b border-gray-200 pb-4 sm:pb-6 mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-3 sm:mb-4 font-lato">
                Order Details
              </h2>

              <div className="grid grid-cols-1 gap-3 sm:gap-4 font-lato">
                <div className="space-y-2 sm:space-y-3">
                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">Order ID:</span>
                    <span className="font-medium text-gray-900 font-lato">
                      {orderDetails?.orderId || "N/A"}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">
                      Transaction ID:
                    </span>
                    <span className="font-medium text-gray-900 font-lato">
                      {orderDetails?.transactionId || "N/A"}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">
                      Total Amount:
                    </span>
                    <span className="font-medium text-gray-900 font-lato">
                      ₹{orderDetails?.amount?.toLocaleString() || "0"}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">Items:</span>
                    <span className="font-medium text-gray-900 font-lato">
                      {orderDetails?.items || 0} items
                    </span>
                  </div>

                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">
                      Payment Method:
                    </span>
                    <span className="font-medium text-gray-900 font-lato">
                      {orderDetails?.paymentMode || "N/A"}
                    </span>
                  </div>

                                    {orderDetails?.accountHolderName && (
                    <div className="flex justify-between text-sm sm:text-base font-lato">
                      <span className="text-gray-600 font-lato">
                        Account Holder:
                      </span>
                      <span className="font-medium text-gray-900 font-lato">
                        {orderDetails.accountHolderName}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">
                      Payment Date:
                    </span>
                    <span className="font-medium text-gray-900 font-lato">
                      {orderDetails?.paymentDate
                        ? new Date(orderDetails.paymentDate).toLocaleDateString(
                            "en-IN",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )
                        : "N/A"}
                    </span>
                  </div>

                  <div className="flex justify-between text-sm sm:text-base font-lato">
                    <span className="text-gray-600 font-lato">Status:</span>
                    <span
                      className={`font-medium font-lato ${
                        success ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {orderDetails?.paymentState || "Unknown"}
                    </span>
                  </div>

                  {success && (
                    <div className="flex justify-between text-sm sm:text-base font-lato">
                      <span className="text-gray-600 font-lato">
                        Est. Delivery:
                      </span>
                      <span className="font-medium text-gray-900 font-lato">
                        {orderDetails?.estimatedDelivery || "N/A"}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Success State - Delivery Timeline */}
            {success && (
              <div className="mb-4 sm:mb-6 font-lato">
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-3 sm:mb-4 font-lato">
                  Order Timeline
                </h3>
                <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-2 text-xs sm:text-sm font-lato">
                  <div className="flex items-center text-green-600 font-lato">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="font-lato">Order Placed</span>
                  </div>

                  <div className="hidden sm:block flex-1 border-t border-gray-300"></div>

                  <div className="flex items-center text-gray-400 font-lato">
                    <Package className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="font-lato">Processing</span>
                  </div>

                  <div className="hidden sm:block flex-1 border-t border-gray-300"></div>

                  <div className="flex items-center text-gray-400 font-lato">
                    <Truck className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="font-lato">Shipped</span>
                  </div>

                  <div className="hidden sm:block flex-1 border-t border-gray-300"></div>

                  <div className="flex items-center text-gray-400 font-lato">
                    <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                    <span className="font-lato">Delivered</span>
                  </div>
                </div>
              </div>
            )}

            {/* Failed State - Error Information */}
            {!success && (
              <div className="mb-4 sm:mb-6 p-3 sm:p-4 bg-red-50 rounded-lg border border-red-200 font-lato">
                <h3 className="text-base sm:text-lg font-semibold text-red-800 mb-1 sm:mb-2 font-lato">
                  Payment Status: {orderDetails?.paymentState || "Unknown"}
                </h3>
                <ul className="text-red-600 text-xs sm:text-sm space-y-1 font-lato">
                  <li className="font-lato">
                    • Transaction ID: {orderDetails?.transactionId || "N/A"}
                  </li>
                  <li className="font-lato">
                    • Payment could not be completed
                  </li>
                  <li className="font-lato">
                    • Please check your payment details and try again
                  </li>
                  <li className="font-lato">
                    • Contact customer support if the issue persists
                  </li>
                </ul>
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 font-lato">
              {success ? (
                <>
                  <button
                    onClick={handleViewOrders}
                    className="flex-1 bg-primary1 hover:bg-primary2 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base cursor-pointer font-lato"
                  >
                    View My Orders
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4" />
                  </button>

                  <button
                    onClick={handleContinueShopping}
                    className="flex-1 border-2 border-primary1 text-primary1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-primary1 hover:text-white transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base cursor-pointer font-lato"
                  >
                    <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                    Continue Shopping
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={handleRetryPayment}
                    className="flex-1 bg-primary1 hover:bg-primary2 text-white py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-opacity-90 transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base cursor-pointer font-lato"
                  >
                    <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4" />
                    Retry Payment
                  </button>

                  <button
                    onClick={handleContinueShopping}
                    className="flex-1 border-2 border-primary1 text-primary1 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium hover:bg-primary1 hover:text-white transition-colors flex items-center justify-center gap-1 sm:gap-2 text-sm sm:text-base cursor-pointer font-lato"
                  >
                    <Home className="w-3 h-3 sm:w-4 sm:h-4" />
                    Back to Home
                  </button>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-6 sm:mt-8 text-center text-gray-600 text-xs sm:text-sm font-lato">
          <p className="font-lato">
            Need help? Contact our{" "}
            <button
              onClick={() => router.push("/customer-support")}
              className="text-primary1 hover:underline font-medium cursor-pointer font-lato"
            >
              customer support
            </button>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function OrderSuccess() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center font-lato">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary1"></div>
        </div>
      }
    >
      <OrderSuccessContent />
    </Suspense>
  );
}
