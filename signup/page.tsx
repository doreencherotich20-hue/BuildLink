```tsx
"use client";

import { useState } from "react";
import { supabase } from "../../lib/supabase";

export default function SignUpPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  async function handleSignUp(e: React.FormEvent) {
    e.preventDefault();
    setMessage("Creating your account...");

    const { error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      setMessage(error.message);
    } else {
      setMessage(
        "Account created successfully. Check your email to confirm your account."
      );
    }
  }

  return (
    <main
      style={{
        maxWidth: "500px",
        margin: "60px auto",
        padding: "20px",
      }}
    >
      <h1>Create your BuildLink account</h1>
      <p>Join BuildLink to find and request construction materials and services.</p>

      <form onSubmit={handleSignUp}>
        <div style={{ marginTop: "20px" }}>
          <label>Email</label>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
            }}
          />
        </div>

        <div style={{ marginTop: "15px" }}>
          <label>Password</label>
          <input
            type="password"
            placeholder="Create a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            minLength={6}
            style={{
              width: "100%",
              padding: "12px",
              marginTop: "5px",
            }}
          />
        </div>

        <button
          type="submit"
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Sign Up
        </button>
      </form>

      {message && <p style={{ marginTop: "20px" }}>{message}</p>}
    </main>
  );
}
```
