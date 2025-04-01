import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import HomePage from "./pages/home.page";
import RootLayout from "./layouts/root-layout";
import MainLayout from "./layouts/main.layout";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<RootLayout />}>
          <Route element={<MainLayout />}>
            <Route path="/" element={<App />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/path" element={<HomePage />} />
          </Route>
          <Route path="/login" element={<HomePage />} />
          <Route path="/signup" element={<HomePage />} />
        </Route>
      </Routes>

    </BrowserRouter>

  </StrictMode>
);
