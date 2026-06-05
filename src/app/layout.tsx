import type { Metadata } from "next";
import { Montserrat, Playfair_Display } from "next/font/google";
import { CartProvider } from "@/providers/cart-provider";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-montserrat",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: {
    default: "Dutch Craft Mattress | Shop Handcrafted Mattresses",
    template: "%s | Dutch Craft Mattress",
  },
  description:
    "Shop handcrafted mattresses built to last. Dutch Craft Mattress delivers quality sleep solutions with free shipping and a 100-night sleep trial.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <body className="font-sans antialiased">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  );
}
