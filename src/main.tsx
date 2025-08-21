import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import "./index.css";
import AppRouter from "./router/AppRouter.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AppRouter />
    <Toaster
      position="top-right"
      expand={true}
      toastOptions={{
        style: { backgroundColor: "#3D5470" },
      }}
    />
  </StrictMode>
);
