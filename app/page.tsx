"use client";

import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";
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

export default function HomePage() {
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
        .eq("user_id", userData.user.id)
        .order("created_at", { ascending: false });

      if (!error && data) {
        setRequests(data);
      }
    }

    getRequests();
  }, [router]);

  return (
    <main style={{ maxWidth: "700px", margin: "60px auto", padding: "20px" }}>
      <h1>Welcome to BuildLink</h1>

      <button onClick={() => router.push("/request-materials")}>
        Request Materials
      </button>

      <button onClick={() => router.push("/my-requests")}>
        My Requests
      </button>

      <h2>Your Requests</h2>

      {requests.length === 0 ? (
        <p>No requests yet.</p>
      ) : (
        requests.map((request) => (
          <div key={request.id}>
            <h3>{request.material}</h3>
            <p>Quantity: {request.quantity}</p>
            <p>Location: {request.location}</p>
            <p>Details: {request.details}</p>
            <p>Status: {request.status || "Pending"}</p>
            <p>
              Date: {new Date(request.created_at).toLocaleDateString()}
            </p>
          </div>
        ))
      )}
    </main>
  );
}
