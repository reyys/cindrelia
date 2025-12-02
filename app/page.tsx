/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { SetStateAction, useState } from "react";
import LuxuryCursor from "./components/luxury-cursor";
import Preloader from "./components/preloader";
import SearchModal from "./components/search-modal";
import CartDrawer from "./components/cart-drawer";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/nav-bar";
import ViewHome from "./components/views/home";
import ViewCollections from "./components/views/collections";
import ViewJournals from "./components/views/journals";
import ViewAteliers from "./components/views/ateliers";
import ViewAccount from "./components/views/account";
import Footer from "./components/sections/footer";
import ViewDetail from "./components/views/detail";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [view, setView] = useState("home"); // 'home', 'collections', 'journal', 'atelier', 'account'
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cart, setCart] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const addToCart = (product: any) => {
    setCart([...cart, product]);
    setCartOpen(true);
  };

  const handleProductClick = (product: any) => {
    setSelectedProduct(product);
    setView("product");
    window.scrollTo(0, 0);
  };

  // Custom navigation wrapper to handle product clicks in Home/Collections
  const handleSetView = (
    newView: SetStateAction<string>,
    productData = null
  ) => {
    if (newView === "product" && productData) {
      setSelectedProduct(productData);
    }
    setView(newView);
    if (newView !== "product") window.scrollTo(0, 0);
  };

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
      <CartDrawer
        isOpen={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
      />

      {!loading && (
        <motion.main
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <Navbar
            setView={setView}
            setCartOpen={setCartOpen}
            setSearchOpen={setSearchOpen}
            view={view}
          />

          <AnimatePresence mode="wait">
            {view === "home" && (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ViewHome
                  handleProductClick={handleProductClick}
                  setView={setView}
                />
              </motion.div>
            )}
            {view === "collections" && (
              <motion.div
                key="collections"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ViewCollections onProductClick={handleProductClick} />
              </motion.div>
            )}
            {view === "journal" && (
              <motion.div
                key="journal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ViewJournals />
              </motion.div>
            )}
            {view === "atelier" && (
              <motion.div
                key="atelier"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ViewAteliers />
              </motion.div>
            )}
            {view === "account" && (
              <motion.div
                key="account"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ViewAccount />
              </motion.div>
            )}
            {view === "product" && selectedProduct && (
              <motion.div
                key="product"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
              >
                <ViewDetail
                  product={selectedProduct}
                  addToCart={addToCart}
                  setView={handleSetView}
                />
              </motion.div>
            )}
          </AnimatePresence>

          {/* Footer stays on all pages */}
          <Footer />
        </motion.main>
      )}
    </div>
  );
}
