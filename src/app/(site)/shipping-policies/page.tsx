"use client";

import React from "react";
import Link from "next/link";

export default function ShippingPolicies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-gray-800 font-crimson-pro mb-2">
            SHIPPING POLICIES
          </h1>
          <p className="text-gray-600">Applicable for all interfaces of CHIHILI</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-8">
        {/* About CHIHILI */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            About CHIHILI
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CHIHILI is an online platform for servicing customers for their custom stitched costumes and fashionwear. This shipping policy is applicable for all interfaces of CHIHILI (Mobile Applications, Digital Mediums, Social Websites and Applications).
          </p>
          <p className="text-gray-700 leading-relaxed">
            The details of the products, services or product specifications (weight, stitching seam strength, colours and tints, handwork details, sizes and measurements, etc.) as mentioned on CHIHILI digital/online mediums are only approximate values as they are custom fit measurements and may differ based on fabric quality and specifications.
          </p>
        </section>

        {/* Policy Acceptance */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Policy Acceptance & Terms
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-700">
              By accessing, shopping and ordering on CHIHILI Interfaces, you indicate your unconditional acceptance of these shipping policy terms. These terms can change from time to time due to operational or regulatory requirements.
            </p>
            <p className="text-gray-700">
              Use of the site is available only to persons who can legally enter into contracts under applicable laws. CHIHILI reserves the right to terminate your access if you are under 18 years of age or suffer from any disability as recognized under the Indian Contract Act, 1872.
            </p>
            <p className="text-gray-700">
              <strong>Jurisdiction:</strong> All disputes related to CHIHILI Interfaces and order/fulfillment disputes will be under the jurisdiction of Bhubaneswar, Odisha, India.
            </p>
          </div>
        </section>

        {/* Shipping Options & Logistics */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Shipping Options & Logistics Partners
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We ship domestically through authorized Indian shipping providers such as Delhivery and other authorized logistics partners.
          </p>
          <ul className="space-y-3 text-gray-700">
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>CHIHILI reserves the right to select the logistics service provider for picking up fabrics and/or reference garments</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>All delivery and pickup costs will be notified in the price breakup</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>CHIHILI reserves discretion to charge logistics costs based on delivery/pickup location, order type, distance, and timeline</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-600 font-bold">•</span>
              <span>CHIHILI may deploy partner staff or own staff for hyperlocal/within-city logistics requirements</span>
            </li>
          </ul>
        </section>

        {/* Order Processing Time */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Order Processing & Delivery Timeline
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Due to the personalized nature of fashion-related orders at CHIHILI, the delivery date is usually jointly agreed by the customer and authorized CHIHILI staff members.
          </p>
          <div className="border-l-4 border-orange-300 pl-4 py-2 bg-orange-50 p-4 rounded">
            <p className="text-gray-700 mb-2">
              <strong>Important:</strong> CHIHILI will make best efforts to deliver within the agreed timeline. However, due to seasonal loads, manpower disruptions, external factors, or logistics disruption, orders may get delayed. CHIHILI will not be held responsible for such delays.
            </p>
          </div>
        </section>

        {/* Delivery Hours & Charges */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Delivery Hours & Charges
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Working Hours</h3>
              <p className="text-gray-700">
                Our teams work from <strong>10:00 AM to 7:00 PM</strong> on weekdays and Saturdays (India timings)
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Pickup & Delivery Charges</h3>
              <p className="text-gray-700">
                Charges start from <strong>₹99/-</strong> and vary based on weight, urgency, distance, volume, and shape of shipment
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">Shipping Charges Display</h3>
              <p className="text-gray-700">
                Shipping charges are applied at the checkout window along with the total price
              </p>
            </div>
          </div>
        </section>

        {/* Payment & COD Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Payment & Cash on Delivery Policy
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-gray-700 mb-2">
              As a policy, <strong>CHIHILI does not provide Cash on Delivery (COD)</strong> options.
            </p>
            <p className="text-gray-700">
              Any COD options may be extended on a case-to-case basis only at the exclusive discretion of authorized CHIHILI team members.
            </p>
          </div>
        </section>

        {/* Delivery Attempts */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Delivery Attempts & Failed Deliveries
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            If the consignee premises are closed or customer doesn't respond to the service provider's calls:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>CHIHILI will attempt delivery on the next business day between 10:00 AM to 7:00 PM</li>
            <li>Multiple attempts will be made to ensure successful delivery</li>
            <li>Contact our support team if you face delivery issues</li>
          </ul>
        </section>

        {/* OTP Verification */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Secure Delivery Verification
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            We ensure safe and correct deliveries through authenticated One Time Password (OTP) sent to your CHIHILI app and SMS.
          </p>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Note:</strong> OTP SMS delivery is governed by multiple factors including telecom providers. CHIHILI will not be held responsible for OTP SMS delivery issues.
            </p>
          </div>
        </section>

        {/* Delivery Address */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Delivery Address Guidelines
          </h2>
          <div className="border-l-4 border-red-300 pl-4 py-2 bg-red-50 p-4 rounded space-y-4">
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Address Cannot Be Modified</h3>
              <p className="text-gray-700">
                We are unable to modify the delivery address once you have placed your order. Please select the pickup/delivery address carefully for each order.
              </p>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Restricted Addresses</h3>
              <p className="text-gray-700 mb-2">
                We cannot take liability for handover of orders for addresses which are not accessible by our logistics partners, such as:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1">
                <li>Gated communities</li>
                <li>Office addresses</li>
                <li>Other restricted addresses</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">Repeat Shipment Charges</h3>
              <p className="text-gray-700">
                Repeat shipments due to inaccessible addresses will be additionally charged to the customer at CHIHILI's discretion based on costs involved.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Delivery */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Emergency & Special Deliveries
          </h2>
          <p className="text-gray-700 leading-relaxed">
            In case of emergency deliveries, hand carry mode or hyperlocal service providers are used with extra charges to be borne by the customer.
          </p>
        </section>

        {/* International Orders */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            International Orders
          </h2>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-700">
              Your package may be subject to import duties and taxes when shipped internationally.
            </p>
            <p className="text-gray-700">
              <strong>You, as the customer, are responsible for paying those fees.</strong>
            </p>
            <p className="text-gray-700">
              We recommend checking with your local customs office before placing an order, as these fees can sometimes be significant and we are unable to calculate them for you.
            </p>
          </div>
        </section>

        {/* Tracking Orders */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Tracking Your Order
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Once your order has been dispatched, we will send you a confirmation email with tracking information. You will be able to track your package directly on the carrier's website.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Alternatively, reach us at <strong>support@chihili.com</strong> for any shipping queries.
          </p>
        </section>

        {/* Contact Support */}
        <section className="bg-gray-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Contact Us
          </h2>
          <p className="text-gray-700 mb-4">
            If you have any questions about our shipping policies, please contact our customer service team:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Phone:</strong> +91 9124725574</p>
            <p><strong>Email:</strong> support@chihili.com</p>
          </div>
        </section>
      </div>
    </div>
  );
}
