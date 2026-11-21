import React, { useState } from "react";
import {
  createUserWithEmailAndPassword,
  signOut
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";
import { auth, db } from "./firebase";

import { Link, useNavigate } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    if (!name.trim().includes(" ")) {
      setError("Please enter your first and last name");
      return;
    }

    if (!email || !password || !confirmPassword) {
      setError("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      setError("Password must have at least 6 characters");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      await setDoc(doc(db, "users", result.user.uid), {
        uid: result.user.uid,
        name: name,
        email: email
      });

      await signOut(auth);

      navigate("/login");

    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="form-container">
      <h2>Create a DEV@Deakin Account</h2>

      <form onSubmit={handleSignup}>
        <label>Name*</label>
        <input
          type="text"
          placeholder="First and last name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>Email*</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label>Password*</label>
        <input
          type="password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <label>Confirm password*</label>
        <input
          type="password"
          placeholder="Confirm your password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        {error && <p className="error">{error}</p>}

        <button type="submit">Create</button>
      </form>

      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
  );
}

export default Signup;