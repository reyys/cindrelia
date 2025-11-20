import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Search, ShoppingBag, X } from "lucide-react";

const Navbar = ({
  setView,
  setCartOpen,
  setSearchOpen,
  view,
}: {
  setView: (view: string) => void;
  setCartOpen: (open: boolean) => void;
  setSearchOpen: (open: boolean) => void;
  view: string;
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNav = (targetView: string) => {
    setView(targetView);
    setMenuOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full px-6 md:px-12 py-6 z-50 flex justify-between items-center transition-all duration-500 ${
          isScrolled || view !== "home"
            ? "bg-[#050505]/90 backdrop-blur-md py-4 border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2, duration: 0.8 }}
      >
        <div
          onClick={() => handleNav("home")}
          className="flex items-center gap-6 interactive cursor-pointer group"
        >
          <span className="text-sm font-medium uppercase tracking-widest text-[#F5F5F0] hidden md:block group-hover:text-[#Cfb53b] transition-colors">
            Est. 2025
          </span>
        </div>

        <div className="absolute left-1/2 -translate-x-1/2 text-center">
          <h1
            onClick={() => handleNav("home")}
            className="text-2xl md:text-3xl font-serif font-bold tracking-tight text-[#F5F5F0] interactive cursor-pointer hover:scale-105 transition-transform"
          >
            CINDRELIA.ID
          </h1>
        </div>

        <div className="flex items-center gap-6 text-[#F5F5F0]">
          <Search
            onClick={() => setSearchOpen(true)}
            className="w-5 h-5 interactive cursor-pointer hover:text-[#Cfb53b] transition-colors"
          />
          <div
            className="relative interactive cursor-pointer"
            onClick={() => setCartOpen(true)}
          >
            <ShoppingBag className="w-5 h-5 hover:text-[#Cfb53b] transition-colors" />
            <span className="absolute -top-2 -right-2 w-4 h-4 bg-[#Cfb53b] text-black text-[10px] flex items-center justify-center rounded-full">
              0
            </span>
          </div>
          <button onClick={() => setMenuOpen(true)} className="interactive">
            <Menu className="w-6 h-6 hover:scale-110 transition-transform" />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="fixed inset-0 z-[60] bg-[#F5F5F0] text-[#050505] flex items-center justify-center"
          >
            <div className="absolute inset-0 opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>

            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-6 right-6 md:right-12 p-4 interactive hover:rotate-90 transition-transform duration-500 z-10"
            >
              <X className="w-8 h-8" />
            </button>

            <div className="relative z-10 flex flex-col gap-2 text-center">
              {[
                { label: "Home", id: "home" },
                { label: "Collections", id: "collections" },
                { label: "Journal", id: "journal" },
                { label: "The Atelier", id: "atelier" },
                { label: "Account", id: "account" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="overflow-hidden"
                >
                  <h2
                    onClick={() => handleNav(item.id)}
                    className="text-5xl md:text-7xl font-serif italic hover:text-[#Cfb53b] transition-colors interactive cursor-pointer"
                  >
                    {item.label}
                  </h2>
                </motion.div>
              ))}
            </div>

            <div className="absolute bottom-10 left-0 w-full text-center text-xs uppercase tracking-widest text-gray-400">
              Jakarta • Paris • Milan
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
