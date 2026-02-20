import { ReactNode } from "react";
import StarBackground from "./StarBackground";
import Header from "./Header";
import Footer from "./Footer";
import { useScrollToTop } from "../hooks/useScrollToTop";

export default function Layout({ children }: { children: ReactNode }) {
  useScrollToTop();

  return (
    <div className="flex flex-col min-h-screen relative font-sans text-foreground selection:bg-primary/20 selection:text-primary">
      <StarBackground />
      <Header />
      <main className="flex-grow pt-16">
        {children}
      </main>
      <Footer />
    </div>
  );
}
