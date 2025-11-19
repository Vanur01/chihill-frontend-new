"use client";

import React from "react";
import Link from "next/link";

export default function RefundPolicies() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-gray-800 font-crimson-pro mb-2">
            REFUNDS & CANCELLATION POLICY
          </h1>
          <p className="text-gray-600">Applicable for all interfaces of CHIHILI</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-8">
        {/* Introduction */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            About Custom-Made Products
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            CHIHILI specializes in custom-made, hand-designed, hand-crafted fashion items. Details of products and specifications are approximate values as they are custom fit measurements and may differ based on fabric quality and specifications.
          </p>
          <p className="text-gray-700 leading-relaxed">
            The outcome of each dress and garment is dependent on various factors including the skill of workers, clarity of communication, accuracy of measurements provided, and fabric quality specifications.
          </p>
        </section>

        {/* Refund Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Refund Policy on Products & Services
          </h2>
          <div className="space-y-4">
            <div className="border-l-4 border-red-500 pl-4 py-2 bg-red-50 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Refunds on Custom Orders</h3>
              <p className="text-gray-700">
                Since each garment ordered with CHIHILI is completely customized to measurement, style preferences, look and finish as opted by the customer, <strong>refunds will not be permitted on orders once placed</strong>. Garments are made to stitched fit as per the desire and need of the customer, to the extent possible by CHIHILI.
              </p>
            </div>
            <div className="border-l-4 border-blue-500 pl-4 py-2 bg-blue-50 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Refunds Due to CHIHILI Issues</h3>
              <p className="text-gray-700 mb-2">
                Refunds, if any and due to issues found attributable to CHIHILI team after due clearance through our grievance redressal process, will ONLY be in the form of <strong>Gift Vouchers</strong>.
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-1 mt-2">
                <li>Gift Vouchers issuance takes 7-10 working days from management approval</li>
                <li>Value limited to ₹2,500 OR actual cost of items (whichever is lower)</li>
                <li>Limit applies regardless of order value or material costs</li>
              </ul>
            </div>
            <div className="border-l-4 border-orange-500 pl-4 py-2 bg-orange-50 p-4 rounded">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">No Cash or Online Refunds</h3>
              <p className="text-gray-700">
                <strong>No cash or online refunds will be issued at any time.</strong> Only Gift Vouchers are provided for CHIHILI-attributable issues.
              </p>
            </div>
          </div>
        </section>

        {/* Cancellation Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Order Cancellation Policy
          </h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            All orders placed by the customer can be cancelled EXCEPT for the following scenarios:
          </p>
          <div className="space-y-3">
            <div className="border border-gray-300 rounded-lg p-4">
              <p className="text-gray-700 font-semibold mb-1\">❌ Cannot Cancel If:</p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-2">
                <li>Order has been placed with the fulfillment center for processing</li>
                <li>Fabric has been washed, ironed, cut, or stitched</li>
                <li>Work has already begun (stitching, cutting, fashion designer work, etc.)</li>
                <li>In cases of ambiguity, CHIHILI reserves the right to decide on case-to-case basis</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Cancellation Refunds */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Cancellation Refund Terms
          </h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <p className="text-gray-700 mb-3">
              For cancellations permitted as per the policy above, CHIHILI reserves the right to reimburse amounts pertaining to the advance amount collected till such time, <strong>EXCEPT for</strong>:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Cost paid for fabrics</li>
              <li>Transport charges</li>
              <li>Logistics charges</li>
              <li>Other incidental charges expended to service the order</li>
            </ul>
          </div>
        </section>

        {/* Fabric Return Policy */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Fabric Supplier Return Policy
          </h2>
          <div className="bg-purple-50 border border-purple-200 rounded-lg p-6 space-y-4">
            <p className="text-gray-700">
              CHIHILI will consider a refund only if the fabric supplier(s) on CHIHILI's platform has a Fabric return policy AND the supplier accepts the return/refund as per their own policies.
            </p>
            <p className="text-gray-700">
              <strong>Important:</strong> If the fabric provider doesn't accept return or replacement, CHIHILI will not be able to make any refund or replacement at its own behest at any point in time.
            </p>
            <p className="text-gray-700 text-sm italic">
              The timeframe for such grievances will be commensurate to the fabric provider's prescribed return and refund policies.
            </p>
          </div>
        </section>

        {/* Grievance Process */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Grievance Redressal Process
          </h2>
          <div className="border border-gray-200 rounded-lg p-6">
            <p className="text-gray-700 mb-3">
              For any queries related to your orders, our customer support team will:
            </p>
            <ol className="list-decimal list-inside text-gray-700 space-y-2">
              <li>Receive your grievance</li>
              <li>Conduct a process audit</li>
              <li>Have the process audit team decide on the outcome of issue analysis</li>
              <li>Notify you of the decision</li>
            </ol>
          </div>
        </section>

        {/* Discounted Items */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Discounted Items - Non-Refundable
          </h2>
          <div className="bg-red-50 border border-red-200 rounded-lg p-6">
            <p className="text-gray-700">
              <strong>Important:</strong> Any items or orders stitched at a discounted cost while applying a coupon code or discount code are <strong>NOT refundable under any circumstance</strong>.
            </p>
          </div>
        </section>

        {/* Variation Notice */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Product Variation Notice
          </h2>
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 space-y-3">
            <p className="text-gray-700">
              Due to the online nature of custom-designed and custom-fit workflow, there may be variations in:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>Colors of fabrics and dyes</li>
              <li>Designs, prints, or embroideries</li>
              <li>Fabric texture and cloth stretch</li>
              <li>Shape or nature of fabric</li>
              <li>Thread and accessory variations</li>
            </ul>
            <p className="text-gray-700 text-sm italic mt-3">
              These variations occur due to fabric dyes, inherent fabric specifications, manual stitching differences, and digital photography/color settings. Customers agree to these natural variations.
            </p>
          </div>
        </section>

        {/* Contact Support */}
        <section className="bg-gray-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Have Questions?
          </h2>
          <p className="text-gray-700 mb-4">
            For any queries regarding refunds, cancellations, or grievances:
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
