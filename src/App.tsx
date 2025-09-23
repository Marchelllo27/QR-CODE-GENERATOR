import { Routes, Route } from "react-router";
import { lazy } from "react";

import Home from "./pages/Home.tsx";
import MainLayout from "@/components/layout/MainLayout.tsx";

const Auth = lazy(() => import("./pages/Auth.tsx"));

import { Suspense } from "react";

export default function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </MainLayout>
    </Suspense>
  );
}
