import { useState } from "react";
import {
  useProductStore,
  selectCartCount,
  selectCartTotal,
} from "../lib/products";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const cart = useProductStore((state) => state.cart);
  const count = useProductStore(selectCartCount);
  const total = useProductStore(selectCartTotal);
  const removeFromCart = useProductStore((state) => state.removeFromCart);
  const clearCart = useProductStore((state) => state.clearCart);

  return (
    <div className="fixed top-0 left-0 z-50 w-full bg-white shadow-md">
      <nav className="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-white">
        <div className="text-xl font-bold text-indigo-600">MyShop!!!!</div>
        <ul className="hidden md:flex gap-6 text-sm text-gray-600">
          <li className="hover:text-indigo-600 cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 cursor-pointer">Products</li>
          <li className="hover:text-indigo-600 cursor-pointer">About</li>
          <li className="hover:text-indigo-600 cursor-pointer">Contact</li>
        </ul>

        <div className="flex items-center gap-3">
          <div className="relative">
            <button
              onClick={() => setOpen((v) => !v)}
              className="rounded-md border border-gray-200 px-4 py-2 text-sm text-gray-700 hover:border-indigo-600 hover:text-indigo-600"
            >
              Cart
              {count > 0 && (
                <span className="ml-2 rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white">
                  {count}
                </span>
              )}
            </button>

            {open && (
              <div className="absolute right-0 z-10 mt-2 w-72 rounded-lg border border-gray-200 bg-white p-4 shadow-lg">
                {cart.length === 0 ? (
                  <p className="text-sm text-gray-500">Cart is empty</p>
                ) : (
                  <>
                    <ul className="flex flex-col gap-2">
                      {cart.map((item) => (
                        <li
                          key={item.id}
                          className="flex items-center justify-between text-sm"
                        >
                          <span className="text-gray-900">
                            {item.title}
                            <span className="ml-1 text-gray-400">x{item.qty}</span>
                          </span>
                          <span className="flex items-center gap-2">
                            <span className="font-semibold text-indigo-600">
                              ${item.price * item.qty}
                            </span>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="text-gray-400 hover:text-red-500"
                            >
                              ×
                            </button>
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex items-center justify-between border-t border-gray-200 pt-3 text-sm">
                      <span className="font-medium text-gray-900">Total</span>
                      <span className="font-bold text-indigo-600">${total}</span>
                    </div>
                    <button
                      onClick={clearCart}
                      className="mt-3 w-full rounded-md bg-gray-100 py-1.5 text-sm text-gray-700 hover:bg-gray-200"
                    >
                      Clear
                    </button>
                  </>
                )}
              </div>
            )}
          </div>

          <button className="rounded-md bg-indigo-600 px-4 py-2 text-sm text-white hover:bg-indigo-700">
            Sign in
          </button>
        </div>
      </nav>
    </div>
  )
}
