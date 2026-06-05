"use client";

import { createContext } from "react";
import type { CartItem, CartState, CartAction } from "@/types/cart";

export const initialState: CartState = {
  items: [],
  isOpen: false,
};

export function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "HYDRATE":
      return { ...state, items: action.payload };

    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.variantId === action.payload.variantId);
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.variantId === action.payload.variantId
              ? { ...i, quantity: i.quantity + action.payload.quantity }
              : i
          ),
        };
      }
      return { ...state, items: [...state.items, action.payload] };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((i) => i.variantId !== action.payload.variantId),
      };

    case "UPDATE_QUANTITY":
      if (action.payload.quantity <= 0) {
        return {
          ...state,
          items: state.items.filter((i) => i.variantId !== action.payload.variantId),
        };
      }
      return {
        ...state,
        items: state.items.map((i) =>
          i.variantId === action.payload.variantId
            ? { ...i, quantity: action.payload.quantity }
            : i
        ),
      };

    case "CLEAR":
      return { ...state, items: [] };

    case "OPEN":
      return { ...state, isOpen: true };

    case "CLOSE":
      return { ...state, isOpen: false };

    default:
      return state;
  }
}

export type CartContextValue = {
  items: CartItem[];
  isOpen: boolean;
  itemCount: number;
  subtotal: number;
  addItem: (item: CartItem) => void;
  removeItem: (variantId: string) => void;
  updateQuantity: (variantId: string, quantity: number) => void;
  clearCart: () => void;
  openCart: () => void;
  closeCart: () => void;
};

export const CartContext = createContext<CartContextValue | null>(null);
