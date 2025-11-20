import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";

const SearchModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[70] bg-[#050505]/95 backdrop-blur-xl flex flex-col items-center justify-center p-6"
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 md:right-12 p-4 interactive hover:rotate-90 transition-transform duration-500 text-[#F5F5F0]"
          >
            <X className="w-8 h-8" />
          </button>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-4xl"
          >
            <div className="relative border-b-2 border-[#Cfb53b]/30 focus-within:border-[#Cfb53b] transition-colors duration-500">
              <input
                type="text"
                placeholder="Search Collections..."
                className="w-full bg-transparent text-4xl md:text-6xl font-serif text-[#F5F5F0] placeholder:text-gray-700 outline-none py-6 text-center"
                autoFocus
              />
              <Search className="absolute right-0 top-1/2 -translate-y-1/2 w-8 h-8 text-[#Cfb53b] opacity-50" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-12 flex flex-wrap gap-4 justify-center text-gray-500 text-sm uppercase tracking-widest"
          >
            <span className="text-gray-700 mr-2">Trending:</span>
            {[
              "Velvet",
              "Summer 2025",
              "Accessories",
              "Gold",
              "Evening Wear",
            ].map((tag) => (
              <span
                key={tag}
                className="hover:text-[#Cfb53b] cursor-pointer interactive transition-colors border border-white/5 px-4 py-1 rounded-full hover:border-[#Cfb53b]/50"
              >
                {tag}
              </span>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SearchModal;
