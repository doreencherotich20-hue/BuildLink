export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50">

      {/* Header */}
      <header className="bg-white shadow-md p-5 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-blue-700">
          🏗️ BuildLink
        </h1>

        <nav className="space-x-4">
          <a className="hover:text-orange-500">Home</a>
          <a className="hover:text-orange-500">Materials</a>
          <a className="hover:text-orange-500">Suppliers</a>
          <a className="hover:text-orange-500">Requests</a>
        </nav>
      </header>


      {/* Hero */}
      <section
        className="h-[500px] bg-cover bg-center flex items-center justify-center text-white text-center"
        style={{
          backgroundImage:
          "url('https://images.unsplash.com/photo-1503387762-592deb58ef4e')"
        }}
      >

        <div className="bg-black/50 p-10 rounded-xl">

          <h2 className="text-5xl font-bold mb-5">
            Build Smarter With BuildLink
          </h2>

          <p className="text-xl mb-8">
            Find materials, connect with suppliers, and grow your construction business.
          </p>

          <button className="bg-orange-500 px-8 py-3 rounded-full font-bold">
            Find Materials
          </button>

        </div>

      </section>


      {/* Materials */}
      <section className="p-10">

        <h2 className="text-3xl font-bold text-blue-700 text-center mb-8">
          Popular Construction Materials
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1598514982901-ae62764ae75a"
              className="h-48 w-full object-cover"
            />
            <h3 className="p-5 text-xl font-bold">
              Cement & Concrete
            </h3>
          </div>


          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1504307651254-35680f356dfd"
              className="h-48 w-full object-cover"
            />
            <h3 className="p-5 text-xl font-bold">
              Building Equipment
            </h3>
          </div>


          <div className="bg-white rounded-xl shadow overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1531835551805-16d864c8d311"
              className="h-48 w-full object-cover"
            />
            <h3 className="p-5 text-xl font-bold">
              Construction Supplies
            </h3>
          </div>

        </div>

      </section>


      {/* How it works */}
      <section className="bg-blue-700 text-white p-10 text-center">

        <h2 className="text-3xl font-bold mb-8">
          How BuildLink Works
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          <div>
            <div className="text-5xl">📦</div>
            <h3 className="text-xl font-bold">
              Request Materials
            </h3>
          </div>

          <div>
            <div className="text-5xl">🤝</div>
            <h3 className="text-xl font-bold">
              Connect Suppliers
            </h3>
          </div>

          <div>
            <div className="text-5xl">🚚</div>
            <h3 className="text-xl font-bold">
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
