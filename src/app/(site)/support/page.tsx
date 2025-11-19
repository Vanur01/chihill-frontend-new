"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function Support() {
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(0);

  const faqs = [
    {
      question: "How do I place an order?",
      answer: "To place an order, browse our collection, select your preferred item, customize it as per your needs, and proceed to checkout. You can create an account or continue as a guest. Fill in your measurements and delivery address, choose your payment method, and complete the purchase."
    },
    {
      question: "What are the available payment methods?",
      answer: "We accept Credit/Debit Cards, Digital Wallets (Google Pay, Apple Pay, PhonePe), and Net Banking. Please note that Cash on Delivery (COD) is NOT available as a standard policy. All payments must be made online during checkout."
    },
    {
      question: "How long does delivery take?",
      answer: "Delivery typically takes 3-7 business days depending on your location and the complexity of customization. Our working hours are 10:00 AM to 7:00 PM on weekdays and Saturdays (India timings). You'll receive regular updates via email and SMS."
    },
    {
      question: "Can I modify my order after placing it?",
      answer: "Order modifications depend on the status of your order. If your order hasn't been placed with the fulfillment center yet, you may be able to modify it. However, once fabric has been cut or stitching has begun, modifications are not possible. Contact our support team immediately for any changes."
    },
    {
      question: "What is your cancellation policy?",
      answer: "Orders can be cancelled before they reach the fulfillment center or before any work begins (cutting, stitching, etc.). Once work has started, cancellations cannot be processed. Refunds for permitted cancellations will exclude fabric cost, transport, logistics, and incidental charges."
    },
    {
      question: "How do I initiate a return?",
      answer: "To initiate a return, log into your account, go to 'My Orders', select the item you wish to return, and click 'Return Item'. Select the reason for return and you'll receive a prepaid return shipping label via email. Pack the item securely and hand it to any courier partner."
    },
    {
      question: "What is your refund policy?",
      answer: "Since each garment is custom-made to your specifications, refunds are not permitted on orders once placed. However, if CHIHILI is responsible for any issues, refunds will be issued as Gift Vouchers (maximum ₹2,500 or actual cost, whichever is lower). Processing takes 7-10 working days."
    },
    {
      question: "Can I get alterations done at your centres?",
      answer: "Yes! We provide free size/measurement alterations at our centres if the dress has sufficient cloth available in the stitched seams. Alterations are for size changes only, not style changes. Outstation customers may need to bear shipping costs for alterations beyond 7 days."
    },
    {
      question: "What if I receive a damaged or defective item?",
      answer: "Please report any damage or defects within 24 hours of delivery with photos. Our quality team will assess the issue and provide options including full refund, replacement, or store credit for future purchase."
    },
    {
      question: "How accurate are the product images?",
      answer: "We strive to make our product images as close to reality as possible. However, due to digital photography, lighting, color settings, and monitor differences, there may be slight color and texture variations. Fabric quality and dye variations are also natural and acknowledged in our terms."
    },
    {
      question: "Do you provide international shipping?",
      answer: "International orders are accepted. However, customers are responsible for any import duties, taxes, or customs charges. Please be aware of your country's regulations before placing an international order."
    },
    {
      question: "How can I track my order?",
      answer: "You can track your order in real-time by logging into your account and checking your order status. You'll also receive email and SMS updates at each stage including order confirmation, processing, shipment, and delivery."
    },
    {
      question: "What if my measurements are incorrect?",
      answer: "It's your responsibility to ensure accurate measurements when placing an order. Please measure carefully and double-check before submitting. If the garment doesn't fit due to incorrect measurements, our liability is limited to ₹3,000 or stitching charges, whichever is higher."
    },
    {
      question: "Can I use a discount code with my order?",
      answer: "Yes, we offer various discount and coupon codes. However, items purchased with discounted pricing are non-refundable under any circumstance. Please review the terms before applying any discount codes."
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our customer support team via email at grievance@chihili.in or call us at +91 9124725574. Our support hours are aligned with our working hours: 10:00 AM to 7:00 PM, Monday to Saturday (India timings)."
    }
  ];

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Support",
      description: "For detailed inquiries and documentation",
      contact: "grievance@chihili.in",
      hours: "24/7 Response"
    },
    {
      icon: "📞",
      title: "Phone Support",
      description: "Speak with our customer care team",
      contact: "+91 9124725574",
      hours: "10:00 AM - 7:00 PM IST"
    },
    {
      icon: "⏰",
      title: "Working Hours",
      description: "Monday to Saturday",
      contact: "Closed on Sundays",
      hours: "10:00 AM - 7:00 PM IST"
    },
    {
      icon: "🏪",
      title: "Physical Centre",
      description: "Visit our showroom in Bhubaneswar",
      contact: "Bhubaneswar, Odisha, India",
      hours: "10:00 AM - 7:00 PM IST"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-secondary py-12 px-4 sm:px-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl sm:text-4xl font-light tracking-[0.3rem] sm:tracking-[0.4rem] text-gray-800 font-crimson-pro mb-2">
            CUSTOMER SUPPORT
          </h1>
          <p className="text-gray-600">We're here to help you with any questions or concerns</p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto py-12 px-4 sm:px-8">
        {/* Contact Methods */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-crimson-pro">
            Get in Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {contactMethods.map((method, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-3">{method.icon}</div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{method.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{method.description}</p>
                <p className="font-semibold text-gray-800 mb-1">{method.contact}</p>
                <p className="text-sm text-gray-500">{method.hours}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Quick Links */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-crimson-pro">
            Quick Links
          </h2>
          <div className="grid md:grid-cols-3 gap-4">
            <Link href="/shipping-policies" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-2xl mb-2">🚚</div>
              <h3 className="font-semibold text-gray-800 mb-1">Shipping Policies</h3>
              <p className="text-sm text-gray-600">Learn about delivery options and charges</p>
            </Link>
            <Link href="/return-policies" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-2xl mb-2">✨</div>
              <h3 className="font-semibold text-gray-800 mb-1">Alterations</h3>
              <p className="text-sm text-gray-600">Free and paid alteration options</p>
            </Link>
            <Link href="/refund-policies" className="p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
              <div className="text-2xl mb-2">💰</div>
              <h3 className="font-semibold text-gray-800 mb-1">Refunds & Cancellation</h3>
              <p className="text-sm text-gray-600">Understand our refund and cancellation terms</p>
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 font-crimson-pro">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors text-left"
                >
                  <h3 className="font-semibold text-gray-800">{faq.question}</h3>
                  <span className="text-gray-600 text-xl">{expandedFAQ === index ? "−" : "+"}</span>
                </button>
                {expandedFAQ === index && (
                  <div className="bg-gray-50 p-4 border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Feedback */}
        <section className="bg-gray-50 rounded-lg p-8 mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            We'd Love Your Feedback
          </h2>
          
          <p className="text-gray-700 mb-4">
            Your experience matters to us. If you have suggestions for improvement or feedback about our products and services, please share it with us.
          </p>
          <div className="space-y-2 text-gray-700">
            <p><strong>Email:</strong> feedback@chihili.in</p>
            <p><strong>Phone:</strong> +91 9124725574</p>
            <p className="text-sm text-gray-600 mt-4">
              All feedback is reviewed by our management team and helps us serve you better.
            </p>
          </div>
        </section>

        {/* Important Information */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 font-crimson-pro">
            Important Information
          </h2>
          <div className="space-y-3">
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">⚠️ Measurement Accuracy</h3>
              <p className="text-gray-700 text-sm">
                Accurate measurements are crucial for custom-fit garments. Please measure carefully and double-check before submitting your order. CHIHILI is not responsible for fit issues due to incorrect measurements.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">⏰ Working Hours</h3>
              <p className="text-gray-700 text-sm">
                Our customer support and delivery services operate from 10:00 AM to 7:00 PM IST, Monday to Saturday. We're closed on Sundays. Please allow extra time for responses outside these hours.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold text-gray-800 mb-2">🔒 Data Security</h3>
              <p className="text-gray-700 text-sm">
                Never share sensitive information like bank details via phone or email unsolicited. Our support team will only request your Order ID and email address. Be cautious of potential fraud.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}