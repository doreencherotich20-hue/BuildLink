"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignUp(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("Creating your account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage("Account created. Check your email to confirm your account.");
    }
  }

  return (
    <main>
      <h1>Create your BuildLink account</h1>

      <form onSubmit={handleSignUp}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={6}
        />

        <button type="submit">Sign Up</button>
      </form>

      {message && <p>{message}</p>}
    </main>
  );
}
