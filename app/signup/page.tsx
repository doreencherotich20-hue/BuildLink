"use client";

import { useState } from "react";
import { getSupabaseClient } from "../../lib/supabase";

export default function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function signup(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Creating your account...");

    const supabase = getSupabaseClient();

    if (!supabase) {
      setMessage("Sign up is unavailable because the site is not configured.");
      return;
    }

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          full_name: name,
        },
      },
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Account created. Check your email if email confirmation is enabled."
    );

    setName("");
    setEmail("");
    setPassword("");
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
      <h1>Create a BuildLink Account</h1>

      <form onSubmit={signup}>
        <label>Full name</label>
        <br />
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter your name"
          required
        />

        <br />
        <br />

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
          placeholder="Create a password"
          minLength={6}
          required
        />

        <br />
        <br />

        <button type="submit">Create Account</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
