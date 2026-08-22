"use client";

import { useEffect, useState } from "react";
import { getSupabaseClient } from "../../lib/supabase";

type Material = {
  id: string;
  name: string;
  category: string | null;
  quantity: string | null;
  location: string | null;
  price: number | null;
  currency: string;
  description: string | null;
};

export default function FindMaterials() {
  const [materials, setMaterials] = useState<Material[]>([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadMaterials();
  }, []);

  async function loadMaterials() {
    const supabase = getSupabaseClient();

    if (!supabase) {
      setMessage("Materials are unavailable because the site is not configured.");
      setLoading(false);
      return;
    }

    const { data, error } = await supabase
      .from("materials")
      .select(
        "id, name, category, quantity, location, price, currency, description"
      )
      .order("created_at", { ascending: false });

    if (error) {
      setMessage("Materials could not be loaded. Please try again later.");
    } else if (data) {
      setMaterials(data);
    }

    setLoading(false);
  }

  const filteredMaterials = materials.filter((material) =>
    material.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main
      style={{
        fontFamily: "Arial",
        padding: "40px",
        maxWidth: "1100px",
        margin: "auto",
      }}
    >
      <h1>Find Materials</h1>

      <p>
        Find construction materials from suppliers, businesses and
        individuals.
      </p>

      <input
        type="text"
        placeholder="Search for materials..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{
          padding: "15px",
          width: "100%",
          maxWidth: "600px",
          marginTop: "20px",
          border: "1px solid #ccc",
          borderRadius: "8px",
        }}
      />

      <div style={{ marginTop: "35px" }}>
        <h2>Available Materials</h2>

        {loading && <p>Loading materials...</p>}

        {message && <p>{message}</p>}

        {!loading && !message && filteredMaterials.length === 0 && (
          <p>No materials found.</p>
        )}

        {filteredMaterials.map((material) => (
          <div
            key={material.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              marginTop: "15px",
            }}
          >
            <h3>{material.name}</h3>

            {material.category && <p>Category: {material.category}</p>}

            {material.quantity && <p>Quantity: {material.quantity}</p>}

            {material.location && <p>Location: {material.location}</p>}

            {material.price !== null && (
              <p>
                Price: {material.currency} {material.price}
              </p>
            )}

            {material.description && <p>{material.description}</p>}
          </div>
        ))}
      </div>
    </main>
  );
}
