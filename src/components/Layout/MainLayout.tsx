import type { ReactNode } from "react";

import Header from "@/components/layout/Header.tsx";
import Footer from "@/components/layout/Footer.tsx";

interface LayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <Header />
      <main className="flex flex-col min-h-[calc(100dvh-var(--header-height))] mt-[var(--header-height)] bg-amber-800">{children}</main>
      <Footer />
    </>
  );
}
