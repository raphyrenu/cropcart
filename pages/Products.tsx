// components/ProductList.js
"use client";
import products from './ProductsList'
import Head from "next/head";
import React, { useEffect, useState } from "react";
import { FaSearch } from 'react-icons/fa';

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
  const [selectedProduct, setSelectedProduct] = useState<Array|null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [cart, setCart] = useState<Array[]>([]);
  const [time, setTime] = useState(false)

  useEffect(() => {

    setProductList(products);

  }, []);

  const handleSearch = (e :any) => {
    setSearchQuery(e.target.value);
  };
 
  const filteredProducts = productList.filter(
    (product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(()=> {
    setTimeout(() => {
       setTime(true)
     }, 300)
  }, [])

  


  const items =( cart.length) + 1
  function handleClick() {
                     console.log(selectedProduct)
  }

  return (
    <div className="pt-20 bg-none">
      <h1 className="text-1xl font-bold mb-4 md:text-3xl sm:text-2xl">
        <span className='hidden lg:inline md:inline'>Here are{" "}</span>
        <span className="text-gray-500 font-extralight">Products </span>for{" "}
        <span className="text-green-600 font-serif text-xl md:text-4xl sm:text-2xl">Farmers</span>
      </h1>

      <div className="group flex flex-row right-2 hover:w-64 absolute top-16 mt-1 md:top-20 lg:top-20 lg:w-64 bg-white py-1 lg:pl-2 lg:plr-0 rounded-lg px-4">
        <FaSearch className='flex-1 max-w-4 text-red-400 lg:min-w-3 ld:max-w-5' size={30}/>
        <input
          type="text"
          placeholder="Search products..."
          value={searchQuery}
          onChange={handleSearch}
          className="group-hover:flex hidden group-hover:max-w-56 lg:flex px-4 outline-none text-gray-800 lg:max-w-56"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3">
        {filteredProducts.length === 0
          ? 
          time?'No item found':'Feching to db...'
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
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center mt-10">
          <div className="bg-white text-slate-950 p-5 rounded-lg shadow-md max-w-xl w-full relative px-12 ">
            <button
              className="absolute top-5 right-4 text-gray-700 text-2xl"
              onClick={() => setSelectedProduct(null)}
            >
              x
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="w-full h-64 object-cover rounded-md mb-4 shadow-slate-900 shadow-2xl"
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
