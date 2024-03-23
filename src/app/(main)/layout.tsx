import { ReactNode } from "react";
import { Footer, Navbar } from "@/components";

export default function MainLayout({ children }: { children: ReactNode }) {
  return (
    <main className="w-full h-full">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
