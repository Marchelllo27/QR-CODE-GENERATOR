import type { ReactNode } from "react";

import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="min-h-[calc(100dvh-4rem)] mt-16 bg-amber-800">{children}</main>
      <Footer />
    </>
  );
}
