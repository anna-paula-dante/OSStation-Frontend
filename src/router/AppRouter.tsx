import { BrowserRouter, Routes, Route } from "react-router";

import App from "@/App";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="home" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
