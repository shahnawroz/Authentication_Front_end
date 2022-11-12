import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import Register from "../src/pages/register.js";
import NavBar from "./component/NavBar/NavBar";
import Home from "./component/Home/Home";
import Dashboard from "./pages/dashboard";
import Login from "./component/Login/Login";

function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
