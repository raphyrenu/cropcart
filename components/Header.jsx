// components/ProductList.js
"use client";

import React, { useEffect, useState } from 'react';
import image from '../public/img/hello.png'

// Sample data
const products = [
  { id: 1, name: 'Organic Apples', price: '$3.00/kg', description: 'Fresh organic apples from local farms', image: '/images/apple.jpg' },
  { id: 2, name: 'Free-Range Eggs', price: '$5.00/dozen', description: 'Eggs from free-range chickens', image: '/images/eggs.jpg' },
  { id: 3, name: 'Local Carrots', price: '$2.50/kg', description: 'Crunchy, sweet carrots grown locally', image: '/images/carrots.jpg' },
  { id: 4, name: 'Organic Tomatoes', price: '$4.00/kg', description: 'Juicy tomatoes with rich flavor', image: '/images/tomato.jpg' },
  { id: 5, name: 'Fresh Strawberries', price: '$6.00/kg', description: 'Sweet strawberries picked at peak ripeness', image: '/images/hello.png' },
  { id: 6, name: 'Whole Milk', price: '$3.50/litre', description: 'Fresh whole milk from local dairy farms', image: '/images/milk.jpg' },
  { id: 7, name: 'Organic Spinach', price: '$5.00/bundle', description: 'Leafy spinach rich in vitamins', image: '/images/spinach.jpg' },
  { id: 8, name: 'Farm Fresh Chicken', price: '$8.00/kg', description: 'Tender chicken from free-range farms', image: '/images/chicken.jpg' },
  { id: 9, name: 'Local Honey', price: '$10.00/500g', description: 'Pure honey from local beekeepers', image: '/images/honey.jpg' }
];

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    // Simulate fetching data
    setProductList(products);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {productList.map(product => (
          <div 
            key={product.id} 
            className="border p-4 rounded-lg shadow hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedProduct(product)}
          >
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-700">{product.price}</p>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white text-slate-950 p-6 rounded-lg shadow-lg max-w-lg w-full relative">
            <button 
              className="absolute top-2 right-2 text-gray-700" 
              onClick={() => setSelectedProduct(null)}
            >
              &times;
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-md mb-4" />
            <p className="text-gray-700 mb-2">{selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
