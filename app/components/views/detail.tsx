import { ASSETS } from "@/app/constants/assets";
import usePage from "@/app/states/page";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PRODUCTS_DATA } from "../constants/products";

const ViewDetail = ({
  product,
}: {
  product: {
    id: number;
    title: string;
    img: string;
    price: number;
    description: string;
    tag?: string;
  };
}) => {
  const { addToCart } = usePage();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<string | null>("description");

  if (!product) return null;

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0] pt-24 pb-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 min-h-screen">
        {/* Left: Image Gallery (Scrollable) */}
        <div className="lg:col-span-7 flex flex-col gap-4 px-6 md:px-12 pb-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full aspect-[4/5] overflow-hidden"
          >
            <img
              src={product.img}
              alt={product.title}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
          </motion.div>

          <div className="grid grid-cols-2 gap-4">
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              src={product.img}
              className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
            <motion.img
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              src={ASSETS.detail}
              className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>

        {/* Right: Product Details (Sticky) */}
        <div className="lg:col-span-5 px-6 md:px-12 lg:pr-20 relative">
          <div className="lg:sticky lg:top-32 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link href="/collections">
                <button className="text-gray-500 text-xs uppercase tracking-widest hover:text-[#Cfb53b] mb-6 flex items-center gap-2 interactive">
                  <ArrowRight className="w-3 h-3 rotate-180" /> Back to
                  Collection
                </button>
              </Link>
              <span className="text-[#Cfb53b] text-xs uppercase tracking-widest">
                {product.tag || "Cindrelia Collection"}
              </span>
              <h1 className="text-5xl md:text-6xl font-serif italic mt-2 mb-4">
                {product.title}
              </h1>
              <p className="text-3xl font-light">${product.price}</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="border-t border-white/10 pt-8"
            >
              <div className="flex justify-between items-center mb-4">
                <span className="text-sm uppercase tracking-widest text-gray-400">
                  Select Size
                </span>
                <span className="text-xs underline cursor-pointer hover:text-[#Cfb53b] interactive">
                  Size Guide
                </span>
              </div>
              <div className="flex gap-4">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`w-12 h-12 border ${
                      selectedSize === size
                        ? "border-[#Cfb53b] text-[#Cfb53b]"
                        : "border-white/20 text-gray-400"
                    } flex items-center justify-center hover:border-white transition-colors interactive`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              onClick={() => {
                if (selectedSize) {
                  addToCart({ ...product, size: selectedSize });
                  // Optionally open cart drawer here
                } else {
                  alert("Please select a size");
                }
              }}
              className={`w-full py-5 text-sm uppercase tracking-[0.2em] font-bold transition-all duration-300 interactive ${
                selectedSize
                  ? "bg-[#F5F5F0] text-black hover:bg-[#Cfb53b]"
                  : "bg-gray-800 text-gray-500 cursor-not-allowed"
              }`}
            >
              {selectedSize ? "Add to Bag" : "Select Size"}
            </motion.button>

            {/* Accordion Info */}
            <div className="mt-8 space-y-4">
              {[
                { id: "description", label: "Description" },
                { id: "composition", label: "Composition & Care" },
                { id: "shipping", label: "Shipping & Returns" },
              ].map((tab) => (
                <div key={tab.id} className="border-b border-white/10 pb-4">
                  <button
                    onClick={() =>
                      setActiveTab(activeTab === tab.id ? null : tab.id)
                    }
                    className="w-full flex justify-between items-center text-sm uppercase tracking-widest hover:text-[#Cfb53b] interactive"
                  >
                    {tab.label}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${
                        activeTab === tab.id ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  <AnimatePresence>
                    {activeTab === tab.id && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <p className="pt-4 text-gray-400 text-sm leading-relaxed font-light">
                          {tab.id === "description" && product.description}
                          {tab.id === "composition" &&
                            "100% Organic Silk. Sustainably sourced. Dry clean only. Do not bleach. Iron low heat."}
                          {tab.id === "shipping" &&
                            "Free worldwide shipping on orders over $500. Returns accepted within 14 days of delivery in original packaging."}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like */}
      <section className="px-6 md:px-12 py-20 border-t border-white/10 mt-12">
        <h3 className="text-3xl font-serif italic mb-12">You May Also Like</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PRODUCTS_DATA.filter((p) => p.id !== product.id)
            .slice(0, 3)
            .map((item) => (
              <Link key={item.id} href={`/products/${item.id}`}>
                <div className="group cursor-pointer interactive">
                  <div className="overflow-hidden aspect-[3/4] mb-4">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h4 className="font-serif italic text-lg">{item.title}</h4>
                  <p className="text-sm text-gray-400">${item.price}</p>
                </div>
              </Link>
            ))}
        </div>
      </section>
    </div>
  );
};

export default ViewDetail;
