import React, { useState } from "react";
import { useLogin } from "../../hooks/useLogin";
import "./Login.css";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await login(email, password);
  };

  return (
    <div className="login-form-container">
      <h1>Log in</h1>
      <form className="login-form" onSubmit={handleSubmit}>
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
        <button className="form-continue-button" disabled={!!isLoading}>
          Continue with email
        </button>
        {error && <div className="error">{error}</div>}
      </form>
      <div className="disclaimer-text">
        <p>
          By clicking “Continue with Apple/Google/Email” above, you
          acknowledge that you have read and understood, and agree to Notion's{" "}
          <a className="scribble-link" href="https://www.notion.so/Terms-and-Privacy-28ffdd083dc3473e9c2da6ec011b58ac#33378f25e4084c96bb32bbae0cd074c5">
            Terms & Conditions
          </a>{" "}
          and{" "}
          <a className="scribble-link" href="https://www.notion.so/Privacy-Policy-3468d120cf614d4c9014c09f6adc9091">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  );
};

export default Login;
