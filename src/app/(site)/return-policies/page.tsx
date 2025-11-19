"use client";

import React from "react";
import Link from "next/link";

export default function ReturnPolicies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-gray-800 font-crimson-pro mb-2">
            REPLACEMENT & ALTERATIONS POLICY
          </h1>
          <p className="text-gray-600">Learn about our replacement and alteration services</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-8">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            About Our Products
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Products, services or product specifications on CHIHILI are designer styled, hand designed and made, hand crafted and accessories may be hand-picked from various parts of India and other parts of the world. Due to the intricate nature of the custom-designed and custom-fit workflow, there may be variations in colours of fabrics, dyes, designs, prints or embroideries.
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            The customer agrees to variations of color, texture, fabric and cloth stretch, shape or nature of the fabric, threads, and accessories due to the online nature of all such transactions. These variations are due to fabric dyes, variations in sizes due to inherent fabric specification variations, manual stitching differences, and digital photography/color settings.
          </p>
        </section>

        {/* Replacement Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Replacement Policy
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Misplaced Fabric or Garment</h3>
              <p className="text-gray-700">
                If CHIHILI misplaces any fabric or garment, the liability of CHIHILI is limited to the replacement of the monetary value of the fabric OR replacement of the similar fabric, subject to sufficient proof of purchase value being provided by the customer.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Design or Fitting Dissatisfaction</h3>
              <p className="text-gray-700 mb-2">
                If you are not satisfied with the garment's design or fitting and intend to cancel, the liability of CHIHILI is limited up to INR ₹3,000/- OR the refund of the stitching charges component of the pricing, whichever is higher.
              </p>
              <p className="text-gray-700 text-sm italic">
                Note: If fabric cost is included as part of the refund, the garment will be retained as CHIHILI property for further audit and quality purposes.
              </p>
            </div>
          </div>
        </section>

        {/* Free Alterations */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Free Alterations
          </h2>
          <div className="bg-green-50 border border-green-200 rounded-lg p-6 mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">Size Alterations at Our Centre</h3>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Free size/measurement changes if the dress has required cloth available in stitched seams</li>
              <li>✓ Available only when customer visits our centre in person</li>
              <li>✓ Limited to size changes only - NOT for style changes</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
            <p className="text-gray-700">
              <strong>Important:</strong> Style changes (e.g., converting full sleeves to sleeveless) are NOT considered alterations and will not be covered under this policy.
            </p>
          </div>
        </section>

        {/* Paid Alterations */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Paid Alterations
          </h2>
          <div className="space-y-4">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Outstation Orders (Beyond 7 Days)</h3>
              <p className="text-gray-700">
                For outstation orders where CHIHILI doesn't provide pickup and delivery service, any alterations beyond 7 days from delivery date will require the customer to bear the shipping costs to the nearest CHIHILI centre.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Pickup & Delivery Service Areas</h3>
              <p className="text-gray-700">
                Any pickup and delivery service for alterations beyond the 7-day timeline in pincodes served by CHIHILI will be charged extra as per the charges decided by CHIHILI management. Customer can avail of such paid services at their discretion.
              </p>
            </div>
          </div>
        </section>

        {/* Measurement Responsibility */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Customer Responsibility
          </h2>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6">
            <p className="text-gray-700">
              The customer confirms that they have taken precaution to ensure that the measurements for each personalized fashion order have been submitted and mentioned in the app with due caution and verification. CHIHILI is not responsible for measurement errors made by the customer.
            </p>
          </div>
        </section>

        {/* Discounted Items */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Discounted Items Policy
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-gray-700">
              <strong>Important:</strong> Any items or orders stitched at a discounted cost while applying a coupon code or discount code are not refundable under any circumstance.
            </p>
          </div>
        </section>

        {/* Accuracy Statement */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Quality Assurance
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            The outcome of the dress and garment at CHIHILI is dependent on various factors including:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>Skill of the workers</li>
            <li>Clarity of communication between CHIHILI and customer</li>
            <li>Details of the order conveyed through digital communication</li>
            <li>Accuracy of measurements provided</li>
            <li>Fabric quality and specifications</li>
          </ul>
        </section>

        {/* Contact Support */}
        <section className="bg-gray-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Need Assistance?
          </h2>
          <p className="text-gray-700 mb-4">
            For any queries regarding replacement and alterations, please contact us:
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> grievance@chihili.in</p>
            <p><strong>Phone:</strong> +91 9124725574</p>
          </div>
        </section>
      </div>
    </div>
  );
}
