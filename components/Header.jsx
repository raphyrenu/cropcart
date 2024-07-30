// components/ProductList.js
"use client";
import React, { useEffect, useState } from 'react';

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
  { id: 9, name: 'Local Honey', price: '$10.00/500g', description: 'Pure honey from local beekeepers', image: '/images/hone.jpg' },
  { id: 10, name: 'Organic Potatoes', price: '$3.00/kg', description: 'Versatile potatoes grown organically', image: '/images/potatoes.jpg' },
  { id: 11, name: 'Fresh Kale', price: '$4.50/bundle', description: 'Nutritious kale with a rich flavor', image: '/images/kale.jpg' },
  { id: 12, name: 'Homemade Jam', price: '$7.00/jar', description: 'Delicious jam made from seasonal fruits', image: '/images/jam.jpg' },
  { id: 13, name: 'Local Garlic', price: '$6.00/kg', description: 'Strong, flavorful garlic grown locally', image: '/images/garlic.jpg' },
  { id: 14, name: 'Organic Cucumbers', price: '$3.00/kg', description: 'Crisp cucumbers from organic farms', image: '/images/cucumbers.jpg' },
  { id: 15, name: 'Fresh Basil', price: '$4.00/bundle', description: 'Fragrant basil for culinary use', image: '/images/basil.jpg' },
  { id: 16, name: 'Local Onions', price: '$2.00/kg', description: 'Flavorful onions from local growers', image: '/images/onions.jpg' },
  { id: 17, name: 'Organic Bell Peppers', price: '$5.00/kg', description: 'Sweet bell peppers in various colors', image: '/images/bell_peppers.jpg' },
  { id: 18, name: 'Free-Range Turkey', price: '$12.00/kg', description: 'Juicy turkey from free-range farms', image: '/images/turkey.jpg' },
  { id: 19, name: 'Homemade Bread', price: '$4.00/loaf', description: 'Freshly baked bread from local bakeries', image: '/images/bread.jpg' },
  { id: 20, name: 'Organic Zucchini', price: '$3.50/kg', description: 'Tender zucchinis grown organically', image: '/images/zucchini.jpg' },
  { id: 21, name: 'Fresh Lemons', price: '$2.00/each', description: 'Tart lemons perfect for cooking and drinks', image: '/images/lemons.jpg' },
  { id: 22, name: 'Local Peppers', price: '$4.00/kg', description: 'Spicy and sweet peppers from local farms', image: '/images/peppers.jpg' },
  { id: 23, name: 'Organic Applesauce', price: '$5.00/jar', description: 'Smooth and natural applesauce', image: '/images/applesauce.jpg' },
  { id: 24, name: 'Fresh Blueberries', price: '$6.50/kg', description: 'Juicy blueberries picked fresh', image: '/images/blueberries.jpg' },
  { id: 25, name: 'Local Radishes', price: '$2.50/bundle', description: 'Crunchy radishes with a peppery flavor', image: '/images/radishes.jpg' },
  { id: 26, name: 'Organic Avocados', price: '$4.50/each', description: 'Creamy avocados from organic farms', image: '/images/avocados.jpg' },
  { id: 27, name: 'Farm Fresh Yogurt', price: '$4.00/litre', description: 'Rich and creamy yogurt from local dairies', image: '/images/yogurt.jpg' },
  { id: 28, name: 'Organic Cabbage', price: '$3.00/kg', description: 'Crisp and fresh cabbage grown organically', image: '/images/cabbage.jpg' },
  { id: 29, name: 'Local Mushrooms', price: '$6.00/kg', description: 'Flavorful mushrooms from local growers', image: '/images/mushrooms.jpg' },
  { id: 30, name: 'Fresh Parsley', price: '$3.00/bundle', description: 'Fragrant parsley for cooking and garnish', image: '/images/parsley.jpg' },
  { id: 31, name: 'Organic Beets', price: '$4.00/kg', description: 'Sweet and earthy beets grown organically', image: '/images/beets.jpg' },
  { id: 32, name: 'Local Apples', price: '$3.50/kg', description: 'Crunchy apples from local orchards', image: '/images/apples2.jpg' },
  { id: 33, name: 'Homemade Pickles', price: '$5.50/jar', description: 'Crisp pickles made from local cucumbers', image: '/images/pickles.jpg' },
  { id: 34, name: 'Fresh Peas', price: '$4.00/kg', description: 'Sweet and tender peas from local farms', image: '/images/peas.jpg' },
  { id: 35, name: 'Organic Garlic Powder', price: '$6.00/100g', description: 'Garlic powder made from organic garlic', image: '/images/garlic_powder.jpg' },
  { id: 36, name: 'Local Sweet Corn', price: '$2.50/ear', description: 'Sweet corn harvested from local fields', image: '/images/corn.jpg' },
  { id: 37, name: 'Fresh Rhubarb', price: '$5.00/kg', description: 'Tart rhubarb perfect for baking', image: '/images/rhubarb.jpg' },
  { id: 38, name: 'Organic Oats', price: '$3.50/kg', description: 'Nutritious oats grown organically', image: '/images/oats.jpg' },
  { id: 39, name: 'Local Grapes', price: '$6.00/kg', description: 'Sweet and juicy grapes from local vineyards', image: '/images/grapes.jpg' },
  { id: 40, name: 'Farm Fresh Butter', price: '$7.00/500g', description: 'Creamy butter from local dairy farms', image: '/images/butter.jpg' },
];

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    setProductList(products);
  }, []);

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Product List</h1>
      <input
        type="text"
        placeholder="Search products..."
        value={searchQuery}
        onChange={handleSearch}
        className="mb-4 p-2 border rounded w-full"
      />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredProducts.length === 0
          ? 'No products found'
          : filteredProducts.map(product => (
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
              x
            </button>
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.name}</h2>
            <img src={selectedProduct.image} alt={selectedProduct.name} className="w-full h-64 object-cover rounded-md mb-4 shadow-slate-900 shadow-2xl" />
            <p className="text-gray-700 mb-2">{selectedProduct.price}</p>
            <p>{selectedProduct.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductList;
