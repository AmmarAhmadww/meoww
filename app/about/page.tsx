"use client";

import { motion } from "framer-motion";
import { FaPaw, FaHeart } from "react-icons/fa";
import React from "react";

export default function About() {
  return (
    <div className="bg-[#fffaf0] dark:bg-[#0e0e0e] min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-6">About Meow Meow</h1>
            <p className="text-xl text-[#8d6e63] dark:text-[#cccccc] max-w-3xl mx-auto">
              Our mission is to celebrate cats and provide valuable resources for cat lovers around the world.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white dark:bg-[#121212] px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="w-full h-96 bg-[#ff6b6b] rounded-xl overflow-hidden relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-9xl">😺</div>
                </div>
                <motion.div
                  className="absolute -bottom-6 -right-6 text-[#ff8c8c]"
                  animate={{ 
                    rotate: 360,
                  }}
                  transition={{ 
                    repeat: Infinity,
                    duration: 20,
                    ease: "linear"
                  }}
                >
                  <FaPaw size={80} />
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-6">Our Story</h2>
              <div className="space-y-4 text-[#8d6e63] dark:text-[#cccccc]">
                <p>
                  Meow Meow was founded in 2023 by a group of passionate cat enthusiasts who wanted to create a comprehensive resource for cat lovers everywhere.
                </p>
                <p>
                  What started as a small blog has grown into a thriving community where cat parents can find expert advice, share experiences, and celebrate the joy that cats bring to our lives.
                </p>
                <p>
                  Our team consists of veterinarians, animal behaviorists, and lifelong cat owners who are dedicated to providing accurate, helpful information about all aspects of cat care and companionship.
                </p>
              </div>
              
              <motion.div
                className="mt-8 inline-block"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-[#ff6b6b] text-white px-6 py-3 rounded-lg font-medium shadow-lg hover:bg-[#ff8c8c] transition-colors inline-flex items-center gap-2">
                  <FaHeart /> Join Our Community
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Our Values */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fffaf0] dark:from-[#121212] dark:to-[#0e0e0e] px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-4">Our Values</h2>
            <p className="text-lg text-[#8d6e63] dark:text-[#cccccc] max-w-2xl mx-auto">
              At Meow Meow, we believe in these core principles that guide everything we do.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: "💖",
                title: "Compassion",
                description: "We believe in treating all cats with kindness, respect, and understanding."
              },
              {
                icon: "🔍",
                title: "Education",
                description: "We're committed to providing accurate, science-based information about cat care."
              },
              {
                icon: "🤝",
                title: "Community",
                description: "We foster a supportive environment where cat lovers can connect and share."
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.1)"
                }}
                className="bg-white dark:bg-[#1a1a1a] p-8 rounded-xl shadow-md text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-2">{value.title}</h3>
                <p className="text-[#8d6e63] dark:text-[#cccccc]">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Team Section */}
      <section className="py-20 bg-[#fffaf0] dark:bg-[#0e0e0e] px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-4">Meet Our Team</h2>
            <p className="text-lg text-[#8d6e63] dark:text-[#cccccc] max-w-2xl mx-auto">
              The passionate cat lovers behind Meow Meow.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Veterinarian",
                bio: "Specializing in feline medicine for over 15 years.",
                color: "#ffecb3"
              },
              {
                name: "Michael Chen",
                role: "Cat Behaviorist",
                bio: "Helping cats and their humans live harmoniously together.",
                color: "#e3f2fd"
              },
              {
                name: "Emma Rodriguez",
                role: "Nutrition Expert",
                bio: "Passionate about optimal feline diets for health and longevity.",
                color: "#f3e5f5"
              },
              {
                name: "James Wilson",
                role: "Community Manager",
                bio: "Building connections among cat lovers worldwide.",
                color: "#e8f5e9"
              }
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0px 10px 25px rgba(0,0,0,0.1)"
                }}
                style={{ backgroundColor: member.color }}
                className="rounded-xl p-6 shadow-md text-center"
              >
                <div className="w-24 h-24 bg-white dark:bg-[#333] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <div className="text-3xl">{member.name.charAt(0)}</div>
                </div>
                <h3 className="text-xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-1">{member.name}</h3>
                <p className="text-[#ff6b6b] font-medium mb-2">{member.role}</p>
                <p className="text-[#8d6e63] dark:text-[#cccccc]">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section className="py-20 bg-white dark:bg-[#121212] px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-4">Get In Touch</h2>
            <p className="text-lg text-[#8d6e63] dark:text-[#cccccc] max-w-2xl mx-auto">
              Have questions or suggestions? We&apos;d love to hear from you!
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-[#fffaf0] dark:bg-[#1a1a1a] p-8 rounded-xl shadow-lg"
          >
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-[#6b3e26] dark:text-[#ededed] font-medium mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-[#e0d6c8] dark:bg-[#333] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-[#6b3e26] dark:text-[#ededed] font-medium mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-[#e0d6c8] dark:bg-[#333] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                    placeholder="Your email"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="subject" className="block text-[#6b3e26] dark:text-[#ededed] font-medium mb-2">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-[#e0d6c8] dark:bg-[#333] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                  placeholder="Subject"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[#6b3e26] dark:text-[#ededed] font-medium mb-2">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#e0d6c8] dark:bg-[#333] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
                  placeholder="Your message"
                ></textarea>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#ff6b6b] text-white px-8 py-3 rounded-lg font-medium hover:bg-[#ff8c8c] transition-colors"
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
