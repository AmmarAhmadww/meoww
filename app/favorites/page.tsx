"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaHeart, FaPaw } from "react-icons/fa"; // FaRegHeart could be added if un-favoriting from this page is desired
import React from "react";

// TODO: Ideally, CatItem and catGallery should be imported from a shared data file.
// For now, they are redefined here for simplicity.
interface CatItem {
  id: number;
  category: string;
  title: string;
  description: string;
  emoji: string;
}

const catGallery: CatItem[] = [
  { id: 1, category: "cute", title: "Sleepy Kitten", description: "A tiny kitten taking a cozy nap", emoji: "😴" },
  { id: 2, category: "funny", title: "Surprised Cat", description: "When the treat bag opens unexpectedly", emoji: "😲" },
  { id: 3, category: "cute", title: "Playful Paws", description: "Batting at a dangling toy with excitement", emoji: "🎮" },
  { id: 4, category: "majestic", title: "Regal Pose", description: "A majestic cat surveying its kingdom", emoji: "👑" },
  { id: 5, category: "funny", title: "Box Cat", description: "If it fits, I sits - cat logic at its finest", emoji: "📦" },
  { id: 6, category: "majestic", title: "Window Watcher", description: "Contemplating the mysteries of the outside world", emoji: "🪟" },
  { id: 7, category: "cute", title: "Tiny Beans", description: "Close-up of adorable toe beans", emoji: "🫘" },
  { id: 8, category: "funny", title: "Zoomies", description: "Mid-action shot of a cat's random burst of energy", emoji: "💨" },
  { id: 9, category: "majestic", title: "Sunset Silhouette", description: "A cat's profile against the setting sun", emoji: "🌅" },
  { id: 10, category: "cute", title: "Blanket Burrito", description: "Wrapped up cozy and warm", emoji: "🌯" },
  { id: 11, category: "funny", title: "Loaf Mode", description: "Perfect cat loaf with tucked paws", emoji: "🍞" },
  { id: 12, category: "majestic", title: "Jungle Cat", description: "Prowling through houseplants like a panther", emoji: "🌿" }
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  },
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

export default function FavoritesPage() {
  const [favoriteCats, setFavoriteCats] = useState<CatItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedFavorites = localStorage.getItem("catFavorites");
    if (storedFavorites) {
      const favoriteIds: number[] = JSON.parse(storedFavorites);
      const userFavoriteCats = catGallery.filter(cat => favoriteIds.includes(cat.id));
      setFavoriteCats(userFavoriteCats);
    }
    setIsLoading(false);
  }, []);

  // Optional: Function to remove from favorites directly from this page
  // const removeFromFavorites = (catId: number) => {
  //   const updatedFavorites = favoriteCats.filter(cat => cat.id !== catId);
  //   setFavoriteCats(updatedFavorites);
  //   const favoriteIds = updatedFavorites.map(cat => cat.id);
  //   localStorage.setItem("catFavorites", JSON.stringify(favoriteIds));
  // };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-[#fffaf0] dark:bg-[#0e0e0e] text-[#6b3e26] dark:text-[#ededed]">
        Loading favorites...
      </div>
    );
  }

  return (
    <div className="bg-[#fffaf0] dark:bg-[#0e0e0e] min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-6">
            Your Favorite Cats
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="inline-block ml-4 text-[#ff6b6b]"
            >
              <FaHeart />
            </motion.span>
          </h1>
        </motion.div>

        {favoriteCats.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">😿</div>
            <h3 className="text-2xl font-bold text-[#6b3e26] dark:text-[#ededed] mb-2">No Favorites Yet!</h3>
            <p className="text-[#8d6e63] dark:text-[#cccccc] mb-6">
              You haven't favorited any cats. Visit the <Link href="/gallery" className="text-[#ff6b6b] hover:underline">Gallery</Link> to find some!
            </p>
          </motion.div>
        ) : (
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          >
            {favoriteCats.map((cat) => (
              <motion.div
                key={cat.id}
                variants={fadeIn}
                layout
                whileHover={{
                  y: -10,
                  boxShadow: "0px 15px 30px rgba(0,0,0,0.1)"
                }}
                className="bg-white dark:bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md"
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
                  <p className="text-[#8d6e63] dark:text-[#cccccc] text-sm mb-4">{cat.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xs px-3 py-1 bg-[#fffaf0] dark:bg-[#333] rounded-full text-[#8d6e63] dark:text-[#cccccc]">
                      {cat.category}
                    </span>
                    {/* Optional: Add a button to remove from favorites here
                    <motion.button
                      onClick={() => removeFromFavorites(cat.id)}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      className="text-gray-400 hover:text-[#ff6b6b]"
                    >
                      <FaTimesCircle /> // Example, import FaTimesCircle
                    </motion.button>
                    */}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
}
