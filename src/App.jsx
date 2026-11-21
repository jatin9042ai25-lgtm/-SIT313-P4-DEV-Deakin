import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Navbar";
import Login from "./Login";
import Signup from "./Signup";

import "./App.css";

function Home() {
  return (
    <div className="home">
      <h1>Welcome to DEV@Deakin</h1>
      <p>Discover and share developer content.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;