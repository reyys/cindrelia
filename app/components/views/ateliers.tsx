import { ASSETS } from "@/app/constants/assets";
import { motion } from "framer-motion";

const ViewAteliers = () => {
  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F0]">
      {/* Hero */}
      <div className="relative h-[70vh] w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/40 z-10" />
        <img
          src={ASSETS.atelier1}
          alt="Atelier Workshop"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-[#Cfb53b] uppercase tracking-[0.5em] text-sm mb-4"
          >
            Heritage & Craft
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-6xl md:text-8xl font-serif italic"
          >
            The Atelier
          </motion.h1>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 md:px-24 py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
              A Symphony of{" "}
              <span className="text-[#Cfb53b] italic">Thread</span> and{" "}
              <span className="text-[#Cfb53b] italic">Texture</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-8 text-lg font-light">
              Founded in the heart of Jakarta, our atelier is a sanctuary for
              traditional craftsmanship. We believe that true luxury lies in the
              time taken to create something beautiful. Each garment is a
              testament to the patience and skill of our master tailors.
            </p>
            <p className="text-gray-400 leading-relaxed mb-12 text-lg font-light">
              We source only the finest organic silks and ethically produced
              cottons, ensuring that our footprint is as light as the fabrics we
              weave.
            </p>
            <div className="grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
              <div>
                <span className="block text-3xl font-serif text-[#Cfb53b] mb-2">
                  20+
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Artisans
                </span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-[#Cfb53b] mb-2">
                  100%
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Handmade
                </span>
              </div>
              <div>
                <span className="block text-3xl font-serif text-[#Cfb53b] mb-2">
                  0
                </span>
                <span className="text-xs uppercase tracking-widest text-gray-500">
                  Waste Goal
                </span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 border border-[#Cfb53b]/30 translate-x-6 translate-y-6" />
            <img
              src={ASSETS.atelier2}
              alt="Sewing"
              className="w-full h-auto relative z-10 grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewAteliers;
