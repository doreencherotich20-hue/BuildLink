"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function RequestMaterials() {
  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function submitRequest(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Submitting...");

    const { error } = await supabase
      .from("material_requests")
      .insert({
        material_name: material,
        quantity: quantity,
        location: location,
        description: description,
      });

    if (error) {
      setMessage("Something went wrong. Please try again.");
      return;
    }

    setMessage("Your material request has been submitted!");
    setMaterial("");
    setQuantity("");
    setLocation("");
    setDescription("");
  }

  return (
    <main
      style={{
        fontFamily: "Arial",
        padding: "40px",
        maxWidth: "700px",
        margin: "auto",
      }}
    >
      <h1>Request Materials</h1>

      <p>Tell BuildLink what construction materials you need.</p>

      <form onSubmit={submitRequest}>
        <label>Material needed</label>
        <input
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          placeholder="e.g. Cement"
          required
        />

        <label>Quantity</label>
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="e.g. 50 bags"
          required
        />

        <label>Location</label>
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="e.g. Nairobi"
          required
        />

        <label>Description</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe what you need"
        />

        <button type="submit">Submit Request</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
