"use client";

import { useRouter } from "next/navigation";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";

export default function DashboardPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  useEffect(() => {
    async function getUser() {
      const { data } = await supabase.auth.getUser();

      if (!data.user) {
        router.push("/login");
      } else {
        setEmail(data.user.email || "");
      }
    }

    getUser();
  }, [router]);

  async function logout() {
    await supabase.auth.signOut();
    router.push("/login");
  }

  return (
    <main style={{ maxWidth: "700px", margin: "60px auto", padding: "20px" }}>
      <h1>Welcome to BuildLink</h1>

      <p>
        You are logged in as: <strong>{email}</strong>
      </p>

      <h2>What would you like to do?</h2>

      <button style={{ margin: "10px", padding: "12px" }}>
        Find Materials
      </button>

      <button style={{ margin: "10px", padding: "12px" }}>
        Request Materials
      </button>

      <button
        onClick={logout}
        style={{ margin: "10px", padding: "12px" }}
      >
        Log Out
      </button>
    </main>
  );
}
