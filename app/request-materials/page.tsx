"use client";

import { useState } from "react";

export default function RequestMaterialsPage() {
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");

  function submitRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMessage("Your material request has been submitted.");

    setMaterial("");
    setQuantity("");
    setLocation("");
    setDetails("");
  }

  return (
    <main style={{ maxWidth: "600px", margin: "60px auto", padding: "20px" }}>
      <h1>Request Materials</h1>

      <p>
        Tell suppliers what construction materials you need.
      </p>

      <form onSubmit={submitRequest}>
        <label>Material name</label>
        <input
          type="text"
          placeholder="Example: Cement"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <label>Quantity</label>
        <input
          type="text"
          placeholder="Example: 50 bags"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <label>Location</label>
        <input
          type="text"
          placeholder="Your location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <label>Additional details</label>
        <textarea
          placeholder="Add any details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          style={{ width: "100%", padding: "12px", marginBottom: "15px" }}
        />

        <button
          type="submit"
          style={{ width: "100%", padding: "12px" }}
        >
          Submit Request
        </button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
