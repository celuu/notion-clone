import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

const Signup: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { signup, error, isLoading } = useSignup();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await signup(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Sign up</h1>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        name="email"
        placeholder="Enter your email address..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        name="password"
        placeholder="Enter your password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!!isLoading}>Continue with email</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Signup;
