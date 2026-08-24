"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function RequestMaterialsPage() {
  const router = useRouter();

  const [material, setMaterial] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [details, setDetails] = useState("");
  const [message, setMessage] = useState("");

  async function submitRequest(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const { data } = await supabase.auth.getUser();

    if (!data.user) {
      router.push("/login");
      return;
    }

    const { error } = await supabase
      .from("materials_requests")
      .insert({
        user_id: data.user.id,
        material,
        quantity,
        location,
        details,
      });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Your material request has been submitted.");

      setMaterial("");
      setQuantity("");
      setLocation("");
      setDetails("");
    }
  }

  return (
    <main style={{ maxWidth: "600px", margin: "60px auto", padding: "20px" }}>
      <h1>Request Materials</h1>

      <form onSubmit={submitRequest}>
        <input
          placeholder="Material name"
          value={material}
          onChange={(e) => setMaterial(e.target.value)}
          required
        />

        <br /><br />

        <input
          placeholder="Quantity"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          required
        />

        <br /><br />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />

        <br /><br />

        <textarea
          placeholder="Additional details"
          value={details}
          onChange={(e) => setDetails(e.target.value)}
        />

        <br /><br />

        <button type="submit">
          Submit Request
        </button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
