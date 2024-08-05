// components/ProductList.js
"use client";
import products from './ProductsList'
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FaCartShopping } from 'react-icons/fa6';

type Array = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
};
// Sample data


const ProductList = () => {
  const [productList, setProductList] = useState<Array[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<Array | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Array[]>([]);

  useEffect(() => {

    setProductList(products);

  }, []);

  const handleSearch = (e: any) => {
    setSearchQuery(e.target.value);
  };
 
  const filteredProducts = productList.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );


  const items = cart.length
  function handleClick() {
                     console.log(selectedProduct)
  }

  return (
    <div className="">
      <h1 className="text-1xl font-bold mb-4 md:text-3xl sm:text-2xl">
        Here are{" "}
        <span className="text-gray-500 font-extralight">Products </span>for{" "}
        <span className="text-green-600 font-serif text-xl md:text-4xl sm:text-2xl">Farmers</span>
      </h1>

      <div className="flex">
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="mb-4 p-2 border lg:text-gray-500 rounded text-gray-800 outline-none px-5 right-0 absolute top-1 lg:bg-black"
        />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-3">
        {filteredProducts.length === 0
          ? "Feching databases... "
          : filteredProducts.map((product) => (
              <div
                key={product.id}
                className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
              onClick={() => setSelectedProduct(product)}
              onDoubleClick={handleClick}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h2 className="text-xl font-semibold">{product.name}</h2>
                <p className="text-gray-700">{product.price}</p>
              </div>
            ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-slate-950 p-6 rounded-lg shadow-md max-w-2xl w-full relative px-12">
            <button
              className="absolute top-2 right-4 text-gray-700 text-2xl"
              onClick={() => setSelectedProduct(null)}
            >
              x
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-80 object-cover rounded-md mb-4 shadow-slate-900 shadow-2xl"
            />
            <p className="text-gray-700 mb-2">{selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>

            <button className="px-6 py-3 rounded-lg bg-green-400">Order</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
