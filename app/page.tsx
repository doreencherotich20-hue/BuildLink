export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-950 via-blue-800 to-cyan-600 text-white">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          <div>
            <h1 className="text-5xl font-bold leading-tight">
              BuildLink
              <span className="block text-orange-400">
                Connecting Construction Faster
              </span>
            </h1>

            <p className="mt-6 text-lg text-blue-100">
              A smart platform connecting construction companies with trusted
              suppliers, materials, and opportunities.
            </p>

            <div className="mt-8 flex gap-4">
              <a
                href="/supplier-profile"
                className="bg-orange-500 hover:bg-orange-600 px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                Join as Supplier
              </a>

              <a
                href="/materials-request"
                className="bg-white text-blue-900 hover:bg-gray-100 px-6 py-3 rounded-xl font-semibold shadow-lg"
              >
                Request Materials
              </a>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="text-8xl mb-6">
                🏗️🤖
              </div>

              <h2 className="text-3xl font-bold text-orange-300">
                AI Construction Hub
              </h2>

              <p className="mt-4 text-blue-100">
                Build smarter with technology connecting people, suppliers,
                and construction projects.
              </p>
            </div>
          </div>

        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-6">

        <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold">
            Trusted Suppliers
          </h3>
          <p className="mt-2">
            Find reliable suppliers for your construction needs.
          </p>
        </div>

        <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold">
            Faster Connections
          </h3>
          <p className="mt-2">
            Reduce time searching for materials and services.
          </p>
        </div>

        <div className="bg-white text-blue-900 rounded-2xl p-6 shadow-xl">
          <h3 className="text-xl font-bold">
            Build The Future
          </h3>
          <p className="mt-2">
            A modern construction marketplace powered by innovation.
          </p>
        </div>

      </section>
    </main>
  );
}
