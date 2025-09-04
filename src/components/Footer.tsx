import Image from "next/image";
import React from "react";

export default function NewsletterFooter() {
  return (
    <footer className="bg-secondary w-full">
      {/* Newsletter */}
      {/* <div className="bg-white w-full py-6 md:py-12 px-4 sm:px-8">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-1">Join our newsletter</h2>
            <p className="text-gray-600 text-sm">
              We'll send you a nice letter once per week. No spam.
            </p>
          </div>
          <div className="flex w-full sm:w-auto space-x-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow border border-gray-300 rounded-l px-4 py-2 focus:outline-none"
            />
            <button className="bg-primary1 text-white px-4 py-2 rounded-r hover:bg-primary">
              Subscribe
            </button>
          </div>
        </div>
      </div> */}

      {/* Footer */}
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 text-sm text-gray-700">
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
                <a href="#">Gown</a>
              </li>
              <li>
                <a href="#">Fabric</a>
              </li>
              <li>
                <a href="#">Co-Ord Sets</a>
              </li>
              <li>
                <a href="#">Sarees</a>
              </li>
              <li>
                <a href="#">Kurti Sets</a>
              </li>
              <li>
                <a href="#">Skirt</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Talk to Designers</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          {/* Order Tracking */}
          <div>
            <h4 className="font-semibold mb-2">Order Tracking</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Order History</a>
              </li>
              <li>
                <a href="#">Track Order</a>
              </li>
              <li>
                <a href="#">Shipping Policies</a>
              </li>
              <li>
                <a href="#">Return Policies</a>
              </li>
              <li>
                <a href="#">Refund Policies</a>
              </li>
              <li>
                <a href="#">Support</a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold mb-2">Social</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Twitter</a>
              </li>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-2">Legal</h4>
            <ul className="space-y-1">
              <li>
                <a href="#">Terms</a>
              </li>
              <li>
                <a href="#">Privacy</a>
              </li>
              <li>
                <a href="#">Cookies</a>
              </li>
              <li>
                <a href="#">Licenses</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-8 pt-4 flex flex-col sm:flex-row justify-between items-center text-gray-500 text-xs">
          <p>© 2024 Chihili. All rights reserved.</p>
          <div className="flex space-x-4 mt-2 sm:mt-0 text-lg">
            <a href="#">
              <i className="fas fa-x-twitter" />
            </a>
            <a href="#">
              <i className="fab fa-facebook" />
            </a>
            <a href="#">
              <i className="fab fa-instagram" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
