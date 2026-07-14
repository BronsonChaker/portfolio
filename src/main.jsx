import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import "./index.css";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";
import Projects from "../src/pages/Projects.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index to="/" element={<App />} />
        <Route to="/projects" element={<Projects />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
