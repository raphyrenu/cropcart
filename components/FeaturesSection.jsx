export default function FeaturesSection() {
    return (
      <section className="py-12 bg-white text-center">
        <h2 className="text-3xl font-bold mb-8">Our Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 text-black">
          <div className="feature-item">
            <img src="/images/carrots.jpg" alt="Directly connect with farmers" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Directly Connect with Farmers</h3>
            <p>Engage directly with local farmers.</p>
          </div>
          <div className="feature-item">
            <img src="/images/eggs.jpg" alt="Fresh and Organic Produce" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Fresh and Organic Produce</h3>
            <p>Enjoy the best farm-to-table experience.</p>
          </div>
          <div className="feature-item">
            <img src="/images/apple.jpg" alt="Support Local Agriculture" className="w-24 h-24 mx-auto mb-4" />
            <h3 className="text-xl font-semibold mb-2">Support Local Agriculture</h3>
            <p>Help sustain local farming communities.</p>
          </div>
        </div>
      </section>
    )
  }
  