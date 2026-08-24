export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-blue-700">
          BuildLink
        </h1>

        <nav className="space-x-4 text-gray-700">
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">Find Materials</a>
          <a href="#" className="hover:text-blue-600">Request Materials</a>
          <a href="#" className="hover:text-blue-600">Suppliers</a>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-700 text-white p-10 md:p-20 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-5">
          Connect Construction Needs With Trusted Suppliers
        </h2>

        <p className="text-lg mb-8">
          BuildLink makes it easier to find building materials,
          connect with suppliers, and manage requests in one place.
        </p>

        <div className="space-x-4">
          <button className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold">
            Find Materials
          </button>

          <button className="border border-white px-6 py-3 rounded-lg font-semibold">
            Request Materials
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid md:grid-cols-3 gap-6 p-10">
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3">
            Find Suppliers
          </h3>
          <p>
            Discover suppliers offering construction materials near you.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3">
            Request Materials
          </h3>
          <p>
            Send your material needs and receive supplier responses.
          </p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-xl font-bold mb-3">
            Grow Your Business
          </h3>
          <p>
            Suppliers can showcase products and connect with customers.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white text-center p-5">
        <p>
          © 2026 BuildLink. Connecting construction businesses and customers.
        </p>
      </footer>
    </main>
  );
}
