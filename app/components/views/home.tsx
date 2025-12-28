import { motion } from "framer-motion";
import React from "react";
import SectionPress from "../sections/press";
import { ASSETS } from "@/app/constants/assets";
import { ArrowRight } from "lucide-react";
import SectionRunway from "../sections/runway";
import Transition from "../transition";
import SectionCategory from "../sections/category";
import { PRODUCTS_DATA } from "../constants/products";
import Link from "next/link";
import usePage from "@/app/states/page";

export default function ViewHome() {
  const { addToCart, setCartOpen } = usePage();
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen w-full overflow-hidden bg-[#050505]">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2 }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/20 z-10 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 z-10" />
          <img
            src={ASSETS.heroImg}
            className="w-full h-full object-cover origin-center"
            alt="Hero Model"
          />
        </motion.div>

        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-[#F5F5F0] pointer-events-none">
          <div className="text-center mix-blend-difference">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100px" }}
              transition={{ delay: 0.5, duration: 1 }}
              className="h-px bg-[#Cfb53b] mx-auto mb-6"
            />
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="uppercase tracking-[0.5em] text-xs md:text-sm mb-2 font-light"
            >
              Spring / Summer {"'"}25
            </motion.p>

            <div className="relative">
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.2,
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[13vw] leading-[15rem] font-serif italic tracking-tighter pr-4"
                >
                  Ethereal
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{
                    delay: 0.4,
                    duration: 1.2,
                    ease: [0.76, 0, 0.24, 1],
                  }}
                  className="text-[13vw] leading-[20rem] font-serif tracking-tighter text-right"
                >
                  Elegance
                </motion.h1>
              </div>
            </div>
            <Link href="/collections">
              <motion.button
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1 }}
                className="mt-12 px-8 py-3 border border-white/30 rounded-full text-xs uppercase tracking-widest hover:bg-[#F5F5F0] hover:text-black transition-all duration-500 pointer-events-auto interactive"
              >
                Shop the Collection
              </motion.button>
            </Link>
          </div>
        </div>
      </div>

      {/* Marquee */}
      <div className="bg-[#Cfb53b] text-[#050505] py-4 overflow-hidden whitespace-nowrap border-y border-[#050505]">
        <motion.div
          className="flex gap-12 items-center"
          animate={{ x: "-50%" }}
          transition={{ ease: "linear", duration: 20, repeat: Infinity }}
        >
          {[...Array(10)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="text-lg uppercase font-bold tracking-widest">
                New Arrivals
              </span>
              <span className="text-2xl font-serif italic">Shop The Look</span>
              <div className="w-2 h-2 bg-black rounded-full" />
            </React.Fragment>
          ))}
        </motion.div>
      </div>

      {/* The Curated Edit */}
      <section className="py-32 px-6 md:px-12 bg-[#050505] text-[#F5F5F0] overflow-hidden">
        <Transition className="flex flex-col md:flex-row justify-between items-end mb-20">
          <h2 className="text-5xl md:text-7xl font-serif">
            The <span className="italic text-[#666]">Curated</span>
            <br />
            Edit
          </h2>
          <Link href="/collections">
            <button className="border-b border-white pb-1 uppercase text-xs tracking-widest hover:text-[#Cfb53b] hover:border-[#Cfb53b] transition-colors interactive">
              View All Collections
            </button>
          </Link>
        </Transition>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4">
          {PRODUCTS_DATA.slice(0, 3).map((item, i) => (
            <Transition key={i} className="group cursor-pointer interactive">
              <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500" />
                <div className="absolute bottom-4 left-4 translate-y-full group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <button
                    onClick={() => {
                      addToCart(item);
                      setCartOpen(true);
                    }}
                    className="bg-[#F5F5F0] text-black px-6 py-2 uppercase text-xs tracking-widest hover:bg-[#Cfb53b]"
                  >
                    Quick Add
                  </button>
                </div>
              </div>
              <div className="flex justify-between items-center border-t border-white/10 pt-4">
                <h3 className="text-xl font-serif italic group-hover:text-[#Cfb53b] transition-colors">
                  {item.title}
                </h3>
                <span className="text-sm font-mono text-gray-400">
                  ${item.price}
                </span>
              </div>
            </Transition>
          ))}
        </div>
      </section>

      <SectionRunway />

      {/* Parallax Editorial */}
      <section className="py-20 bg-[#050505] px-6">
        <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
          <div
            className="absolute inset-0 w-full h-full bg-fixed bg-cover bg-center brightness-75"
            style={{ backgroundImage: `url(${ASSETS.detail})` }}
          ></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-[#F5F5F0]">
            <Transition>
              <h2 className="text-[10vw] font-serif italic leading-none mix-blend-overlay">
                Cindrelia
              </h2>
            </Transition>
            <Transition className="mt-8">
              <Link href="/atelier">
                <button className="border border-[#F5F5F0] text-[#F5F5F0] px-12 py-4 uppercase tracking-widest hover:bg-[#F5F5F0] hover:text-black transition-all duration-500 interactive">
                  Explore Campaign
                </button>
              </Link>
            </Transition>
          </div>
        </div>
      </section>

      {/* NEW: Category Hover Section */}
      <SectionCategory />

      {/* Atelier Teaser */}
      <section className="py-20 px-6 md:px-12 bg-[#F5F5F0] text-[#050505]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-sm uppercase tracking-[0.3em] mb-6 text-gray-500">
              The Atelier
            </h3>
            <h2 className="text-5xl md:text-6xl font-serif mb-8">
              Crafted for the <br />
              <span className="italic text-[#Cfb53b]">Extraordinary</span>
            </h2>
            <p className="text-gray-600 leading-relaxed mb-10 max-w-md">
              Every stitch tells a story. Our atelier combines traditional
              Indonesian craftsmanship with avant-garde aesthetics.
            </p>
            <Link href="/atelier">
              <button className="flex items-center gap-4 uppercase text-sm tracking-widest font-bold hover:gap-6 transition-all interactive group">
                Read Our Story{" "}
                <ArrowRight className="w-4 h-4 group-hover:text-[#Cfb53b]" />
              </button>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <motion.img
              whileHover={{ scale: 0.98 }}
              src={ASSETS.lookbook1}
              className="w-full h-80 object-cover rounded-sm mt-12"
              alt="Atelier 1"
            />
            <motion.img
              whileHover={{ scale: 0.98 }}
              src={ASSETS.lookbook2}
              className="w-full h-80 object-cover rounded-sm"
              alt="Atelier 2"
            />
          </div>
        </div>
      </section>

      {/* NEW: Press Section */}
      <SectionPress />
    </>
  );
}
