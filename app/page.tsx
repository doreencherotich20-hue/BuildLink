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

export default function MyRequestsPage() {
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
      <h1>My Material Requests</h1>

      {requests.length === 0 ? (
        <p>You have not submitted any requests yet.</p>
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
            <p>Loca
