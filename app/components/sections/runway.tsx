import { motion } from "framer-motion";
import { ASSETS } from "../../constants/assets";
import Link from "next/link";

const SectionRunway = () => {
  const runwayItems = [
    { img: ASSETS.runway1, label: "Look 01 - Midnight" },
    { img: ASSETS.runway2, label: "Look 02 - Ethereal" },
    { img: ASSETS.runway3, label: "Look 03 - Velvet" },
    { img: ASSETS.model1, label: "Look 04 - Structure" },
    { img: ASSETS.model2, label: "Look 05 - Fluidity" },
  ];

  return (
    <div className="py-24 bg-[#050505] text-[#F5F5F0] overflow-hidden border-b border-white/5">
      <div className="px-6 md:px-12 mb-12 flex justify-between items-end">
        <h2 className="text-5xl md:text-7xl font-serif italic">The Runway</h2>
        <span className="hidden md:block uppercase text-xs tracking-widest text-gray-500">
          Swipe to Explore
        </span>
      </div>

      <motion.div
        className="flex gap-4 px-6 md:px-12 cursor-grab active:cursor-grabbing"
        drag="x"
        dragConstraints={{ right: 0, left: -1000 }}
      >
        {runwayItems.map((item, i) => (
          <Link href="/collections" key={i}>
            <motion.div
              className="min-w-[300px] md:min-w-[400px] h-[500px] md:h-[600px] relative group interactive"
              whileHover={{ scale: 0.98 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={item.img}
                alt={item.label}
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-6 left-6 bg-black/80 px-4 py-2 backdrop-blur-sm">
                <span className="text-xs uppercase tracking-widest">
                  {item.label}
                </span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
};

export default SectionRunway;
