"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function PostMaterials() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [location, setLocation] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [message, setMessage] = useState("");

  async function postMaterial(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Posting material...");

    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
      setMessage("Please log in before posting a material.");
      return;
    }

    const { error } = await supabase.from("materials").insert({
      owner_id: user.id,
      name,
      category,
      quantity,
      location,
      price: price ? Number(price) : null,
      currency: "KES",
      description,
    });

    if (error) {
      console.error(error);
      setMessage("Could not post the material. Please try again.");
      return;
    }

    setMessage("Material posted successfully!");

    setName("");
    setCategory("");
    setQuantity("");
    setLocation("");
    setPrice("");
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
      <h1>Post Materials</h1>

      <p>List construction materials you have available.</p>

      <form onSubmit={postMaterial}>
        <label>Material name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="For example, Cement"
          required
        />

        <br />
        <br />

        <label>Category</label>
        <br />
        <input
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          placeholder="For example, Building Materials"
        />

        <br />
        <br />

        <label>Quantity</label>
        <br />
        <input
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="For example, 100 bags"
        />

        <br />
        <br />

        <label>Location</label>
        <br />
        <input
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          placeholder="For example, Nairobi"
        />

        <br />
        <br />

        <label>Price in KES</label>
        <br />
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="For example, 750"
        />

        <br />
        <br />

        <label>Description</label>
        <br />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the material"
        />

        <br />
        <br />

        <button type="submit">Post Material</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
