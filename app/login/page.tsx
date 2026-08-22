"use client";

import { useState } from "react";
import { getSupabaseClient } from "../../lib/supabase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function login(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Signing in...");

    const supabase = getSupabaseClient();

    if (!supabase) {
      setMessage("Login is unavailable because the site is not configured.");
      return;
    }

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage("Login successful!");
  }

  return (
    <main
      style={{
        fontFamily: "Arial",
        padding: "40px",
        maxWidth: "500px",
        margin: "auto",
      }}
    >
      <h1>BuildLink Login</h1>

      <form onSubmit={login}>
        <label>Email</label>
        <br />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
        />

        <br />
        <br />

        <label>Password</label>
        <br />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
          required
        />

        <br />
        <br />

        <button type="submit">Login</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
