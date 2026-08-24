"use client";

import { useEffect, useState } from "react";
import { supabase } from "../../lib/supabase";
import { useRouter } from "next/navigation";

type Request = {
  id: string;
  material: string;
  quantity: string;
  location: string;
  details: string;
  status: string;
  created_at: string;
};

export default function SupplierDashboardPage() {
  const router = useRouter();
  const [requests, setRequests] = useState<Request[]>([]);

  useEffect(() => {
    async function getRequests() {
      const { data: userData } = await supabase.auth.getUser();

      if (!userData.user) {
        router.push("/login");
        return;
      }

      const { data, error } = await supabase
        .from("materials_requests")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error && data) {
        setRequests(data);
      }
    }

    getRequests();
  }, [router]);

  return (
    <main style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
      <h1>Supplier Dashboard</h1>

      <p>Available material requests from customers:</p>

      {requests.length === 0 ? (
        <p>No requests available.</p>
      ) : (
        requests.map((request) => (
          <div
            key={request.id}
            style={{
              border: "1px solid #ccc",
              padding: "15px",
              marginTop: "15px",
            }}
          >
            <h2>{request.material}</h2>
            <p>Quantity: {request.quantity}</p>
            <p>Location: {request.location}</p>
            <p>Details: {request.details}</p>
            <p>Status: {request.status || "Pending"}</p>
          </div>
        ))
      )}
    </main>
  );
}
