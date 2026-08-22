export default function Home() {
  return (
    <main style={{ fontFamily: "Arial", padding: "40px", maxWidth: "1100px", margin: "auto" }}>
      <header>
        <h1>🏗️ BuildLink</h1>
        <p>Connecting people with the construction materials they need.</p>
      </header>

      <section style={{ marginTop: "50px" }}>
        <h2>Find Construction Materials Easily</h2>
        <p>
          Find materials, request what you need, or post materials you have
          available.
        </p>

        <div style={{ display: "flex", gap: "15px", flexWrap: "wrap", marginTop: "25px" }}>
          <button>Find Materials</button>
          <button>Request Materials</button>
          <button>Post Materials</button>
        </div>
      </section>

      <section style={{ marginTop: "50px" }}>
        <h2>How BuildLink Works</h2>

        <div>
          <h3>1. Find</h3>
          <p>Search for construction materials available near you.</p>
        </div>

        <div>
          <h3>2. Request</h3>
          <p>Tell suppliers and sellers what materials you need.</p>
        </div>

        <div>
          <h3>3. Connect</h3>
          <p>Connect with businesses, suppliers and individuals.</p>
        </div>
      </section>
    </main>
  );
}
