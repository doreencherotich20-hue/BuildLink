export default function RequestMaterials() {
  return (
    <main style={{
      fontFamily: "Arial",
      padding: "40px",
      maxWidth: "900px",
      margin: "auto"
    }}>
      <h1>Request Materials</h1>

      <p>Tell us what construction materials you need.</p>

      <form style={{
        display: "grid",
        gap: "15px",
        marginTop: "30px"
      }}>
        <input placeholder="Material name" />
        <input placeholder="Category" />
        <input placeholder="Quantity" />
        <input placeholder="Your location" />
        <input placeholder="Budget (KES)" />

        <textarea
          placeholder="Describe what you need"
          rows={5}
        />

        <button type="submit">
          Submit Request
        </button>
      </form>
    </main>
  );
}
