
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Eye, EyeOff, Plane, Mail, Lock } from "lucide-react";
import "./Login.css";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Login UI is working! Connect authentication to log in.");
  };

  return (
    <main className="login-page">
      <div className="login-container">
        <div className="login-image">
          <div className="login-image-content">
            <Plane size={42} />
            <h1>Explore the World with Voyara</h1>
            <p>
              Your next adventure is just a few clicks away.
              Sign in and start planning your journey.
            </p>
          </div>
        </div>

        <div className="login-form-section">
          <Link to="/" className="login-logo">
            <Plane size={28} />
            <span>Voyara</span>
          </Link>

          <div className="login-heading">
            <h2>Welcome Back!</h2>
            <p>Sign in to continue your travel journey.</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="login-email">Email Address</label>
            <div className="login-input">
              <Mail size={19} />
              <input
                id="login-email"
                type="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <label htmlFor="login-password">Password</label>
            <div className="login-input">
              <Lock size={19} />
              <input
                id="login-password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter your password"
                required
                minLength={6}
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>

            <div className="login-options">
              <label className="remember-me">
                <input type="checkbox" />
                Remember me
              </label>

              <Link to="/forgot-password">Forgot password?</Link>
            </div>

            <button type="submit" className="login-button">
              Sign In
            </button>
          </form>

          <p className="register-text">
            Don't have an account?{" "}
            <Link to="/register">Create Account</Link>
          </p>

          <Link to="/" className="back-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Login;