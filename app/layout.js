import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ON-EYE Telehealth",
  description: "Telemedicine solution for eye health",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased bg-slate-200`}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
