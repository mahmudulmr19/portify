import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";
import { Toaster } from "sonner";
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: {
    template: "%s | Portify",
    default: "Portify",
  },
  description: "Craft  a stunning website in just a minutes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("grainy font-sans antialiased", inter.variable)}>
        <Toaster position="top-right" richColors />
        {children}
      </body>
    </html>
  );
}
