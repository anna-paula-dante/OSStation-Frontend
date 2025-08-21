import { BrowserRouter, Routes, Route } from "react-router";

import App from "@/App";
import Layout from "@/layout/Layout";
import SignIn from "@/pages/SignIn/SignIn";
import Profile from "@/pages/SignIn/Profile/Profile";
export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/" element={<Layout />}>
          <Route path="home" element={<App />} />
          <Route path="profile" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
