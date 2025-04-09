"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { FaPaw, FaHeart, FaQuestion } from "react-icons/fa";
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

const catCareTips = [
  {
    id: 1,
    category: "nutrition",
    title: "Balanced Diet",
    description: "Cats need a balanced diet rich in protein. Always provide fresh water and high-quality cat food appropriate for their age and health needs.",
    icon: "🍗"
  },
  {
    id: 2,
    category: "health",
    title: "Regular Vet Visits",
    description: "Schedule annual check-ups with your veterinarian to catch health issues early. Keep vaccinations up to date.",
    icon: "🩺"
  },
  {
    id: 3,
    category: "grooming",
    title: "Brushing",
    description: "Regular brushing reduces shedding and hairballs while keeping your cat's coat healthy and shiny.",
    icon: "🧹"
  },
  {
    id: 4,
    category: "behavior",
    title: "Scratching Posts",
    description: "Provide appropriate scratching surfaces to protect your furniture and satisfy your cat's natural instincts.",
    icon: "🪵"
  },
  {
    id: 5,
    category: "nutrition",
    title: "Portion Control",
    description: "Avoid overfeeding to prevent obesity, which can lead to various health problems in cats.",
    icon: "⚖️"
  },
  {
    id: 6,
    category: "health",
    title: "Dental Care",
    description: "Dental health is important for cats. Consider dental treats, toys, or brushing their teeth regularly.",
    icon: "🦷"
  },
  {
    id: 7,
    category: "grooming",
    title: "Nail Trimming",
    description: "Trim your cat's nails every few weeks to prevent them from becoming too long or sharp.",
    icon: "✂️"
  },
  {
    id: 8,
    category: "behavior",
    title: "Playtime",
    description: "Regular play sessions help keep your cat physically active and mentally stimulated.",
    icon: "🧶"
  },
  {
    id: 9,
    category: "nutrition",
    title: "Treats in Moderation",
    description: "Treats should make up no more than 10% of your cat's daily caloric intake.",
    icon: "🍪"
  },
  {
    id: 10,
    category: "health",
    title: "Parasite Prevention",
    description: "Use vet-recommended flea, tick, and worm prevention products regularly.",
    icon: "🦟"
  },
  {
    id: 11,
    category: "grooming",
    title: "Bathing",
    description: "Most cats groom themselves, but occasional baths may be necessary for certain situations.",
    icon: "🛁"
  },
  {
    id: 12,
    category: "behavior",
    title: "Litter Box Maintenance",
    description: "Keep the litter box clean and in a quiet, accessible location. Scoop daily and change litter regularly.",
    icon: "🧹"
  }
];

const faqs = [
  {
    question: "How often should I feed my cat?",
    answer: "Adult cats typically do well with two meals per day, while kittens may need more frequent feeding. Always follow the feeding guidelines on your cat food and consult with your veterinarian for personalized advice based on your cat's age, weight, and health status."
  },
  {
    question: "How can I tell if my cat is sick?",
    answer: "Signs of illness in cats include changes in appetite, lethargy, hiding, changes in litter box habits, vomiting, diarrhea, excessive thirst, or changes in grooming habits. If you notice any of these signs, consult your veterinarian promptly."
  },
  {
    question: "Should I let my cat outdoors?",
    answer: "Indoor cats generally live longer, healthier lives as they're protected from traffic, predators, diseases, and other hazards. If your cat enjoys the outdoors, consider supervised time in a secure enclosure or on a harness and leash."
  },
  {
    question: "How do I introduce a new cat to my home?",
    answer: "Start by setting up a separate space for the new cat with all necessities. Gradually allow the cats to become familiar with each other's scents before visual contact, then supervised interactions. This process may take days to weeks, so be patient."
  },
  {
    question: "Why does my cat knead with its paws?",
    answer: "Kneading is a behavior that begins in kittenhood to stimulate milk flow while nursing. Adult cats often knead when they're content and relaxed, essentially showing that they feel comfortable and safe."
  }
];

export default function CatCare() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  
  const filteredTips = activeCategory === "all" 
    ? catCareTips 
    : catCareTips.filter(tip => tip.category === activeCategory);
  
  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };
  
  const categoryColors: Record<string, string> = {
    nutrition: "#ffecb3",
    health: "#e3f2fd",
    grooming: "#f3e5f5",
    behavior: "#e8f5e9"
  };

  return (
    <div className="bg-[#fffaf0] min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="relative px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-[#6b3e26] mb-6">
              Cat Care Guide
            </h1>
            <p className="text-xl text-[#8d6e63] max-w-3xl mx-auto mb-8">
              Everything you need to know to keep your feline friend happy and healthy.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory("all")}
                className={`px-6 py-3 rounded-full font-medium ${
                  activeCategory === "all"
                    ? "bg-[#ff6b6b] text-white"
                    : "bg-white text-[#6b3e26] border border-[#6b3e26]"
                } transition-colors`}
              >
                All Tips
              </motion.button>
              {["nutrition", "health", "grooming", "behavior"].map((category) => (
                <motion.button
                  key={category}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setActiveCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium ${
                    activeCategory === category
                      ? "bg-[#ff6b6b] text-white"
                      : "bg-white text-[#6b3e26] border border-[#6b3e26]"
                  } transition-colors`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </motion.button>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      {/* Care Tips Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredTips.map((tip) => (
              <motion.div
                key={tip.id}
                variants={fadeIn}
                whileHover={{ 
                  y: -10,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.1)"
                }}
                style={{ backgroundColor: categoryColors[tip.category] }}
                className="rounded-xl p-6 shadow-md"
              >
                <div className="flex items-center mb-4">
                  <div className="text-4xl mr-4">{tip.icon}</div>
                  <h3 className="text-xl font-bold text-[#6b3e26]">{tip.title}</h3>
                </div>
                <p className="text-[#8d6e63] mb-4">{tip.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-sm px-3 py-1 bg-white/50 rounded-full text-[#8d6e63]">
                    {tip.category.charAt(0).toUpperCase() + tip.category.slice(1)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-[#ff6b6b]"
                  >
                    <FaHeart />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="px-4 mb-20 bg-white py-20">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-[#6b3e26] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-[#8d6e63] max-w-2xl mx-auto">
              Get answers to common questions about cat care.
            </p>
          </motion.div>
          
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="border border-[#e0d6c8] rounded-lg overflow-hidden"
              >
                <motion.button
                  whileHover={{ backgroundColor: "#fffaf0" }}
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 text-left flex justify-between items-center"
                >
                  <h3 className="text-lg font-medium text-[#6b3e26] flex items-center">
                    <FaQuestion className="text-[#ff6b6b] mr-3" />
                    {faq.question}
                  </h3>
                  <span className="text-[#8d6e63]">
                    {activeFaq === index ? "−" : "+"}
                  </span>
                </motion.button>
                
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ 
                    height: activeFaq === index ? "auto" : 0,
                    opacity: activeFaq === index ? 1 : 0
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="p-6 pt-0 text-[#8d6e63]">
                    {faq.answer}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
      
      {/* Emergency Care Section */}
      <section className="px-4 mb-20">
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
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 20, 
                ease: "linear" 
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
                className="text-3xl md:text-4xl font-bold mb-4 text-white"
              >
                Emergency Care
              </motion.h2>
              
              <motion.p
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="text-lg mb-8 text-white/90"
              >
                Know the signs that require immediate veterinary attention:
              </motion.p>
              
              <motion.ul
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                viewport={{ once: true }}
                className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-white/90"
              >
                <li className="flex items-center">
                  <span className="mr-2">•</span> Difficulty breathing
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Excessive vomiting or diarrhea
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Seizures or collapse
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Suspected poisoning
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Trauma or injury
                </li>
                <li className="flex items-center">
                  <span className="mr-2">•</span> Inability to urinate
                </li>
              </motion.ul>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block"
              >
                <Link
                  href="#"
                  className="bg-white text-[#ff6b6b] px-8 py-3 rounded-lg font-medium hover:bg-[#f5f5f5] transition-colors inline-block"
                >
                  Find Emergency Vets
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
      
      {/* Resources Section */}
      <section className="px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-[#6b3e26] mb-6">Additional Resources</h2>
            <p className="text-lg text-[#8d6e63] mb-8">
              Explore these helpful resources to learn more about cat care and behavior.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">📚</div>
                <h3 className="text-xl font-bold text-[#6b3e26] mb-2">Books</h3>
                <p className="text-[#8d6e63] mb-4">Recommended reading for cat owners.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#ff6b6b] font-medium hover:underline"
                >
                  View List
                </motion.button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">🎬</div>
                <h3 className="text-xl font-bold text-[#6b3e26] mb-2">Videos</h3>
                <p className="text-[#8d6e63] mb-4">Helpful tutorials and demonstrations.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#ff6b6b] font-medium hover:underline"
                >
                  Watch Now
                </motion.button>
              </motion.div>
              
              <motion.div
                whileHover={{ y: -10, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                className="bg-white p-6 rounded-xl shadow-md"
              >
                <div className="text-4xl mb-4">👨‍⚕️</div>
                <h3 className="text-xl font-bold text-[#6b3e26] mb-2">Experts</h3>
                <p className="text-[#8d6e63] mb-4">Connect with veterinarians and behaviorists.</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-[#ff6b6b] font-medium hover:underline"
                >
                  Find Help
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
