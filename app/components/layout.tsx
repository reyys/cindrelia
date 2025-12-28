/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import LuxuryCursor from "./luxury-cursor";
import Preloader from "./preloader";
import SearchModal from "./search-modal";
import CartDrawer from "./cart-drawer";
import Navbar from "./nav-bar";
import Footer from "./sections/footer";
import usePage from "../states/page";

export default function SectionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    loading,
    setLoading,
    searchOpen,
    setSearchOpen,
    cartOpen,
    setCartOpen,
  } = usePage();
  return (
    <div className="bg-[#050505] min-h-screen text-[#F5F5F0] selection:bg-[#Cfb53b] selection:text-black">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400;1,600&family=Inter:wght@300;400;500&display=swap");

        body {
          font-family: "Inter", sans-serif;
          cursor: none; /* Hide default cursor */
          overflow-x: hidden;
        }
        .font-serif {
          font-family: "Playfair Display", serif;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }
        ::-webkit-scrollbar-track {
          background: #050505;
        }
        ::-webkit-scrollbar-thumb {
          background: #333;
          border-radius: 3px;
        }
        ::-webkit-scrollbar-thumb:hover {
          background: #cfb53b;
        }

        @media (max-width: 768px) {
          body {
            cursor: auto;
          }
        }
      `}</style>

      <LuxuryCursor />
      <Preloader setLoading={setLoading} />

      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
      <CartDrawer isOpen={cartOpen} onClose={() => setCartOpen(false)} />

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar setCartOpen={setCartOpen} setSearchOpen={setSearchOpen} />
          <AnimatePresence mode="wait">{children}</AnimatePresence>
          <Footer />
        </motion.main>
      )}
    </div>
  );
}
