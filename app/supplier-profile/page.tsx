"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

export default function SupplierProfilePage() {
  const router = useRouter();

  const [companyName, setCompanyName] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [location, setLocation] = useState("");
  const [materials, setMaterials] = useState("");

  async function saveSupplier(e: React.FormEvent) {
    e.preventDefault();

    const { data: userData } = await supabase.auth.getUser();

    if (!userData.user) {
      router.push("/login");
      return;
    }

    const { error } = await supabase.from("suppliers").insert({
      user_id: userData.user.id,
      company_name: companyName,
      contact_name: contactName,
      phone,
      location,
      materials,
    });

    if (!error) {
      alert("Supplier profile created successfully!");
      router.push("/");
    } else {
      alert(error.message);
    }
  }

  return (
    <main style={{ maxWidth: "600px", margin: "50px auto", padding: "20px" }}>
      <h1>Create Supplier Profile</h1>

      <form onSubmit={saveSupplier}>
        <input
          placeholder="Company Name"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
        />

        <input
          placeholder="Contact Name"
          value={contactName}
          onChange={(e) => setContactName(e.target.value)}
        />

        <input
          placeholder="Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
        />

        <input
          placeholder="Materials supplied (e.g. cement, sand)"
          value={materials}
          onChange={(e) => setMaterials(e.target.value)}
        />

        <button type="submit">
          Save Supplier Profile
        </button>
      </form>
    </main>
  );
}
