export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-900 to-cyan-700 text-white">

      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <p className="text-orange-400 font-semibold text-lg">
              AI POWERED CONSTRUCTION NETWORK
            </p>

            <h1 className="text-6xl font-extrabold mt-4 leading-tight">
              BuildLink
              <span className="block text-cyan-300">
                Building Connections Faster
              </span>
            </h1>

            <p className="mt-6 text-xl text-blue-100">
              Connect construction companies with trusted suppliers,
              materials, and opportunities through a smarter digital platform.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <a
                href="/supplier-profile"
                className="bg-orange-500 hover:bg-orange-600 px-8 py-4 rounded-xl font-bold shadow-xl"
              >
                Join as Supplier
              </a>

              <a
                href="/materials-request"
                className="bg-white text-blue-900 hover:bg-gray-100 px-8 py-4 rounded-xl font-bold shadow-xl"
              >
                Request Materials
              </a>

            </div>
          </div>


          <div className="relative">

            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl border border-white/20">

              <img
                src="/buildlink-ai.png"
                alt="BuildLink AI Construction"
                className="rounded-2xl w-full h-96 object-cover"
              />

              <h2 className="text-3xl font-bold text-orange-300 mt-6">
                Future Construction Hub
              </h2>

              <p className="mt-3 text-blue-100">
                AI technology connecting suppliers, builders, and projects.
              </p>

            </div>

          </div>

        </div>
      </section>


      <section className="max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-3 gap-8">

        <div className="bg-white text-blue-950 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold">
            Trusted Suppliers
          </h3>
          <p className="mt-3">
            Discover reliable construction suppliers and materials.
          </p>
        </div>


        <div className="bg-white text-blue-950 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold">
            Smart Connections
          </h3>
          <p className="mt-3">
            Save time by connecting the right people faster.
          </p>
        </div>


        <div className="bg-white text-blue-950 rounded-3xl p-8 shadow-xl">
          <h3 className="text-2xl font-bold">
            Build The Future
          </h3>
          <p className="mt-3">
            A modern construction marketplace powered by technology.
          </p>
        </div>

      </section>

    </main>
  );
}
