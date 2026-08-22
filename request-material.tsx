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

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Please sign in before submitting a request.");
      return;
    }

    const { error } = await supabase
      .from("material_requests")
      .insert({
        requester_id: user.id,
        material_name: material,
        quantity: quantity,
        location: location,
        description: description,
        currency: "KES",
      });

    if (error) {
      console.error(error);
      setMessage("We could not submit your request. Please try again.");
      return;
    }

    setMessage("Your material request has been submitted successfully!");

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
        <div>
          <label>Material needed</label>
          <br />
          <input
            value={material}
            onChange={(e) => setMaterial(e.target.value)}
            placeholder="For example, Cement"
            required
          />
        </div>

        <br />

        <div>
          <label>Quantity</label>
          <br />
          <input
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            placeholder="For example, 50 bags"
            required
          />
        </div>

        <br />

        <div>
          <label>Location</label>
          <br />
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="For example, Nairobi"
            required
          />
        </div>

        <br />

        <div>
          <label>Description</label>
          <br />
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe what you need"
          />
        </div>

        <br />

        <button type="submit">Submit Request</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
