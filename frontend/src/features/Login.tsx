import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Log in</h1>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        id="email"
        placeholder="Enter your email address..."
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        type="password"
        id="password"
        placeholder="Enter your password..."
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button disabled={!!isLoading}>Continue with email</button>
      {error && <div className="error">{error}</div>}
    </form>
  );
};

export default Login;
