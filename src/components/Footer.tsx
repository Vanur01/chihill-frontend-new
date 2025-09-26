import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  Mail,
  Phone,
} from "lucide-react";

export default function NewsletterFooter() {
  return (
    <footer className="bg-secondary w-full">
      {/* Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm text-gray-700">
          {/* Brand */}
          <div className="flex flex-col items-start justify-start">
            <Image
              src={"/Logo.svg"}
              alt="Chihili Logo"
              width={120}
              height={40}
              className="h-10 mb-4"
            />
            <p className="text-gray-600 text-sm ml-3">
              Join the Odia Fashion Heritage
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-2">Product</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Gown
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Fabric
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Co-Ord Sets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Sarees
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Kurti Sets
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Skirt
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  About us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Talk to Designers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Order Tracking */}
          <div>
            <h4 className="font-semibold mb-2">Order Tracking</h4>
            <ul className="space-y-1">
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Order History
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Track Order
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Shipping Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Return Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Refund Policies
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gray-900 transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Connect With Us */}
          <div>
            <h4 className="font-semibold mb-2">Connect With Us</h4>

            {/* Social Media Links */}
            <div className="flex space-x-3 mb-4">
              <a
                href="https://facebook.com/chihili"
                className="text-gray-600 hover:text-blue-600 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com/chihili"
                className="text-gray-600 hover:text-pink-600 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://twitter.com/chihili"
                className="text-gray-600 hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://youtube.com/chihili"
                className="text-gray-600 hover:text-red-600 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </a>
            </div>

            {/* Contact Info */}
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-gray-500" />
                <a
                  href="mailto:hello@chihili.com"
                  className="hover:text-gray-900 transition-colors"
                >
                  hello@chihili.com
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-gray-500" />
                <a
                  href="tel:+919876543210"
                  className="hover:text-gray-900 transition-colors"
                >
                  +91 98765 43210
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2024 Chihili. All rights reserved.</p>
          <Link href="/team-conditions" className="hover:underline">
            Team & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
