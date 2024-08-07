import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navigation Bar/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Anime List",
  description: "Indonesia Anime List",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-base-100`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
