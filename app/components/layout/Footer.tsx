"use client";

import { motion } from "framer-motion";
import { FaPaw, FaHeart, FaTwitter, FaInstagram, FaFacebook } from "react-icons/fa";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#6b3e26] dark:bg-[#1a1a1a] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <motion.div
                whileHover={{ rotate: 10 }}
                className="text-[#ff6b6b]"
              >
                <FaPaw size={24} />
              </motion.div>
              <span className="text-xl font-bold">Meow Meow</span>
            </div>
            <p className="text-sm text-gray-300 mb-4">
              A purr-fect paradise for cat lovers. Discover everything about our feline friends.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/cat-care" className="text-gray-300 hover:text-white transition-colors">
                  Cat Care
                </Link>
              </li>
            </ul>
          </div>

          {/* Cat Resources */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Cat Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Cat Breeds
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Health Tips
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Nutrition Guide
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Adoption
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#ff6b6b] transition-colors"
              >
                <FaTwitter size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#ff6b6b] transition-colors"
              >
                <FaInstagram size={24} />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="text-white hover:text-[#ff6b6b] transition-colors"
              >
                <FaFacebook size={24} />
              </motion.a>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Subscribe to our newsletter for cat tips and updates!
            </p>
            <div className="mt-2 flex">
              <input
                type="email"
                placeholder="Your email"
                className="px-3 py-2 text-black dark:text-white dark:bg-[#333] rounded-l-md focus:outline-none text-sm w-full"
              />
              <button className="bg-[#ff6b6b] px-3 py-2 rounded-r-md hover:bg-[#ff8c8c] transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>
            © 2025 Meow Meow. All rights reserved. Made with{" "}
            <FaHeart className="inline text-[#ff6b6b]" /> for cats everywhere.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
