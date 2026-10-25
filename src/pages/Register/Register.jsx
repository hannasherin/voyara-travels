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
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [errors, setError] = useState({})
  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleRegister = (e) => {
    e.preventDefault()
    if (validateRegister()) {
      const userData = {
        username: formData.username,
        email: formData.email,
        password: formData.password
      }
      localStorage.setItem('user', JSON.stringify(userData))
      alert('Register Successfully')

      setFormData({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
      })

      setError({})

    }
  }

  const validateRegister = () => {

    const newError = {}

    // Username
    if (formData.username.trim() === "") {
      newError.username = "Username is Required"
    }

    // Email
    if (formData.email.trim() === "") {
      newError.email = "Email is Required"
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formData.email)
    ) {
      newError.email = "Enter a valid email"
    }

    // Password
    if (formData.password.trim() === "") {
      newError.password = "Password is Required"
    } else if (
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(formData.password)
    ) {
      newError.password =
        "Password must be at least 8 characters, include uppercase, lowercase, number and special character."
    }

    // Confirm Password
    if (formData.confirmPassword.trim() === "") {
      newError.confirmPassword = "Confirm Password is Required"
    } else if (formData.password !== formData.confirmPassword) {
      newError.confirmPassword = "Passwords do not match"
    }

    setError(newError)

    return Object.keys(newError).length === 0
  }



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

          <form className="register-form" onSubmit={handleRegister}>
            <label htmlFor="register-name">Full Name</label>
            <div className="register-input">
              <User size={18} />
              <input
                id="register-name"
                name="username"
                type="text"
                placeholder="Enter your full name"
                value={formData.username}
                onChange={handleChange}
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
                value={formData.email}
                onChange={handleChange}
              />
            </div>



            <label htmlFor="register-password">Password</label>
            <div className="register-input">
              <Lock size={18} />
              <input
                id="register-password"
                name="password"
                type="password"
                placeholder="Create a password"
                value={formData.password}
                onChange={handleChange}
              />

            </div>

            <label htmlFor="register-confirm-password">
              Confirm Password
            </label>
            <div className="register-input">
              <Lock size={18} />
              <input
                id="register-confirm-password"
                name="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={formData.confirmPassword}
                onChange={handleChange}
              />

            </div>



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