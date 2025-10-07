import React from "react";
import PageLayout from "./components/layout/PageLayout";
import ProductsPage from "./pages/ProductsPage";

export default function App() {
  return (
    <>
    <PageLayout>
      <ProductsPage />
    </PageLayout>
    </>
  );
}
