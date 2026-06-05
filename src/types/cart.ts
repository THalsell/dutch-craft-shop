export type CartItem = {
  productId: string;
  variantId: string;
  handle: string;
  name: string;
  variantTitle: string;
  price: number;
  image?: { src: string; alt: string };
  quantity: number;
};

export type CartState = {
  items: CartItem[];
  isOpen: boolean;
};

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: { variantId: string } }
  | { type: "UPDATE_QUANTITY"; payload: { variantId: string; quantity: number } }
  | { type: "CLEAR" }
  | { type: "OPEN" }
  | { type: "CLOSE" }
  | { type: "HYDRATE"; payload: CartItem[] };
