

export default function HeroSection() {
    return (
      <section className="bg-cover bg-center h-screen" style={{ backgroundImage: "url('/images/hero-bg.jpg')" }}>
        <div className="flex items-center justify-center h-full bg-black bg-opacity-50">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Connect with Local Farmers for Fresh, Organic Produce</h1>
            <p className="text-xl mb-8">Explore a variety of fresh produce from local farms and enjoy the best of farm-to-table.</p>
            <a href="#products" className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-700 transition">Browse Products</a>
          </div>
        </div>
      </section>
    )
  }
  