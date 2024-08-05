


const products = [
    { id: 1, name: 'Organic Apples', price: '$3.00/kg', image: '/images/apple.jpg' },
    { id: 2, name: 'Free-Range Eggs', price: '$5.00/dozen', image: '/images/eggs.jpg' },
    { id: 3, name: 'Local Carrots', price: '$2.50/kg', image: '/images/carrots.jpg' },
  ]
  
  export default function FeaturedProductsSection() {
    return (
      <section id="products" className="py-12 bg-black text-center">
        <h2 className="text-3xl font-bold mb-8">Featured Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {products.map(product => (
            <div key={product.id} className="product-item bg-gray-500 p-4 rounded-lg shadow hover:shadow-lg transition rot">
              <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-700">{product.price}</p>
            </div>
          ))}
        </div>
      </section>
    )
  }
  