import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import routes from "./routes/routes";
import { AuthProvider } from "./Provider/AuthProvider";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
    <Toaster />
      <RouterProvider router={routes}></RouterProvider>
    </AuthProvider>
  </StrictMode>
);
