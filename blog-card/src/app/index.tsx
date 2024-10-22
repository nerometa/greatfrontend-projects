import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BlogCardPage } from "@/pages/blog-card";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogCardPage />
  </StrictMode>,
);
