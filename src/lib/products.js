import { create } from "zustand";

const products = [
  { id: 1, title: "Headphones", price: 59 },
  { id: 2, title: "Keyboard", price: 39 },
  { id: 3, title: "Mouse", price: 25 },
  { id: 4, title: "Monitor", price: 199 },
];

export const useProductStore = create((set) => ({
  products,
  cart: [],

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((item) => item.id === product.id);
      if (existing) {
        return {
          cart: state.cart.map((item) =>
            item.id === product.id ? { ...item, qty: item.qty + 1 } : item
          ),
        };
      }
      return { cart: [...state.cart, { ...product, qty: 1 }] };
    }),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

  clearCart: () => set({ cart: [] }),
}));

export const selectCartCount = (state) =>
  state.cart.reduce((sum, item) => sum + item.qty, 0);

export const selectCartTotal = (state) =>
  state.cart.reduce((sum, item) => sum + item.price * item.qty, 0);
