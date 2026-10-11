import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Plane,
  User,
  Mail,
  Phone,
  Lock,
  Eye,
  EyeOff
} from "lucide-react";
import "./Register.css";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const password = form.password.value;
    const confirmPassword = form.confirmPassword.value;

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setError("");
    alert("Registration UI is working! Connect user registration to your API.");
  };

  return (
    <main className="register-page">
      <div className="register-container">
        <div className="register-image">
          <div className="register-image-content">
            <Plane size={42} />
            <h1>Your Journey Begins Here</h1>
            <p>
              Create your Voyara account and discover
              beautiful destinations around the world.
            </p>
          </div>
        </div>

        <div className="register-form-section">
          <Link to="/" className="register-logo">
            <Plane size={28} />
            <span>Voyara</span>
          </Link>

          <div className="register-heading">
            <h2>Create Account</h2>
            <p>Join Voyara and start planning your next trip.</p>
          </div>

          <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="register-name">Full Name</label>
            <div className="register-input">
              <User size={18} />
              <input
                id="register-name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                autoComplete="name"
                required
              />
            </div>

            <label htmlFor="register-email">Email Address</label>
            <div className="register-input">
              <Mail size={18} />
              <input
                id="register-email"
                name="email"
                type="email"
                placeholder="Enter your email"
                autoComplete="email"
                required
              />
            </div>

            <label htmlFor="register-phone">Phone Number</label>
            <div className="register-input">
              <Phone size={18} />
              <input
                id="register-phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                autoComplete="tel"
                required
              />
            </div>

            <label htmlFor="register-password">Password</label>
            <div className="register-input">
              <Lock size={18} />
              <input
                id="register-password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                autoComplete="new-password"
                minLength={6}
                required
              />
              <button
                type="button"
                className="register-password-toggle"
                onClick={() => setShowPassword(!showPassword)}
                aria-label={showPassword ? "Hide password" : "Show password"}
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>

            <label htmlFor="register-confirm-password">
              Confirm Password
            </label>
            <div className="register-input">
              <Lock size={18} />
              <input
                id="register-confirm-password"
                name="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm your password"
                autoComplete="new-password"
                minLength={6}
                required
              />
              <button
                type="button"
                className="register-password-toggle"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
                aria-label={
                  showConfirmPassword ? "Hide password" : "Show password"
                }
              >
                {showConfirmPassword ? (
                  <EyeOff size={18} />
                ) : (
                  <Eye size={18} />
                )}
              </button>
            </div>

            {error && <p className="register-error">{error}</p>}

            <button type="submit" className="register-button">
              Create Account
            </button>
          </form>

          <p className="register-login-text">
            Already have an account?{" "}
            <Link to="/login">Sign In</Link>
          </p>

          <Link to="/" className="register-back-home">
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
};

export default Register;