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
        
