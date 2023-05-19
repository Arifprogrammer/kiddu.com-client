import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import router from "./routes/Router";
import AuthProvider from "./AuthProvider/AuthProvider";

/* color for UI
paste - #ADE4DB
Pink - #F6C6EA
deep pink - #F261C2
bg -#F9F9F9 */

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
