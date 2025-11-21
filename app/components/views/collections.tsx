import { ASSETS } from "@/app/constants/assets";
import { motion } from "framer-motion";
import Transition from "../transition";
import { Plus } from "lucide-react";

const ViewCollections = () => {
  const products = [
    { img: ASSETS.model1, title: "Velvet Evening", price: "$290", tag: "New" },
    {
      img: ASSETS.model2,
      title: "Silk & Stone",
      price: "$450",
      tag: "Best Seller",
    },
    { img: ASSETS.model3, title: "Noir Blazer", price: "$320", tag: "" },
    {
      img: ASSETS.lookbook1,
      title: "Ivory Draped Dress",
      price: "$550",
      tag: "Exclusive",
    },
    { img: ASSETS.lookbook2, title: "Obsidian Coat", price: "$890", tag: "" },
    {
      img: ASSETS.detail,
      title: "Texture Knit",
      price: "$210",
      tag: "Limited",
    },
  ];

  return (
    <div className="min-h-screen bg-[#050505] pt-32 px-6 md:px-12 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8"
      >
        <h1 className="text-6xl md:text-8xl font-serif text-[#F5F5F0]">
          All <span className="italic text-[#666]">Items</span>
        </h1>
        <div className="flex gap-8 text-sm text-gray-400 uppercase tracking-widest mt-8 md:mt-0">
          <span className="text-[#Cfb53b] cursor-pointer">All</span>
          <span className="hover:text-white cursor-pointer interactive">
            Coats
          </span>
          <span className="hover:text-white cursor-pointer interactive">
            Dresses
          </span>
          <span className="hover:text-white cursor-pointer interactive">
            Accessories
          </span>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
        {products.map((item, i) => (
          <Transition
            key={i}
            delay={i * 0.1}
            className="group cursor-pointer interactive"
          >
            <div className="relative overflow-hidden mb-4 aspect-[3/4]">
              {item.tag && (
                <span className="absolute top-4 left-4 bg-[#F5F5F0] text-black text-[10px] uppercase tracking-widest px-2 py-1 z-10">
                  {item.tag}
                </span>
              )}
              <motion.img
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover filter grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-[#F5F5F0] flex items-center justify-center text-black transform scale-0 group-hover:scale-100 transition-transform duration-300 delay-100">
                  <Plus className="w-6 h-6" />
                </div>
              </div>
            </div>
            <div className="flex justify-between items-start text-[#F5F5F0]">
              <div>
                <h3 className="text-xl font-serif italic group-hover:text-[#Cfb53b] transition-colors mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-gray-500 uppercase tracking-widest">
                  Ready to Wear
                </p>
              </div>
              <span className="text-sm font-mono text-gray-300">
                {item.price}
              </span>
            </div>
          </Transition>
        ))}
      </div>
    </div>
  );
};

export default ViewCollections;
