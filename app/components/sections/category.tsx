"use client";
import { ASSETS } from "@/app/constants/assets";
import { AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const SectionCategory = () => {
  const categories = [
    { id: 1, name: "Ready to Wear", img: ASSETS.cat_ready },
    { id: 2, name: "Leather Goods", img: ASSETS.cat_bags },
    { id: 3, name: "Footwear", img: ASSETS.cat_shoes },
    { id: 4, name: "Haute Couture", img: ASSETS.atelier2 },
  ];
  const [activeCat, setActiveCat] = useState(categories[0]);

  return (
    <div className="py-20 bg-[#F5F5F0] text-[#050505] px-6 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 min-h-[600px]">
        <div className="flex flex-col justify-center gap-6">
          <span className="uppercase tracking-[0.5em] text-sm text-gray-500 mb-4">
            Shop By Category
          </span>
          {categories.map((cat) => (
            <div
              key={cat.id}
              onMouseEnter={() => setActiveCat(cat)}
              className="group cursor-pointer interactive"
            >
              <h2
                className={`text-5xl md:text-7xl font-serif transition-colors duration-300 ${
                  activeCat.id === cat.id
                    ? "text-[#050505] italic translate-x-4"
                    : "text-gray-300 hover:text-gray-400"
                }`}
              >
                {cat.name}
              </h2>
            </div>
          ))}
          <Link href="/collections">
            <button className="flex items-center gap-2 mt-8 uppercase text-xs font-bold tracking-widest hover:gap-4 transition-all interactive w-max">
              View All Categories <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
        <div className="relative h-full min-h-[400px] overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={activeCat.id}
              src={activeCat.img}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 w-full h-full object-cover"
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default SectionCategory;
