export default function FeaturesSection() {
    return (
      <section className="py-12 bg-black text-center border-t-2">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-black">
          <div className="feature-item">
            <img src="/images/connect.jpg" alt="Directly connect with farmers" className="w-64 h-48 mx-auto mb-2 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-white">Directly Connect with Farmers</h3>
            <p className="text-gray-700">Engage directly with local farmers.</p>
          </div>
          <div className="feature-item">
            <img src="/images/produce.jpg" alt="Fresh and Organic Produce" className="w-64 h-48 mx-auto mb-2 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-white">Fresh and Organic Produce</h3>
            <p className="text-gray-700">Enjoy the best farm-to-table experience.</p>
          </div>
          <div className="feature-item">
            <img src="/images/support.jpg" alt="Support Local Agriculture" className="w-64 h-48 mx-auto mb-2 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-white">Support Local Agriculture</h3>
            <p className="text-gray-700">Help sustain local farming communities.</p>
          </div>
        </div>
      </section>
    )
  }
  