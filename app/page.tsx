"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { FaPaw, FaCat, FaHeart } from "react-icons/fa";
import gsap from "gsap";
import Link from "next/link";
import React from "react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const catCardVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 100,
      damping: 10
    }
  },
  hover: { 
    scale: 1.05,
    boxShadow: "0px 10px 20px rgba(0,0,0,0.1)",
    transition: { 
      type: "spring",
      stiffness: 400,
      damping: 10
    }
  }
};

export default function Home() {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const pawsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (!pawsRef.current) return;
    
    const paws = pawsRef.current.querySelectorAll('.floating-paw');
    
    paws.forEach((paw: Element) => {
      const randomX = Math.random() * 100 - 50; // -50 to 50
      const randomDelay = Math.random() * 2;
      
      gsap.set(paw, {
        x: randomX,
        y: -100,
        rotation: Math.random() * 360,
        opacity: 0.7,
      });
      
      gsap.to(paw, {
        y: window.innerHeight + 100,
        rotation: `+=${Math.random() * 360}`,
        duration: 10 + Math.random() * 5,
        delay: randomDelay,
        repeat: -1,
        ease: "none",
      });
    });
  }, []);

  return (
    <div className="relative overflow-hidden">
      {/* Floating paws background */}
      <div ref={pawsRef} className="fixed inset-0 pointer-events-none z-0">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="floating-paw absolute text-[#ff6b6b] opacity-20">
            <FaPaw size={i % 2 === 0 ? 24 : 32} />
          </div>
        ))}
      </div>
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#fffaf0] to-[#fff5e6] dark:from-[#0e0e0e] dark:to-[#1a1a1a] px-4 py-20">
        <div className="container mx-auto text-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
            className="mb-8"
          >
            <div className="inline-block relative">
              <motion.div
                animate={{ 
                  rotate: [0, 10, 0, -10, 0],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut"
                }}
                className="text-[#ff6b6b] mb-4 inline-block"
              >
                <FaCat size={80} />
              </motion.div>
              <motion.div 
                className="absolute -top-2 -right-2 text-[#ff9a9e]"
                animate={{
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut"
                }}
              >
                <FaHeart size={24} />
              </motion.div>
            </div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-4"
              animate={{ 
                y: [0, -10, 0],
              }}
              transition={{ 
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut"
              }}
            >
              Meow Meow
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-[#8d6e63] dark:text-[#cccccc] max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Discover the purr-fect world of cats with our comprehensive guide to all things feline.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/gallery" className="inline-block bg-[#ff6b6b] text-white px-8 py-3 rounded-full font-medium shadow-lg hover:bg-[#ff8c8c] transition-colors">
                Explore Gallery
              </Link>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link href="/cat-care" className="inline-block bg-white dark:bg-[#333] text-[#6b3e26] dark:text-[#ededed] border-2 border-[#6b3e26] dark:border-[#ededed] px-8 py-3 rounded-full font-medium shadow-lg hover:bg-[#6b3e26] hover:text-white transition-colors">
                Cat Care Tips
              </Link>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ 
                repeat: Infinity,
                duration: 1.5,
                ease: "easeInOut"
              }}
              className="text-[#6b3e26]"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="32" 
                height="32" 
                fill="currentColor" 
                viewBox="0 0 16 16"
              >
                <path d="M8 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9A.5.5 0 0 1 8 3z"/>
                <path d="M8 15a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5z"/>
                <path d="M8 16a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 1 0v9a.5.5 0 0 1-.5.5z"/>
                <path d="M8 1a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-1 0v-9A.5.5 0 0 1 8 1z"/>
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Features Section */}
      <section ref={ref} className="py-20 bg-white dark:bg-[#121212] px-4">
        <div className="container mx-auto">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            animate={controls}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-4">Why Cats Are Amazing</h2>
            <p className="text-lg text-[#8d6e63] dark:text-[#cccccc] max-w-2xl mx-auto">
              Cats bring joy, companionship, and endless entertainment to our lives. Here&apos;s why they make the perfect pets.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate={controls}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                icon: "🧠",
                title: "Intelligent",
                description: "Cats are highly intelligent animals with excellent problem-solving abilities and memory."
              },
              {
                icon: "🧹",
                title: "Self-Cleaning",
                description: "Cats are meticulous groomers, spending up to 50% of their waking hours cleaning themselves."
              },
              {
                icon: "🏠",
                title: "Low Maintenance",
                description: "Independent by nature, cats require less attention than many other pets."
              },
              {
                icon: "😌",
                title: "Stress Relief",
                description: "A cat&apos;s purr has therapeutic properties that can lower stress and blood pressure."
              },
              {
                icon: "🐭",
                title: "Natural Pest Control",
                description: "Cats are natural hunters that help keep rodent populations in check."
              },
              {
                icon: "💤",
                title: "Sleep Experts",
                description: "Cats sleep 12-16 hours a day, making them excellent napping companions."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                variants={catCardVariants}
                whileHover="hover"
                className="bg-[#fffaf0] dark:bg-[#1a1a1a] p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-2">{feature.title}</h3>
                <p className="text-[#8d6e63] dark:text-[#cccccc]">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Cat Breeds Showcase */}
      <section className="py-20 bg-gradient-to-b from-white to-[#fffaf0] px-4">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-4">Popular Cat Breeds</h2>
            <p className="text-lg text-[#8d6e63] dark:text-[#cccccc] max-w-2xl mx-auto">
              From fluffy Maine Coons to sleek Siamese, explore some of the most beloved cat breeds.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Maine Coon",
                description: "Known for their large size and tufted ears, Maine Coons are gentle giants.",
                color: "#ffecb3"
              },
              {
                name: "Siamese",
                description: "Vocal and social, Siamese cats are known for their striking blue eyes and color points.",
                color: "#e3f2fd"
              },
              {
                name: "Persian",
                description: "With their luxurious coats and sweet faces, Persians are the epitome of elegance.",
                color: "#f3e5f5"
              },
              {
                name: "Bengal",
                description: "Wild-looking but domesticated, Bengals have stunning spotted or marbled coats.",
                color: "#fff8e1"
              },
              {
                name: "Ragdoll",
                description: "Ragdolls are known for going limp when picked up, hence their name.",
                color: "#e8f5e9"
              },
              {
                name: "Scottish Fold",
                description: "Adorable folded ears make this breed instantly recognizable and endearing.",
                color: "#ffebee"
              }
            ].map((breed, index) => (
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
                style={{ backgroundColor: breed.color }}
                className="rounded-xl p-6 shadow-md"
              >
                <div className="h-40 bg-white dark:bg-[#333] rounded-lg mb-4 flex items-center justify-center">
                  <div className="text-6xl">😺</div>
                </div>
                <h3 className="text-xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-2">{breed.name}</h3>
                <p className="text-[#8d6e63] dark:text-[#cccccc]">{breed.description}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="mt-4 text-[#ff6b6b] font-medium hover:underline"
                >
                  Learn more
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter Section */}
      <section className="py-20 bg-[#6b3e26] dark:bg-[#1a1a1a] text-white px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#ff6b6b] rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden"
          >
            <motion.div
              className="absolute -top-10 -right-10 text-[#ff8c8c]"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{ 
                rotate: { repeat: Infinity, duration: 20, ease: "linear" },
                scale: { repeat: Infinity, duration: 3, ease: "easeInOut" }
              }}
            >
              <FaPaw size={100} />
            </motion.div>
            
            <div className="relative z-10">
              <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold mb-4"
              >
                Join Our Cat-Loving Community
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg mb-8 max-w-2xl"
              >
                Subscribe to our newsletter for weekly cat facts, care tips, and adorable photos delivered straight to your inbox.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-grow px-4 py-3 rounded-lg text-black dark:text-white dark:bg-[#333] focus:outline-none focus:ring-2 focus:ring-[#6b3e26]"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#6b3e26] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#5d3520] transition-colors"
                >
                  Subscribe Now
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Call to Action */}
      <section className="py-20 bg-white dark:bg-[#121212] px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-6">Ready to Dive Into the World of Cats?</h2>
            <p className="text-lg text-[#8d6e63] dark:text-[#cccccc] mb-8">
              Explore our comprehensive resources, join our community, and enhance your bond with your feline friend.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block"
            >
              <Link
                href="/about"
                className="bg-[#ff6b6b] text-white px-8 py-4 rounded-full font-medium text-lg shadow-lg hover:bg-[#ff8c8c] transition-colors inline-block"
              >
                Discover More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
