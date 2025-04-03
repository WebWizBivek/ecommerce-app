import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import ProductsPage from "@/pages/ProductsPage";
import React from "react";

const HomeLayout = () => {
  return (
    <div className="flex flex-col ">
      <div>
        <Header />
      </div>
      <div className="flex justify-between">
        <Sidebar />
        <ProductsPage />
      </div>
    </div>
  );
};

export default HomeLayout;
