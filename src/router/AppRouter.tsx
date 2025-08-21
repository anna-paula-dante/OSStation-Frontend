import { BrowserRouter, Routes, Route } from "react-router";

import App from "@/App";
import SignIn from "@/pages/SignIn/SignIn";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="home" element={<App />} />
      </Routes>
    </BrowserRouter>
  );
}
