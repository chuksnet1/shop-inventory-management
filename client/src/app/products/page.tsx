"use client";
import { useCreateProductMutation, useGetProductQuery } from "@/state/api";
import { PlusCircleIcon, SearchIcon } from "lucide-react";
import { useState } from "react";
import Header from "@/app/(components)/Header";
import Rating from "@/app/(components)/Rating";
import CreateProductModal from "./CreateProductModal";
import Image from "next/image";

const Product = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { data: product, isError, isLoading } = useGetProductQuery(searchTerm);

  const [createProduct] = useCreateProductMutation();


  type ProductFormData={
    name: string,
    price: number,
    stockQuantity: number,
    rating: number 
  }
  const handleCreateProduct = async (productData: ProductFormData) => {
    await createProduct(productData);
  };

  if (isLoading) {
    return <div className="py-4">Loading...</div>;
  }

  if (isError || !product) {
    return (
      <div className="py-4 text-center text-red-500 ">
        Failed to retrieve product
      </div>
    );
  }

  return (
    <div className="mx-auto pb-5 w-full">
      {/* SEARCH BAR */}
      <div className="mb-6">
        <div className="flex items-center border-2 border-gray-200 rounded">
          <SearchIcon className="w-5 h-5 text-gray-200" />
          <input
            className="w-full py-2 px-2 rounded bg-white"
            placeholder="Search Products..."
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </div>
      </div>
      {/* HEADER BAR */}
      <div className="flex justify-between items-center mb-6">
        <Header name="Product" />
        <button
          className="flex items-center bg-blue-500 hover:bg-blue-700 text-gray-200 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          <PlusCircleIcon className="w-5 h-5 mr-2 !text-gray-200" />
          Create Product
        </button>
      </div>

      {/* BODY PRODUCTS LIST */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-between">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          product.map((products) => (
            <div
              key={products.productId}
              className="border shadow rounded-md p-4 max-w-full w-full mx-auto"
            >
              <div className="flex flex-col items-center">
              <Image
                    src={`https://s3inventorymanagements.s3.eu-west-2.amazonaws.com/product${
                      Math.floor(Math.random() * 3) + 1
                    }.png`}
                    alt={products.name}
                    width={48}
                    height={48}
                    className="mb-3 rounded-2xl w-36 h-36"
                  />
                <h3 className="text-lg text-gray-900 font-semibold">
                  {products.name}
                </h3>
                <p className="text-gray-800">${products.price.toFixed(2)}</p>
                <div className="text-sm text-gray-600 mt-1">
                  Stock: {products.stockQuantity}
                </div>
                {products.rating && (
                  <div className="flex items-center mt-2">
                    <Rating rating={products.rating} />
                  </div>
                )}
              </div>
            </div>
          ))
        )}
      </div>

      {/* MODAL */}
      <CreateProductModal
        isOpen={!isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          console.log("close")
        }}
        onCreate={handleCreateProduct}
      />
    </div>
  );
};

export default Product;
