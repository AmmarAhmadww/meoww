"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaPaw, FaSearch, FaHeart, FaRegHeart } from "react-icons/fa";
import React from "react";

interface CatItem {
  id: number;
  category: string;
  title: string;
  description: string;
  emoji: string;
}

const catGallery: CatItem[] = [
  {
    id: 1,
    category: "cute",
    title: "Sleepy Kitten",
    description: "A tiny kitten taking a cozy nap",
    emoji: "😴"
  },
  {
    id: 2,
    category: "funny",
    title: "Surprised Cat",
    description: "When the treat bag opens unexpectedly",
    emoji: "😲"
  },
  {
    id: 3,
    category: "cute",
    title: "Playful Paws",
    description: "Batting at a dangling toy with excitement",
    emoji: "🎮"
  },
  {
    id: 4,
    category: "majestic",
    title: "Regal Pose",
    description: "A majestic cat surveying its kingdom",
    emoji: "👑"
  },
  {
    id: 5,
    category: "funny",
    title: "Box Cat",
    description: "If it fits, I sits - cat logic at its finest",
    emoji: "📦"
  },
  {
    id: 6,
    category: "majestic",
    title: "Window Watcher",
    description: "Contemplating the mysteries of the outside world",
    emoji: "🪟"
  },
  {
    id: 7,
    category: "cute",
    title: "Tiny Beans",
    description: "Close-up of adorable toe beans",
    emoji: "🫘"
  },
  {
    id: 8,
    category: "funny",
    title: "Zoomies",
    description: "Mid-action shot of a cat's random burst of energy",
    emoji: "💨"
  },
  {
    id: 9,
    category: "majestic",
    title: "Sunset Silhouette",
    description: "A cat's profile against the setting sun",
    emoji: "🌅"
  },
  {
    id: 10,
    category: "cute",
    title: "Blanket Burrito",
    description: "Wrapped up cozy and warm",
    emoji: "🌯"
  },
  {
    id: 11,
    category: "funny",
    title: "Loaf Mode",
    description: "Perfect cat loaf with tucked paws",
    emoji: "🍞"
  },
  {
    id: 12,
    category: "majestic",
    title: "Jungle Cat",
    description: "Prowling through houseplants like a panther",
    emoji: "🌿"
  }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.5 }
  },
  exit: {
    opacity: 0,
    y: -20,
    transition: { duration: 0.3 }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Gallery() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCat, setSelectedCat] = useState<CatItem | null>(null);
  const [favorites, setFavorites] = useState<number[]>([]);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("catFavorites");
    if (storedFavorites) {
      setFavorites(JSON.parse(storedFavorites));
    }
  }, []);

  const toggleFavorite = (catId: number) => {
    setFavorites(prevFavorites => {
      let updatedFavorites;
      if (prevFavorites.includes(catId)) {
        updatedFavorites = prevFavorites.filter(id => id !== catId);
      } else {
        updatedFavorites = [...prevFavorites, catId];
      }
      localStorage.setItem("catFavorites", JSON.stringify(updatedFavorites));
      return updatedFavorites;
    });
  };
  
  const filteredCats = catGallery.filter(cat => {
    const matchesCategory = filter === "all" || cat.category === filter;
    const matchesSearch = cat.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         cat.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  
  const handleCatClick = (cat: CatItem) => {
    setSelectedCat(cat);
  };
  
  const closeModal = () => {
    setSelectedCat(null);
  };

  return (
    <div className="bg-[#fffaf0] dark:bg-[#0e0e0e] min-h-screen pt-32 pb-20">
      {/* Header */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-6">
            Cat Gallery
            <motion.span
              animate={{ rotate: [0, 10, 0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 5 }}
              className="inline-block ml-4"
            >
              <FaPaw className="inline text-[#ff6b6b]" />
            </motion.span>
          </h1>
          <p className="text-xl text-[#8d6e63] dark:text-[#cccccc] max-w-3xl mx-auto">
            Browse our collection of adorable, funny, and majestic cat moments.
          </p>
        </motion.div>
        
        {/* Filters and Search */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6"
        >
          <div className="flex flex-wrap gap-3 justify-center">
            {["all", "cute", "funny", "majestic"].map((category) => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full font-medium ${
                  filter === category
                    ? "bg-[#ff6b6b] text-white"
                    : "bg-white dark:bg-[#333] text-[#6b3e26] dark:text-[#ededed] border border-[#6b3e26] dark:border-[#ededed]"
                } transition-colors`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </motion.button>
            ))}
          </div>
          
          <div className="relative w-full md:w-auto">
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 rounded-full w-full md:w-64 border border-[#e0d6c8] dark:bg-[#333] dark:text-white focus:outline-none focus:ring-2 focus:ring-[#ff6b6b]"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#8d6e63]" />
          </div>
        </motion.div>
        
        {/* Gallery Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          <AnimatePresence>
            {filteredCats.map((cat) => (
              <motion.div
                key={cat.id}
                variants={fadeIn}
                exit="exit"
                layout
                whileHover={{ 
                  y: -10,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.1)"
                }}
                onClick={() => handleCatClick(cat)}
                className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md cursor-pointer"
              >
                <div 
                  className={`h-48 flex items-center justify-center text-6xl ${
                    cat.category === "cute" ? "bg-[#ffecb3]" : 
                    cat.category === "funny" ? "bg-[#e3f2fd]" : "bg-[#f3e5f5]"
                  }`}
                >
                  {cat.emoji}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-2">{cat.title}</h3>
                  <p className="text-[#8d6e63] dark:text-[#cccccc]">{cat.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-sm px-3 py-1 bg-[#fffaf0] dark:bg-[#333] rounded-full text-[#8d6e63] dark:text-[#cccccc]">
                      {cat.category}
                    </span>
                    <motion.button
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-[#ff6b6b]"
                      onClick={(e) => { e.stopPropagation(); toggleFavorite(cat.id); }}
                    >
                      {favorites.includes(cat.id) ? <FaHeart /> : <FaRegHeart />}
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {/* Empty state */}
        {filteredCats.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">😿</div>
            <h3 className="text-2xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-2">No cats found</h3>
            <p className="text-[#8d6e63] dark:text-[#cccccc]">Try adjusting your filters or search term</p>
          </motion.div>
        )}
      </div>
      
      {/* Cat Detail Modal */}
      <AnimatePresence>
        {selectedCat && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="bg-white dark:bg-[#1a1a1a] rounded-2xl overflow-hidden max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div 
                className={`h-64 flex items-center justify-center text-9xl ${
                  selectedCat.category === "cute" ? "bg-[#ffecb3]" : 
                  selectedCat.category === "funny" ? "bg-[#e3f2fd]" : "bg-[#f3e5f5]"
                }`}
              >
                {selectedCat.emoji}
              </div>
              <div className="p-8">
                <h2 className="text-3xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-4">{selectedCat.title}</h2>
                <p className="text-xl text-[#8d6e63] dark:text-[#cccccc] mb-6">{selectedCat.description}</p>
                <div className="flex justify-between items-center">
                  <span className="px-4 py-2 bg-[#fffaf0] dark:bg-[#333] rounded-full text-[#8d6e63] dark:text-[#cccccc] font-medium">
                    {selectedCat.category.charAt(0).toUpperCase() + selectedCat.category.slice(1)}
                  </span>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="bg-[#ff6b6b] text-white px-6 py-2 rounded-full font-medium hover:bg-[#ff8c8c] transition-colors"
                    onClick={closeModal}
                  >
                    Close
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
