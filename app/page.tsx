export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50">

      <header className="bg-white shadow-md p-5">
        <h1 className="text-3xl font-bold text-blue-700">
          🏗️ BuildLink
        </h1>
      </header>


      <section className="bg-gradient-to-r from-blue-700 to-orange-500 text-white p-10">

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">

          <div>
            <h2 className="text-4xl font-bold mb-5">
              Build Smarter With BuildLink
            </h2>

            <p className="mb-6 text-lg">
              Find construction materials, connect with suppliers,
              and manage your building needs easily.
            </p>

            <div className="flex gap-4">

              <a
                href="/materials"
                className="bg-orange-500 px-6 py-3 rounded-full font-bold"
              >
                Find Materials
              </a>

              <a
                href="/request"
                className="bg-white text-blue-700 px-6 py-3 rounded-full font-bold"
              >
                Request Materials
              </a>

            </div>
          </div>


          <div className="bg-white/20 rounded-3xl p-8 text-center">

            <div className="text-8xl">
              🏗️
            </div>

            <h3 className="text-2xl font-bold mt-4">
              Trusted Construction Network
            </h3>

            <p>
              Connect customers, builders and suppliers.
            </p>

          </div>

        </div>

      </section>


      <section className="p-10">

        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Popular Materials
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-5xl">🧱</div>
            <h3 className="font-bold text-xl">
              Cement & Bricks
            </h3>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-5xl">🔩</div>
            <h3 className="font-bold text-xl">
              Steel Materials
            </h3>
          </div>


          <div className="bg-white p-6 rounded-2xl shadow">
            <div className="text-5xl">🏠</div>
            <h3 className="font-bold text-xl">
              Roofing Supplies
            </h3>
          </div>

        </div>

      </section>


      <section className="bg-blue-700 text-white p-10 text-center">

        <h2 className="text-3xl font-bold mb-8">
          How BuildLink Works
        </h2>


        <div className="grid md:grid-cols-3 gap-6">

          <div>
            📦
            <h3 className="font-bold">
              Request Materials
            </h3>
          </div>


          <div>
            🤝
            <h3 className="font-bold">
              Connect Suppliers
            </h3>
          </div>


          <div>
            🚚
            <h3 className="font-bold">
              Receive Supplies
            </h3>
          </div>

        </div>

      </section>


      <footer className="bg-blue-900 text-white text-center p-5">
        © 2026 BuildLink
      </footer>

    </main>
  );
}
