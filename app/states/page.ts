import { create } from "zustand";

type Page = {
  activePage: string | undefined;
  setActivePage: (newPage: string | undefined) => void;
  cart: {
    img: string;
    title: string;
    size: string;
    price: number;
  }[];
  setCart: (
    newCart: {
      img: string;
      title: string;
      size: string;
      price: number;
    }[]
  ) => void;
  loading: boolean;
  setLoading: (isLoading: boolean) => void;
  searchOpen: boolean;
  setSearchOpen: (isOpen: boolean) => void;
  cartOpen: boolean;
  setCartOpen: (isOpen: boolean) => void;
  addToCart: (item: {
    img: string;
    title: string;
    size: string;
    price: number;
  }) => void;
};

const usePage = create<Page>()((set) => ({
  activePage: undefined,
  setActivePage: (newPage: string | undefined) =>
    set(() => ({ activePage: newPage })),
  cart: [],
  setCart: (newCart) => set(() => ({ cart: newCart })),
  loading: true,
  setLoading: (isLoading: boolean) => set(() => ({ loading: isLoading })),
  searchOpen: false,
  setSearchOpen: (isOpen: boolean) => set(() => ({ searchOpen: isOpen })),
  cartOpen: false,
  setCartOpen: (isOpen: boolean) => set(() => ({ cartOpen: isOpen })),
  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),
}));

export default usePage;
