import { AnimatePresence, motion } from "framer-motion";
import { ShoppingBag, X } from "lucide-react";

// 3. CART DRAWER
const CartDrawer = ({
  isOpen,
  onClose,
  cart = [],
}: {
  isOpen: boolean;
  onClose: () => void;
  cart: {
    img: string;
    title: string;
    size: string;
    price: number;
  }[];
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
          />
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="fixed right-0 top-0 h-full w-full md:w-[450px] bg-[#0a0a0a] border-l border-white/10 z-[61] p-8 flex flex-col"
          >
            <div className="flex justify-between items-center mb-10">
              <h2 className="text-3xl font-serif italic text-[#F5F5F0]">
                Your Selection
              </h2>
              <button
                onClick={onClose}
                className="p-2 hover:rotate-90 transition-transform duration-300 text-[#F5F5F0]"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <div className="flex-1 flex flex-col justify-center items-center text-center opacity-50">
                <div className="w-16 h-16 border border-white/20 rounded-full flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <p className="text-sm uppercase tracking-widest">
                  Your bag is empty
                </p>
                <button
                  onClick={onClose}
                  className="mt-8 border-b border-[#Cfb53b] text-[#Cfb53b] pb-1 text-xs uppercase tracking-widest hover:text-white hover:border-white transition-colors interactive"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              <div className="flex-1 overflow-y-auto pr-2">
                {cart.map((item, index) => (
                  <div key={index} className="flex gap-4 mb-6">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-20 h-24 object-cover"
                    />
                    <div>
                      <h4 className="font-serif italic text-lg">
                        {item.title}
                      </h4>
                      <p className="text-xs text-gray-400 uppercase tracking-widest mb-2">
                        {item.size} | ${item.price}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            )}

            <div className="border-t border-white/10 pt-6">
              <div className="flex justify-between text-sm text-gray-400 mb-4">
                <span>Subtotal</span>
                <span>
                  $
                  {cart
                    .reduce((total, item) => total + item.price, 0)
                    .toFixed(2)}
                </span>
              </div>
              <button className="w-full bg-[#F5F5F0] text-black py-4 uppercase tracking-widest text-xs hover:bg-[#Cfb53b] transition-colors interactive">
                Checkout
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
